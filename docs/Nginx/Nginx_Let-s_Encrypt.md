Nginx, Let's Encrypt
===

https://www.grafikart.fr/formations/serveur-linux/nginx-ssl-letsencrypt

08/2016

## Installation de l'outil

cloner le client Let's Encrypt depuis le dépôt Github officiel. 

    sudo git clone https://github.com/letsencrypt/letsencrypt /opt/letsencrypt --depth=1

J'ai rajouté l'option depth=1 afin d'éviter de récupérer l'entièreté de l'historique git. 

Si plus tard on souhaite mettre à jour le client, il nous suffira de faire un pull :

    cd /opt/letsencrypt 
    sudo git pull

## Mise en place du certificat

Nous allons modifier la configuration de notre virtual host nginx :

```
server { 
    # .well-known doit resté accessible
    location ~ /\.well-known/acme-challenge {
        allow all;
    }
    # On interdit habituellement l'accès au dotfiles
    location ~ /\. { deny all; access_log off; log_not_found off; }
}
```

Une fois nginx configuré pour renvoyer les fichiers contenus dans ce dossier on peut alors utiliser le module webroot pour générer le certificat :

    sudo /opt/letsencrypt/letsencrypt-auto certonly --rsa-key-size 4096 --webroot --webroot-path /var/www/mondomaine.fr -d mondomaine.fr

Les certificats générés, ainsi que les clés privées sont stockés dans le dossier */etc/letsencrypt/live/*

Il va ensuite falloir modifier notre configuration nginx pour prendre en compte ces certificats.

```
# Redirection http vers https
server {
    listen 80;
    listen [::]:80; 
    server_name mondomaine.fr;
    location ~ /\.well-known/acme-challenge {
        allow all;
    }
    location / {
        return 301 https://mondomaine.fr$request_uri; 
    }
}

# Notre bloc serveur
server {

    # spdy pour Nginx < 1.9.5
    listen 443 ssl spdy;
    listen [::]:443 ssl spdy;
    spdy_headers_comp 9;

    # http2 pour Nginx >= 1.9.5
    #listen 443 ssl http2;
    #listen [::]:443 ssl http2;

    server_name mondomaine.fr;
    root /var/www/mondomaine.fr;
    index index.html index.htm;
    error_log /var/log/nginx/mondomaine.fr.log notice;
    access_log off;

    ####    Locations
    # On cache les fichiers statiques
    location ~* \.(html|css|js|png|jpg|jpeg|gif|ico|svg|eot|woff|ttf)$ { expires max; }
    # On interdit les dotfiles
    location ~ /\. { deny all; }

    #### SSL
    ssl on;
    ssl_certificate /etc/letsencrypt/live/mondomaine.fr/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/mondomaine.fr/privkey.pem;

    ssl_stapling on;
    ssl_stapling_verify on;
    ssl_trusted_certificate /etc/letsencrypt/live/mondomaine.fr/fullchain.pem;
    # Google DNS, Open DNS, Dyn DNS
    resolver 8.8.8.8 8.8.4.4 208.67.222.222 208.67.220.220 216.146.35.35 216.146.36.36 valid=300s;
    resolver_timeout 3s;    

    ####    Session Tickets
    # Session Cache doit avoir la même valeur sur tous les blocs "server".
    ssl_session_cache shared:SSL:100m;
    ssl_session_timeout 24h;
    ssl_session_tickets on;
    # [ATTENTION] il faudra générer le ticket de session.
    ssl_session_ticket_key /etc/nginx/ssl/ticket.key;

    # [ATTENTION] Les paramètres Diffie-Helman doivent être générés
    ssl_dhparam /etc/nginx/ssl/dhparam4.pem;

    ####    ECDH Curve
    ssl_ecdh_curve secp384r1;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;
    ssl_ciphers 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK';

}    
```

Enfin pour générer les clefs utilisées pour les sessions et le Diffie-Helman (soyez patient :))

    sudo mkdir -p /etc/nginx/ssl &&
    sudo openssl rand 48 -out /etc/nginx/ssl/ticket.key &&
    sudo openssl dhparam -out /etc/nginx/ssl/dhparam4.pem 4096

## Le renouvellement

Les certificats proposés par Let's Encrypt sont valables pour une durée de 90 jours. Il faudra donc penser à les renouveler avant la fin de cette période. Pour cela on peut utiliser la commande :

    /opt/letsencrypt/letsencrypt-auto renew

Cette commande renouvelle les certificats sans interaction de la part de l'utilisateur, vous pouvez donc la rajouter dans les tâches récurrentes de votre système afin de renouveler le certificat au bout d'une certaine période de temps. Cette commande vérifie la date d'expiration avant de lancer la procédure alors on peut la programmer de manière hebdomadaire

    sudo crontab -e
    30 3 * * 0 /opt/letsencrypt/letsencrypt-auto renew >> /var/log/letsencrypt/renewal.log
