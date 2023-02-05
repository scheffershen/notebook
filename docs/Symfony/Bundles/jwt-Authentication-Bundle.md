lexik/jwt-authentication-bundle
===============================

## Projects

- acmepodcast
- documentManager
- omed
- services
- symfony-react-sandbox
- symfony4APIBoilerplateJWTBook

"gesdinet/jwt-refresh-token-bundle": "Implements a refresh token system over Json Web Tokens in Symfony",

"lcobucci/jwt": "For using the LcobucciJWTEncoder",

"spomky-labs/lexik-jose-bridge": "Provides a JWT Token encoder with encryption support"

### Configure JSON Web Token

version coopcycle-web

    mkdir -p var/jwt
    openssl genrsa -out var/jwt/private.pem 4096
    openssl rsa -pubout -in var/jwt/private.pem -out var/jwt/public.pem

    mkdir -p var/jwt
    openssl genrsa -out var/jwt/private.pem -passout pass:coursiers -aes256 4096;
    openssl rsa -pubout -passin pass:coursiers -in var/jwt/private.pem -out var/jwt/public.pem

##new Lexik\Bundle\JWTAuthenticationBundle\LexikJWTAuthenticationBundle(),

- new Gesdinet\JWTRefreshTokenBundle\GesdinetJWTRefreshTokenBundle(),

```config.yml
lexik_jwt_authentication:
    private_key_path: "%jwt_private_key_path%"
    public_key_path:  "%jwt_public_key_path%"
    pass_phrase:      "%jwt_key_pass_phrase%"
    token_ttl:        "%jwt_token_ttl%"
    token_extractors:
        authorization_header:      # look for a token as Authorization Header
            enabled: true
            prefix:  Bearer
            name:    Authorization
        query_parameter:           # check token in query string parameter
            enabled: true
            name:    token

gesdinet_jwt_refresh_token:
    user_provider: fos_user.user_provider.username_email            
```

version omed (symfony 4)

```lexik_jwt_authentication.yaml
lexik_jwt_authentication:
    private_key_path: '%kernel.project_dir%/%env(resolve:JWT_PRIVATE_KEY_PATH)%'
    public_key_path:  '%kernel.project_dir%/%env(resolve:JWT_PUBLIC_KEY_PATH)%'
    pass_phrase:      '%env(resolve:JWT_PASSPHRASE)%'
```

```parameters.yml
jwt_private_key_path: %kernel.root_dir%/../var/jwt/private.pem   
jwt_public_key_path:  %kernel.root_dir%/../var/jwt/public.pem    
jwt_key_pass_phrase:  'coursiers'                                
jwt_token_ttl:        86400
```

```router.yml
gesdinet_jwt_refresh_token:
    path:     /api/token/refresh
    defaults: { _controller: gesdinet.jwtrefreshtoken:refresh }
```

```security.yml
    firewalls:
        # disables authentication for assets and the profiler, adapt it according to your needs
        dev:
            pattern: ^/(_(profiler|wdt)|css|images|js)/
            security: false

        api_login:
            pattern:  ^/api/login
            stateless: true
            anonymous: true
            form_login:
                check_path:               /api/login_check
                success_handler:          lexik_jwt_authentication.handler.authentication_success
                failure_handler:          lexik_jwt_authentication.handler.authentication_failure
                require_previous_session: false

        api_orders:
            pattern:   ^/api/orders
            stateless: true
            guard:
                authenticators:
                    - lexik_jwt_authentication.jwt_token_authenticator

        api_deliveries:
            pattern:   ^/api/deliveries
            stateless: true
            guard:
                authenticators:
                    - lexik_jwt_authentication.jwt_token_authenticator

        api_me:
            pattern:   ^/api/me
            stateless: true
            guard:
                authenticators:
                    - lexik_jwt_authentication.jwt_token_authenticator

        api_tasks:
            pattern:   ^/api/tasks
            stateless: true
            guard:
                authenticators:
                    - lexik_jwt_authentication.jwt_token_authenticator

        token_check:
            pattern:   ^/api/token/check
            stateless: true
            guard:
                authenticators:
                    - lexik_jwt_authentication.jwt_token_authenticator

        token_refresh:
            pattern:  ^/api/token/refresh
            stateless: true
            anonymous: true
```

version omed (symfony4 + fosUser + api + jwt)

```security.ymal
    firewalls:
        login:
            pattern:  ^/login
            stateless: true
            anonymous: true
            provider: fos_userbundle
            json_login:
                check_path: /login_check
                username_path: username
                password_path: password
                success_handler: lexik_jwt_authentication.handler.authentication_success
                failure_handler: lexik_jwt_authentication.handler.authentication_failure
                require_previous_session: false
        main:
            pattern:      ^/api
            provider:     fos_userbundle
            stateless:    true
            anonymous:    ~
            guard:
                authenticators:
                    - lexik_jwt_authentication.jwt_token_authenticator
```

