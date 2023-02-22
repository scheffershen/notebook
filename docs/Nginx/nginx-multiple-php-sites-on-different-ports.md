nginx-multiple-php-sites-on-different-ports-on-1-server
===

http://stackoverflow.com/questions/36586326/nginx-multiple-php-sites-on-different-ports-on-1-server

    server {
        listen       80;
        server_name  example.org  www.example.org;
        ...
    }

    server {
        listen       81;
        server_name  *.example.org;
        ...
    }

    server {
        listen       82;
        server_name  mail.*;
        ...
    }

    server {
        listen       83;
        server_name  ~^(?<user>.+)\.example\.net$;
        ...
    }