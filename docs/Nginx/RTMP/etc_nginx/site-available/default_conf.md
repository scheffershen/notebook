default_conf
============


```
## FROM https://www.youtube.com/watch?v=dwhFIfdjK8A
# You should look at the following URL's in order to grasp a solid understanding
# of Nginx configuration files in order to fully unleash the power of Nginx.
# https://www.nginx.com/resources/wiki/start/
# https://www.nginx.com/resources/wiki/start/topics/tutorials/config_pitfalls/
# https://wiki.debian.org/Nginx/DirectoryStructure
#
# In most cases, administrators will remove this file from sites-enabled/ and
# leave it as reference inside of sites-available where it will continue to be
# updated by the nginx packaging team.
#
# This file will automatically load configuration files provided by other
# applications, such as Drupal or Wordpress. These applications will be made
# available underneath a path with that package name, such as /drupal8.
#
# Please see /usr/share/doc/nginx-doc/examples/ for more detailed examples.
##

# Default server configuration
#
server {
	listen 8088 default_server;
	# listen [::]:80 default_server;

	# listen 4438 ssl default_server;
	# listen [::]:4438 ssl default_server;
	# include snippets/snakeoil.conf;

	# ssl_certificate /etc/letsencrypt/live/yourserver.ddns.net/fullchain.pem; # managed by Certbot
	# ssl_certificate_key /etc/letsencrypt/live/yourserver.ddns.net/privkey.pem; # managed by Certbot

	root /var/www/html;

	# Add index.php to the list if you are using PHP
	index index.nginx-debian.html index.html index.htm;

	server_name _;

	location / {
		root /var/www/html;
		index index.nginx-debian.html index.html index.htm;
		# First attempt to serve request as file, then as directory, then fall back to displaying a 404.
		try_files $uri $uri/ =404;
	}

	#location ~ \.php$ {
	#	include snippets/fastcgi-php.conf;
		#	# With php-fpm (or other unix sockets):
	#	fastcgi_pass unix:/var/run/php/php7.3-fpm.sock;
	#	# With php-cgi (or other tcp sockets):
	#	fastcgi_pass 127.0.0.1:9000;
	#}

	#error_page   500 502 503 504  /50x.html;
	#location = /50x.html {
	#	root   /var/www/html;
	#}

	location ~ /\.ht {
		deny all;
	}

#location ~	\.(?:css(\.map)?|js(\.map)?|jpe?g|png|gif|ico|cur|heic|webp|tiff?|mp3|m4a|aac|ogg|midi?|wav|mp4|mov|webm|mpe?g|avi|ogv|flv|wmv|mpd|m3u8)$ {
#	expires 7d;
#	access_log off;
#	log_not_found off;
#	}
#location ~ \.(?:svgz?|ttf|ttc|otf|eot|woff|woff2)$ {
#	add_header Access-Control-Allow-Origin "*";
#	expires 7d;
#	access_log off;
#	}

# This provides RTMP statistics in XML at http://your-server-address/stat
location /stat {
	rtmp_stat all;
	rtmp_stat_stylesheet stat.xsl;
	auth_basic "Restricted Content";
        auth_basic_user_file /etc/nginx/.htpasswd;
	}
# XML stylesheet to view RTMP stats. Copy stat.xsl wherever you want and put the full directory path here
location /stat.xsl {
	root /var/www/html/;
	}
# Control interface (extremely useful, but can also boot people from streams so we put basic auth in front of it - see https://github.com/arut/nginx-rtmp-module/wiki/Control-module for more information)
# location /control {
#	# you'll need a htpasswd auth file, that's outside the scope of this doc but any apache one will work
#	auth_basic "stream";
#	auth_basic_user_file /etc/nginx/.htpasswd;
#	rtmp_control all;
#	}

# allows us to see how stats on viewers on our Nginx site using a URL like: "http://my-ip/stats" 
# location /stub_status {
#		stub_status;
#		allow 127.0.0.1;
#		deny all;
#                }
#creates the http-location for our full-resolution (desktop) HLS stream - "http://my-ip/live/my-stream-key/index.m3u8"

# ========================================== RTMP =================================== # 
location /live {
	# root /var/www/;
	alias /var/www/hls/live;
	expires -1;
	autoindex on;
	autoindex_localtime on;
	# CORS setup #
		set $sent_http_accept_ranges bytes;
		add_header 'Cache-Control' 'no-cache';
		add_header Cache-Control no-cache;
		add_header 'Access-Control-Allow-Origin' '*' always;
		add_header 'Access-Control-Expose-Headers' 'Content-Length';
	# allow CORS preflight requests #
		if ($request_method = 'OPTIONS') {
		add_header 'Access-Control-Allow-Origin' '*';
		add_header 'Access-Control-Max-Age' 1728000;
		add_header 'Content-Type' 'text/plain charset=UTF-8';
		add_header 'Content-Length' 0;
		return 204;
		}
	types {
		application/vnd.apple.mpegurl m3u8;
		application/dash+xml mpd;
		video/mp2t ts;
		}
	}

location /hls {
	root /var/www;
	# alias /var/www/hls;
	expires -1;
	autoindex on;
	autoindex_localtime on;
	# CORS setup #
		set $sent_http_accept_ranges bytes;
		add_header Cache-Control no-cache;
		add_header 'Access-Control-Allow-Origin' '*' always;
		add_header 'Access-Control-Expose-Headers' 'Content-Length';
	# allow CORS preflight requests #
		if ($request_method = 'OPTIONS') {
		add_header 'Access-Control-Allow-Origin' '*';
		add_header 'Access-Control-Max-Age' 1728000;
		add_header 'Content-Type' 'text/plain charset=UTF-8';
		add_header 'Content-Length' 0;
		return 204;
		}
	types {
		application/vnd.apple.mpegurl m3u8;
		application/dash+xml mpd;
		video/mp2t ts;
		}
	}
# mpeg-dash for HTML5, HTTP side. nginx stores DASH fragments here, so make sure it's writable by nginx
location /dash {
	# root /var/www;
	alias /var/www/dash;
	autoindex on;
	autoindex_localtime on;
	# CORS setup #
		set $sent_http_accept_ranges bytes;
		add_header Cache-Control no-cache;
		add_header 'Access-Control-Allow-Origin' '*' always;
		add_header 'Access-Control-Expose-Headers' 'Content-Length';
	# allow CORS preflight requests #
		if ($request_method = 'OPTIONS') {
		add_header 'Access-Control-Allow-Origin' '*';
		add_header 'Access-Control-Max-Age' 1728000;
		add_header 'Content-Type' 'text/plain charset=UTF-8';
		add_header 'Content-Length' 0;
		return 204;
		}
	types {
		application/x-mpegURL m3u8;
		application/dash+xml mpd;
		video/mp2t ts;
		video/mp4 mp4;
		}
	}	
# creates the http-location for our mobile-device HLS stream - "http://my-ip/low/my-stream-key/index.m3u8"
location /low {
	# root /var/www/hls;
	alias /var/www/hls/low;
	expires -1;
	autoindex on;
	autoindex_localtime on;
	# CORS setup #
		set $sent_http_accept_ranges bytes;
		add_header Cache-Control no-cache;
		add_header 'Access-Control-Allow-Origin' '*' always;
		add_header 'Access-Control-Expose-Headers' 'Content-Length';
	# allow CORS preflight requests #
		if ($request_method = 'OPTIONS') {
		add_header 'Access-Control-Allow-Origin' '*';
		add_header 'Access-Control-Max-Age' 1728000;
		add_header 'Content-Type' 'text/plain charset=UTF-8';
		add_header 'Content-Length' 0;
		return 204;
		}
	types {
		application/vnd.apple.mpegurl m3u8;
		application/dash+xml mpd;
		video/mp2t ts;
		video/mp4 mp4;
		}
	}

location /recordings {
	alias /var/www/recordings/;
	# root /var/www/recordings;
	autoindex on;
	autoindex_localtime on;
	# CORS setup #
		set $sent_http_accept_ranges bytes;
		add_header Cache-Control no-cache;
		add_header 'Access-Control-Allow-Origin' '*' always;
		add_header 'Access-Control-Expose-Headers' 'Content-Length';
	# allow CORS preflight requests #
		if ($request_method = 'OPTIONS') {
		add_header 'Access-Control-Allow-Origin' '*';
		add_header 'Access-Control-Max-Age' 1728000;
		add_header 'Content-Type' 'text/plain charset=UTF-8';
		add_header 'Content-Length' 0;
		return 204;
		}
	types {
		application/vnd.apple.mpegurl m3u8;
		application/dash+xml mpd;
		video/mp2t ts;
		video/mp4 mp4;
		}
	}
}
```