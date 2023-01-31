Redis with symfony2
===

##install

    sudo apt-get -y install redis-server

##Redis-cli

php

    $redis = $this->container->get('snc_redis.default');    
    $specialites = $redis->get('keywords:specialite');
    $redis->set('keywords:specialite',serialize($array_specialites));

    > redis-cli
        > monitor
        > 
        > get keywords:specialite

If you run into problems with caching, the Redis cache can be purged by using the flushall command from the Redis command line:

    > redis-cli
        > flushall

##What is redis ?

Remote DIctionary Server

Created in 2009

Advanced in-memory key-value data-structure server

##PHP clients

Predis vs phpredis

##symfony2

installing 

    composer require snc/redis-bundle 1.1.*

    composer require predis/predis 1.0.*

OU 

```app/autoload.php

    // allow autoload for predis 
    require __DIR__.'/../vendor/predis/predis/src/Autoloader.php';

    Predis\Autoloader::register();
```

```/app/AppKernel.php
    new Snc\RedisBundle\SncRedisBundle(), 
```

```app/config/config.yml

    # Redis
    snc_redis:
        clients:
            default:
                type: predis
                alias: default
                dsn: redis://localhost
        session:
            client: default
            prefix: session
            ttl: 3600
        doctrine:
            metadata_cache:
                client: default
                entity_manager: default
                document_manager: default
            result_cache:
                client: default
                entity_manager: [default, read]
                document_manager: [default]
                namespace: "dcrc:"
            query_cache:
                client: default
                entity_manager: default  
```

You can now use Redis as a Symfony2 service!

Controller

```
    $redis = $this->get('snc_redis.default');
    $redis->set('foo', 'bar');
    $top20 = $redis->zrevrange('leaderboard', 0, 20, 'WITHSCORES');
    $canSet = $redis->set('exclusive:onehour', 1 'NX', 'EX', 3600);     
```


<http://labs.octivi.com/handling-1-billion-requests-a-week-with-symfony2/>


Redis metrics:

More than 160.000.000 keys (98% of them are persistent storage!)
89% Hit ratio – that means, that only 11% of transactions goes to the MySQL servers
