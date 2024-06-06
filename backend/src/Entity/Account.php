<?php

namespace App\Entity;

use App\Repository\AccountRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: AccountRepository::class)]
class Account
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    #[Groups(['front'])]
    private ?int $code = null;

    #[ORM\Column(length: 255)]
    #[Groups(['front'])]
    private ?string $name = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['front'])]
    private ?string $keywords = null;

    #[ORM\Column]
    private ?int $class = null;

    #[ORM\Column(length: 255)]
    private ?string $classGroup = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCode(): ?int
    {
        return $this->code;
    }

    public function setCode(int $code): static
    {
        $code = (int) $code;
        $this->code = $code;
        $this->setClass(substr($code, 0, 1));
        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getKeywords(): ?string
    {
        return $this->keywords;
    }

    public function setKeywords(?string $keywords): static
    {
        $this->keywords = $keywords;

        return $this;
    }

    public function getClass(): ?int
    {
        return $this->class;
    }

    public function setClass(int $class): static
    {
        $this->class = $class;
        if ($this->class < 6) {
            return  $this->setClassGroup('a');
        }
        if ($this->class < 9) {
            return  $this->setClassGroup('b');
        }
        return $this->setClassGroup('c');
    }

    public function getClassGroup(): ?string
    {
        return $this->classGroup;
    }

    public function setClassGroup(string $classGroup): static
    {
        $this->classGroup = $classGroup;

        return $this;
    }
}
