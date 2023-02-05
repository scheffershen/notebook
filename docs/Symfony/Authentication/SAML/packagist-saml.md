packagist saml
=============

## simplesamlphp/saml2

SAML2 PHP library from SimpleSAMLphp

```php
    // Use Composers autoloading
    require 'vendor/autoload.php';

    // Implement the Container interface (out of scope for example)
    require 'container.php';
    \SimpleSAML\SAML2\Compat\ContainerSingleton::setContainer($container);

    // Create Issuer
    $issuer = new \SimpleSAML\SAML2\XML\saml\Issuer('https://sp.example.edu');

    // Set up an AuthnRequest
    $request = new \SimpleSAML\SAML2\XML\samlp\AuthnRequest(
        $issuer,
        $container->generateId(),
        null,
        'https://idp.example.edu'
    );

    // Send it off using the HTTP-Redirect binding
    $binding = new \SimpleSAML\SAML2\HTTPRedirect();
    $binding->send($request);
```

## simplesamlphp/simplesamlphp

A PHP implementation of a SAML 2.0 service provider and identity provider.

## onelogin/php-saml

## OneLogin vs SimpleSAMLphp

- `What is OneLogin?`: OneLogin provides a cloud-based identity and access management (IAM) solution that offers simple single sign-on (SSO), making it easier for companies to secure and manage access to web applications both in the cloud and behind the firewall.
- `What is SimpleSAMLphp?`: It is an award-winning application written in native PHP that deals with authentication. It supports some other identity protocols and frameworks, such as Shibboleth 1.3, A-Select, CAS, OpenID, WS-Federation or OAuth, and is easily extendable, so you can develop your own modules if you like.
- `What are some alternatives to OneLogin and SimpleSAMLphp?`
	+ `Ping Identity`: It provides an identity and access management platform enabling the right people access to the right things seamlessly and securely.


## hslavich/oneloginsaml-bundle

OneLogin SAML Bundle for Symfony

```yml
## config/packages/hslavich_onelogin_saml.yaml
hslavich_onelogin_saml:
    # Basic settings
    idp:
        entityId: 'http://id.example.com/saml2/idp/metadata.php'
        singleSignOnService:
            url: 'http://id.example.com/saml2/idp/SSOService.php'
            binding: 'urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect'
        singleLogoutService:
            url: 'http://id.example.com/saml2/idp/SingleLogoutService.php'
            binding: 'urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect'
        x509cert: ''
    sp:
        entityId: 'http://myapp.com/app_dev.php/saml/metadata'
        assertionConsumerService:
            url: 'http://myapp.com/app_dev.php/saml/acs'
            binding: 'urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST'
        singleLogoutService:
            url: 'http://myapp.com/app_dev.php/saml/logout'
            binding: 'urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect'
        privateKey: ''    
    # Optional settings
    baseurl: 'http://myapp.com'
    strict: true
    debug: true    
    security:
        nameIdEncrypted: false
        authnRequestsSigned: false
        logoutRequestSigned: false
        logoutResponseSigned: false
        wantMessagesSigned: false
        wantAssertionsSigned: false
        wantNameIdEncrypted: false
        requestedAuthnContext: true
        signMetadata: false
        wantXMLValidation: true
        relaxDestinationValidation: false
        destinationStrictlyMatches: true
        rejectUnsolicitedResponsesWithInResponseTo: false
        signatureAlgorithm: 'http://www.w3.org/2001/04/xmldsig-more#rsa-sha256'
        digestAlgorithm: 'http://www.w3.org/2001/04/xmlenc#sha256'
    contactPerson:
        technical:
            givenName: 'Tech User'
            emailAddress: 'techuser@example.com'
        support:
            givenName: 'Support User'
            emailAddress: 'supportuser@example.com'
        administrative:
            givenName: 'Administrative User'
            emailAddress: 'administrativeuser@example.com'
    organization:
        en:
            name: 'Example'
            displayname: 'Example'
            url: 'http://example.com'

## config/packages/security.yaml
security:
    # ...

    providers:
        saml_provider:
            # Basic provider instantiates a user with default roles
            saml:
                user_class: 'AppBundle\Entity\User'
                default_roles: ['ROLE_USER']

    firewalls:
        app:
            pattern: ^/
            saml:
                # Match SAML attribute 'uid' with username.
                # Uses getNameId() method by default.
                username_attribute: uid
                # Use the attribute's friendlyName instead of the name 
                use_attribute_friendly_name: true
                check_path: saml_acs
                login_path: saml_login
            logout:
                path: saml_logout

    access_control:
        - { path: ^/saml/login, roles: PUBLIC_ACCESS }
        - { path: ^/saml/metadata, roles: PUBLIC_ACCESS }
        - { path: ^/, roles: ROLE_USER }  
        
## config/routes.yaml    
hslavich_saml_sp:
    resource: "@HslavichOneloginSamlBundle/Resources/config/routing.yml"                  
```

## adactive-sas/saml2-bridge-bundle 

last updated 2018

```yml
adactive_sas_saml2_bridge:
    hosted:
        metadata_route: name_of_the_route_of_metadata_url
        identity_provider:
            enabled: true
            service_provider_repository: service.name.of.entity_repository
            sso_route: name_of_the_route_of_the_single_sign_on_url
            sls_route: name_of_the_route_of_the_single_logout_url
            login_route: name_of_the_route_of_the_login_url
            logout_route: name_of_the_route_of_the_logout_url
            public_key: %idp_public_key_file_path%
            private_key: %idp_private_key_file_path%

            logout:
                handlers: [adactive_sas_saml2_bridge.logout.handler]
```

