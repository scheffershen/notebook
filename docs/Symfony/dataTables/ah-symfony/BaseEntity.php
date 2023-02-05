<?php

namespace App\Entity;

use DateTime;
use Doctrine\ORM\Mapping as ORM;
use JsonSerializable;

/**
 * @ORM\MappedSuperclass()
 * https://www.php.net/manual/zh/class.jsonserializable.php
 * https://www.sitepoint.com/use-jsonserializable-interface/
 */
abstract class BaseEntity implements JsonSerializable
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    protected $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    protected $name;

    /**
     * @ORM\Column(type="date")
     */
    protected $create_date;

    /**
     * @ORM\Column(type="date")
     */
    protected $update_date;

    /**
     * @ORM\Column(type="boolean", options={"default" : true})
     */
    protected $active;

    /**
     * @ORM\Column(type="boolean", options={"default" : false})
     */
    protected $deleted;

    /**
     * @ORM\Column(type="integer", options={"default" : 0})
     */
    protected $sorting;

    public function getId()
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCreateDate(): ?\DateTimeInterface
    {
        return $this->create_date;
    }

    /**
     * @param \DateTimeInterface $create_date
     * @return BaseEntity
     * @throws \Exception
     */
    public function setCreateDate(\DateTimeInterface $create_date): self
    {
        $this->create_date = $create_date ?? new DateTime("now");

        return $this;
    }

    public function getUpdateDate(): ?\DateTimeInterface
    {
        return $this->update_date;
    }

    /**
     * @param \DateTimeInterface $update_date
     * @return BaseEntity
     * @throws \Exception
     */
    public function setUpdateDate(\DateTimeInterface $update_date): self
    {
        $this->update_date = $update_date ?? new DateTime("now");

        return $this;
    }

    public function isActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(bool $active): self
    {
        $this->active = $active;

        return $this;
    }

    public function isDeleted(): ?bool
    {
        return $this->deleted;
    }

    public function setDeleted(bool $deleted): self
    {
        $this->deleted = $deleted;

        return $this;
    }

    public function getSorting(): ?int
    {
        return $this->sorting;
    }

    public function setSorting(int $sorting): self
    {
        $this->sorting = $sorting;

        return $this;
    }

    public function jsonSerialize(): array
    {
        return [
            'id' => $this->getId(),
            'name' => $this->getName(),
            'active' => $this->isActive(),
            'deleted' => $this->isDeleted(),
            'sorting' => $this->getSorting()
        ];
    }


}