- lexik_jwt_authentication.handler.authentication_success
- lexik_jwt_authentication.handler.authentication_failure
- lexik_jwt_authentication.jwt_token_authenticator

+ use Lexik\Bundle\JWTAuthenticationBundle\Encoder\JWTEncoderInterface;
+ use Lexik\Bundle\JWTAuthenticationBundle\TokenExtractor\AuthorizationHeaderTokenExtractor;

+ use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationSuccessEvent;
+ use Lexik\Bundle\JWTAuthenticationBundle\Events;
+ use Lexik\Bundle\JWTAuthenticationBundle\Response\JWTAuthenticationSuccessResponse;
+ use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTManager;

```services.yml
services:
  my.jwt_listener:
    class: AppBundle\EventListener\JwtListener
    tags:
      - { name: kernel.event_listener, event: lexik_jwt_authentication.on_authentication_success, method: onAuthenticationSuccess }
```

version omed 

```services.yml
services:
    lexik_jwt_authentication.jwt_manager:
        class:  Lexik\Bundle\JWTAuthenticationBundle\Services\JWTManager
        public: true
```

## coopcycle-web\features\bootstrap\FeatureContext.php:

```php

/**
 * Defines application features from the specific context.
 */
class FeatureContext implements Context, SnippetAcceptingContext, KernelAwareContext
{

    /**
     * Initializes context.
     *
     * Every scenario gets its own context instance.
     * You can also pass arbitrary arguments to the
     * context constructor through behat.yml.
     */
    public function __construct(
        ManagerRegistry $doctrine,
        HttpCallResultPool $httpCallResultPool,
        \libphonenumber\PhoneNumberUtil $phoneNumberUtil
    )
    {
        $this->tokens = [];
        $this->doctrine = $doctrine;
        $this->manager = $doctrine->getManager();
        $this->schemaTool = new SchemaTool($this->manager);
        $this->classes = $this->manager->getMetadataFactory()->getAllMetadata();
        $this->httpCallResultPool = $httpCallResultPool;
        $this->phoneNumberUtil = $phoneNumberUtil;
    }    
    /**
     * @Given the user :username is authenticated
     */
    public function theUserIsAuthenticated($username)
    {
        $userManager = $this->getContainer()->get('fos_user.user_manager');
        $jwtManager = $this->getContainer()->get('lexik_jwt_authentication.jwt_manager');

        $user = $userManager->findUserByUsername($username);
        $token = $jwtManager->create($user);

        $this->tokens[$username] = $token;
    }

    /**
     * @When I send an authenticated :method request to :url
     */
    public function iSendAnAuthenticatedRequestTo($method, $url, PyStringNode $body = null)
    {
        $this->restContext->iAddHeaderEqualTo('Authorization', 'Bearer ' . $this->jwt);
        $this->restContext->iSendARequestTo($method, $url, $body);
    }    

    /**
     * @When I send an authenticated :method request to :url with body:
     */
    public function iSendAnAuthenticatedRequestToWithBody($method, $url, PyStringNode $body)
    {
        $this->restContext->iAddHeaderEqualTo('Authorization', 'Bearer ' . $this->jwt);
        $this->restContext->iSendARequestTo($method, $url, $body);
    }    
```

version omed

omed/src/Behat/Contexts/UserContext.php:

```php
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTManager;
class UserContext implements Context
{
    public function __construct(ManagerRegistry $doctrine, JWTManager $jwtManager)
    {
        $this->entityManager = $doctrine->getManagerForClass(User::class);
        $this->userRepository = $this->entityManager->getRepository(User::class);
        $this->jwtManager = $jwtManager;
    }
    /**
     * @param User $user
     */
    public function login(User $user)
    {
        $token = $this->jwtManager->create($user);
        $this->restContext->iAddHeaderEqualTo('Authorization', "Bearer $token");
    }
```

##coopcycle-web/src/AppBundle/Action/Register.php:

