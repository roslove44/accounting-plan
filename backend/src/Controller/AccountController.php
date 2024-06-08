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

    #[Route('/api/account/byGroup/', name: 'app_account_byGroup', methods: ['GET'])]
    public function byGroup(SerializerInterface $serializer, AccountRepository $accountRepository): JsonResponse
    {
        $accounts = $accountRepository->findAll();
        $groupedAccounts = [];
        foreach ($accounts as $account) {
            $groupedAccounts[$account->getClassGroup()][] = [
                'code' => $account->getCode(),
                'name' => $account->getName(),
                'keywords' => $account->getKeywords()
            ];
        }
        $jsonAccountsList = $serializer->serialize($groupedAccounts, 'json');
        return new JsonResponse($jsonAccountsList, Response::HTTP_OK, [], true);
    }

    #[Route('/api/account/byClass/', name: 'app_account_byClass', methods: ['GET'])]
    public function byClass(SerializerInterface $serializer, AccountRepository $accountRepository): JsonResponse
    {
        $accounts = $accountRepository->findAll();
        $groupedAccounts = [];
        foreach ($accounts as $account) {
            $groupedAccounts[$account->getClass()][] = [
                'code' => $account->getCode(),
                'name' => $account->getName(),
                'keywords' => $account->getKeywords()
            ];
        }
        $jsonAccountsList = $serializer->serialize($groupedAccounts, 'json');
        return new JsonResponse($jsonAccountsList, Response::HTTP_OK, [], true);
    }
}
