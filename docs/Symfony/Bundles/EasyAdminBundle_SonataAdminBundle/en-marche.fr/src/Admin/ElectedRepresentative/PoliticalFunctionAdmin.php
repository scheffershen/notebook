<?php

namespace App\Admin\ElectedRepresentative;

use App\Entity\ElectedRepresentative\Mandate;
use App\Entity\ElectedRepresentative\PoliticalFunctionNameEnum;
use App\Repository\ElectedRepresentative\MandateRepository;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Route\RouteCollection;
use Sonata\Form\Type\DatePickerType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class PoliticalFunctionAdmin extends AbstractAdmin
{
    private $mandateRepository;

    public function __construct(
        string $code,
        string $class,
        string $baseControllerName,
        MandateRepository $mandateRepository
    ) {
        parent::__construct($code, $class, $baseControllerName);

        $this->mandateRepository = $mandateRepository;
    }

    protected function configureRoutes(RouteCollection $collection)
    {
        $collection->clearExcept(['create', 'edit', 'delete']);
    }

    protected function configureFormFields(FormMapper $formMapper)
    {
        $mandates = [];
        $electedRepresentativeId = $this->getRequest()->attributes->has('id') ? $this->getRequest()->attributes->getInt('id', null) : $this->getRequest()->query->getInt('objectId', null);
        if (null !== $electedRepresentativeId) {
            $mandates = $this->mandateRepository->getMandatesForPoliticalFunction($electedRepresentativeId);
        }

        $formMapper
            ->add('mandate', EntityType::class, [
                'label' => 'Mandat',
                'placeholder' => '--',
                'class' => Mandate::class,
                'choice_label' => 'number',
                'choices' => $mandates,
            ])
            ->add('name', ChoiceType::class, [
                'label' => 'Nom',
                'placeholder' => '--',
                'choices' => PoliticalFunctionNameEnum::CHOICES,
            ])
            ->add('clarification', TextType::class, [
                'required' => false,
                'label' => 'Pr??cision',
            ])
            ->add('mandateZoneName', TextType::class, [
                'required' => false,
                'label' => 'P??rim??tre g??ographique',
                'disabled' => true,
            ])
            ->add('onGoing', CheckboxType::class, [
                'label' => 'En cours',
                'required' => false,
            ])
            ->add('beginAt', DatePickerType::class, [
                'label' => 'Date de d??but',
            ])
            ->add('finishAt', DatePickerType::class, [
                'label' => 'Date de fin',
                'required' => false,
                'error_bubbling' => false,
            ])
        ;
    }
}
