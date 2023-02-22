Installing nginx 
===

##Installing 

```sh
	sudo agt-get -y install nginx 
	sudo service nginx start 
```

##Nginx as a Proxy Server for NodeJS

``/nginx/sites-enabled/default
	upstream nodeapp {
		server 127.0.0.1:3000;
	}
		
	map $http_upgrade $connection_upgrade {
		default upgrade;
		'' close;
	}
		
	server {
		listen 80;
		listen 8080;
		location / {
			proxy_pass http://nodeapp;
			proxy_http_version 1.1; 
			proxy_set_header Upgrade $http_upgrade;
		}
	}