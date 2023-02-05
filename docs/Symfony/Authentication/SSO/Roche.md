REAMDME
======

## What is SSO and how it works?

Single sign-on (SSO) is a technology which combines several different application login screens into one. With SSO, a user only has to enter their login credentials (username, password, etc.) one time on a single page to access all of their SaaS applications.

## What is SSO example?

Single sign-on (SSO) is a session and user authentication service that permits a user to use one set of login credentials -- for example, a username and password -- to access multiple applications.

## SSO vs SAML

Both the authentication protocols serve a similar function to connect users and allow them to access the requested resource. SAML is an umbrella standard that covers federation, identity management and single sign on (SSO). SAML activates single Sign On (SSO) for browser based applications.

SAML vs SSO – What’s the Difference.  A platform is where several client applications (web based or mobile based ) will need access to. So the platform is a front end to a large enterprise system that holds identity information about the people who would be interacting with it. Instead of each client application maintaining their own user database with usernames and passwords Single Sign On (SSO) came into practice.

Single sign on would allow the enterprise system to securely store and own all of the user credentials. The platform then  establishes a trust relationship with the enterprise authentication server and client applications can be built to make the most of the trusted auth server to authenticate users.

Single Sign On (SSO) is a way to authenticate users to sign in to multiple applications through a single credential (username and password). It allows users to create their identity once and access various websites and applications through the same username and password. You are no longer required to keep a diary with different usernames and passwords for each software system. This technology is best suitable for any application that provides IAM or access control solutions.

However, Security Assertion Markup Language (SAML) is a protocol that enables SSO and follows a standardized way to verify the users’ credentials once and updates other applications about the user’s identity. This article compares SAML vs SSO – What’s the Difference and discusses SSO and SAML in detail.

## What is SAML?

Security Assertion Markup Language (SAML) is an open standard authentication protocol with three essential components. The protocol involves a user, an identity provider and a service provider to authenticate and transfer data between the parties.

Let’s say you work for a company and they provided credentials to access the dashboard. The dashboard includes various external services. When you click on any external service, you automatically sign in to another web application without filling in any credentials. All this happened because of the SAML. The protocol uses XML based authentication to transfer a user’s identity between the IdP and SP. IdP, also known as Identity Provider, is responsible for authenticating and sharing identity data to SP.

SP, also known as Service Provider, receives the validated information from the IdP and authorizes the user to access the external service or resources. Overall, with the help of SAML, any user with a valid account can access resources from multiple applications.

## What is LMS Europharma

Europharma learning management system (LMS) is a web-based application for the administration, documentation, tracking, reporting, automation, and delivery of educational courses, training programs, materials or learning and development programs.

- We use Symfony 4, MySQL 8, PHP 7, Ubuntu 20 and LightSAML PHP library

## How it work ?

In its simplest form, a basic SAML Service Provider Initiated flow looks like this:

1. A user tries to access the application.
2. The application checks if the user is logged in via the LMS SP and if not redirects the user to the Roche IdP login page along with a SAML Request.
3. The user authenticates in the Roche IdP and if successful returns the user to the Assertion Consumer Service Url along with a SAML Response (This is usually signed with the Roche IdP certificate).
4. The LMS Service Provider decodes the response and provides the user access to the application.

We’ll be using the LightSAML Core PHP library, LightSAML Core is a PHP library implementing OASIS SAML 2.0 protocol, fully OOP structured with DPI principles, reusable, and embeddable.

## LightSAML PHP library configuration



## what is Keycloak IDP

Keycloak is an IDP. identity provider federation. Keycloak can be configured to delegate authentication to one or more IDPs.

1. Creating a realm

we need copy the SAML 2.0 Identity Provider Metadata XML under General into a saml-idp.xmlfile.

2. Adding a client


SAML Keys: 

These two keys are required for signing the request and assertions when a customer tries to log in and register.


3. Setting up SAML configuration in Symfony

Configure the SAML bridge: 

```
light_saml_symfony_bridge:
    own:
        entity_id: "http://127.0.0.1/saml/login_check"
        credentials:
            -
                certificate: "%kernel.root_dir%/../config/saml/saml.crt"
                key:         "%kernel.root_dir%/../config/saml/saml.key"
                password:    ~
    party:
        idp:
            files:
                - "%kernel.root_dir%/../config/saml/saml-idp.xml"
    store:
        id_state: App\Store\IdStoreInterface
```

User Creator Service:

Configure Security: 

Logout Handler Service: 

## keyCloak saml configuration 

