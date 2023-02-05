HOW To debug a Symfony Doctrine request
=================================

## Show DQL and Show Parameters

```php
        $queryBuilder = $this->createQueryBuilder('t')
            ->select('t')
            ->where('t.createDate BETWEEN :downloadDate AND :downloadDateMax')
            ->setParameter('downloadDate', $downloadDate)
            ->setParameter('downloadDateMax', $downloadDateMax)
            ->orderBy('t.id');
            
        echo $queryBuilder->getQuery()->getDQL();
        // Show Parameters: 
        print_r($queryBuilder->getQuery()->getParameters());
```

## use the `dump()` function from the Symfony `VarDumper` componen

For example, if you want to debug a Doctrine query, you can use the `dump()` function like this:

```php
$query = $entityManager->createQuery('SELECT u FROM App\Entity\User u');
dump($query->getSQL());
```

## use the Doctrine `debug` function

```php
$query = $entityManager->createQuery('SELECT u FROM App\Entity\User u');
$query->getSQL();
```

## use the Doctrine query logger

```php
// Create a logger instance
$logger = new \Doctrine\DBAL\Logging\DebugStack();

// Enable the query logger
$entityManager->getConfiguration()->setSQLLogger($logger);
```