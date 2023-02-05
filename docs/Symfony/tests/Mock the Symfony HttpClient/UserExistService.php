<?php

final class UserExistService
{
    private HttpClientInterface $httpClient;
  
    public function __construct(HttpClientInterface $httpClient)
    {
        $this->httpClient = $httpClient;
    }
  
    // The function that will be used is our controller
    public function userExist(string $email): bool
    {
       $hash = $this->getHash();
       
       return $this->checkUserExistInApi($hash, $email);
    }

    // Here is the 1st call to the API to get the hash.
    private function getHash(): string
    {
        $response = $this->httpClient->request(
            "GET",
            "/external/authorization"
        );

        if (200 !== $response->getCodeStatus()) {
            // 👀 If request is not a success we throw an custom Error that will be catch by the controller
            // 💡 you can log as well
            throw new UnableToVerifiyUserException(
                $response->getContent(false)
            );
        }

        return $response->toArray(false)["hash"] ?? '';
    }

    // Here is the second call to check if the user exists
    private function checkUserExistInApi(string $hash, string $emailToVerify): bool
    {
        $response = $this->httpClient->request(
            "POST",
            "/external/user_exists",
            [
                "body" => [
                    "hash" => $hash,
                    "user" => $emailToVerify,
                ],
            ]
        );

        if (200 !== $response->getCodeStatus()) {
            throw new UnableToVerifiyUserException(
                $response->getContent(false)
            );
        }

        $message = $response->toArray(false)["message"] ?? null;

        return "yes" === $message;
    }
}