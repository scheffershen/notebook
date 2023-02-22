Re-Stream to Twitch, YouTube, etc - Self Hosted RTMP ( LINUX / DOCKER SERVER)
===

https://www.youtube.com/watch?v=EzmA8uksOG4
https://www.youtube.com/results?search_query=nginx-rtmp
https://hub.docker.com/r/tiangolo/nginx-rtmp/

## How to use

	$ docker run -d -p 1935:1935 --name nginx-rtmp tiangolo/nginx-rtmp
	$ docker container ls
	$ docker exec -it <container_id> dash
		# apt-get update
		# apt install nano 
		# nano /etc/nginx/nginx.conf

etc/nginx/nginx.conf

```conf
worker_processes auto;
rtmp_auto_push on;
events {}
rtmp {
    server {
        listen 1935;
        listen [::]:1935 ipv6only=on;

        application live {
            live on;
            record off;
            push rtmp://127.0.0.1/streamout;
        }

        application streamout {
            live on;
            record off;
            #push rtmp://live-ipad.twitch.tv/app/YOUSTREAMKEY;
            #push rtmp://mixerurl/YOUSTREAMKEY;
        }

    }
}
```

	$ docker restart <container_id>
	$ docker update --restart=always <container_id>
	$ docker start <container_id>

OBS 25.0.8 (https://obsproject.com/download)