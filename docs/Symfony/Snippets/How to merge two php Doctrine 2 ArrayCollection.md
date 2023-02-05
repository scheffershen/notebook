How to merge two php Doctrine 2 ArrayCollection()
=================================================

https://stackoverflow.com/questions/10083158/how-to-merge-two-php-doctrine-2-arraycollection

```php
$collection3 = new ArrayCollection(
    array_merge($collection1->toArray(), $collection2->toArray())
);
```