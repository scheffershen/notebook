---
sidebar_position: 1
slug: How-To-Upgrade-to-PHP-7-on-Ubuntu-14.04
title: How To Upgrade to PHP 7 on Ubuntu 14.04
---

How To Upgrade to PHP 7 on Ubuntu 14.04
=======================================

https://www.digitalocean.com/community/tutorials/how-to-upgrade-to-php-7-on-ubuntu-14-04

## Introduction

PHP 7, which was released on December 3, 2015, promises substantial speed improvements over previous versions of the language, along with new features like scalar type hinting. This guide explains how to quickly upgrade an Apache or Nginx web server running PHP 5.x (any release) to PHP 7.

## Prerequisites

This guide assumes that you are running PHP 5.x on an Ubuntu 14.04 machine, using either mod_php in conjunction with Apache, or PHP-FPM in conjunction with Nginx. 

## Adding a PPA for PHP 7.0 Packages

offers a PPA for PHP 7.0 on Ubuntu

    $ sudo add-apt-repository ppa:ondrej/php

Once the PPA is installed, update the local package cache to include its contents:

    $ sudo apt-get update

## upgrading PHP-FPM with Nginx

First, install the new PHP-FPM package and its dependencies:

    $ sudo apt-get install php7.0-fpm

If you are using MySQL, be sure to re-install the PHP MySQL bindings:

    $ sudo apt-get install php7.0-mysql php7.0-mbstring php7.0-zip php7.0-xml

    $ sudo apt-get install php7.0-mcrypt php7.0-curl php7.0-intl

    $ sudo apt-get install php7.0-dev
    $ sudo apt-get install pkg-config
    $ sudo apt-get install libmagickwand-dev
    $ sudo apt-get install imagemagick
    $ sudo apt-get install build-essential

    php7.0-fpm stop/waiting
    php7.0-fpm start/running, process 25987
    NOTICE: Not enabling PHP 7.0 FPM by default.
    NOTICE: To enable PHP 7.0 FPM in Apache2 do:
    NOTICE: a2enmod proxy_fcgi setenvif
    NOTICE: a2enconf php7.0-fpm
    NOTICE: You are seeing this message because you have apache2 package installed.
    php7.0-fpm stop/waiting
    php7.0-fpm start/running, process 26035

```etc/nginx/sites-enable/default
server {
    listen 81 default_server;
    listen [::]:81 default_server ipv6only=on;

    root /var/www/html/medical-on-demand.universalmedica.com/web;
    index index.php index.html index.htm;

    server_name 192.168.33.23;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico)$ {
        expires 7d;
        access_log off;
        add_header Pragma public;
        add_header Cache-Control public;
        add_header Vary Accept-Encoding;
    }

    location ~ \.mp4$ {
            mp4;
            mp4_buffer_size 4M;
            mp4_max_buffer_size 10M;
    }

    error_page 404 /404.html;
    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
        root /usr/share/nginx/html;
    }

    location ~ ^/(app|app_dev)\.php(/|$) {
        try_files $uri =404;
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/var/run/php/php7.0-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }
}
```

Now we can restart nginx:

    $ sudo service nginx restart