<?php
/**
 * Created by PhpStorm.
 * User: vlad
 * Date: 22.07.2018
 * Time: 15:10
 */

namespace App\Controller\Api;


use App\Entity\Categories;
use App\Repository\CategoriesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;


/**
 * @Route("/api/categories")
 */
class CategoriesController extends AbstractController
{
    /**
     * @var CategoriesRepository
     */
    private $repository;


    /**
     * CategoriesController constructor.
     * @param CategoriesRepository $repository
     */
    public function __construct(CategoriesRepository $repository)
    {
        $this->repository = $repository;
    }


    /**
     * @Route("/all",methods={"GET"})
     * @return JsonResponse
     */
    public function all(): JsonResponse
    {
        return new JsonResponse(
            $this->repository->findAll(),
            JsonResponse::HTTP_OK
        );
    }

    /**
     * @Route("/{id}", methods="GET")
     * @param Categories $category
     * @param Request $request
     * @return JsonResponse
     */
    public function listChildren(Categories $category, Request $request): JsonResponse
    {

        $data = [
            'category' => $category,
            'currentId' => $request->query->get('current'),
            'parent' => $category->getParent(),
            'categories' => $this->repository->findByChildren($category)
        ];

        $html = $this->render('api/categories/categories_list.html.twig', $data);

        return $this->json($html);
    }

    /**
     * @Route(methods="GET")
     * @param Request $request
     * @return JsonResponse
     */
    public function listRootCategories(Request $request): JsonResponse
    {
        $data = [
            'currentId' => $request->query->get('current'),
            'categories' => $this->repository->findByRootCategories()
        ];

        return $this->json($this->render('api/categories/categories_list.html.twig', $data));
    }
}