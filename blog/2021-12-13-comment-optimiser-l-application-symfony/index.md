---
slug: comment-optimiser-l-application-symfony
title: Comment optimiser l'application symfony
authors: [yshen]
tags: [symfony, php, optimisation]
---

- [1. Activer OpCache extension](#1-activer-opcache-extension)
- [2. Asynchroniser les requêts simultanément](#2-asynchroniser-les-requêts-simultanément)
- [3. Utiliser la fonction générateur pour consommer moins des mémoires](#3-utiliser-la-fonction-générateur-pour-consommer-moins-des-mémoires)
- [3. Eviter d'utiliser "select \* " dans le doctrine requête.](#3-eviter-dutiliser-select---dans-le-doctrine-requête)
- [4. Activer le cache de Doctrine.](#4-activer-le-cache-de-doctrine)
- [5. Mise en cache les HTTP reqêtes](#5-mise-en-cache-les-http-reqêtes)
- [6. Augementer le nombre des cores, la fréquence de cpu, et la RAM](#6-augementer-le-nombre-des-cores-la-fréquence-de-cpu-et-la-ram)
- [7. Augementer la taille du swap](#7-augementer-la-taille-du-swap)
- [8. Utiliser le crontab pour les tâches lourdes](#8-utiliser-le-crontab-pour-les-tâches-lourdes)




### 1. Activer OpCache extension

OpCache. Il compile et optimise les scripts PHP et les met en cache mémoire afin qu'ils ne soient pas compilés chaque fois que la page est chargée.

installation: 

	$ sudo apt install php7.4-opcache

configuration: 

/etc/php7.4/conf.d/opcache.ini 

```
opcache.memory_consumption=512 ;for caching all compiled files
opcache.interned_strings_buffer=32
opcache.max_accelerated_files=32531 ;by default can cache 2000 files
opcache.revalidate_freq=60
opcache.fast_shutdown=1
opcache.enable_cli=0
opcache.enable=1
opcache.save_comments=1
```

### 2. Asynchroniser les requêts simultanément

exemple 1: symfony 3.4 et php 7.2

```php
use Icicle\{Coroutine\Coroutine, Loop, Awaitable};

$_tickets =  new Coroutine($ticket->findAll());
$tickets = $_tickets->wait();
$_interactions =  new Coroutine($interaction->findAll());
$interactions = $_interactions->wait();
$_faqs =  new Coroutine($faq->findAll());
$faqs = $_faqs->wait();
...

Loop\Run();
```

### 3. Utiliser la fonction générateur pour consommer moins des mémoires

Un générateur vous permet d'écrire du code qui utilise foreach pour parcourir un jeu de données, sans avoir à construire un tableau en mémoire pouvant conduire à dépasser la limite de la mémoire ou nécessiter un temps important pour sa génération.

une fonction générateur, qui est identique à une fonction normale, mis à part le fait qu'au lieu de retourner une seule fois, un générateur peut utiliser yield autant de fois que nécessaire, afin de fournir les valeurs à parcourir.

Un exemple simple de ce mécanisme est la ré-implémentation de la fonction range() sous la forme d'un générateur. La fonction standard range() doit générer un tableau contenant chaque valeur, et le retourner, ce qui peut conduire à des tableaux de taille importante : par exemple, l'appel du code range(0, 1000000) peut consommer nettement plus de 100 Mo de mémoire.

Comme alternative, nous pouvons implémenter un générateur xrange(), qui n'aura en besoin mémoire que la seule création d'un objet Iterator, et devra garder trace en interne du statut courant du générateur, ce qui revient à une consommation mémoire inférieure à 1 Ko.

exemple: findAll() 

```php
    public function findAll()
    {
        $queryBuilder = $this->createQueryBuilder('t')
            ->select('t.id, t.question, t.answer, t.answer, t.date')
            ->orderBy('t.id');

        $limit = 1000;
        $offset = 0;

        while (true) {
            $queryBuilder->setFirstResult($offset);
            $queryBuilder->setMaxResults($limit);

            $tickets = $queryBuilder->getQuery()->getResult();

            if (count($tickets) === 0) {
                break;
            }

            foreach ($tickets as $ticket) {
                yield $ticket;
                $this->_em->detach($ticket);
            }

            $offset += $limit;
        }
    } 
```

### 3. Eviter d'utiliser "select * " dans le doctrine requête.

exemple: 

	SELECT F.id, F.reference FROM FAQ F WHERE F.isValid = 1

### 4. Activer le cache de Doctrine.

Il faut savoir qu’il y a 3 types de cache pour Doctrine :

- Query Cache : transformation DQL -> SQL;
- Result Cache : résultat de la requête;
- Metadata Cache : annotation des entities.

installation: 

    $ sudo apt install redis-server
    $ composer require snc/redis-bundle

configuration: 

```yaml
# Doctrine Configuration
doctrine:
  dbal:
    #...
  orm:
    auto_generate_proxy_classes: '%kernel.debug%'
    naming_strategy: doctrine.orm.naming_strategy.underscore
    # IMPORTANT!
    auto_mapping: true
    metadata_cache_driver: redis
    query_cache_driver: redis

```

Mettre en cache le résultat

```php
public function findBeers()
{
    $query = $this->getEntityManager()
        ->createQuery(
            'select beers from MaxpouBeerBundle:Beers b'
        )
    ;

    $query->useResultCache(true);
    $query->setResultCacheLifetime(3600); //3600sec = 1 hour

    return $query->getResult();
}
```

Pour nettoyer le cache, voici quelques commandes 

    # Nettoyer cache des queries
    $ php bin/console doctrine:cache:clear-query
    # Nettoyer cache des metadatas
    $ php bin/console doctrine:cache:clear-metadata
    # Nettoyer cache des résultats
    $ php bin/console doctrine:cache:clear-result
    # Vider la base redis
    $ php bin/console redis:flushdb

### 5. Mise en cache les HTTP reqêtes

exemple: 

```php
    $response = $this->render('SearchManagement/Dci/index.html.twig', [
        'dcis' => $this->dciRepository->findAll(),
    ]);

    $response->setSharedMaxAge(60);

    return $response;
```

### 6. Augementer le nombre des cores, la fréquence de cpu, et la RAM

PHP n'est pas conçu pour le multithreading. Par conséquent, chaque page/requête est servie par un processus PHP et chaque processus se verrouille sur un cœur de processeur.

Si votre serveur Web a des demandes de pages simultanées, vous aurez également plusieurs processus PHP - chacun utilisant un cœur de processeur - s'exécutant simultanément.

S'il faut 3 secondes à un cœur de processeur à 2 GHz pour traiter une demande, un cœur de processeur à 3 GHz renvoie la même demande en 2 secondes environ.

La règle est RAM=2x(Nombre de Cores) Go ou RAM=4x(Nombre de Cores) Go

### 7. Augementer la taille du swap

Augmenter l'espace d'échange (SWAP), la règle d'or est swap=2xRAM.

Linux supporte la mémoire virtuelle, c'est à dire l'utilisation d'un disque comme extension de la RAM de telle sorte que la taille effective de la mémoire utilisable s'accroît d'autant. Le noyau écrira le contenu d'un bloc mémoire inutilisé sur le disque dur, ainsi la mémoire vive peut être utilisée pour autre chose. Quand ce contenu est à nouveau nécessaire, il est relu en mémoire. Tout ceci se déroule de façon transparente pour l'utilisateur ; les programmes s'exécutant sous Linux voient seulement toute la mémoire disponible et ne remarquent pas que des parties de celle-ci se trouvent sur le disque de temps à autre. Bien sûr, lire et écrire sur le disque dur est plus lent (de l'ordre de mille fois plus lent) qu'en utilisant la mémoire réelle et donc les programmes ne s'exécutent pas aussi vite. La partie du disque dur utilisée comme mémoire virtuelle est appelée espace de swap

### 8. Utiliser le crontab pour les tâches lourdes

Crontab est un outil qui permet de lancer des applications de façon régulière, pratique pour un serveur pour y lancer des scripts de sauvegardes, etc
