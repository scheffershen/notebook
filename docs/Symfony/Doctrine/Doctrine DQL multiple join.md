Doctrine DQL multiple join
=================

Doctrine DQL returns multiple types of entities

## Example 

Fetch join of the address:

```php
$query = $em->createQuery("SELECT u, a FROM User u JOIN u.address a WHERE a.city = 'Berlin'");
$users = $query->getResult();
```


dql-doctrine-query
==================


lms v2 repository
=================