<?php

namespace App\Controller;

use App\Entity\Account;
use App\Repository\AccountRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;

class AccountController extends AbstractController
{
    #[Route('/api/account', name: 'app_account', methods: ['GET'])]
    public function index(AccountRepository $accountRepository, SerializerInterface $serializer): JsonResponse
    {
        $accounts = $accountRepository->findAll();
        $jsonAccountsList = $serializer->serialize($accounts, 'json', ['groups' => 'front']);
        return new JsonResponse($jsonAccountsList, Response::HTTP_OK, [], true);
    }

    #[Route('/api/account/{code}', name: 'app_account_show', methods: ['GET'])]
    public function show(Account $account, SerializerInterface $serializer): JsonResponse
    {
        $jsonAccount = $serializer->serialize($account, 'json', ['groups' => 'front']);
        return new JsonResponse($jsonAccount, Response::HTTP_OK, [], true);
    }
}
