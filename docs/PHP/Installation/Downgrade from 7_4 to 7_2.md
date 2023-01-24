---
slug: Downgrade-from-7.4-to-7.2
title: Downgrade from 7.4 to 7.2
---

Downgrade from 7.4 to 7.2
=========================

https://stackoverflow.com/questions/59781992/how-can-i-downgrade-or-use-php-7-2-without-uninstalling-php-7-4-is-it-possible


    $ sudo add-apt-repository ppa:ondrej/php
    $ sudo apt-get update
    $ sudo apt-get install php7.2
    $ sudo apt-get install libapache2-mod-php7.2 php7.2-cli php7.2-common php7.2-json php7.2-opcache php7.2-mysql php7.2-mbstring  php7.2-zip php7.2-fpm php7.2-intl php7.2-simplexml
    $ sudo a2dismod php7.4
    $ sudo a2enmod php7.2
    $ sudo service apache2 restart
    $ sudo update-alternatives --set php /usr/bin/php7.2
    $ sudo update-alternatives --set phar /usr/bin/phar7.2
    $ sudo update-alternatives --set phar.phar /usr/bin/phar.phar7.2
    $ sudo update-alternatives --set phpize /usr/bin/phpize7.2
    $ sudo update-alternatives --set php-config /usr/bin/php-config7.2

    $ apt install libapache2-mod-php7.2 php7.2-common php7.2-dev php7.2-mbstring php7.2-xmlrpc php7.2-gd php7.2-xml php7.2-cli php7.2-curl php7.2-zip php7.2-mysql php7.2-mysqli php7.2-json php7.2-opcache php7.2-intl php7.2-simplexml php7.2-mcrypt php7.2-gd php7.2-imagick 

    $ sudo apt-get install -y php7.2 php7.2-mysql php7.2-curl php7.2-json php7.2-gd php7.2-mcrypt php7.2-msgpack php7.2-memcached php7.2-intl php7.2-sqlite3 php7.2-gmp php7.2-geoip php7.2-mbstring php7.2-redis php7.2-xml php7.2-zip php7.2-cli php7.2-cgi php7.2-fpm php7.2-phpdbg php7.2-readline php7.2-xmlrpc php7.2-imap php7.2-odbc php7.2-opcache php7.2-tidy php7.2-bcmath

    $ apt-get install -y php7.1 libapache2-mod-php7.1 php7.1-mysql php7.1-curl php7.1-json php7.1-gd php7.1-mcrypt php7.1-msgpack php7.1-memcache php7.1-memcached php7.1-intl php7.1-sqlite3 php7.1-gmp php7.1-geoip php7.1-mbstring php7.1-redis php7.1-xml php7.1-zip php7.1-cli php7.1-cgi php7.1-fpm php7.1-phpdbg php7.1-readline  php7.1-pdo php7.1-xmlrpc php7.1-imap php7.1-odbc php7.1-opcache php7.1-tidy php7.1-bcmath php-apcu

    $ sudo apt-get install -y php7.2 php7.2-mysql php7.2-curl php7.2-json php7.2-gd php7.2-mcrypt php7.2-msgpack php7.2-memcached php7.2-intl php7.2-sqlite3 php7.2-gmp php7.2-geoip php7.2-mbstring php7.2-redis php7.2-xml php7.2-zip php7.2-cli php7.2-cgi php7.2-fpm php7.2-phpdbg php7.2-readline php7.2-xmlrpc php7.2-imap php7.2-odbc php7.2-opcache php7.2-tidy php7.2-bcmath
    
https://ostechnix.com/how-to-switch-between-multiple-php-versions-in-ubuntu/

How To Switch Between Multiple PHP Versions In Ubuntu
=====================================================

1. Switch Between Multiple PHP Versions

    $ php -v

You can install PHP 5.6 from a PPA:

    $ sudo add-apt-repository -y ppa:ondrej/php
    $ sudo apt update
    $ sudo apt install php5.6

1.1. Switch from PHP 7.x to PHP 5.x

    $ sudo a2dismod php7.2

1.1.2. Next, enable PHP 5.6 module:    

    $ sudo a2enmod php5.6

1.1.3 Set PHP 5.6 as default version using command:

    $ sudo update-alternatives --set php /usr/bin/php5.6

1.1.4. Alternatively, you can run the following command to set which system wide version of PHP you want to use by default.

    $ sudo update-alternatives --config php

1.1.6. If you have installed other PHP extensions, set them as default as well.

    $ sudo update-alternatives --set phar /usr/bin/phar5.6

1.1.7. Finally, restart your Apache web server:

    sudo systemctl restart apache2