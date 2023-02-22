introduction-to-elasticsearch-in-php
===================================

Author: Wern Ancheta
Date: August 03, 2015
link: http://www.sitepoint.com/introduction-to-elasticsearch-in-php/

more:
http://www.sitepoint.com/series/a-silex-and-elasticsearch-app-powered-by-drupal-7-for-content-management/


http://blog.netapsys.fr/configurer-elasticsearch-sur-un-projet-symfony-2/

## install ou update java 1.8

https://www.elastic.co/guide/en/elasticsearch/reference/current/_installation.html

http://tecadmin.net/install-oracle-java-8-jdk-8-ubuntu-via-ppa/#

    $ sudo add-apt-repository -y ppa:webupd8team/java
    $ sudo apt-get update
    $ sudo apt-get install -y oracle-java8-installer

    $ sudo apt-get install oracle-java8-set-default

    $ java -version
    $ echo $JAVA_HOME ???

set JAVA_HOME

    $ export JAVA_HOME=/usr/lib/jvm/java-8-oracle


## install elasrticsearch 2.3.1

OU  (https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-elasticsearch-on-ubuntu-16-04)

    $ wget https://download.elastic.co/elasticsearch/release/org/elasticsearch/distribution/deb/elasticsearch/2.3.1/elasticsearch-2.3.1.deb

    $ sudo dpkg -i elasticsearch-2.3.1.deb

    $ sudo update-rc.d elasticsearch defaults 95 10 # sudo systemctl enable elasticsearch

    $ sudo service elasticsearch start  # sudo systemctl start elasticsearch

### AutoStart

    $ sudo update-rc.d elasticsearch defaults 95 10

    sudo service elasticsearch start

### remove

    sudo dpkg -l 

### test

    $ curl -X GET 'http://localhost:9200'

    $ curl -X GET 'http://192.168.33.22:9200'

OU (https://www.digitalocean.com/community/tutorials/how-to-install-elasticsearch-logstash-and-kibana-elk-stack-on-ubuntu-14-04)

    $ sudo add-apt-repository -y ppa:webupd8team/java ## obsolete
    $ sudo apt-get update
    $ sudo apt-get -y install oracle-java8-installer

    $ wget -qO - https://packages.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
    echo "deb http://packages.elastic.co/elasticsearch/2.x/debian stable main" | sudo tee -a /etc/apt/sources.list.d/elasticsearch-2.x.list

    $ sudo apt-get update

    $ sudo apt-get -y install elasticsearch
    $ sudo nano /etc/elasticsearch/elasticsearch.yml

        network.host: 192.168.33.22

    $ sudo service elasticsearch restart
    $ sudo update-rc.d elasticsearch defaults 95 10

### Install Kibana

    $ echo "deb http://packages.elastic.co/kibana/4.4/debian stable main" | sudo tee -a /etc/apt/sources.list.d/kibana-4.4.x.list
    $ sudo apt-get update
    $ sudo apt-get -y install kibana
    $ sudo nano /opt/kibana/config/kibana.yml
        server.host: "localhost"
    $ sudo update-rc.d kibana defaults 96 9
    $ sudo service kibana start

### installing Sense

    $ /opt/kibana/bin/kibana plugin --install elastic/sense
    $ sudo service kibana restart
    
http://www.medflixs.com.loc:81/app/sense

### Install Nginx

    $ sudo apt-get install nginx apache2-utils
    $ sudo htpasswd -c /etc/nginx/htpasswd.users kibanaadmin

kibanapass

    $ sudo nano /etc/nginx/sites-available/default

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

    $ sudo service nginx restart

http://www.medflixs.com.loc:81/app/sense
    

## update elasticsearch

    $ sudo apt-get update && sudo apt-get install elasticsearch

    $ sudo update-rc.d elasticsearch defaults 95 10