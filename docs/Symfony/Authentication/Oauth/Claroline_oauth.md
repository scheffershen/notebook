Claroline Oauth
===

version: 12.3.7, 12.x

http://github.com/claroline

## composer.json

- "friendsofsymfony/oauth-server-bundle": "1.5.2", (oauth server)
- "hwi/oauth-bundle": "0.5.3", (oauth client)
- "symfony/symfony": "3.4.22",

To do so a command line utility is available: (oauth server)

```
php app/console claroline:client:create --redirect-uri="http://www.example.com/" --grant-type="authorization_code" --grant-type="password" --grant-type="refresh_token" --grant-type="token" --grant-type="client_credentials" client_name
```

## Password flow

Let’s say you have no luxury of redirecting user to some website, then handle redirect call, all you have is just an application which is able to send HTTP requests.
And you still want to somehow authenticate user on the server side, and all you have is username and password.

Request:

**url**:
> PROVIDER_HOST/oauth/v2/token

**parameters**:
> * **client_id** => CLIENT_ID
> * **client_secret** => CLIENT_SECRET
> * **grant_type** => 'password'
> * **username** => USERNAME
> * **password** => PASSWORD

Response:

```json
{
    "access_token":"MjY1MWRhYTAyZDZlOTEyN2EzNTg4MGMwMTcyYjczY2Y0MWI3NzZjODc1OGM2NDdjODgxZjY3YzEyMDdhZjU0Yg",
    "expires_in":3600,
    "token_type":"bearer",
    "scope":null,
    "refresh_token":"MDNmNzBmNWQ2NzdhYWVmYjE2NjI3ZjAyZTM4Y2Q1NDRiNDY1YjUyZGE1ZDk0ODZjYmU0MDM0NTQxNjhiZmU3ZA"
}
```

## oauth client

Manager:
    - authentication\Manager\Oauth\OauthManager.php (oauth client)

Controller:
    - core\Controller\Administration\OauthController.php
    - core\Controller\API\Admin\ClientController.php
    - Claroline\AuthenticationBundle\Controller\API\Oauth;  (oauth client)
    - Claroline\AuthenticationBundle\Controller\Oauth; (oauth client)
    - Claroline\CoreBundle\Controller\API\Admin
    - core\Controller\OauthController.php
- 
DependencyInjection:
    - authentication\DependencyInjection\Compiler\OauthConfigPass.php

Entity:
    - Claroline\AuthenticationBundle\Entity\Oauth, claro_oauth_user, OauthUser
    - Claroline\CoreBundle\Entity\Oauth\Client
    - Claroline\CoreBundle\Entity\Oauth\FriendRequest;
    - Claroline\CoreBundle\Entity\Oauth\PendingFriend;

Form: 
    - Claroline\AuthenticationBundle\Form\Oauth, OauthConfigurationType, 
    - Claroline\CoreBundle\Form\Administration\OauthClientType;
    - 
Model:
    - Claroline\AuthenticationBundle\Model\Oauth; (oauth client)

Listener: 
    - Claroline\AuthenticationBundle\Listener\Oauth (oauth client)

Config: 
    - authentication\Resources\config\routing.yml
    - authentication\Resources\config\suggested\hwi_oauth.yml

Templates:
    - authentication\Resources\views\oauth\admin_form.html.twig
    - authentication\Resources\views\oauth\buttons.html.twig
    - authentication\Resources\views\oauth\connect\check_connexion.html.twig
    - authentication\Resources\views\oauth\connect\create_account.html.twig
    - authentication\Resources\views\oauth\connect\link_account.html.twig
    Template("ClarolineCoreBundle:authentication:oauth_login.html.twig")

Handler
    + authentication\Security\Oauth\FailureHandler.php
    + authentication\Security\Oauth\Hwi\GenericResourceOwner.php
    + authentication\Security\Oauth\Hwi\ResourceOwnerFactory.php
    + authentication\Security\Oauth\LogoutSuccessHandler.php
    + authentication\Security\Oauth\OauthUserProvider.php
    + authentication\Serializer\Oauth\OauthSerializer.php
    + authentication\Twig\Oauth\OauthExtension.php

Route:
    - fos_oauth_server_config
    - fos_oauth_server_routing
    - "claro_admin_oauth_claroline"
    - "claro_admin_oauth_clients"
    - "claro_admin_oauth_client_form"
    - "claro_admin_oauth_form_edit"
    - "claro_admin_oauth_client_create"
    - "claro_admin_oauth_client_edit"
    - "oauth_client_remove"
    - "oauth_request_friend_form"
    - "oauth_request_friend_submit"
    - "oauth_request_friend_remove",
    - "oauth_request_friend_new"
    - "oauth_friends_accept"
    - "oauth_receive_data"
    - "oauth_client_hide"
    - "oauth_request_authentication_form"
    - "oauth_request_authentication_submit"
    - Route("/oauth/v2/auth_login", name="claro_oauth_login"
    - Route("/oauth/v2/auth_login_check", name="claro_oauth_login_check"
    - Route("/oauth/v2/auth/form", name="claro_oauth_authorize_form"
    - Route("/oauth/v2/auth/submit", name="claro_oauth_authorize_submit"
- 
Command: 
    - core\Command\CreateClientCommand.php


