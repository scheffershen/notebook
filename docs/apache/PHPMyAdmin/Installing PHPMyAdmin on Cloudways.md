Installing PHPMyAdmin on Cloudways
===

https://www.cloudways.com/blog/installation-phpmyadmin/

June 11, 2019

## Installing PHPMyAdmin on Debian

    $ apt-get install mcrypt
    $ service apache2 restart
    $ apt-get install phpmyadmin
    $ cd /var/www/public_html
    $ ln -s /usr/share/phpmyadmin

/usr/share/phpmyadmin/.htaccess    

    order allow,deny
    allow from <your server ip>

## Install PHPMyAdmin on Cloudways

launch a new PHP stack application.

### Step 1: Launch SSH Terminal

    $ cd applications/<folder name>/public_html

### Step 2: Downloading And Installing PHPMyAdmin

    $ wget https://files.phpmyadmin.net/phpMyAdmin/4.6.3/phpMyAdmin-4.6.3-english.zip
    $ unzip phpMyAdmin-4.6.3-english.zip
    $ rm phpMyAdmin-4.6.3-english.zip
    $ mv phpMyAdmin-4.6.3-english phpmyadmin
    