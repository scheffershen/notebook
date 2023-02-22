Nginx Fundamentals High Performance Server
===

*Date:08/2015*

Basic vHost

```
events {}

http {
    server {
        listen 80;

        root /var/www/dashboard_ssn_2016/frontend/public/dist;
        index index.html;

        server_name yourdomain.com

        location / {
            default_type "text/html";
            try_files $uri.html $uri $uri/ /index.html;
        }
    }
}    
```

```
server {
        listen 80;

        root /var/www/dashboard_ssn_2016/frontend/public/dist;
        index index.html;

        # Make site accessible from http://localhost/
        server_name dashbord.sante-sur-le-net.com;

        location / {
#               proxy_pass http://localhost:8000;
#               proxy_http_version 1.1;
#               proxy_set_header Upgrade $http_upgrade;
#               proxy_set_header Connection 'upgrade';
#               proxy_set_header Host $host;
#               proxy_cache_bypass $http_upgrade;
                try_files $uri $uri/ =404;
#               default_type "text/html";
#               try_files $uri.html $uri $uri/ /index.html;
        }
}
```

Web Server, Reverse Proxy,

##3 nginx vs apache

php-fpm ???

##Installing nginx 1.9.2

    nano /etc/apt/sources.list.d/nginx.list

Create the file /etc/apt/sources.list.d/nginx.list with the following content:

    deb http://nginx.org/packages/mainline/ubuntu/ trusty nginx
    deb-src http://nginx.org/packages/mainline/ubuntu/ trusty nginx

    apt-get update

the GPG error “NO_PUBKEY”?

    sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys ABF5BD827BD9BF62

    cat /etc/lsb-release
    apt-get install nginx

    ll /etc/nginx

    service nginx status
    service nginx start

http://wiki.nginx.org/InitScripts

##Configuration

##Installing php-fpm

    apt-get install php5-fpm

    ## apt-get install php5-mysql

    ## apt-get install php5

    ## apt-get install php5-cgi


    nproc
    lscpu