Increase file upload size limit in PHP-Nginx
===

https://easyengine.io/tutorials/php/increase-file-upload-size-limit/

##Changes in php.ini

Edit…

    vim /etc/php5/fpm/php.ini

Set…

    upload_max_filesize = 100M
    post_max_size = 100M

##Change in Nginx config

http {
    #...
        client_max_body_size 100m;
    #...
}

##Reload PHP-FPM & Nginx

    service php5-fpm reload
    service nginx reload