<?php

namespace App\Repository;

use App\Entity\Categories;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Categories|null find($id, $lockMode = null, $lockVersion = null)
 * @method Categories|null findOneBy(array $criteria, array $orderBy = null)
 * @method Categories[]    findAll()
 * @method Categories[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CategoriesRepository extends ServiceEntityRepository
{
    /**
     * CategoriesRepository constructor.
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Categories::class);
    }

    /**
     * @return Categories[]
     */
    public function findByActive(): array
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.active = true')
            ->andWhere('c.deleted = false')
            ->getQuery()
            ->getResult();
    }

    /**
     * @return Categories[]|null
     */
    public function findByIsDeleted(): ?array
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.deleted = true')
            ->getQuery()
            ->getResult();
    }

    /**
     * @return Categories[]|null Returns an array of Categories objects
     */
    public function findByRootCategories(): ?array
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.active = true')
            ->andWhere('c.deleted = false')
            ->andWhere('c.parent is null')
            ->orderBy('c.sorting', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * @param Categories $category
     * @return Categories[]|null
     */
    public function findByChildren(Categories $category): ?array
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.active = true')
            ->andWhere('c.deleted = false')
            ->andWhere('c.parent = :category')
            ->setParameter('category', $category)
            ->orderBy('c.sorting', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * @param string $value
     * @return mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findByFullPath(string $value): ?Categories
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.fullPath = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * @param $array
     * @return Categories[]|null
     */
    public function findByArray($array): ?array
    {
        $qb = $this->createQueryBuilder('c');

        return $qb->add('where', $qb->expr()->in('c.fullPath', '?1'))
            ->setParameter(1, $array)
            ->getQuery()
            ->getResult();
    }

    /**
     * @return Categories[]|null
     */
    public function findByIsDisabled(): ?array
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.active = false')
            ->andWhere('c.deleted = false')
            ->getQuery()
            ->getResult();
    }

//    /**
//     * @return Categories[] Returns an array of Categories objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Categories
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
