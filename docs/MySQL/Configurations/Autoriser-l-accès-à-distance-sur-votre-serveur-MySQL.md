---
slug: Autoriser-l-accès-à-distance-sur-votre-serveur-MySQL
---

Autoriser l'accès à distance sur votre serveur MySQL
====================================================

<https://wiki.gandi.net/fr/hosting/using-linux/tutorials/ubuntu/remote-mysql>

## Accorder des droits à un nom d'utilisateur

    $ grant all privileges on *.* to shen@192.168.110.109 identified by "my_password";
    
    $ flush privileges;

* 192.168.110.109 est l'adresse IP de votre machine

OU 
    
    $ mysql -u root -p

    $ mysql> GRANT ALL ON fooDatabase.* TO fooUser@'1.2.3.4' IDENTIFIED BY 'my_password';

    $ GRANT ALL ON iprad.* TO shen@'172.18.0.3' IDENTIFIED BY 'my_password';

## éditer my.cnf

    $ nano /etc/mysql/my.cnf

    /* # bind-address = 127.0.0.1 */

## redémarrer le serveur MySQL

    $ /etc/init.d/mysql reload
    
attension il faul tuer un process /usr/bin/mysqld qui n'est été arreté, si vous tapez ps -aux | grep 'mysql', vous le trouveras. 