```json 
{
      "id": "a0273a0d-08ba-4ded-941d-6166d63b42b6",
      "clientId": "https://roche.euro-academy.fr/saml/login_check",
      "surrogateAuthRequired": false,
      "enabled": true,
      "alwaysDisplayInConsole": false,
      "clientAuthenticatorType": "client-secret",
      "secret": "**********",
      "redirectUris": [],
      "webOrigins": [],
      "notBefore": 0,
      "bearerOnly": false,
      "consentRequired": false,
      "standardFlowEnabled": true,
      "implicitFlowEnabled": false,
      "directAccessGrantsEnabled": false,
      "serviceAccountsEnabled": false,
      "publicClient": false,
      "frontchannelLogout": true,
      "protocol": "saml",
      "attributes": {
        "saml_assertion_consumer_url_redirect": "https://roche.euro-academy.fr/saml/login_check",
        "saml.force.post.binding": "true",
        "saml.multivalued.roles": "false",
        "backchannel.logout.revoke.offline.tokens": "false",
        "saml.server.signature.keyinfo.ext": "false",
        "saml.signing.certificate": "MIIC0TCCAbkCBgF45cfeLDANBgkqhkiG9w0BAQsFADAsMSowKAYDVQQDDCFodHRwOi8vMTI3LjAuMC4xL3NhbWwvbG9naW5fY2hlY2swHhcNMjEwNDE4MTYxODA0WhcNMzEwNDE4MTYxOTQ0WjAsMSowKAYDVQQDDCFodHRwOi8vMTI3LjAuMC4xL3NhbWwvbG9naW5fY2hlY2swggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCdTBYgLJ4d/MDRcpK/UDxr0rc6op5ApttGd913n1sKgMI7bG+LbSg9gNc5eMASozRZ9RYr9i2xlIq0g3q2OpFdtvz9HlDQjhQlvQWfAIYUWoF9m+ag/1pUHnetjCRfPo7EsCzXLLNNPvFtc8nTDeOKoFn9yTyHaH1yOZsalf/C/Uecu+a8VDFlcvGncj9DDMpcRxSmsrGV7U2HVqQy0gK6/wZ4d6xqZfndskZJARGLKRFtSeNXmjTWHLSRstKO0+HbpF5MY1dWDv9Gpxe3ck8uw+KIo0aK3wdiEGhzR4KjEmdA0hlP2h/dMH8ZX9xQDXmarFYamVQvi0opVWtqqnjNAgMBAAEwDQYJKoZIhvcNAQELBQADggEBAHYFNjCSeQmM4CZjWcGlY3yF0F0sJV9WWefQ0QrnIPhYasRYhtvtGAOKWX+PUPDSUTgKp8QOEQ8m3ZN7grErhfDJwohj/vMpfzR9VLQUhkevQgHQWA9njFNAqUJl+FQiX64qCrECsRQI9yIc6jx5QwUdrXFdEKmxwjpgCWYJZq8K8Fj8PZpXRTWaOp/+rbVYHUw+T2uP9xQA/eNyIejMN6Yk5GqwnBHkY6X1DKqIl3q6Zix1VWZ/m1A28peGSVpezX6xrnxbjhBOVgoyYK+hqt3q1uaNQamm/1YG7lRu/zlpGULXGubEgcccHNT6wKo5N0ryunIsT9XATG8JaFTSv/0=",
        "backchannel.logout.session.required": "false",
        "client_credentials.use_refresh_token": "false",
        "saml.signature.algorithm": "RSA_SHA256",
        "saml.client.signature": "true",
        "saml.signing.private.key": "MIIEowIBAAKCAQEAnUwWICyeHfzA0XKSv1A8a9K3OqKeQKbbRnfdd59bCoDCO2xvi20oPYDXOXjAEqM0WfUWK/YtsZSKtIN6tjqRXbb8/R5Q0I4UJb0FnwCGFFqBfZvmoP9aVB53rYwkXz6OxLAs1yyzTT7xbXPJ0w3jiqBZ/ck8h2h9cjmbGpX/wv1HnLvmvFQxZXLxp3I/QwzKXEcUprKxle1Nh1akMtICuv8GeHesamX53bJGSQERiykRbUnjV5o01hy0kbLSjtPh26ReTGNXVg7/RqcXt3JPLsPiiKNGit8HYhBoc0eCoxJnQNIZT9of3TB/GV/cUA15mqxWGplUL4tKKVVraqp4zQIDAQABAoIBAFGKvfWT66vz+Ska0gQnXgsvQxk8b/loBkgznzWCALojIY2YmwKWZcPsZKZAeKGwxVTU/tdvWSSzsmv9tMF+/xir4d59trtGzB78LEvPA7LNcE9jYF2ZwoPU/4mSGtDdJznDcpthatnihVmOKtQkYQ7eLYiop54yhsWOI1/W3q1/uCpYBkmdoa6siHrR8+AVu9OlGcTZy9hlECGvNSsUJvMUxu/Yn6NoNT6nF7bpW/zYJ0L2roIKH+7GVGjZjQc9E/Wjw6OvpKt+gCq9Ft0LEUP+oGN5IPsaxgYklvqXfVNsVu62m/t40up+eX1LWMuVD2tzHQIdkIRiSfrjbSW0oqkCgYEA744XWwedMoVRwr6jRFExnjsF94MCf7nA/dpcynoghlLsKUK9tWY1GWcgSu9bmsKO+mzdH7YaZITW3sROwT6FYGpWI/vmkK0yzG73fPWAv9bds9095Coa+GhRSVQ8IE1CRztjduZbKdONZYDtDZDUDURzdD7nYy+Z4M2FmPFNXEcCgYEAqBhoK025hIRdWbbNRaXvRuJrSPq69v5r0E9/5RE4vfvABbL+lYar0NgDN7jSk+2ZOuQMPhol0FdA9WGAqDErp2oaoeHJOaciIKiJVC6hp5VjEUBevB7Cc9l9zFiUW/BBpbeoVWMOCToyx+LE5SZKoEAUcE8VnKbEBFVOTqzkEEsCgYBb86q7YlzQu6P6oLqCyrfFCNrtevhGlsKhrmPXxLEfXk0QOXIgYy8WpSMcIGyFJxFCxu7J8ViIJQVlVOz1+E2yCJ8wCM0j05egKSgOax4UhSFsnQvYvODFYSVyhEbgD0fVl9JCHYH4uB+aSrazclgzD4dRo6OlyuvCAqG5Z0ZOmQKBgAMA5KOZcO4oO07GEGblLyBSHV6hdEPDigOf2AYsx5nFbMntR9U+IcXKhkwxljmkbi96ManOZ8yQMo3v3w+iSUhlgfJQiXrpPJfeyw1hA+xto+aEAu1Tk1/ki/Xhw0zdPx8J6A0WhwKtMokVyTTa+UxhuLvE/frdk/UL3SlUt4J/AoGBAMjVfAY6sKPCFEqn7UR6tKIc3VxOZYEn8Wo9TDyuCukeMeAPpmsQsmf+bkUFmTOR0TSDv5NQrrbekolovQWoMpW1f7DCVdTK10lptkcNKz3o1UPa2fUaq6SPrfPhcqnh/N098NdsnywTnrXsRXtXcPpkLvk8INRws6xAykjaScdl",
        "saml.assertion.signature": "true",
        "saml_single_logout_service_url_post": "https://roche.euro-academy.fr",
        "saml.encrypt": "false",
        "saml_assertion_consumer_url_post": "https://roche.euro-academy.fr/saml/login_check",
        "saml.server.signature": "true",
        "exclude.session.state.from.auth.response": "false",
        "saml_single_logout_service_url_redirect": "https://roche.euro-academy.fr",
        "saml_force_name_id_format": "false",
        "tls.client.certificate.bound.access.tokens": "false",
        "saml.authnstatement": "true",
        "display.on.consent.screen": "false",
        "saml_name_id_format": "username",
        "saml.onetimeuse.condition": "false",
        "saml_signature_canonicalization_method": "http://www.w3.org/2001/10/xml-exc-c14n#"
      },
      "authenticationFlowBindingOverrides": {},
      "fullScopeAllowed": true,
      "nodeReRegistrationTimeout": -1,
      "protocolMappers": [
        {
          "id": "860362af-3c90-4e95-af9e-d3e338dcba45",
          "name": "X500 surname",
          "protocol": "saml",
          "protocolMapper": "saml-user-property-mapper",
          "consentRequired": false,
          "config": {
            "attribute.nameformat": "urn:oasis:names:tc:SAML:2.0:attrname-format:uri",
            "user.attribute": "lastName",
            "friendly.name": "surname",
            "attribute.name": "urn:oid:2.5.4.4"
          }
        },
        {
          "id": "7b3b074e-590b-4cc0-8c8c-1663adcbc55b",
          "name": "X500 email",
          "protocol": "saml",
          "protocolMapper": "saml-user-property-mapper",
          "consentRequired": false,
          "config": {
            "attribute.nameformat": "urn:oasis:names:tc:SAML:2.0:attrname-format:uri",
            "user.attribute": "email",
            "friendly.name": "email",
            "attribute.name": "urn:oid:1.2.840.113549.1.9.1"
          }
        },
        {
          "id": "865ed0f8-3059-458f-bdfb-cdde874ad4ae",
          "name": "X500 givenName",
          "protocol": "saml",
          "protocolMapper": "saml-user-property-mapper",
          "consentRequired": false,
          "config": {
            "attribute.nameformat": "urn:oasis:names:tc:SAML:2.0:attrname-format:uri",
            "user.attribute": "firstName",
            "friendly.name": "givenName",
            "attribute.name": "urn:oid:2.5.4.42"
          }
        },
        {
          "id": "36d50ebe-db8a-4aec-8a78-7d3d628c6e86",
          "name": "X500 ID",
          "protocol": "saml",
          "protocolMapper": "saml-user-property-mapper",
          "consentRequired": false,
          "config": {
            "user.attribute": "id",
            "friendly.name": "id",
            "attribute.name": "urn:oid:1.2.840.113549.1.9.1"
          }
        },
        {
          "id": "5aaf212b-ffb6-49c6-94dd-dbc896228f18",
          "name": "role list",
          "protocol": "saml",
          "protocolMapper": "saml-role-list-mapper",
          "consentRequired": false,
          "config": {
            "single": "false",
            "attribute.nameformat": "Basic",
            "attribute.name": "Role"
          }
        }
      ],
      "defaultClientScopes": [
        "web-origins",
        "role_list",
        "profile",
        "roles",
        "email"
      ],
      "optionalClientScopes": [
        "address",
        "phone",
        "offline_access",
        "microprofile-jwt"
      ]
    },
```