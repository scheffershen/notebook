<?php

namespace Oro\Bundle\SSOBundle\Security;

/**
 * An interface for factories to create OAuthToken.
 */
interface OAuthTokenFactoryInterface
{
    /**
     * @param string|array $accessToken
     * @param array        $roles
     *
     * @return OAuthToken
     */
    public function create($accessToken, array $roles = []);
}
