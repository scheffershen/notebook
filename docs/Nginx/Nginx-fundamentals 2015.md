Nginx-fundamentals
===

## installation

    cat /etc/lsb-release
    ls -l /etc/nginx
    service nginx status

2. Building Nginx from Source and Adding Modules   

    sudo apt-get update
    sudo apt-get install build-essential

    wget http://nginx.org/download/nginx-1.9.9.tar.gz
    tar -zxvf nginx-1.9.9.tar.gz
    cd nginx-1.9.9

    sudo apt-get install -y libpcre3 libpcre3-dev libpcrecpp0 libssl-dev zlib1g-dev

    sudo apt-get install -y libxslt-dev libxml2-dev

    sudo apt-get install -y libgd-dev

    apt-get install -y libgeoip-dev

    ./configure --with-cc-opt='-g -O2 -fstack-protector --param=ssp-buffer-size=4 -Wformat -Werror=format-security -D_FORTIFY_SOURCE=2' --with-ld-opt='-Wl,-Bsymbolic-functions -Wl,-z,relro' --prefix=/usr/share/nginx --conf-path=/etc/nginx/nginx.conf --http-log-path=/var/log/nginx/access.log --error-log-path=/var/log/nginx/error.log --lock-path=/var/lock/nginx.lock --pid-path=/run/nginx.pid --http-client-body-temp-path=/var/lib/nginx/body --http-fastcgi-temp-path=/var/lib/nginx/fastcgi --http-proxy-temp-path=/var/lib/nginx/proxy --http-scgi-temp-path=/var/lib/nginx/scgi --http-uwsgi-temp-path=/var/lib/nginx/uwsgi --with-debug --with-pcre-jit --with-ipv6 --with-http_ssl_module --with-http_stub_status_module --with-http_realip_module --with-http_addition_module --with-http_dav_module --with-http_geoip_module --with-http_gzip_static_module --with-http_image_filter_module --with-http_sub_module --with-http_xslt_module --with-mail --with-mail_ssl_module --with-http_mp4_module --with-http_v2_module


```nginx -V
    nginx version: nginx/1.4.6 (Ubuntu)
    built by gcc 4.8.2 (Ubuntu 4.8.2-19ubuntu1)
    TLS SNI support enabled
    configure arguments: --with-cc-opt='-g -O2 -fstack-protector --param=ssp-buffer-size=4 -Wformat -Werror=format-security -D_FORTIFY_SOURCE=2' --with-ld-opt='-Wl,-Bsymbolic-functions -Wl,-z,relro' --prefix=/usr/share/nginx --conf-path=/etc/nginx/nginx.conf --http-log-path=/var/log/nginx/access.log --error-log-path=/var/log/nginx/error.log --lock-path=/var/lock/nginx.lock --pid-path=/run/nginx.pid --http-client-body-temp-path=/var/lib/nginx/body --http-fastcgi-temp-path=/var/lib/nginx/fastcgi --http-proxy-temp-path=/var/lib/nginx/proxy --http-scgi-temp-path=/var/lib/nginx/scgi --http-uwsgi-temp-path=/var/lib/nginx/uwsgi --with-debug --with-pcre-jit --with-ipv6 --with-http_ssl_module --with-http_stub_status_module --with-http_realip_module --with-http_addition_module --with-http_dav_module --with-http_geoip_module --with-http_gzip_static_module --with-http_image_filter_module --with-http_sub_module --with-http_xslt_module --with-mail --with-mail_ssl_module --with-http_mp4_module --with-http_v2_module
```

    make
    sudo make install

    mv /usr/sbin/nginx /usr/sbin/nginx_1.4.6
    cp /usr/share/nginx/sbin/nginx /usr/sbin/nginx

    service nginx restart

    curl -I http://mcc32015.loc

    curl -I -k https://www.medflixs.com

## Configuration

    curl -I http://mcc32015.loc/assets/css/style.default.css

Matching Order:

    1. Exact Match =
    2. Preferential Prefix ^~
    3. Regex Match ~&*~
    4. Prefix Match

## Backend communication    

    apt-get install php7.1-fpm php7.1-cgi php7.1 php7.1-mysql

    nano /etc/php/7.1/fpm/pool.d/www.conf

```
        33 listen = /run/php/php7.1-fpm.sock
        PAR 
        33 listen = 127.0.0.1:9000
```

    service php7.1-fpm restart

## php-fpm

