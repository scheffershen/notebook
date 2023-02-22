nginx conf 
==========

```
user www-data;
worker_processes 4;
pid /run/nginx.pid;

events {
	worker_connections 1024;
	# multi_accept on;
}

http {

	##
	# Basic Settings
	##

	sendfile on;
	tcp_nopush on;
	tcp_nodelay on;
	keepalive_timeout 65;
	types_hash_max_size 2048;
	# server_tokens off;

	# set client body size to 1024M #
	client_max_body_size 1024M;

# $ locate php.ini

# /etc/php5/cgi/php.ini
# /etc/php5/cli/php.ini
# /etc/php5/fpm/php.ini

# PHP configuration (optional)
#;This sets the maximum amount of memory in bytes that a script is allowed to allocate
#memory_limit = 2014M
 
#;The maximum size of an uploaded file.
#upload_max_filesize = 2014M
 
#;Sets max size of post data allowed. This setting also affects file upload. To upload large files, this value #must be larger than upload_max_filesize
#post_max_size = 1024M


	# server_names_hash_bucket_size 64;
	# server_name_in_redirect off;

	include /etc/nginx/mime.types;
	default_type application/octet-stream;

	##
	# Logging Settings
	##

        access_log off;
	# access_log /var/log/nginx/access.log;
	error_log /var/log/nginx/error.log;

	##
	# Gzip Settings
	##

	gzip on;
	gzip_disable "msie6";
	gzip_min_length 100;

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


	# gzip_vary on;
	# gzip_proxied any;
	# gzip_comp_level 6;
	# gzip_buffers 16 8k;
	# gzip_http_version 1.1;
	# gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
    	
    # Enable fastcgi caching 
    fastcgi_cache_path /tmp/nginx-cache levels=1:2 keys_zone=microcache:10m max_size=500m;
    fastcgi_cache_key "$scheme$request_method$host$request_uri";
    add_header microcache_status $upstream_cache_status;

	# fastcgi_cache_use_stale error timeout invalid_header http_500;
	# fastcgi_ignore_headers Cache-Control Expires Set-Cookie;

	##
	# nginx-naxsi config
	##
	# Uncomment it if you installed nginx-naxsi
	##

	#include /etc/nginx/naxsi_core.rules;

	##
	# nginx-passenger config
	##
	# Uncomment it if you installed nginx-passenger
	##
	
	#passenger_root /usr;
	#passenger_ruby /usr/bin/ruby;

	##
	# Virtual Host Configs
	##

	include /etc/nginx/conf.d/*.conf;
	include /etc/nginx/sites-enabled/*;
}


#mail {
#	# See sample authentication script at:
#	# http://wiki.nginx.org/ImapAuthenticateWithApachePhpScript
# 
#	# auth_http localhost/auth.php;
#	# pop3_capabilities "TOP" "USER";
#	# imap_capabilities "IMAP4rev1" "UIDPLUS";
# 
#	server {
#		listen     localhost:110;
#		protocol   pop3;
#		proxy      on;
#	}
# 
#	server {
#		listen     localhost:143;
#		protocol   imap;
#		proxy      on;
#	}
#}
```