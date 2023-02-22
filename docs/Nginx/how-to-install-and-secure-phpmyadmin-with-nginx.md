how-to-install-and-secure-phpmyadmin-with-nginx-on-an-ubuntu-14-04-server
===

https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-phpmyadmin-with-nginx-on-an-ubuntu-14-04-server

Posted Aug 6, 2014

##Step One — Install phpMyAdmin

    sudo apt-get update
    sudo apt-get install phpmyadmin

```etc/nginx/site-available/default

    location /phpmyadmin {
           root /usr/share/;
           index index.php index.html index.htm;
           location ~ ^/phpmyadmin/(.+\.php)$ {
                   try_files $uri =404;
                   root /usr/share/;
                   fastcgi_pass 127.0.0.1:9000; # unix:/var/run/php5-fpm.sock; # or 127.0.0.1:9000
                   fastcgi_index index.php;
                   #fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
                   include fastcgi_params;
           }
           location ~* ^/phpmyadmin/(.+\.(jpg|jpeg|gif|css|png|js|ico|html|xml|txt))$ {
                   root /usr/share/;
           }
    }
    location /phpMyAdmin {
           rewrite ^/* /phpmyadmin last;
    }

```

A final item that we need to address is enabling the mcrypt PHP module, which phpMyAdmin relies on. This was installed with phpMyAdmin so we just need to toggle it on and restart our PHP processor:

    sudo php5enmod mcrypt
    sudo service php5-fpm restart

##Setting up a Web Server Authentication Gate

To create an encrypted password, type:

    openssl passwd

You will be prompted to enter and confirm the password that you wish to use. The utility will then display an encrypted version of the password that will look something like this:

    jZZF8iY7DJrVE

Copy this value, as you will need to paste it into the authentication file we will be creating.

Now, create an authentication file. We will call this file pma_pass and place it in the Nginx configuration directory:

    sudo nano /etc/nginx/pma_pass

Within this file, you simply need to specify the username you would like to use, followed by a colon (:), followed by the encrypted version of your password you received from the openssl passwd utility.

        adminum:jZZF8iY7DJrVE (=Rcn1aPXb)

Now, we are ready to modify our Nginx configuration file. Open this file in your text editor to get started:
    
    sudo nano /etc/nginx/sites-available/default

After we are finished, the file should look like this:

    server {
        . . .

        location / {
            try_files $uri $uri/ =404;
        }

        location /nothingtosee {
            auth_basic "Admin Login";
            auth_basic_user_file /etc/nginx/pma_pass;
        }

        . . .
    }

and test your nginx  confiure file

##php5-cgi ou php5-fpm

    nginx -t

    # Install PHP
    # -qq implies -y --force-yes
    sudo apt-get install -qq php5-cli php5-fpm php5-mysql php5-pgsql php5-sqlite php5-curl php5-gd php5-gmp php5-mcrypt php5-memcached php5-imagick php5-intl php5-xdebug

# Set PHP FPM to listen on TCP instead of Socket
sudo sed -i "s/listen =.*/listen = 127.0.0.1:9000/" /etc/php5/fpm/pool.d/www.conf

# Set PHP FPM allowed clients IP address
sudo sed -i "s/;listen.allowed_clients/listen.allowed_clients/" /etc/php5/fpm/pool.d/www.conf    

**activer php-apc extension**

  apt-get install php-apc

  nano /etc/php5/mods-available/apcu.ini
  
    extension=apc.so

    apc.enabled=1
    apc.shm_size=128M
    apc.ttl=3600
    apc.user_ttl=7200
    apc.gc_ttl=3600
    apc.max_file_size=1M

  service php5-fpm restart
