<?php

final class UserExistAction
{
  private UserExistService $userExistService;
  
  public function __construct(UserExistService $userExistService)
  {
    $this->userExistService = $userExistService;
  }
  
  /**
  * @Route("admin/{email}")
  */
  public function __invoke(string $email): JsonResponse
  {
    try {
     $userExist = $this->userExistService->userExist($email);
      // Remeber if we don't get a 200 an exception will be thrown in the service
      // and we catch here to return false (user not exits and cannot access)
    } catch (UnableToVerifiyUserException $e) {
      $userExist = false;
    }
    
    return new JsonResponse(["user_exist" => $userExist]);
  }