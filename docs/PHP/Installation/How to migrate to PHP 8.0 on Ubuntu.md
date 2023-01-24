---
slug: How-to-migrate-to-PHP-8.0-on-Ubuntu
title: How to migrate to PHP 8.0 on Ubuntu
---

How to migrate to PHP 8.0 on Ubuntu
===================================

https://websiteforstudents.com/how-to-migrate-to-php-8-0-on-ubuntu/

    $ dpkg --get-selections | grep -i php
    $ sudo apt-get install software-properties-common
    $ sudo add-apt-repository ppa:ondrej/php
    $ sudo apt update
    $ sudo apt install php8.0-bcmath php8.0-bz2 php8.0-cli php8.0-fpm php8.0-common php8.0-curl php8.0-dev php8.0-gd php8.0-imagick php8.0-imap php8.0-intl php8.0-mbstring php8.0-mysql php8.0-opcache php8.0-readline php8.0-soap php8.0-xml php8.0-xmlrpc php8.0-zip
    $ sudo a2enmod proxy_fcgi setenvif
    $ sudo a2enconf php8.0-fpm
    $ sudo systemctl restart php8.0-fpm.service
    $ sudo apt update
    $ sudo apt install php8.0 libapache2-mod-php8.0
    $ sudo a2dismod php7.4
    $ sudo a2enmod php8.0
    $ sudo systemctl restart apache2.service

## How to Install Apache2, PHP 8, MariaDB (MySQL) and phpMyAdmin on Linux

https://www.bennetrichter.de/en/tutorials/apache2-php8-mariadb-phpmyadmin/    

    $ cd /usr/share
    $ wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O phpmyadmin.zip
    $ unzip phpmyadmin.zip
    $ rm phpmyadmin.zip
    $ mv phpMyAdmin-*-all-languages phpmyadmin
    $ chmod -R 0755 phpmyadmin
    $ nano /etc/apache2/conf-available/phpmyadmin.conf

```
# phpMyAdmin Apache configuration

Alias /phpmyadmin /usr/share/phpmyadmin

<Directory /usr/share/phpmyadmin>
    Options SymLinksIfOwnerMatch
    DirectoryIndex index.php
</Directory>

# Disallow web access to directories that don't need it
<Directory /usr/share/phpmyadmin/templates>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/libraries>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/setup/lib>
    Require all denied
</Directory>
```

    $ a2enconf phpmyadmin
    $ systemctl reload apache2
    $ mkdir /usr/share/phpmyadmin/tmp/
    $ chown -R www-data:www-data /usr/share/phpmyadmin/tmp/

## Erreur phpMyAdmin - Le fichier de configuration a maintenant besoin d'une phrase secrète secrète

https://qastack.fr/server/615550/phpmyadmin-error-the-configuration-file-now-needs-a-secret-passphrase

    $ cp config.sample.inc.php config.inc.php
    $ nano /etc/webapps/phpmyadmin/config.inc.php

    $cfg['blowfish_secret'] = 'qtdRoGmbc9{8IZr323xYcSN]0s)r$9b_JUnb{~Xz';

