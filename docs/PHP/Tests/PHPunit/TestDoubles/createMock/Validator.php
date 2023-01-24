<?php

declare(strict_types=1);

namespace App\TestDoubles\createMock;

class Validator
{
    public function __construct(private UserStore $store)
    {
    }

    public function validateUser($mail, $pass): bool
    {
        $user = $this->store->getUser($mail);
        if (is_null($user)) {
            return false;
        }
        $testpass = $user->getPass();
        if ($testpass == $pass) {
            return true;
        }

        $this->store->notifyPasswordFailure($mail);
        return false;
    }
}
