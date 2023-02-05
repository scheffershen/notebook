LMS SSO integration 
====================

## Bundle

on utilise "lightsaml/sp-bundle":

	$ composer require lightsaml/sp-bundle

## SSO serveur

on utilise keycloak comme le serveur SSO

## Fichiers et codes 

les fichiers sont ajoutés: 

- src/Store/IdStore.php #une service
- src/Security/UserCreator.php #pour créer l'utilisateur ou mettre à jour l'utilisateur
- src/Entity/IdEntry.php #pour stocker les sessions envoies par le serveur SSO 
- src/Service/SamlLogoutHandler.php #pour SSO logout, mais on ne le servie pas 

les fichiers à modifier: 

- src/Controller/HomeController #pas de redirection vers fos user login, afficher sso login, fos user login il faut taper à la main.  

```php
    // code origine
    //return $this->redirect($this->generateUrl('fos_user_security_login')); 
    
    // codes ajoutés
    return $this->render('@FOSUser/Security/login.html.twig', [ 
        'last_username' => '',
        'error' => null
    ]);
```

- templates/bundles/FOSUserBundle/Security/login_content.html.twig #afficher le formulaire ou le button selon le url

```twig
{% if 'app_login' in app.request.attributes.get('_route') %} 
	...(codes originaux)
{% else %}
    <div class="alert alert-icon lms-alert-danger alert-dismissible mt-3" role="alert">
        <button data-dismiss="alert" class="close"></button>
        <a href="{{ path('lightsaml_sp.login') }}" class="lms-button lms-button-red">SSO Login</a>
    </div>
{% endif %}
```

## Routes

- config/routes/lightsaml_sp.yaml # à ajouter

```yaml
lightsaml_sp.logout:
   path: /saml/logout   

lightsaml_sp.metadata:
    path: /saml/metadata.xml
    defaults: { _controller: LightSaml\SpBundle\Controller\DefaultController::metadataAction }

lightsaml_sp.discovery:
    path: /saml/discovery
    defaults: { _controller: LightSaml\SpBundle\Controller\DefaultController::discoveryAction }

lightsaml_sp.login:
    path: /saml/login
    defaults: { _controller: LightSaml\SpBundle\Controller\DefaultController::loginAction}

lightsaml_sp.login_check:
    path: /saml/login_check

lightsaml_sp.sessions:
    path: /saml/sessions
    defaults: { _controller: LightSaml\SpBundle\Controller\DefaultController::sessionsAction }   
```

- config/routes/fos_user.yml # à modifier

```yaml
app_login: 
    path: /fr/login
    defaults: { _controller: App\Controller\SecurityController::login } 

app_login_en: 
    path: /en/login
    defaults: { _controller: App\Controller\SecurityController::login } 

fos_user_security_login: 
    path: /fr/login
    defaults: { _controller: FOSUserBundle:Security:login } 

fos_user_security_login_en: 
    path: /en/login
    defaults: { _controller: FOSUserBundle:Security:login } 

fos_user_security_check:
    path: /fr/login_check
    defaults: { _controller: FOSUserBundle:Security:check } 

fos_user_security_check_en:
    path: /en/login_check
    defaults: { _controller: FOSUserBundle:Security:check } 

fos_user_security_logout:
    path: /fr/logout
    defaults: { _controller: FOSUserBundle:Security:logout } 

fos_user_security_logout_en:
    path: /fr/logout
    defaults: { _controller: FOSUserBundle:Security:logout } 

fos_user_change_password:
    path: /{_locale}/change-password
    defaults: { _controller: FOSUserBundle:ChangePassword:changePassword } 

fos_user_resetting_request:
    path: /{_locale}/request
    defaults: { _controller: FOSUserBundle:Resetting:request } 

fos_user_resetting_check_email:
    path: /{_locale}/check-email
    defaults: { _controller: FOSUserBundle:Resetting:checkEmail } 

fos_user_resetting_reset:
    path: /{_locale}/reset/{token}
    defaults: { _controller: FOSUserBundle:Resetting:reset } 

fos_user_profile_edit:
    path: /{_locale}/profile/edit
    defaults: { _controller: FOSUserBundle:Profile:edit } 

fos_user_profile_show:
    path: /{_locale}/profile
    defaults: { _controller: FOSUserBundle:Profile:show } 
```

## Saml Configs

trois fichiers à ajouter

- config/saml/saml-idp.xml #serveur SSO identificator XML
- config/saml/saml.crt #certificat, le même que sur le serveur SSO
- config/saml/saml.key #clé privé, le même que sur le serveur SSO

## Security Configs


```yaml
    firewalls:
        dev:
            pattern: ^/(_(profiler|wdt)|css|images|js)/
            security: false

        #config origin à désactiver
        # Firewall pour les pages de connexion, et récupération de mot de passe
        # login:
        #     pattern:   ^/%locale%/(login$|resetting|register|signature$)  # Les adresses de ces pages sont login, et resetting
        #     anonymous: true                          # On autorise bien évidemment les anonymes sur ces pages !
        #     #logout_on_user_change: true

        main:
            anonymous: ~
            
            # config origin à désactiver
            # form_login: 
            #     provider: fos_userbundle #users
            #     #remember_me: true 
            #     login_path: app_login #fos_user_security_login
            #     check_path: app_login #fos_user_security_check
            #     #use_forward: false
            #     default_target_path: /%locale%/
            #     csrf_token_generator: security.csrf.token_manager

            light_saml_sp:
                provider: fos_userbundle
                user_creator: App\Security\UserCreator
                login_path: /saml/login
                check_path: /saml/login_check
                default_target_path: /
                require_previous_session: true

            logout:   
                path: fos_user_security_logout
                target: /

            #config origin à désactiver
            # remember_me:
            #     secret:  "%env(APP_SECRET)%" 
            #     lifetime: 31536000 # 365 jours en secondes
            #     path:   /
            # guard: 
            #     authenticators:
            #         - App\Security\LoginFormAuthenticator
```