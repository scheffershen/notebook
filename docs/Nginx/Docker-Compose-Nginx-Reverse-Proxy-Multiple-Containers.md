Docker-Compose-Nginx-Reverse-Proxy-Multiple-Containers
===

https://www.bogotobogo.com/DevOps/Docker/Docker-Compose-Nginx-Reverse-Proxy-Multiple-Containers.php
https://github.com/Einsteinish/Docker-compose-Nginx-Reverse-Proxy

## reverseproxy

Dockerfile

```
FROM nginx:alpine
 
COPY nginx.conf /etc/nginx/nginx.conf

RUN apk update && apk add bash

```

nginx.conf:

```
worker_processes 1;
 
events { worker_connections 1024; }
 
http {
 
    sendfile on;
 
    upstream docker-nginx {
        server nginx:80;
    }
 
    upstream docker-apache {
        server apache:80;
    }

    server {
        listen 8080;
 
        location / {
            proxy_pass         http://docker-nginx;
            proxy_redirect     off;
            proxy_set_header   Host $host;
            proxy_set_header   X-Real-IP $remote_addr;
            proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header   X-Forwarded-Host $server_name;
        }
    }

    server {
        listen 8081;
 
        location / {
            proxy_pass         http://docker-apache;
            proxy_redirect     off;
            proxy_set_header   Host $host;
            proxy_set_header   X-Real-IP $remote_addr;
            proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header   X-Forwarded-Host $server_name;
        }
    }
}
```

## docker-compose

```yaml
services:
    reverseproxy:
        image: reverseproxy
        ports:
            - 8080:8080
            - 8081:8081
        restart: always
 
    nginx:
        depends_on:
            - reverseproxy
        image: nginx:alpine
        restart: always
 
    apache:
        depends_on:
            - reverseproxy
        image: httpd:alpine
        restart: always
```