```php
use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationSuccessEvent;
use Lexik\Bundle\JWTAuthenticationBundle\Events;
use Lexik\Bundle\JWTAuthenticationBundle\Response\JWTAuthenticationSuccessResponse;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTManager;

class Register
{
    private $userManipulator;
    private $jwtManager;
    private $dispatcher;

    public function __construct(
        UserManipulator $userManipulator,
        UserManagerInterface $userManager,
        JWTManager $jwtManager,
        EventDispatcherInterface $dispatcher,
        FormFactory $formFactory
    )
    {
        $this->userManipulator = $userManipulator;
        $this->jwtManager = $jwtManager;
        $this->dispatcher = $dispatcher;
        $this->formFactory = $formFactory;
        $this->userManager = $userManager;
    }

    /**
     * @Route(
     *     path="/register",
     *     name="api_register"
     * )
     * @Method("POST")
     */
    public function registerAction(Request $request)
    {
        $email = $request->request->get('_email');
        $username = $request->request->get('_username');
        $password = $request->request->get('_password');
        $telephone = $request->request->get('_telephone');
        $givenName = $request->request->get('_givenName');
        $familyName = $request->request->get('_familyName');

        $data = [
            'email' => $email,
            'username' => $username,
            'plainPassword' => [
                'password' => $password,
                'password_confirmation' => $password
            ],
            'givenName' => $givenName,
            'familyName' => $familyName,
            'telephone' => $telephone
        ];

        $user = new ApiUser();

        $form = $this->formFactory->create(ApiRegistrationType::class, $user);
        $form->submit($data);

        if (!$form->isValid()) {
            $errors = $this->getFormErrorsArray($form);
            return new JsonResponse($errors, 400);
        }

        try {
            // TODO Customize FOSUserBundle manipulator to pass all fields at once
            $user = $this->userManipulator->create($username, $password, $email, true, false);
            $jwt = $this->jwtManager->create($user);
            $user->setTelephone($form->get('telephone')->getData());
            $user->setGivenName($form->get('givenName')->getData());
            $user->setFamilyName($form->get('familyName')->getData());
            $this->userManager->updateUser($user);
        } catch (\Exception $e) {
            // TODO Send JSON-LD response
            throw new BadRequestHttpException($e);
        }

        // See Lexik\Bundle\JWTAuthenticationBundle\Security\Http\Authentication\AuthenticationSuccessHandler
        $response = new JWTAuthenticationSuccessResponse($jwt);
        $event    = new AuthenticationSuccessEvent(['token' => $jwt], $user, $response);

        $this->dispatcher->dispatch(Events::AUTHENTICATION_SUCCESS, $event);
        $response->setData($event->getData());

        return $response;
    }    
```
version Symfony4APIBoilerplateJWTBook

Symfony4APIBoilerplateJWTBook/src/Controller/Login.php:

```php
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class LoginController extends Controller
{
    /**
     * @Route("/api/token", name="token_authentication")
     * @Method("POST")
     */
    public function newTokenAction(Request $request): JsonResponse
    {
        $user = $this->getDoctrine()->getRepository(User::class)->findOneBy(['username'=> $request->getUser()]);

        if (!$user) {
            throw $this->createNotFoundException();
        }

        $isValid = $this->get('security.password_encoder')
            ->isPasswordValid($user, $request->getPassword());

        if (!$isValid) {
            throw new BadCredentialsException();
        }

        $token = $this->get('lexik_jwt_authentication.encoder')
            ->encode([
                'username' => $user->getUsername(),
                'exp' => time() + 3600 // 1 hour expiration
        ]);

        return new JsonResponse(['token' => $token]);
    }
```

Symfony4APIBoilerplateJWTBook/src/Security/JwtAuthenticator.php:

```php
use Lexik\Bundle\JWTAuthenticationBundle\Encoder\JWTEncoderInterface;
use Lexik\Bundle\JWTAuthenticationBundle\TokenExtractor\AuthorizationHeaderTokenExtractor;

class JwtAuthenticator extends AbstractGuardAuthenticator
{
    private $em;

    private $jwtEncoder;

    public function __construct(EntityManagerInterface $em, JWTEncoderInterface $jwtEncoder)
    {
        $this->em = $em;
        $this->jwtEncoder = $jwtEncoder;
    }

    public function getUser($credentials, UserProviderInterface $userProvider)
    {
        $data = $this->jwtEncoder->decode($credentials);

        if ($data == false) {
            throw new CustomUserMessageAuthenticationException('Invalid Token');
        }

        $username = $data['username'];
        $user = $this->em->getRepository(User::class)
                         ->findOneBy(['username' => $username]);

        if (!$user) {
            throw new AuthenticationCredentialsNotFoundException();
        }

        return $user;
    }    
```

##coopcycle-web/src/AppBundle/EventListener/JwtListener.php:

```php
use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationSuccessEvent;

class JwtListener
{
    /**
     * @param AuthenticationSuccessEvent $event
     */
    public function onAuthenticationSuccess(AuthenticationSuccessEvent $event)
    {
        $data = $event->getData();
        $user = $event->getUser();

        if (!$user instanceof UserInterface) {
            return;
        }

        $data['roles'] = $user->getRoles();
        $data['username'] = $user->getUsername();
        $data['email'] = $user->getEmail();
        $data['id'] = $user->getId();

        $event->setData($data);
    }
} 
```