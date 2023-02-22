how-to-install-elasticsearch-logstash-and-kibana-elk-stack-on-ubuntu-14-04
==========================================================================

https://www.digitalocean.com/community/tutorials/how-to-install-elasticsearch-logstash-and-kibana-elk-stack-on-ubuntu-14-04

March 10, 2015

## Install Java 8

Add the Oracle Java PPA to apt:

    $ sudo add-apt-repository -y ppa:webupd8team/java

Update your apt package database:

    $ sudo apt-get update

Install the latest stable version of Oracle Java 8 with this command (and accept the license agreement that pops up):

    $ sudo apt-get -y install oracle-java8-installer

## Install Elasticsearch

Run the following command to import the Elasticsearch public GPG key into apt:

    $ wget -qO - https://packages.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -

Create the Elasticsearch source list:

    $ echo "deb http://packages.elastic.co/elasticsearch/2.x/debian stable main" | sudo tee -a /etc/apt/sources.list.d/elasticsearch-2.x.list

Update your apt package database:

    $ sudo apt-get update

Install Elasticsearch with this command:

    $ sudo apt-get -y install elasticsearch

Let's edit the configuration:

    $ sudo nano /etc/elasticsearch/elasticsearch.yml

You will want to restrict outside access to your Elasticsearch instance (port 9200), so outsiders can't read your data or shutdown your Elasticsearch cluster through the HTTP API. Find the line that specifies network.host, uncomment it, and replace its value with "localhost" so it looks like this:

    network.host: localhost

Now start Elasticsearch:

    $ sudo service elasticsearch restart

Then run the following command to start Elasticsearch on boot up:

     $ sudo update-rc.d elasticsearch defaults 95 10

## Install Kibana

Create the Kibana source list:

    $ echo "deb http://packages.elastic.co/kibana/4.4/debian stable main" | sudo tee -a /etc/apt/sources.list.d/kibana-4.4.x.list

Update your apt package database:

    $ sudo apt-get update

Install Kibana with this command:

    $ sudo apt-get -y install kibana

Open the Kibana configuration file for editing:

    $ sudo nano /opt/kibana/config/kibana.yml

In the Kibana configuration file, find the line that specifies server.host, and replace the IP address ("0.0.0.0" by default) with "localhost":   

    server.host: "localhost"

Save and exit. This setting makes it so Kibana will only be accessible to the localhost. This is fine because we will use an Nginx reverse proxy to allow external access.

Now enable the Kibana service, and start it:

    $ sudo update-rc.d kibana defaults 96 9
    $ sudo service kibana start

Install kibana sense plugin, with this plugin you can do elasticS request on line:

    /opt/kibana/bin/kibana plugin --install elastic/sense

## Install Nginx

Use apt to install Nginx and Apache2-utils:

    sudo apt-get install nginx apache2-utils

Use htpasswd to create an admin user, called "kibanaadmin" (you should use another name), that can access the Kibana web interface:

    $ sudo htpasswd -c /etc/nginx/htpasswd.users kibanaadmin

passwor: kibana_2017!

Now open the Nginx default server block in your favorite editor. We will use vi:

    $ sudo nano /etc/nginx/sites-available/default

Delete the file's contents, and paste the following code block into the file. Be sure to update the server_name to match your server's name:

```
server {
    listen 80;

    server_name example.com;

    auth_basic "Restricted Access";
    auth_basic_user_file /etc/nginx/htpasswd.users;

    location / {
        proxy_pass http://localhost:5601;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;        
    }
}    
```

Now restart Nginx to put our changes into effect:

    $ sudo service nginx restart

## Generate SSL Certificates

Create the directories that will store the certificate and private key with the following commands:

    $ sudo mkdir -p /etc/pki/tls/certs
    $ sudo mkdir /etc/pki/tls/private

Option 1: IP Address

To do so, open the OpenSSL configuration file:

    $ sudo vi /etc/ssl/openssl.cnf

Find the [ v3_ca ] section in the file, and add this line under it (substituting in the ELK Server's private IP address):

    $ subjectAltName = IP: ELK_server_private_IP

Save and exit.    

Now generate the SSL certificate and private key in the appropriate locations (/etc/pki/tls/), with the following commands:

    $ cd /etc/pki/tls
    $ sudo openssl req -config /etc/ssl/openssl.cnf -x509 -days 3650 -batch -nodes -newkey rsa:2048 -keyout private/logstash-forwarder.key -out certs/logstash-forwarder.crt