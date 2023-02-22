default symfony
===============


```
server {
    listen             8080;
    server_name        sf2testproject.dev;
 
    root /home/maurits/public_html/web;
 
    location / {
        # try to serve file directly, fallback to rewrite
        try_files $uri @rewriteapp;
    }
 
    location @rewriteapp {
        # rewrite all to app.php
        rewrite ^(.*)$ /app.php/$1 last;
    }
 
    location ~ ^/(app|app_dev|config)\.php(/|$) {
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_split_path_info ^(.+\.php)(/.*)$;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTPS off;
    }
}
```