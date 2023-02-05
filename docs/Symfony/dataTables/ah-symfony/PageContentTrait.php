<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

trait PageContentTrait
{
    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     *
     */
    private $image;

    /**
     * @Assert\File(mimeTypes={ "image/jpeg","image/jpg","image/png","application/pdf" })
     */
    private $imageUpload;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $uploadPath;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $contentHtml;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $path;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     */
    private $fullPath;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $metaTitle;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $metaKeywords;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $metaDescription;

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getUploadPath(): ?string
    {
        return $this->uploadPath;
    }

    public function setUploadPath(?string $uploadPath): self
    {
        $this->uploadPath = $uploadPath;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getContentHtml(): ?string
    {
        return $this->contentHtml;
    }

    public function setContentHtml(?string $contentHtml): self
    {
        $this->contentHtml = $contentHtml;

        return $this;
    }

    public function getPath(): ?string
    {
        return $this->path;
    }

    public function setPath(string $path): self
    {
        $this->path = $path;

        return $this;
    }

    public function getFullPath(): ?string
    {
        return $this->fullPath;
    }

    public function setFullPath(string $fullPath): self
    {
        $this->fullPath = $fullPath;

        return $this;
    }

    public function getMetaTitle(): ?string
    {
        return $this->metaTitle;
    }

    public function setMetaTitle(?string $metaTitle): self
    {
        $this->metaTitle = $metaTitle;

        return $this;
    }

    public function getMetaKeywords(): ?string
    {
        return $this->metaKeywords;
    }

    public function setMetaKeywords(?string $metaKeywords): self
    {
        $this->metaKeywords = $metaKeywords;

        return $this;
    }

    public function getMetaDescription(): ?string
    {
        return $this->metaDescription;
    }

    public function setMetaDescription(?string $metaDescription): self
    {
        $this->metaDescription = $metaDescription;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getImageUpload()
    {
        return $this->imageUpload;
    }

    /**
     * @param mixed $imageUpload
     * @return PageContentTrait
     */
    public function setImageUpload($imageUpload)
    {
        $this->imageUpload = $imageUpload;
        return $this;
    }
}
