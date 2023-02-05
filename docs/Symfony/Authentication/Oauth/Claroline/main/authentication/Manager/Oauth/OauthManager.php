<?php

/*
 * This file is part of the Claroline Connect package.
 *
 * (c) Claroline Consortium <consortium@claroline.net>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Claroline\AuthenticationBundle\Manager\Oauth;

use Claroline\AppBundle\Event\App\RefreshCacheEvent;
use Claroline\AppBundle\Manager\CacheManager;
use Claroline\AuthenticationBundle\Entity\Oauth\OauthUser;
use Claroline\AuthenticationBundle\Model\Oauth\OauthConfiguration;
use Claroline\AuthenticationBundle\Repository\Oauth\OauthUserRepository;
use Claroline\CoreBundle\Entity\User;
use Claroline\CoreBundle\Library\Configuration\PlatformConfigurationHandler;
use Claroline\CoreBundle\Library\Security\Authenticator;
use Claroline\CoreBundle\Manager\RegistrationManager;
use Claroline\CoreBundle\Manager\UserManager;
use Doctrine\ORM\EntityManager;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;
use Symfony\Component\Translation\TranslatorInterface;

/**
 * @DI\Service("claroline.oauth.manager")
 */
class OauthManager
{
    /**
     * @var EntityManager
     */
    private $em;

    /**
     * @var CacheManager
     */
    private $cacheManager;

    /**
     * @var PlatformConfigurationHandler
     */
    private $platformConfigHandler;

    /**
     * @var TokenStorage
     */
    private $tokenStorage;

    /**
     * @var UserManager
     */
    private $userManager;

    /**
     * @var RegistrationManager
     */
    private $registrationManager;

    private $authenticator;

    /** @var OauthUserRepository */
    private $oauthUserRepository;

    /**
     * @DI\InjectParams({
     *      "entityManager"         = @DI\Inject("doctrine.orm.entity_manager"),
     *      "cacheManager"          = @DI\Inject("claroline.manager.cache_manager"),
     *      "platformConfigHandler" = @DI\Inject("claroline.config.platform_config_handler"),
     *      "tokenStorage"          = @DI\Inject("security.token_storage"),
     *      "userManager"           = @DI\Inject("claroline.manager.user_manager"),
     *      "registrationManager"   = @DI\Inject("claroline.manager.registration_manager"),
     *      "authenticator"         = @DI\Inject("claroline.authenticator")
     * })
     *
     * @param EntityManager                $entityManager
     * @param CacheManager                 $cacheManager
     * @param PlatformConfigurationHandler $platformConfigHandler
     * @param TokenStorage                 $tokenStorage
     * @param UserManager                  $userManager
     * @param RegistrationManager          $registrationManager
     * @param Authenticator                $authenticator
     */
    public function __construct(
        EntityManager $entityManager,
        CacheManager $cacheManager,
        PlatformConfigurationHandler $platformConfigHandler,
        TokenStorage $tokenStorage,
        UserManager $userManager,
        registrationManager $registrationManager,
        Authenticator $authenticator
    ) {
        $this->em = $entityManager;
        $this->cacheManager = $cacheManager;
        $this->platformConfigHandler = $platformConfigHandler;
        $this->tokenStorage = $tokenStorage;
        $this->userManager = $userManager;
        $this->registrationManager = $registrationManager;
        $this->authenticator = $authenticator;
        $this->oauthUserRepository = $entityManager->getRepository(
            'Claroline\AuthenticationBundle\Entity\Oauth\OauthUser'
        );
    }

    /**
     * @DI\Observe("refresh_cache")
     *
     * @param RefreshCacheEvent $event
     */
    public function refreshCache(RefreshCacheEvent $event)
    {
        foreach (OauthConfiguration::resourceOwners() as $resourceOwner) {
            $service = str_replace(' ', '_', strtolower($resourceOwner));
            $errors = $this->validateService(
                $service,
                $this->platformConfigHandler->getParameter($service.'_client_id'),
                $this->platformConfigHandler->getParameter($service.'_client_secret')
            );
            $event->addCacheParameter(
                "is_{$service}_available",
                (0 === count($errors) && $this->isActive($service))
            );
        }
    }

    public function isServiceAvailable($service)
    {
        $isAvailable = $this->cacheManager->getParameter("is_{$service}_available");

        return is_null($isAvailable) ? $this->isActive($service) : !empty($isAvailable);
    }

    public function validateService($service, $appId, $secret)
    {
        if (!$appId || !$secret) {
            return ['error' => $service.'_application_validation_error'];
        }

        switch ($service) {
            case 'facebook':
                return $this->validateFacebook($appId, $secret);
            case 'twitter':
                return $this->validateTwitter($appId, $secret);
            case 'google':
            case 'linkedin':
            case 'windows_live':
            case 'office_365':
            case 'generic':
                return [];
        }

        return null;
    }

    public function getConfiguration($service)
    {
        $clientId = $this->platformConfigHandler->getParameter($service.'_client_id');
        $clientSecret = $this->platformConfigHandler->getParameter($service.'_client_secret');
        $clientTenantDomain = $this->platformConfigHandler->getParameter($service.'_client_domain');

        $config = new OauthConfiguration(
            $clientId,
            $clientSecret,
            $this->isServiceAvailable($service),
            $this->platformConfigHandler->getParameter($service.'_client_force_reauthenticate'),
            $clientTenantDomain
        );

        if ('generic' === $service) {
            $config->setAuthorizationUrl($this->platformConfigHandler->getParameter($service.'_authorization_url'));
            $config->setAccessTokenUrl($this->platformConfigHandler->getParameter($service.'_access_token_url'));
            $config->setInfosUrl($this->platformConfigHandler->getParameter($service.'_infos_url'));
            $config->setScope($this->platformConfigHandler->getParameter($service.'_scope'));
            $config->setPathsLogin($this->platformConfigHandler->getParameter($service.'_paths_login'));
            $config->setPathsEmail($this->platformConfigHandler->getParameter($service.'_paths_email'));
            $config->setDisplayName($this->platformConfigHandler->getParameter($service.'_display_name'));
        }

        return $config;
    }

