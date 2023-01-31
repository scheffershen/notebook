---
title: Implémenter RabbitMQ dans une API Symfony 2
slug: implementer-rabbitmq-dans-une-api-symfony-2
---

Implémenter RabbitMQ dans une API Symfony 2
===

- http://blog.vincent-chalamon.fr/implementer-rabbitmq-dans-une-api-symfony-2/
- https://github.com/vincentchalamon/poc-rabbitmq
- http://afsy.fr/avent/2013/21-rabbitmq-et-Symfony2-traitements-asynchrones
- https://blog.vandenbrand.org/2015/01/09/symfony2-and-rabbitmq-lessons-learned/
- http://www.slideshare.net/old_sound/theres-a-rabbit-on-my-symfony
- https://github.com/php-amqplib/RabbitMqBundle

### Recap

- Add an entry for the consumer/producer in the configuration.
- Implement your callback.
- Start the consumer from the CLI.
- Add the code to publish messages inside the controller.

### Installation

    $ docker run -d -P rabbitmq:3-management  

### Lancement/arrêt du service

    $ rabbitmq-server 

    $ rabbitmqctl stop

### Interface de gestion

    http://localhost:32769.
    
    login: guest
    pwd: guest

### Usage Scenarios

- Batch Processing
- Image Uploading
- Distributed Logging


### Exchange vs Queue

### Cas concrêt : une API Symfony 2

Commençons par installer les dépendances dans chaque projet :

https://packagist.org/packages/php-amqplib/rabbitmq-bundle

Integrates php-amqplib with Symfony2|3 and RabbitMq. Formerly oldsound/rabbitmq-bundle.

    $ composer require php-amqplib/rabbitmq-bundle 

Puis, déclarez ce bundle dans le fichier `app/AppKernel.php` :

```php
    public function registerBundles()  
    {
        $bundles = array(
            ...
            new OldSound\RabbitMqBundle\OldSoundRabbitMqBundle(),
        );
    }
```

Dans votre fichier `app/config/config.yml`, déclarez la configuration suivante :

```yaml
    old_sound_rabbit_mq:  
        connections:
            default:
                host:     localhost
                port:     5672
                user:     guest
                password: guest
                vhost:    /
                lazy:     false
```

Puis, éditez le fichier `app/config/config.yml` pour y ajouter la configuration suivante, déclarant notre Producer :

```yaml
    old_sound_rabbit_mq:  
        producers:
            foo:
                connection: default
                exchange_options:
                    name: 'foo_exchange'
                    type: topic
```

Une fois cette configuration mise à jour, vous disposerez d'un service déclaré selon la structure old_sound_rabbit_mq.&lt;name&gt;_producer. Dans notre exemple, cela donnera old_sound_rabbit_mq.foo_producer.

Récupérez ce service où vous le souhaitez, puis publiez le message comme suit :

```php
    $producer->publish(serialize($object));
```

Parlons-en de sa dulcinée justement, celle-ci doit récupérer ce message et le lire. Dans l'interface d'administration de RabbitMQ, créez une queue et lier-la à l'exchange précédemment créé :

Puis, éditez le fichier `app/config/config.yml` pour y déclarer votre Consumer comme suit :

```yaml
    old_sound_rabbit_mq:  
        consumers:
            bar:
                connection: default
                exchange_options:
                    name: 'foo_exchange'
                    type: topic
                queue_options:
                    name: 'foo_queue'
                callback: les_tilleuls_demo.consumer.foo
```

L'option callback fait référence à un service Symfony qu'il nous faut maintenant déclarer. Créez une classe FooConsumer implémentant l'interface `OldSound\RabbitMqBundle\RabbitMq\ConsumerInterface` :

```php
<?php  
namespace LesTilleuls\DemoBundle\Component\AMPQ;

use LesTilleuls\DemoBundle\Entity\Foo;  
use OldSound\RabbitMqBundle\RabbitMq\ConsumerInterface;  
use PhpAmqpLib\Message\AMQPMessage;

class FooConsumer implements ConsumerInterface  
{
    /**
     * {@inheritdoc}
     */
    public function execute(AMQPMessage $msg)
    {
        /** @var Foo $foo */
        $foo = unserialize($msg->body);
        echo 'foo '.$foo->getName()." successfully downloaded!\n";
    }
}  
```              

N'oubliez pas de déclarer votre service dans Symfony !

    $ php app/console rabbitmq:consumer foo 



