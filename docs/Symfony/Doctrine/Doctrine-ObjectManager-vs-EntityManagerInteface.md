Doctrine ObjectManager vs Doctrine EntityManagerInterface
=========================================================

https://www.doctrine-project.org/projects/doctrine-persistence/en/2.1/reference/index.html

## use Doctrine\Persistence\ObjectManager;

```php
namespace Doctrine\Persistence;

interface ObjectManager
{
    public function find($className, $id);
    public function persist($object);
    public function remove($object);
    public function merge($object);
    public function clear($objectName = null);
    public function detach($object);
    public function refresh($object);
    public function flush();
    public function getRepository($className);
    public function getClassMetadata($className);
    public function getMetadataFactory();
    public function initializeObject($obj);
    public function contains($object);
}
```

## use Doctrine\ORM\EntityManagerInterface;

```php
interface EntityManagerInterface extends ObjectManager
{
    public function getRepository($className);
    public function getCache();
    public function getConnection();
    public function getExpressionBuilder();
    public function beginTransaction();
    public function transactional($func);
    public function commit();
    public function rollback();
    public function createQuery($dql = '');
    public function createNamedQuery($name);
    public function createNativeQuery($sql, ResultSetMapping $rsm);
    public function createNamedNativeQuery($name);
    public function createQueryBuilder();
    public function getReference($entityName, $id);
    public function getPartialReference($entityName, $identifier);
    public function close();
    public function copy($entity, $deep = false);
    public function lock($entity, $lockMode, $lockVersion = null);
    public function getEventManager();
    public function getConfiguration();
    public function isOpen();
    public function getUnitOfWork();
    public function getHydrator($hydrationMode);
    public function newHydrator($hydrationMode);
    public function getProxyFactory();
    public function getFilters();
    public function isFiltersStateClean();
    public function hasFilters();
    public function getClassMetadata($className);
}
```