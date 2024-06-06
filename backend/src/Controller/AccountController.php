<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

class AccountController extends AbstractController
{
    #[Route('/api/account', name: 'app_account')]
    public function index(): JsonResponse
    {
        return $this->json([
            true
        ]);
    }
}
