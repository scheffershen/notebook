OpenLDAP, TLS, SAMBA, CA Server
===

https://tommygingras.com/openldap-tls-samba-ca-server/
Tommy Gingras, 26 mai 2018

## Objectif

Pour la sécurité, on a besoin de CA serveur local pour créer les certificats.

## Étape 1 – Création du CA Server

Étape 1.1 – Création du CA certificate

    openssl genrsa -des3 -out CAcert.key 2048

Étape 1.2 – Création du Root Certificate

    openssl req -x509 -new -nodes -key CAcert.key -sha256 -days 1825 -out rootCA.pem

Étape 1.3 – Création des certificats Requis pour le prototype

Certificat 1 – ldap

```
openssl genrsa -out ldap.key 2048
openssl req -new -key ldap.key -out ldap.csr
nano ldap.ext
# Ajouter ceci:
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names
 
[alt_names]
DNS.1 = openldap.example.local
```

Création du certificat:

    openssl x509 -req -in ldap.csr -CA rootCA.pem -CAkey CAcert.key -CAcreateserial -out ldap.crt -days 1825 -sha256 -extfile ldap.ext

Certificat 2 – PHPldapadmin    

```
openssl genrsa -out phpldapadmin.key 2048
openssl req -new -key phpldapadmin.key -out phpldapadmin.csr
nano phpldapadmin.ext
# Ajouter ceci:
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names
 
[alt_names]
DNS.1 = ldap.example.local
```

Création du certificat:

    openssl x509 -req -in phpldapadmin.csr -CA rootCA.pem -CAkey CAcert.key -CAcreateserial -out phpldapadmin.crt -days 1825 -sha256 -extfile phpldapadmin.ext

## Étape 1.4 – Installation du Root certificat sur un client

Étape 1.4.1 – Linux

Source: (https://askubuntu.com/questions/73287/how-do-i-install-a-root-certificate)

```
sudo mkdir /usr/share/ca-certificates/example.local
sudo openssl x509 -in rootCA.pem -inform PEM -out rootCA.crt
sudo cp rootCA.crt /usr/share/ca-certificates/example.local/
sudo dpkg-reconfigure ca-certificates
```

Étape 1.4.2 – Windows

Source: https://superuser.com/questions/1031444/importing-pem-certificates-on-windows-7-on-the-command-line

1. Utiliser *Winscp* ou autre pour copier le fichier *rootCA.crt* du CA serveur.
2. Ouvrir une console en mode *administrateur*.
3. Entrer cette commande avec le fichier *rootCA.crt*
        certutil –addstore -enterprise –f "Root" &lt;pathtocertificatefile&gt;

## Étape 2 – Création du conteneur OpenLDAP

Installation de docker et de docker-compose:

```
apt-get update
apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"  
apt-get update
apt-get install -y docker-ce=17.03.2~ce-0~ubuntu-xenial
groupadd docker
usermod -aG docker myUSER
chown myUSER:myUSER /home/myUSER/.docker -R
chmod g+rwx "/home/myUSER/.docker" -R    
systemctl enable docker
curl -L https://github.com/docker/compose/releases/download/1.21.2/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose 
```

Création du fichier docker-compose.yml

```
version: '3'
services:
  openldap:
    image: osixia/openldap:latest
    container_name: openldap
    restart: always
    environment:
      LDAP_LOG_LEVEL: "256"
      LDAP_ORGANISATION: "Example Corp."
      LDAP_DOMAIN: "example.local"
      LDAP_ADMIN_PASSWORD: "PASSWORD"
      LDAP_CONFIG_PASSWORD: "PASSWORD"
      LDAP_RFC2307BIS_SCHEMA: "false"
      LDAP_BACKEND: "mdb"
      LDAP_TLS: "true"
      LDAP_TLS_CRT_FILENAME: "ldap.crt"
      LDAP_TLS_KEY_FILENAME: "ldap.key"
      LDAP_TLS_CA_CRT_FILENAME: "ca.crt"
      LDAP_TLS_ENFORCE: "true"
      LDAP_TLS_CIPHER_SUITE: "NORMAL"
      LDAP_TLS_PROTOCOL_MIN: "3.1"
      LDAP_TLS_VERIFY_CLIENT: "allow"
    tty: true
    stdin_open: true
    privileged: true
    command: --loglevel trace --copy-service
    volumes:
      - /srv/Kubernetes/OpenLDAP/database:/var/lib/ldap
      - /srv/Kubernetes/OpenLDAP/config:/etc/ldap/slapd.d
      - /srv/Kubernetes/OpenLDAP/certs/ldap:/container/service/slapd/assets/certs/
    ports:
      - "389:389"
      - "636:636
  phpldapadmin:
    image: osixia/phpldapadmin:latest
    container_name: phpldapadmin
    hostname: ldap.example.local
    domainname: example.local
    volumes:
      - /srv/Kubernetes/OpenLDAP/certs/phpldapadmin/:/container/service/phpldapadmin/assets/apache2/certs
      - /srv/Kubernetes/OpenLDAP/certs/phpldapadmin/ldap/:/container/service/ldap-client/assets/certs
    environment:
      PHPLDAPADMIN_LDAP_HOSTS: "#PYTHON2BASH:[{'openldap.example.local': [{'server': [{'tls': True}]},{'login': [{'bind_id': 'cn=admin,dc=example,dc=local'}]}]}]"
      PHPLDAPADMIN_HTTPS: "true"
      PHPLDAPADMIN_HTTPS_CRT_FILENAME: "phpldapadmin.crt"
      PHPLDAPADMIN_HTTPS_KEY_FILENAME: "phpldapadmin.key"
      PHPLDAPADMIN_HTTPS_CA_CRT_FILENAME: "ca.crt" # root certificate"
      PHPLDAPADMIN_LDAP_CLIENT_TLS: "true"
      PHPLDAPADMIN_LDAP_CLIENT_TLS_REQCERT: "allow"
      PHPLDAPADMIN_LDAP_CLIENT_TLS_CA_CRT_FILENAME: "ca.crt"
      PHPLDAPADMIN_LDAP_CLIENT_TLS_CRT_FILENAME: "ldap.crt"
      PHPLDAPADMIN_LDAP_CLIENT_TLS_KEY_FILENAME: "ldap.key"
    ports:
      - "443:443"
    restart: "always"
    depends_on:
      - openldap      
```

°°°°