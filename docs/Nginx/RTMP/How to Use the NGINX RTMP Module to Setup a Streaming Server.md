How to Use the NGINX RTMP Module to Setup a Streaming Server (Native installation)
===

example 1: https://www.servermania.com/kb/articles/nginx-rtmp/ (November 23, 2019)

example 2: https://www.nginx.com/blog/video-streaming-for-remote-learning-with-nginx/ (April 16, 2020
)

## What is Nginx RTMP?

*Nginx RTMP* is an Nginx module which allows you to add *RTMP* and *HLS* streaming to your media server.

Previously, the *RTMP* and *HLS* modules were seperate Nginx modules, but they can now all be added to Nginx as a single module.

## Installation Instructions

	$ apt-get update
	$ apt-get Upgrade
	$ apt-get install -y git build-essential ffmpeg libpcre3 libpcre3-dev libssl-dev zlib1g-dev
	$ git clone https://github.com/sergey-dryabzhinsky/nginx-rtmp-module.git

example 1:

	$ wget http://nginx.org/download/nginx-1.17.6.tar.gz
	$ tar -xf nginx-1.17.6.tar.gz
	$ cd nginx-1.17.6
	$ ./configure --prefix=/usr/local/nginx --with-http_ssl_module --add-module=../nginx-rtmp-module
	$ make -j 1
	$ make install	
	$ rm /usr/local/nginx/conf/nginx.conf
	$ nano /usr/local/nginx/conf/nginx.conf
	$ /usr/local/nginx/sbin/nginx
	$ ffmpeg -re -i example-vid.mp4 -vcodec libx264 -vprofile baseline -g 30 -acodec aac -strict -2 -f flv rtmp://localhost/show/stream

example 2:

	$ git clone https://github.com/nginx/nginx.git
	$ cd nginx
	$ ./auto/configure --add-module=../nginx-rtmp-module
	$ make
	$ sudo make install
	$ nano nginx.conf
	$ sudo cp ~/nginx.conf /usr/local/nginx/conf
	$ sudo /usr/local/nginx/sbin/nginx -t 
	$ sudo /usr/local/nginx/sbin/nginx 
	$ ffmpeg -re -i <your mp4>.mp4 -vcodec copy -loop -1 -c:a aac -b:a 160k -ar 44100 -strict -2 -f flv rtmp://192.168.1.138/live/<app name>

example 1:

```
worker_processes  auto;
events {
	worker_connections  1024;
}

# RTMP configuration
rtmp {
	server {
		listen 1935; # Listen on standard RTMP port
		chunk_size 4000;

		application show {
			live on;
			# Turn on HLS
			hls on;
			hls_path /mnt/hls/;
			hls_fragment 3;
			hls_playlist_length 60;
			# disable consuming the stream from nginx as rtmp
			deny play all;
		}
	}
}

http {
	sendfile off;
	tcp_nopush on;
	directio 512;
	default_type application/octet-stream;

	server {
		listen 8080;

		location / {
			# Disable cache
			add_header 'Cache-Control' 'no-cache';

			# CORS setup
			add_header 'Access-Control-Allow-Origin' '*' always;
			add_header 'Access-Control-Expose-Headers' 'Content-Length';

			# allow CORS preflight requests
			if ($request_method = 'OPTIONS') {
				add_header 'Access-Control-Allow-Origin' '*';
				add_header 'Access-Control-Max-Age' 1728000;
				add_header 'Content-Type' 'text/plain charset=UTF-8';
				add_header 'Content-Length' 0;
				return 204;
			}

			types {
				application/dash+xml mpd;
				application/vnd.apple.mpegurl m3u8;
				video/mp2t ts;
			}

			root /mnt/;
		}
	}
}
```

example 2:

```
user www-data;
worker_processes  auto;
pid /run/nginx.pid;

events {
	worker_connections  1024;
	# multi_accept on;
}

# RTMP configuration
rtmp {
	server {
		listen 1935; # Listen on standard RTMP port

		application live {
			live on;
			interleave on;
			# Turn on HLS
			hls on;
			hls_path /tmp/hls/;
			hls_fragment 15s;
			dash on;
			dash_path /tmp/dash/;
			dash_fragment 15s;
			# pull rtmp://tv2.example.com:443/root/new name=tv2 static;
		}
	}
}

http {
	default_type application/octet-stream;

	server {
		listen 80;

		location / {
			root /tmp;
		}

		types {			
			application/vnd.apple.mpegurl m3u8;
			video/mp2t ts;
			text/html html;
			application/dash+xml mpd;
		}
	}
}
```

	RTMP – rtmp://NGINX_server/live/bbb
	HLS – http://NGINX_server/hls/bbb.m3u8
	DASH – http://NGINX_server/dash/bbb.mpd