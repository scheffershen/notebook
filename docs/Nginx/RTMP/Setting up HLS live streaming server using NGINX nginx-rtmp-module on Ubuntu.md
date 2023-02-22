Setting up HLS live streaming server using NGINX + nginx-rtmp-module on Ubuntu (TRY THIS, WITHOUT DOCKER, DOCS OFFICIEL)
====

https://www.youtube.com/watch?v=Y-9kVF6bWr4&t=2s
https://docs.peer5.com/guides/setting-up-hls-live-streaming-server-using-nginx/
https://github.com/sergey-dryabzhinsky/nginx-rtmp-module

This guide will explain how to setup your own streaming server on ubuntu.

## 1. Compile nginx with rtmp module

	$ git clone https://github.com/sergey-dryabzhinsky/nginx-rtmp-module.git
	$ sudo apt-get install build-essential libpcre3 libpcre3-dev libssl-dev
    $ sudo apt-get install zlib1g zlib1g-dev
	$ wget http://nginx.org/download/nginx-1.18.0.tar.gz
	$ tar -xf nginx-1.18.0.tar.gz
	$ cd nginx-1.18.0
	$ ./configure --prefix=/etc/nginx --sbin-path=/usr/sbin/nginx --conf-path=/etc/nginx/nginx.conf --error-log-path=/var/log/nginx/error.log --http-log-path=/var/log/nginx/access.log --pid-path=/var/run/nginx.pid --lock-path=/var/run/nginx.lock --http-client-body-temp-path=/var/cache/nginx/client_temp --http-proxy-temp-path=/var/cache/nginx/proxy_temp --http-fastcgi-temp-path=/var/cache/nginx/fastcgi_temp --http-uwsgi-temp-path=/var/cache/nginx/uwsgi_temp --http-scgi-temp-path=/var/cache/nginx/scgi_temp --user=nginx --group=nginx --with-http_ssl_module --add-module=../nginx-rtmp-module
	$ make -j 1  #with the amount of cpu's on your computer 
	$ sudo make install

## 2. Create nginx configuration file

an rtmp endpoint Basic uri syntax: 

	rtmp://nginx_host[:nginx_port]/<app_name>/<stream_name>
	rtmp://localhost/show/stream == http://localhost:8080/hls/stream.m3u8

For good HLS experience we recommend using 3 seconds fragments with 60 seconds playlist. Note that the example points */mnt/hls/* as the target path for the hls playlist and video files. You can change this to a different directory but make sure that *nginx* have *write permissions*.

rtmp module config

```conf
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
```

http server config

```conf
server {
    listen 8080;

    location /hls {
        # Disable cache
        add_header Cache-Control no-cache;

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
            application/vnd.apple.mpegurl m3u8;
            video/mp2t ts;
        }

        root /mnt/;
    }
}
```

Since *HLS* consists of static files, a simple http server can be set up with two additions, correct *MIME types* and *CORS headers*.

the complete nginx.conf

/usr/local/nginx/conf/nginx.conf or /etc/nginx/nginx.conf

```conf
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

server {
    listen 8080;

    location /hls {
        # Disable cache
        add_header Cache-Control no-cache;

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
            application/vnd.apple.mpegurl m3u8;
            video/mp2t ts;
        }

        root /mnt/;
    }
}
```

## 3. Start nginx

    $ /usr/local/nginx/sbin/nginx -t
    $ /usr/local/nginx/sbin/nginx
    $ /usr/local/nginx/sbin/nginx -g 'daemon off;'
    $ /usr/local/nginx/sbin/nginx -t && nginx -s reload
    $ /usr/local/nginx/sbin/nginx -s stop
    $ sudo add-apt-repository ppa:mc3man/trusty-media
    $ sudo apt-get update
    $ sudo apt-get install ffmpeg

## 4. Pushing live stream to nginx using rtmp

option 1: 

nginx accepts rtmp stream as input

HLS stream
    video codec: x264
    audio codec: aac/mp3/ac3

if you have an existing rtmp stream in the correct codec, you can skip *ffmpeg* and tell nginx to pull the stream directly

```
application show {
    live on;
    pull rtmp://example.com:4567/sports/channel3 live=1;
    # to change the local stream name use this syntax: ... live=1 name=ch3; 

    # other directives...
    # hls_...
}
```

option 2: 

To achieve the stream encoding and muxing, Update localhost to your nginx server ip/domain

    $ ffmpeg -re -f video4linux2 -i /dev/video0 -vcodec libx264 -vprofile baseline -acodec aac -strict -2 -f flv rtmp://localhost/show/stream

-re - consume stream on media's native bitrate (and not as fast as possible)
-f - use video4linux2 plugin  
-i - select physical device to capture from
-vcodec - specify video codec to output
-vprofile - use x264 baseline profile
-acodec - use aac audio codec
-strict - allow using the experimental aac codec
-f - specify format to output
*rtmp://localhost/show/stream* - rtmp endpoint to stream to. if the target port is not 1935 is should be included in the uri. The last path component is the *stream name* - that means that multiple channels can be pushed using different names

option 3: 

Stream file example-vid.mp4

     $ ffmpeg -re -i example-vid.mp4 -vcodec libx264 -vprofile baseline -g 30 -acodec aac -strict -2 -f flv rtmp://localhost/show/stream

option 4:

Stream another rtmp stream

     $ ffmpeg -i rtmp://example.com/appname/streamname -vcodec libx264 -vprofile baseline -acodec aac -strict -2 -f flv rtmp://localhost/show/stream

Now that we are pushing our stream into nginx

    http://localhost:8080/hls/stream.m3u8