    public function getActiveServices()
    {
        $services = [];
        foreach (OauthConfiguration::resourceOwners() as $resourceOwner) {
            $service = str_replace(' ', '_', strtolower($resourceOwner));
            if ($this->isServiceAvailable($service)) {
                $services[] = $service;
            }
        }

        return $services;
    }

    public function getRegistrationForm($user)
    {
        return $this->registrationManager->getRegistrationForm($user);
    }

    public function createNewAccount(Request $request, TranslatorInterface $translator, $service)
    {
        $user = new User();
        $form = $this->registrationManager->getRegistrationForm($user);
        $form->handleRequest($request);
        $session = $request->getSession();
        if ($form->isValid()) {
            $this->registrationManager->registerNewUser($user, $form);

            $oauthUser = new OauthUser($service['name'], $service['id'], $user);
            $this->em->persist($oauthUser);
            $this->em->flush();
            $session->remove('claroline.oauth.resource_owner');

            $msg = $translator->trans('account_created', [], 'platform');
            $session->getFlashBag()->add('success', $msg);

            if ($this->platformConfigHandler->getParameter('registration_mail_validation')) {
                $msg = $translator->trans('please_validate_your_account', [], 'platform');
                $session->getFlashBag()->add('success', $msg);
            }

            return $this->registrationManager->loginUser($user, $request);
        }

        return ['form' => $form->createView()];
    }

    public function linkAccount(Request $request, $service, $username = null)
    {
        $verifyPassword = false;
        $password = null;
        if (null === $username) {
            $verifyPassword = true;
            $username = $request->get('_username');
            $password = $request->get('_password');
        }
        $isAuthenticated = $this->authenticator->authenticate($username, $password, $verifyPassword);
        if ($isAuthenticated) {
            $user = $this->userManager->getUserByUsername($username);
            $oauthUser = new OauthUser($service['name'], $service['id'], $user);
            $this->em->persist($oauthUser);
            $this->em->flush();
            $request->getSession()->remove('claroline.oauth.resource_owner');

            return $this->registrationManager->loginUser($user, $request);
        } else {
            return ['error' => 'login_error'];
        }
    }

    public function unlinkAccount($userId)
    {
        $this->oauthUserRepository->unlinkOAuthUser($userId);
    }

    private function isActive($service)
    {
        $isActive = $this->platformConfigHandler->getParameter($service.'_client_active');
        // Compatibility with tool FormaLibreOfficeConnect
        if ('office_365' === $service && null === $isActive) {
            $isActive = $this->platformConfigHandler->getParameter('o365_active');
        }

        return $isActive;
    }

    private function validateFacebook($appId, $secret)
    {
        if (!function_exists('curl_version')) {
            return ['error' => 'curl_facebook_application_validation_error'];
        }

        $secretUrl = "https://graph.facebook.com/{$appId}?fields=roles&access_token={$appId}|{$secret}";
        $curlHandle = curl_init();
        curl_setopt($curlHandle, CURLOPT_URL, $secretUrl);
        curl_setopt($curlHandle, CURLOPT_CONNECTTIMEOUT, 2);
        curl_setopt($curlHandle, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curlHandle, CURLOPT_USERAGENT, 'ClarolineConnect');
        $json = curl_exec($curlHandle);
        curl_close($curlHandle);
        $data = json_decode($json);

        if (!$json || array_key_exists('error', $data)) {
            return ['error' => 'facebook_application_validation_error'];
        }

        return [];
    }

    private function validateTwitter($appId, $secret)
    {
        if (!function_exists('curl_version')) {
            return ['error' => 'curl_twitter_application_validation_error'];
        }

        $encoded_consumer_key = urlencode($appId);
        $encoded_consumer_secret = urlencode($secret);
        // step 1.2 - concatinate encoded consumer, a colon character and the encoded consumer secret
        $bearer_token = $encoded_consumer_key.':'.$encoded_consumer_secret;
        // step 1.3 - base64-encode bearer token
        $base64_encoded_bearer_token = base64_encode($bearer_token);
        // step 2
        $secretUrl = 'https://api.twitter.com/oauth2/token'; // url to send data to for authentication
        $headers = [
            'POST /oauth2/token HTTP/1.1',
            'Host: api.twitter.com',
            'User-Agent: ClarolineConnect Twitter Application-only OAuth App v.1',
            'Authorization: Basic '.$base64_encoded_bearer_token,
            'Content-Type: application/x-www-form-urlencoded;charset=UTF-8',
        ];
        $curlHandle = curl_init();
        curl_setopt($curlHandle, CURLOPT_URL, $secretUrl);
        curl_setopt($curlHandle, CURLOPT_HTTPHEADER, $headers); // set custom headers
        curl_setopt($curlHandle, CURLOPT_POST, 1); // send as post
        curl_setopt($curlHandle, CURLOPT_RETURNTRANSFER, true); // return output
        curl_setopt($curlHandle, CURLOPT_POSTFIELDS, 'grant_type=client_credentials');
        curl_setopt($curlHandle, CURLOPT_HEADER, 1); // send custom headers
        curl_exec($curlHandle); // execute the curl
        $respInfo = curl_getinfo($curlHandle);
        curl_close($curlHandle);
        if (200 !== $respInfo['http_code']) {
            return ['error' => 'twitter_application_validation_error'];
        }

        return [];
    }
}
