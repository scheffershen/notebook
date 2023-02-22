Nginx FastCGI cache
===

http://bl.ocks.org/magnetikonline/10450786

Will need to create a directory to hold cache files, for the example given here that would be:

    $ sudo mkdir -p /var/cache/nginxfastcgi
    $ chown www-data: /var/cache/nginxfastcgi

example:

    http {
        fastcgi_cache_path /tmp/nginx-cache levels=1:2 keys_zone=microcache:10m inactive=60m;
        fastcgi_cache_key "$scheme$request_method$host$request_uri";
    }

The "fastcgicachepath" directive specifies the location of the cache (/tmp/nginx-cache), its size (10m), memory zone name (microcache), the subdirectory levels, and the inactive` timer.

    http {
        server {
            location ~ "\.php$" {
                fastcgi_cache microcache;
                fastcgi_cache_valid 200 60m;
                fastcgi_cache_bypass $no_cache;
                fastcgi_no_cache $no_cache;
            }


The "fastcgicache" directive references to the memory zone name which we specified in the "fastcgicache_path" directive and stores the cache in this area.

##Setting Cache Exceptions

Some dynamic content such as authentication required pages shouldn't be cached. Such content can be excluded from being cached based on server variables like "requesturi," "requestmethod," and "http_cookie."

```
   http {
        server {
            #Cache everything by default
            set $no_cache 0;

            #Don't cache POST requests
            if ($request_method = POST)
            {
                set $no_cache 1;
            }

            #Don't cache if the URL contains a query string
            if ($query_string != "")
            {
                set $no_cache 1;
            }

            #Don't cache the following URLs
            if ($request_uri ~* "/(administrator/|login.php)")
            {
                set $no_cache 1;
            }

            #Don't cache if there is a cookie called PHPSESSID
            if ($http_cookie = "PHPSESSID")
            {
                set $no_cache 1;
            }
```


```nginx.conf
user www-data www-data;
worker_processes 1;
lock_file /run/lock/nginx.lock;


events {
    worker_connections 1024;
}

http {
    server_tokens off;
    sendfile on;
    tcp_nopush on;
    tcp_nodelay off;
    keepalive_timeout 5;

    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    gzip on;
    gzip_static on;
    gzip_comp_level 2;
    gzip_disable "msie6";
    gzip_proxied any;
    gzip_types application/javascript application/json application/vnd.ms-fontobject application/x-font-ttf image/svg+xml text/css text/plain text/xml;
    gzip_vary on;
 
    fastcgi_cache_path /var/cache/nginxfastcgi levels=1:2 keys_zone=fastcgicache:10m inactive=10m max_size=64m;
    fastcgi_cache_key $scheme$request_method$host$request_uri;
    # note: can also use HTTP headers to form the cache key, e.g.
    #fastcgi_cache_key $scheme$request_method$host$request_uri$http_x_custom_header;
    fastcgi_cache_lock on;
    fastcgi_cache_use_stale error timeout invalid_header updating http_500;
    fastcgi_cache_valid 5m;
    fastcgi_ignore_headers Cache-Control Expires Set-Cookie;

    index index.php;
 
 
    server {
        listen 127.0.0.1:80;
        server_name sitename.com;
 
 
        root /var/www/sitename.com;
        access_log /var/log/nginx/access.log;
        error_log /var/log/nginx/error.log;
 
        # example FastCGI cache exception rules
        set $fastcgi_skipcache 0;
 
        if ($query_string) {
            set $fastcgi_skipcache 1;
        }
 
        if ($http_x_custom_header) {
            set $fastcgi_skipcache 0;
        }
 
        if ($uri ~ "/path/matches/") {
            set $fastcgi_skipcache 1;
        }    

        if ($http_cookie ~ "users_login_cookie") {
            set $fastcgi_skipcache 1;
        }
 
        include /etc/nginx/conf/phpfastcgicache;
 
        location / {
            try_files $uri $uri/ /index.php?$query_string;
        }

        location ~ "\.php$" {
            fastcgi_index index.php;
            if (!-f $realpath_root$fastcgi_script_name) {
                return 404;
            }
 
            # note: adds a HTTP response header "X-Cache" returning HIT/MISS/BYPASS/EXPIRED for cache use status
            add_header X-Cache $upstream_cache_status;
            fastcgi_cache fastcgicache;
            fastcgi_cache_bypass $fastcgi_skipcache;
            fastcgi_no_cache $fastcgi_skipcache;
 
            include /etc/nginx/fastcgi_params;
            fastcgi_pass unix:/run/php5/php-fpm.sock;
        }
    }
}           
```

    # Install PHP
    # -qq implies -y --force-yes
    sudo apt-get install -qq php5-cli php5-fpm php5-mysql php5-pgsql php5-sqlite php5-curl php5-gd php5-gmp php5-mcrypt php5-memcached php5-imagick php5-intl php5-xdebug

# Set PHP FPM to listen on TCP instead of Socket
sudo sed -i "s/listen =.*/listen = 127.0.0.1:9000/" /etc/php5/fpm/pool.d/www.conf

# Set PHP FPM allowed clients IP address
sudo sed -i "s/;listen.allowed_clients/listen.allowed_clients/" /etc/php5/fpm/pool.d/www.conf
