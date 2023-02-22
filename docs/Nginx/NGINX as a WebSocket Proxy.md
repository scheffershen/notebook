NGINX as a WebSocket Proxy
===

Rick Nelson  
May 16, 2014

https://www.nginx.com/blog/websocket-nginx/

The WebSocket protocol provides a way of creating web applications that support real-time bi-directional communication between clients and servers.

Part of HTML5, WebSocket makes it much easier to develop these types of applications than the methods previously available. 

Most modern browsers support WebSocket including Firefox, Internet Explorer, Chrome, Safari, and Opera, and more and more server application frameworks are now supporting WebSocket as well.

For enterprise production use, where multiple WebSocket servers are needed for performance and high availability, 

a load balancing layer that understands the WebSocket protocol is required,

 NGINX has supported WebSocket since NGINX 1.3 and can act as a reverse proxy and do load balancing of WebSocket applications.

The WebSocket protocol is different from the HTTP protocol, but the WebSocket handshake is compatible with HTTP, using the HTTP Upgrade facility to upgrade the connection from HTTP to WebSocket. 

This allows WebSocket applications to more easily fit into existing infrastructures. For example, WebSocket applications can use the standard HTTP ports 80 and 443, thus allowing the use of existing firewall rules.

A WebSocket application keeps a long-running connection open between the client and the server, facilitating the development of real-time applications. 

The HTTP Upgrade mechanism used to upgrade the connection from HTTP to WebSocket uses the **Upgrade** and **Connection** headers.

There are some challenges that a reverse proxy server faces in supporting WebSocket. 

One is that WebSocket is a hop-by-hop protocol, so when a proxy server intercepts an **Upgrade** request from a client it needs to send its own **Upgrade** request to the backend server, including the appropriate headers. 

Also, since WebSocket connections are long lived, as opposed to the typical short-lived connections used by HTTP, the reverse proxy needs to allow these connections to remain open, rather than closing them because they seem to be idle.

NGINX supports WebSocket by allowing a tunnel to be set up between a client and a backend server.

For NGINX to send the Upgrade request from the client to the backend server, the Upgrade and Connection headers must be set explicitly, as in this example:

```
    location /wsapp/ {
        proxy_pass http://wsbackend;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        #1 day
        proxy_read_timeout 86400s;
        proxy_send_timeout 86400s;

    }
```

```
    http {
        map $http_upgrade $connection_upgrade {
            default upgrade;
            '' close;
        }

        upstream websocket {
            server 127.0.0.1:8080;
        }

        server {
            listen 8020;

            # SSL
            ssl on;
            ssl_certificate /etc/nginx/ssl/nginx.crt;
            ssl_certificate_key /etc/nginx/ssl/nginx.key;
            
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
    }    
```


Once this is done, NGINX deals with this as a WebSocket connection.

