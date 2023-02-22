how-to-configure-ssl-for-a-subdomain-on-nginx
===

https://serverfault.com/questions/729408/how-to-configure-ssl-for-a-subdomain-on-nginx

## a.website.com

```
server {
    listen 80;
    server_name a.website.com;
    return 301 https://a.website.com$request_uri;
} 
server {
        listen 443 ssl;
        server_name a.website.com;
        client_max_body_size 5m;
        add_header X-UA-Compatible    "IE=Edge,chrome=1";

        access_log /var/log/nginx/a.website_access.log;
        error_log /var/log/nginx/a.website_error.log;  

        ssl_certificate /srv/ssl/a.website/ssl.crt;
        ssl_certificate_key /srv/ssl/a.website/ssl.key;

        error_page 500 502 503 504 /500.html;
        location /500.html {
                root  /srv/static/website/maintenance;
        }

        location / {
                #auth_basic            "Restricted";
                #auth_basic_user_file  /etc/nginx/htpasswd.conf;
                include uwsgi_params;
                uwsgi_connect_timeout 30;
                uwsgi_read_timeout 30;
                uwsgi_pass 127.0.0.4:3031;
        }
}
```

## b.website.com

```
server {
        listen 80;
        server_name b.website.com;
        return 301 https://b.website.com$request_uri;
}  

server {
        listen 443 ssl;
        server_name b.website.com;
        client_max_body_size 5m;
        add_header X-UA-Compatible    "IE=Edge,chrome=1";

        access_log /var/log/nginx/b.website.com_access.log;
        error_log /var/log/nginx/b.website.com_error.log;  

        ssl_certificate /srv/ssl/b.website.com/ssl.crt;
        ssl_certificate_key /srv/ssl/b.website.com/ssl.key;

        error_page 500 502 503 504 /500.html;
        location /500.html {
                root  /srv/static/website/maintenance;
        }

        location / {
                #auth_basic            "Restricted";
                #auth_basic_user_file  /etc/nginx/htpasswd.conf;
                include uwsgi_params;
                uwsgi_connect_timeout 30;
                uwsgi_read_timeout 30;
                uwsgi_pass 127.0.0.4:3031;
        }
}
```