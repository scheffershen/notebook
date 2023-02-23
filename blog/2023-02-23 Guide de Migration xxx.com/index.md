---
slug: Guide-de-migration-vers-Nginx-1_23-et-ElasticSearch-2-sur-Ubuntu-22.04
title: Guide de migration vers Nginx 1.23 et ElasticSearch 2 sur Ubuntu 22.04
authors: [yshen]
tags: [Ubuntu, PHP, MySQL, Nginx, Elasticsearch]
---

Le serveur initial est sous Ubuntu 16.04, PHP 7.1, MySQL 5.7, Nginx 1.9.9 avec l'option MP4, J'ai le migrer vers Ubuntu 22.04

#### Ubuntu 22.04

Mettre à niveau Ubuntu

    $ do-release-upgrade

#### PHP 7.4

Installer PHP 7.4

    $ sudo apt install software-properties-common
    $ sudo add-apt-repository ppa:ondrej/php -y
    $ sudo apt install php7.4 php7.4-common php7.4-mysql php7.4-xml php7.4-xmlrpc php7.4-curl php7.4-gd php7.4-imagick php7.4-cli php7.4-dev php7.4-json php7.4-imap php7.4-mbstring php7.4-gettext php7.4-bcmath php7.4-bz2 php7.4-readline php7.4-opcache php7.4-soap php7.4-zip php7.4-intl php7.4-ldap php7.4-fpm -y

Basculer vers PHP 7.4

    $ sudo update-alternatives --config php
    $ sudo update-alternatives --set php /usr/bin/php7.4

Enable PHP 7.4 FPM, et démarre le service 

    $ sudo systemctl start php7.4-fpm
    $ sudo systemctl enable php7.4-fpm

#### Nginx 1.23

Nettoyer l'ancienne version Nginx:

    $ apt purge nginx nginx-common nginx-core

Installer les bliblothques neccessaires: 

    $ sudo apt-get install curl build-essential make gcc zlib1g zlib1g-dev geoipupdate libmaxminddb0 libmaxminddb-dev mmdb-bin libmodsecurity3 libgd-dev libexif-dev libssl-dev libxml2 libxml2-dev uuid-dev git libxslt-dev libgeoip-dev libgoogle-perftools-dev libperl-dev libcurl4-openssl-dev
    $ sudo wget http://nginx.org/download/nginx-1.23.0.tar.gz

    $ sudo git clone https://github.com/leev/ngx_http_geoip2_module.git

    $ ./configure  --prefix=/etc/nginx  --sbin-path=/usr/sbin/nginx \
        --conf-path=/etc/nginx/nginx.conf                           \ 
        --error-log-path=/var/log/nginx/error.log                   \ 
        --http-log-path=/var/log/nginx/access.log                   \                
        --pid-path=/var/run/nginx.pid                               \
        --lock-path=/var/run/nginx.lock                             \
        --http-client-body-temp-path=/var/cache/nginx/client_temp   \
        --http-proxy-temp-path=/var/cache/nginx/proxy_temp          \ 
        --http-fastcgi-temp-path=/var/cache/nginx/fastcgi_temp      \  
        --http-uwsgi-temp-path=/var/cache/nginx/uwsgi_temp          \     
        --http-scgi-temp-path=/var/cache/nginx/scgi_temp            \        
        --user=nginx                                                \               
        --group=nginx                                               \                
        --with-http_ssl_module                                      \              
        --with-http_realip_module                                   \              
        --with-http_addition_module                                 \              
        --with-http_sub_module                                      \              
        --with-http_dav_module                                      \              
        --with-http_mp4_module                                      \              
        --with-http_gzip_static_module                              \ 
        --with-http_image_filter_module                             \              
        --with-http_stub_status_module                              \                  
        --with-mail                                                 \                       
        --with-mail_ssl_module                                   \                                                                     
        --with-http_v2_module                                       \                              
        --add-dynamic-module=/home/adminum/ngx_http_geoip2_module
    $ make
    $ make install

    $ sudo journalctl -xeu nginx.service

    $ ll /usr/lib/nginx/modules/
    $ cp /usr/lib/nginx/modules/ngx_stream_geoip2_module.so /etc/nginx/modules/ 
    $ chmod +x /etc/nginx/modules/ngx_stream_geoip2_module.so
    $ nano /etc/nginx/modules-enabled/70-mod-stream-geoip2.conf 

    $ nginx -t

    $ sudo systemctl disable apache2 
    $ sudo systemctl enable nginx

La configuration:

```
server {
	root /var/www/www.xxx.com/web;
    index app.php index.html;

	server_name xxx.com www.xxx.com;

	location / {
		try_files $uri @rewriteapp;
	}

    location @rewriteapp {
            rewrite ^(.*)$ /app.php/$1 last;
    }

	location ~* \.(js|css|png|jpg|jpeg|gif|ico)$ {
		expires 365d;
		access_log off;
		add_header Pragma public;
		add_header Cache-Control public;
		add_header Vary Accept-Encoding;
	}

    location ~ \.mp4$ {
            mp4;
            mp4_buffer_size 4M;
            mp4_max_buffer_size 10M;
    }

	location ~ ^/(app|app_dev|app_prod|config)\.php(/|$) { # \.php$ {
		include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/run/php/php7.4-fpm.sock;
	}
}
```

#### NFS

    $ sudo apt install nfs-kernel-server

    $ sudo apt install nfs-common

    $ sudo systemctl restart nfs-kernel-server

    $ sudo nano /etc/exports
    
    $ mount 54.38.82.77:/home/adminum /nfs/home/adminum

#### Certbot

    $ snap install core; sudo snap refresh core

    $ apt remove certbot
    $ snap install --classic certbot
    $ ln -s /snap/bin/certbot /usr/bin/certbot

    $ certbot --nginx -d xxx.com -d www.xxx.com

#### MySQL 8

    $ nano /etc/mysql/conf.d/mysql.cnf 

```
[mysqld]
default-authentication-plugin=mysql_native_password
```

    $ mysql -u root -p xxx < xxx.sql 

#### PHPMyAdmin 

Installer PHPMyAdmin

    $ wget https://files.phpmyadmin.net/phpMyAdmin/5.2.0/phpMyAdmin-5.2.0-all-languages.zip
    $ apt install unzip -y
    $ unzip phpMyAdmin-5.2.0-all-languages.zip
    $ mv phpMyAdmin-* /usr/share/phpmyadmin
    $ cp /usr/share/phpmyadmin/config.sample.inc.php /usr/share/phpmyadmin/config.inc.php
    $ nano /usr/share/phpmyadmin/config.inc.php

modifier le configuration de Nginx: 

    $ nano sites-enabled/default 

```
    location /phpmyadmin {
        root /usr/share/;
			
	    allow xw.x.x.x;
	    deny all;

        index index.php index.html index.htm;

        location ~ ^/phpmyadmin/(.+\.php)$ {
                fastcgi_pass unix:/run/php/php7.4-fpm.sock;
                fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
                include fastcgi_params;
                include snippets/fastcgi-php.conf;
        }

        location ~* ^/phpmyadmin/(.+\.(jpg|jpeg|gif|css|png|js|ico|html|xml|txt))$ {
                root /usr/share/;
        }

        location ~ ^/phpmyadmin/(doc|sql|setup)/ {
	        deny all;
	    }
    }
```

    $ systemctl restart nginx

#### Elasticsearch

Elasticsearch installation: 

    $ wget https://download.elastic.co/elasticsearch/release/org/elasticsearch/distribution/deb/elasticsearch/2.3.1/elasticsearch-2.3.1.deb

    $ dpkg -i elasticsearch-2.3.1.deb

    $ systemctl enable elasticsearch
    
    $ nano /etc/elasticsearch/elasticsearch.yml
    # mettre: http.host: "127.0.0.1"

    $ systemctl restart elasticsearch
    $ curl -X GET 'http://localhost:9200'

ElasticSearch 2.3 fonctionne que avec Java 8, donc il faut enlever la version plus recent de Java 

    $ apt remove openjdk-18-jdk openjdk-18-jre
    $ apt purge openjdk-18-jdk openjdk-18-jre
    $ apt autoremove

    $ sudo add-apt-repository --remove ppa:webupd8team/java
    $ apt-get install ppa-purge
    $ ppa-purge ppa:webupd8team/java

    $ apt install openjdk-8-jdk openjdk-8-jre
    $ java -version

comme voir la liste de plugins: 

    $ /usr/share/elasticsearch/bin/plugin list

    $ /usr/share/elasticsearch/bin/plugin install license

    $ /usr/share/elasticsearch/bin/plugin install marvel-agent

ElasticSearch commandes: 

    $ systemctl start elasticsearch
    $ systemctl restart elasticsearch
    $ systemctl status elasticsearch

#### Kibana

kibana 4.5 installation

    $ wget https://download.elastic.co/kibana/kibana/kibana_4.5.3_amd64.deb
    $ dpkg -i kibana_4.5.3_amd64.deb

kibana débug: 

    $ systemctl status kibana
    $ tail -f /var/log/kibana/kibana.stderr 
    $ chmod -R kibana:kibana /opt/kibana/optimize/.

comme voir la liste de plugins: 

    $ /opt/kibana/bin/kibana plugin --list

comme installer un plugin: 

    $ /opt/kibana/bin/kibana plugin --install elasticsearch/marvel/2.3.1
    $ /opt/kibana/bin/kibana plugin --install elastic/sense/latest

comme enlever un plugin: 

    $ /opt/kibana/bin/kibana plugin --remove marvel

kibana service commandes: 

    $ sudo systemctl enable kibana
    $ sudo systemctl start kibana
    $ sudo systemctl restart kibana
    $ sudo systemctl status kibana
    

    $ htpasswd -c /etc/nginx/htpasswd.users kibanaadmin
    $ nano /etc/nginx/sites-available/default 
    $ nginx -t 

```
server {
        listen 8089;

        server_name kibana.medflixs.com;

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