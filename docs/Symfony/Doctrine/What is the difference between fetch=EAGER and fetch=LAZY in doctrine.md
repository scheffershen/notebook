What is the difference between fetch="EAGER" and fetch="LAZY" in doctrine
=========================================================================

```php
/**
 * @ManyToOne(targetEntity="Cart", cascade={"all"}, fetch="EAGER")
 */

/**
 * @ManyToOne(targetEntity="Cart", cascade={"all"}, fetch="LAZY")
 */
```

To explain it simply, when you are loading an entity and if it has an association with one or more entities, what should doctrine do?

If the association is marked as `EAGER`, it will fetch and load the associated entity as well.

If the association is marked as `LAZY`, doctrine will create proxy objects (dummy objects) in place of the actual entity. Only when you make the first call to that associated entity (like $cart->getItems()), doctrine will fetch and load that object(s) from database. (This is the default Behaviour)


## refer: 

https://www.doctrine-project.org/projects/doctrine-orm/en/2.6/reference/advanced-configuration.html#association-proxies

## Doctrine Print Query

```php
$qb => This is docrine query builder

$query = $qb->getQuery();

print "<pre>";
        print_r(array(
            'dql' => $query->getDQL(),
            'parameters' => $query->getParameters(),
            'sql' => $query->getSQL()
        )); 
print "</pre>";
die();
```

See Scheduled insertions before flush:

```php
var_dump($entityManager->getUnitOfWork()->getScheduledEntityInsertions() ); exit();
```