There are 2 mode in php-fpm, one is by Unix Socket, another is by TCP Socket.

        Unix Socket: /run/php/php7.1-fpm.sock
        TCP Socket: 127.0.0.1:9000

## Configuring Nginx Workers and Other Usefull Directives**

show nomber of cpu that you have 

    nproc

Get more informations of your machine: 

    lscpu

To get the limit of the simulate connections of your machine:

    ulimit -n

https://www.digitalocean.com/community/tutorials/how-to-setup-fastcgi-caching-with-nginx-on-your-vps


## Expires Headers    

```
http {
    server {
        location ~* \.(js|css|png|jpg|jpeg|gif|ico)$ {
            expires 1M;
            access_log off;
            add_header Pragma public;
            add_header Cache-Control public;
            add_header Vary Accept-Encoding;
        }
    }
}    
```

## Gzip

```
http { 
    server {
    gzip on;
    gzip_min_length 100;
    gzip_disable "msie6";

    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 3;
    gzip_buffers 4 16k;
    gzip_http_version 1.1;
    gzip_types text/plain;
    gzip_types text/css; 
    gzip_types application/json; 
    gzip_types application/pdf; 
    gzip_types application/ecmascript; 
    gzip_types application/x-javascript; 
    gzip_types text/csv; 
    gzip_types text/xml; 
    gzip_types application/xml; 
    gzip_types application/xml+rss; 
    gzip_types text/javascript;
```

    curl -I -H 'Accept-Encoding: gzip, deflate'  http://mcc32015.loc/assets/css/style.default.css

## FastCGi Cache

https://gnugat.github.io/2016/04/20/super-speed-sf-nginx.html

    apt-get install apache2-utils

test for 100 connection and 10 concurrency connection,

    ab -n 100 -C 10 https://www.medflixs.com:443/

```result
    Time taken for tests:   9.950 seconds (to completed all 100 request)
    Complete requests:      100
    Failed requests:        0
    Total transferred:      8288700 bytes
    HTML transferred:       8250700 bytes
    Requests per second:    10.05 [#/sec] (mean)  (?)
```

```/etc/nginx/sites-available/default
http { 

    # Enable fastcgi caching 
    fastcgi_cache_path /tmp/nginx-cache levels=1:2 keys_zone=microcache:10m max_size=500m;
    fastcgi_cache_key "$scheme$request_method$host$request_uri";
    add_header microcache_status $upstream_cache_status;

    server {
        # Default cache for everthing
        set $no_cache 0;

        # Bypass cache for POST requests
        if ($request_method = POST) { set $no_cache 1; }

        # Bypass cache for URL with query string
        if ($query_string != "") { set $no_cache 1; }

        # Don't cache the following URLs
        if ($request_uri ~* "administration") { set $no_cache 1; }

        location ~ \.php$ {
            fastcgi_cache microcache;
            fastcgi_cache_valid 200 10m;

            fastcgi_cache_bypass $no_cache;
            fastcgi_no_cache $no_cache;
```

## Limiting

    http {

        # Limit concurrency
        limit_conn_zone $binary_remote_addr zone=per_ip:5m;
        limit_req_zone $binary_remote_addr zone=one_per_sec:5m rate=1r/s;

        server {

                location ~* \.(js|css|png|jpg|jpeg|gif|ico)$ {
                expires 1M;
                access_log off;
                add_header Pragma public;
                add_header Cache-Control public;
                add_header Vary Accept-Encoding;

                limit_conn per_ip 1;
                limit_req zone=one_per_sec burst=5;
            }

        }
    }

## Video streaming    

    http {

        server {
            location ~ \.mp4$ {
                # root /var/www/html/mcc3_2015/public_html/mp4/;
                mp4;
                mp4_buffer_size 4M;
                mp4_max_buffer_size 10M;
            }

        }
    }

## Security

    mkdir /etc/nginx/ssl

    sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/ssl/nginx.key -out /etc/nginx/ssl/nginx.crt

    server {
           listen 80 default_server;
           listen [::]:80 default_server ipv6only=on;
           server_name mcc32015.loc;
           return 301 https://$server_name$request_uri;
    }

    server {

            listen 443 ssl;

            root /usr/share/nginx/html;
            index index.html index.htm;

            server_name your_domain.com;
            ssl_certificate /etc/nginx/ssl/nginx.crt;
            ssl_certificate_key /etc/nginx/ssl/nginx.key;

            location / {
                    try_files $uri $uri/ =404;
            }
    }    