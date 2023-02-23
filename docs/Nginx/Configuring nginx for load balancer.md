Configuring NGINX for load balancer
===================================

[link](https://docs.wso2.com/display/CLUSTER44x/Configuring+NGINX)

Use the following steps to configure NGINX Plus version 1.7.11 or NGINX community version 1.9.2 as the load balancer for WSO2 products.

1. Install NGINX Plus or Nginx community version in a server configured in your cluster.
2. Configure Nginx to direct the HTTP requests to the two worker nodes (`xxx.xxx.xxx.xx3`, `xxx.xxx.xxx.xx4`) via the HTTP 80 port using the `http://as.wso2.com/<service>`. To do this, create a VHost file (as.http.conf) in the `/etc/nginx/conf.d` directory and add the following configurations into it.

/etc/nginx/conf.d/http.conf

```conf
upstream wso2.as.com {
        server xxx.xxx.xxx.xx3:9763;
        server xxx.xxx.xxx.xx4:9763;
}
 
server {
        listen 80;
        server_name as.wso2.com;
        location / {
               proxy_set_header X-Forwarded-Host $host;
               proxy_set_header X-Forwarded-Server $host;
               proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
               proxy_set_header Host $http_host;
               proxy_read_timeout 5m;
               proxy_send_timeout 5m;
               proxy_pass http://wso2.as.com;
 
               proxy_http_version 1.1;
               proxy_set_header Upgrade $http_upgrade;
               proxy_set_header Connection "upgrade";
        }
}
```

3. Configure NGINX Plus or Nginx community version to direct the HTTPS requests to the two worker nodes (xxx.xxx.xxx.xx3, xxx.xxx.xxx.xx4) via the HTTPS 443 port using `https://as.wso2.com/<service>`. To do this, create a VHost file (as.https.conf) in the `/etc/nginx/conf.d` directory and add the following configurations into it.

/etc/nginx/conf.d/https.conf

```conf
upstream ssl.wso2.as.com {
    server xxx.xxx.xxx.xx3:9443;
    server xxx.xxx.xxx.xx4:9443;
    ip_hash;
}
  
server {
listen 443;
    server_name as.wso2.com;
    ssl on;
    ssl_certificate /etc/nginx/ssl/wrk.crt;
    ssl_certificate_key /etc/nginx/ssl/wrk.key;
    location / {
               proxy_set_header X-Forwarded-Host $host;
               proxy_set_header X-Forwarded-Server $host;
               proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
               proxy_set_header Host $http_host;
               proxy_read_timeout 5m;
               proxy_send_timeout 5m;
               proxy_pass https://ssl.wso2.as.com;
  
               proxy_http_version 1.1;
               proxy_set_header Upgrade $http_upgrade;
               proxy_set_header Connection "upgrade";
        }

```

## Create SSL certificates

Create SSL certificates for both the manager and worker nodes using the instructions that follow.

1. Create the Server Key.

    $ sudo openssl genrsa -des3 -out server.key 1024

2. Certificate Signing Request.

    $ sudo openssl req -new -key server.key -out server.csr

3. Remove the password.

    $sudo cp server.key server.key.org
    $sudo openssl rsa -in server.key.org -out server.key

4. Sign your SSL Certificate.
    
    $sudo openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt