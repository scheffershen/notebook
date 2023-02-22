default medflixs
================

```
# You may add here your
# server {
#	...
# }
# statements for each of your virtual hosts to this file

##
# You should look at the following URL's in order to grasp a solid understanding
# of Nginx configuration files in order to fully unleash the power of Nginx.
# http://wiki.nginx.org/Pitfalls
# http://wiki.nginx.org/QuickStart
# http://wiki.nginx.org/Configuration
#
# Generally, you will want to move this file somewhere, and start with a clean
# file but keep this around for reference. Or just disable in sites-enabled.
#
# Please see /usr/share/doc/nginx-doc/examples/ for more detailed examples.
##

##
# WebSocket proxy Configs
##
map $http_upgrade $connection_upgrade {
    default upgrade;
    '' close;
}

# my ratchet websocket server internal
upstream websocket {
    server 127.0.0.1:8080;
}

server {
    listen 8020;

    # SSL
    ssl on;
    ssl_certificate /etc/nginx/ssl/nginx.crt;
    ssl_certificate_key /etc/nginx/ssl/nginx.key;

    # route all to "websocket"    
    location / {
        proxy_pass http://websocket;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        #1 day
        proxy_read_timeout 86400s;
        proxy_send_timeout 86400s;        
    }
}

server {
       listen 80 default_server;
       listen [::]:80 default_server ipv6only=on;
       server_name mcc32015.loc;
       return 301 https://$server_name$request_uri;
}

server {
	# listen 80 default_server;
	# listen [::]:80 default_server ipv6only=on;

    listen 443 ssl http2;

	#root /usr/share/nginx/html;
	#index index.html index.htm;
	root /var/www/html/mcc3_2015/public_html;
	index index.php;

	# Make site accessible from http://localhost/
	server_name localhost;

    ssl_certificate /etc/nginx/ssl/nginx.crt;
    ssl_certificate_key /etc/nginx/ssl/nginx.key;
        
    # SSLCertificateFile /etc/letsencrypt/live/www.medflixs.com/cert.pem
    # SSLCertificateKeyFile /etc/letsencrypt/live/www.medflixs.com/privkey.pem

	  access_log off;

    # Default cache for everthing
    set $no_cache 0;

    # Bypass cache for POST requests
    if ($request_method = POST) { set $no_cache 1; }

    # Bypass cache for URL with query string
    if ($query_string) { set $no_cache 1; }

    # Don't cache the following URLs
    if ($request_uri ~* "/(administration/|login)") { set $no_cache 1; }

    #Don't cache if there is a cookie called PHPSESSID
    if ($http_cookie = "PHPSESSID")
    {
        set $no_cache 1;
    }
	
	# Cache the following URLs
    if ($request_uri ~* "(/faq|/about|/help|/mentions)$") {set $no_cache 0; }
      
	location / {
		# First attempt to serve request as file, then
		# as directory, then fall back to displaying a 404.
		# try_files $uri $uri/ =404;
        try_files $uri /index.php$is_args$args;
		# Uncomment to enable naxsi on this location
		# include /etc/nginx/naxsi.rules
		error_log /var/www/html/nginx-error.log debug;
	}

	location ~* \.(js|css|png|jpg|jpeg|gif|ico)$ {
		expires 7d;
		access_log off;
		add_header Pragma public;
		add_header Cache-Control public;
		add_header Vary Accept-Encoding;
	}

    location ~ \.mp4$ {
            #root /var/www/html/mcc3_2015/public_html/mp4/;
            mp4;
            mp4_buffer_size 4M;
            mp4_max_buffer_size 10M;
    }

    location /phpmyadmin {
       	root /usr/share/;
        auth_basic "Admin Login";
        auth_basic_user_file /etc/nginx/pma_pass;
		
    		allow 109.190.84.137;
    		deny all;

       	index index.php index.html index.htm;
       	location ~ ^/phpmyadmin/(.+\.php)$ {
               	try_files $uri =404;
               	root /usr/share/;
               	fastcgi_pass 127.0.0.1:9000;
               	fastcgi_index index.php;
               	#fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
               	include fastcgi_params;
               	fastcgi_read_timeout 300;
       	}       	
       	location ~* ^/phpmyadmin/(.+\.(jpg|jpeg|gif|css|png|js|ico|html|xml|txt))$ {
               	root /usr/share/;
       	}
	}
	location /phpMyAdmin {
       rewrite ^/* /phpmyadmin last;
	}
	# Only for nginx-naxsi used with nginx-naxsi-ui : process denied requests
	#location /RequestDenied {
	#	proxy_pass http://127.0.0.1:8080;    
	#}

	#error_page 404 /404.html;

	# redirect server error pages to the static page /50x.html
	#
	#error_page 500 502 503 504 /50x.html;
	#location = /50x.html {
	#	root /usr/share/nginx/html;
	#}

	# pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
	#
	location ~ ^/(app|app_dev)\.php(/|$) {
		fastcgi_split_path_info ^(.+\.php)(/.+)$;
		# NOTE: You should have "cgi.fix_pathinfo = 0;" in php.ini
	
        fastcgi_cache microcache;
        fastcgi_cache_valid 200 10m;

        fastcgi_cache_bypass $no_cache;
        fastcgi_no_cache $no_cache;
            
		# With php5-cgi alone:
		fastcgi_pass 127.0.0.1:9000;
		# With php5-fpm:
		# fastcgi_pass unix:/var/run/php5-fpm.sock;
		fastcgi_index index.php;
		include fastcgi_params;
	}

	# deny access to .htaccess files, if Apache's document root
	# concurs with nginx's one
	#
	location ~ /\.ht {
		deny all;
	}
}


# another virtual host using mix of IP-, name-, and port-based configuration
#
#server {
#	listen 8000;
#	listen somename:8080;
#	server_name somename alias another.alias;
#	root html;
#	index index.html index.htm;
#
#	location / {
#		try_files $uri $uri/ =404;
#	}
#}


# HTTPS server
#
#server {
#	listen 443;
#	server_name localhost;
#
#	root html;
#	index index.html index.htm;
#
#	ssl on;
#	ssl_certificate cert.pem;
#	ssl_certificate_key cert.key;
#
#	ssl_session_timeout 5m;
#
#	ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;
#	ssl_ciphers "HIGH:!aNULL:!MD5 or HIGH:!aNULL:!MD5:!3DES";
#	ssl_prefer_server_ciphers on;
#
#	location / {
#		try_files $uri $uri/ =404;
#	}
#}
```