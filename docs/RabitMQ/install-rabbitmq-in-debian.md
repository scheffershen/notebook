---
titlr: Install rabbitmq in debian
slug: install-rabbitmq-in-debian
---

Install rabbitmq in debian
===

https://www.rabbitmq.com/install-debian.html

### Using rabbitmq.com APT Repository

To avoid warnings about unsigned packages, add our public key to your trusted key list using apt-key(8):

    $ wget -O- https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | sudo apt-key add -

Execute the following command to add the APT repository to your /etc/apt/sources.list.d:

    $ echo 'deb http://www.rabbitmq.com/debian/ testing main' | sudo tee /etc/apt/sources.list.d/rabbitmq.list

Run the following command to update the package list:

    $ sudo apt-get update

Install rabbitmq-server package:

    $ sudo apt-get install rabbitmq-server

Then run the following command to start Elasticsearch on boot up:

    $ sudo update-rc.d rabbitmq-server defaults 95 10    

install rabbitmq_management plugin:

    $ rabbitmq-plugins enable --offline rabbitmq_management

add admin account:

    $ rabbitmqctl add_user admin admin_2017!
    $ rabbitmqctl set_user_tags admin administrator
    $ rabbitmqctl set_permissions -p / admin .\* .\* .\*
    $ rabbitmqctl stop
    $ service rabbitmq-server start

Go to the browser:

    http://192.168.33.23:15672    