"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7777],{6334:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"Guide-de-migration-vers-Ubuntu-22.04-PHP-7.4-MySQL-8","metadata":{"permalink":"/notebook/blog/Guide-de-migration-vers-Ubuntu-22.04-PHP-7.4-MySQL-8","editUrl":"https://github.com/scheffershen/notebook/tree/main/blog/2022-12-10 Guide de migration vers Ubuntu 22- PHP 74 - MySQL 8/index.md","source":"@site/blog/2022-12-10 Guide de migration vers Ubuntu 22- PHP 74 - MySQL 8/index.md","title":"Guide de migration vers Ubuntu 22.04, PHP 7.4, MySQL 8","description":"Etape 1. Suavegarder des bases des donn\xe9es MySQL et les donn\xe9es client (/var/www/client.medica-source.com/app/data)","date":"2022-12-10T00:00:00.000Z","formattedDate":"December 10, 2022","tags":[{"label":"Ubuntu","permalink":"/notebook/blog/tags/ubuntu"},{"label":"PHP","permalink":"/notebook/blog/tags/php"},{"label":"MySQL","permalink":"/notebook/blog/tags/my-sql"}],"readingTime":0.89,"hasTruncateMarker":false,"authors":[{"name":"Yi Shen","title":"Web Developer","url":"https://github.com/scheffershen","imageURL":"https://github.com/scheffershen.png","key":"yshen"}],"frontMatter":{"slug":"Guide-de-migration-vers-Ubuntu-22.04-PHP-7.4-MySQL-8","title":"Guide de migration vers Ubuntu 22.04, PHP 7.4, MySQL 8","authors":["yshen"],"tags":["Ubuntu","PHP","MySQL"]},"nextItem":{"title":"LMS SSO Configuration and Tests","permalink":"/notebook/blog/LMS-SSO-Configuration-and-Tests"}},"content":"### Etape 1. Suavegarder des bases des donn\xe9es MySQL et les donn\xe9es client (/var/www/client.medica-source.com/app/data)\\r\\n\\t\\r\\n\\t$ mysqldump -u -root -p ms_mutualise > ms_mutualise.sql\\r\\n\\t\\r\\n### Etape 2. Mettre \xe0 niveau Ubuntu 18.04 vers 20.04 LTS\\r\\n\\t\\r\\n\\t$ do-release-upgrade\\r\\n\\r\\nConserver toutes les versions actuellement install\xe9es.\\r\\n\\r\\nPHP 7.4, MySQL 8 sont par d\xe9faut sous Ubuntu 20.04\\r\\n\\r\\n    $ cd /var/www/mutualise.medica-source.com\\r\\n    $ svn up vendor_php74\\r\\n    $ mv vendor vendor_php72\\r\\n    $ mv vendor_php74 vendor\\r\\n    $ rm var/cache/prod -r\\r\\n\\r\\n### Etape 3. Mettre \xe0 niveau Ubuntu 20.04 vers 22.04 LTS\\r\\n\\r\\n    $ sudo apt list --upgradable\\r\\n    $ sudo apt update && sudo apt upgrade -y\\r\\n    $ sudo reboot\\r\\n\\r\\n    $ do-release-upgrade \\r\\n    $ lsb_release -a\\r\\n\\r\\n### Etape 4. R\xe9installer PHP 7.4 sur Ubuntu 22.04 LTS\\r\\n\\r\\n\\t$ sudo apt update && sudo apt upgrade\\r\\n    $ sudo apt install software-properties-common\\r\\n    $ sudo add-apt-repository ppa:ondrej/php -y\\r\\n    $ apt install php7.4\\r\\n    $ apt install php7.4-common php7.4-mysql php7.4-xml php7.4-xmlrpc php7.4-curl php7.4-gd php7.4-imagick php7.4-cli php7.4-dev php7.4-json php7.4-imap php7.4-mbstring php7.4-gettext php7.4-bcmath php7.4-bz2 php7.4-readline php7.4-opcache php7.4-soap php7.4-zip php7.4-intl php7.4-ldap -y\\r\\n\\r\\n    $ sudo update-alternatives --config php\\r\\n    $ sudo apt install libapache2-mod-php7.4\\r\\n    $ sudo a2enmod php7.4\\r\\n    $ service apache2 restart"},{"id":"LMS-SSO-Configuration-and-Tests","metadata":{"permalink":"/notebook/blog/LMS-SSO-Configuration-and-Tests","editUrl":"https://github.com/scheffershen/notebook/tree/main/blog/2022-12-04 LMS SSO Configuration and Tests/index.md","source":"@site/blog/2022-12-04 LMS SSO Configuration and Tests/index.md","title":"LMS SSO Configuration and Tests","description":"What is SSO ?","date":"2022-12-04T00:00:00.000Z","formattedDate":"December 4, 2022","tags":[{"label":"SSO","permalink":"/notebook/blog/tags/sso"},{"label":"Configuration","permalink":"/notebook/blog/tags/configuration"}],"readingTime":4.04,"hasTruncateMarker":false,"authors":[{"name":"Yi Shen","title":"Web Developer","url":"https://github.com/scheffershen","imageURL":"https://github.com/scheffershen.png","key":"yshen"}],"frontMatter":{"slug":"LMS-SSO-Configuration-and-Tests","title":"LMS SSO Configuration and Tests","authors":["yshen"],"tags":["SSO","Configuration"]},"prevItem":{"title":"Guide de migration vers Ubuntu 22.04, PHP 7.4, MySQL 8","permalink":"/notebook/blog/Guide-de-migration-vers-Ubuntu-22.04-PHP-7.4-MySQL-8"},"nextItem":{"title":"Guide du d\xe9veloppeur","permalink":"/notebook/blog/guide-developpeur"}},"content":"### What is SSO ?\\r\\n\\r\\nSingle sign-on (SSO) is a technology that provide the user authentication service that permits a user to use one set of login credentials, for example, a username and password, to access all of their SaaS applications.\\r\\nSingle sign on would allow the enterprise system to securely store and own all of the user credentials. The platform then  establishes a trust relationship with the enterprise authentication server and client applications can be built to make the most of the trusted auth server to authenticate users.\\r\\n \\r\\n### What is SAML ?\\r\\n\\r\\nSecurity Assertion Markup Language (SAML) is a protocol that enables SSO and follows a standardized way to verify the users\u2019 credentials once and updates other applications about the user\u2019s identity. \\r\\n \\r\\nThe protocol involves a user, an identity provider and a service provider to authenticate and transfer data between the parties.\\r\\nLet\u2019s say you work for a company and they provided credentials to access the dashboard. The dashboard includes various external services. When you click on any external service, you automatically sign in to another web application without filling in any credentials. All this happened because of the SAML. The protocol uses XML based authentication to transfer a user\u2019s identity between the IdP and SP. IdP, also known as Identity Provider, is responsible for authenticating and sharing identity data to SP.\\r\\nSP (ex : demo.lms.fr), also known as Service Provider, receives the validated information from the IdP (ex :  PingOne server) and authorizes the user to access the external service or resources. Overall, with the help of SAML, any user with a valid account can access resources from multiple applications.\\r\\n\\r\\n### What is EuroPharma LMS ?\\r\\n\\r\\nEuropharma learning management system (LMS) is a web-based application that delivers online courses to your employees. It uses PHP 7 language, Symfony 4 Framework and MySql 8 database and runs on Ubuntu 20.04 server.\\r\\n\\r\\n### How is EuroPharmaLMS SSO configured ?\\r\\n\\r\\nWe are using the LightSAML Core PHP library, LightSAML Core is a PHP library implementing OASIS SAML 2.0 protocol, fully OOP structured with DPI principles, reusable, and embeddable.\\r\\n \\r\\nSAML signing and encryption uses certificates (ex : `saml.crt`), to verify data sent between the Service Provider (SP, demo.lms.fr) and  PingOne Identity Provider (IdP,  PingOne). SAML certificates are distinct from SSL (TSL) certificates, which apply to the application\'s browser and are configured and maintained by the server.\\r\\nThe IdP ( PingOne Identity) server generates a metadata file (saml-idp.xml) that contains configuration and integration details for SAML 2.0 single sign-on. This file is used by SP (demo.lms.fr). \\r\\n\\r\\n### How to generate a certificate for the SAML application?\\r\\n\\r\\nRun the command given below :\\r\\n\\t\\r\\n\\t$ openssl req -new -x509 -days 365 -nodes -sha256 -out saml.crt -keyout saml.key\\r\\n\\r\\nYou will find the public certificate in `saml.crt` and private key in `saml.key` file in the current directory.\\r\\n\\r\\n### How are the tests performed ?\\r\\n\\r\\nWe use `KeyCloak` for demo Idp provider. `Keycloak` is an open-source identity and access management tool.\\r\\nBelow is the configuration file in json format for lms client :\\r\\n\\r\\n```json\\r\\n{\\r\\n      \\"id\\": \\"a0273a0d-08ba-4ded-941d-6166d63b42b6\\",\\r\\n      \\"clientId\\": \\"https://demo.lms.fr/saml/login_check\\",\\r\\n      \\"surrogateAuthRequired\\": false,\\r\\n      \\"enabled\\": true,\\r\\n      \\"alwaysDisplayInConsole\\": false,\\r\\n      \\"clientAuthenticatorType\\": \\"client-secret\\",\\r\\n      \\"secret\\": \\"**********\\",\\r\\n      \\"redirectUris\\": [],\\r\\n      \\"webOrigins\\": [],\\r\\n      \\"notBefore\\": 0,\\r\\n      \\"bearerOnly\\": false,\\r\\n      \\"consentRequired\\": false,\\r\\n      \\"standardFlowEnabled\\": true,\\r\\n      \\"implicitFlowEnabled\\": false,\\r\\n      \\"directAccessGrantsEnabled\\": false,\\r\\n      \\"serviceAccountsEnabled\\": false,\\r\\n      \\"publicClient\\": false,\\r\\n      \\"frontchannelLogout\\": true,\\r\\n      \\"protocol\\": \\"saml\\",\\r\\n      \\"attributes\\": {\\r\\n        \\"saml_assertion_consumer_url_redirect\\": \\"https://demo.lms.fr/saml/login_check\\",\\r\\n        \\"saml.force.post.binding\\": \\"true\\",\\r\\n        \\"saml.multivalued.roles\\": \\"false\\",\\r\\n        \\"backchannel.logout.revoke.offline.tokens\\": \\"false\\",\\r\\n        \\"saml.server.signature.keyinfo.ext\\": \\"false\\",\\r\\n        \\"saml.signing.certificate\\": \\"MIIC0TCCAbkCBgF45cfeLDANBgkqhkiG9w0BAQsFADAsMSowKAYDVQQDDCFodHRwOi8vMTI3LjAuMC4xL3NhbWwvbG9naW5fY2hlY2swHhcNMjEwNDE4MTYxODA0WhcNMzEwNDE4MTYxOTQ0WjAsMSowKAYDVQQDDCFodHRwOi8vMTI3LjAuMC4xL3NhbWwvbG9naW5fY2hlY2swggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCdTBYgLJ4d/MDRcpK/UDxr0rc6op5ApttGd913n1sKgMI7bG+LbSg9gNc5eMASozRZ9RYr9i2xlIq0g3q2OpFdtvz9HlDQjhQlvQWfAIYUWoF9m+ag/1pUHnetjCRfPo7EsCzXLLNNPvFtc8nTDeOKoFn9yTyHaH1yOZsalf/C/Uecu+a8VDFlcvGncj9DDMpcRxSmsrGV7U2HVqQy0gK6/wZ4d6xqZfndskZJARGLKRFtSeNXmjTWHLSRstKO0+HbpF5MY1dWDv9Gpxe3ck8uw+KIo0aK3wdiEGhzR4KjEmdA0hlP2h/dMH8ZX9xQDXmarFYamVQvi0opVWtqqnjNAgMBAAEwDQYJKoZIhvcNAQELBQADggEBAHYFNjCSeQmM4CZjWcGlY3yF0F0sJV9WWefQ0QrnIPhYasRYhtvtGAOKWX+PUPDSUTgKp8QOEQ8m3ZN7grErhfDJwohj/vMpfzR9VLQUhkevQgHQWA9njFNAqUJl+FQiX64qCrECsRQI9yIc6jx5QwUdrXFdEKmxwjpgCWYJZq8K8Fj8PZpXRTWaOp/+rbVYHUw+T2uP9xQA/eNyIejMN6Yk5GqwnBHkY6X1DKqIl3q6Zix1VWZ/m1A28peGSVpezX6xrnxbjhBOVgoyYK+hqt3q1uaNQamm/1YG7lRu/zlpGULXGubEgcccHNT6wKo5N0ryunIsT9XATG8JaFTSv/0=\\",\\r\\n        \\"backchannel.logout.session.required\\": \\"false\\",\\r\\n        \\"client_credentials.use_refresh_token\\": \\"false\\",\\r\\n        \\"saml.signature.algorithm\\": \\"RSA_SHA256\\",\\r\\n        \\"saml.client.signature\\": \\"true\\",\\r\\n        \\"saml.signing.private.key\\": \\"MIIEowIBAAKCAQEAnUwWICyeHfzA0XKSv1A8a9K3OqKeQKbbRnfdd59bCoDCO2xvi20oPYDXOXjAEqM0WfUWK/YtsZSKtIN6tjqRXbb8/R5Q0I4UJb0FnwCGFFqBfZvmoP9aVB53rYwkXz6OxLAs1yyzTT7xbXPJ0w3jiqBZ/ck8h2h9cjmbGpX/wv1HnLvmvFQxZXLxp3I/QwzKXEcUprKxle1Nh1akMtICuv8GeHesamX53bJGSQERiykRbUnjV5o01hy0kbLSjtPh26ReTGNXVg7/RqcXt3JPLsPiiKNGit8HYhBoc0eCoxJnQNIZT9of3TB/GV/cUA15mqxWGplUL4tKKVVraqp4zQIDAQABAoIBAFGKvfWT66vz+Ska0gQnXgsvQxk8b/loBkgznzWCALojIY2YmwKWZcPsZKZAeKGwxVTU/tdvWSSzsmv9tMF+/xir4d59trtGzB78LEvPA7LNcE9jYF2ZwoPU/4mSGtDdJznDcpthatnihVmOKtQkYQ7eLYiop54yhsWOI1/W3q1/uCpYBkmdoa6siHrR8+AVu9OlGcTZy9hlECGvNSsUJvMUxu/Yn6NoNT6nF7bpW/zYJ0L2roIKH+7GVGjZjQc9E/Wjw6OvpKt+gCq9Ft0LEUP+oGN5IPsaxgYklvqXfVNsVu62m/t40up+eX1LWMuVD2tzHQIdkIRiSfrjbSW0oqkCgYEA744XWwedMoVRwr6jRFExnjsF94MCf7nA/dpcynoghlLsKUK9tWY1GWcgSu9bmsKO+mzdH7YaZITW3sROwT6FYGpWI/vmkK0yzG73fPWAv9bds9095Coa+GhRSVQ8IE1CRztjduZbKdONZYDtDZDUDURzdD7nYy+Z4M2FmPFNXEcCgYEAqBhoK025hIRdWbbNRaXvRuJrSPq69v5r0E9/5RE4vfvABbL+lYar0NgDN7jSk+2ZOuQMPhol0FdA9WGAqDErp2oaoeHJOaciIKiJVC6hp5VjEUBevB7Cc9l9zFiUW/BBpbeoVWMOCToyx+LE5SZKoEAUcE8VnKbEBFVOTqzkEEsCgYBb86q7YlzQu6P6oLqCyrfFCNrtevhGlsKhrmPXxLEfXk0QOXIgYy8WpSMcIGyFJxFCxu7J8ViIJQVlVOz1+E2yCJ8wCM0j05egKSgOax4UhSFsnQvYvODFYSVyhEbgD0fVl9JCHYH4uB+aSrazclgzD4dRo6OlyuvCAqG5Z0ZOmQKBgAMA5KOZcO4oO07GEGblLyBSHV6hdEPDigOf2AYsx5nFbMntR9U+IcXKhkwxljmkbi96ManOZ8yQMo3v3w+iSUhlgfJQiXrpPJfeyw1hA+xto+aEAu1Tk1/ki/Xhw0zdPx8J6A0WhwKtMokVyTTa+UxhuLvE/frdk/UL3SlUt4J/AoGBAMjVfAY6sKPCFEqn7UR6tKIc3VxOZYEn8Wo9TDyuCukeMeAPpmsQsmf+bkUFmTOR0TSDv5NQrrbekolovQWoMpW1f7DCVdTK10lptkcNKz3o1UPa2fUaq6SPrfPhcqnh/N098NdsnywTnrXsRXtXcPpkLvk8INRws6xAykjaScdl\\",\\r\\n        \\"saml.assertion.signature\\": \\"true\\",\\r\\n        \\"saml_single_logout_service_url_post\\": \\"https://demo.lms.fr\\",\\r\\n        \\"saml.encrypt\\": \\"false\\",\\r\\n        \\"saml_assertion_consumer_url_post\\": \\"https://demo.lms.fr/saml/login_check\\",\\r\\n        \\"saml.server.signature\\": \\"true\\",\\r\\n        \\"exclude.session.state.from.auth.response\\": \\"false\\",\\r\\n        \\"saml_single_logout_service_url_redirect\\": \\"https://demo.lms.fr\\",\\r\\n        \\"saml_force_name_id_format\\": \\"false\\",\\r\\n        \\"tls.client.certificate.bound.access.tokens\\": \\"false\\",\\r\\n        \\"saml.authnstatement\\": \\"true\\",\\r\\n        \\"display.on.consent.screen\\": \\"false\\",\\r\\n        \\"saml_name_id_format\\": \\"username\\",\\r\\n        \\"saml.onetimeuse.condition\\": \\"false\\",\\r\\n        \\"saml_signature_canonicalization_method\\": \\"http://www.w3.org/2001/10/xml-exc-c14n#\\"\\r\\n      },\\r\\n      \\"authenticationFlowBindingOverrides\\": {},\\r\\n      \\"fullScopeAllowed\\": true,\\r\\n      \\"nodeReRegistrationTimeout\\": -1,\\r\\n      \\"protocolMappers\\": [\\r\\n        {\\r\\n          \\"id\\": \\"860362af-3c90-4e95-af9e-d3e338dcba45\\",\\r\\n          \\"name\\": \\"X500 surname\\",\\r\\n          \\"protocol\\": \\"saml\\",\\r\\n          \\"protocolMapper\\": \\"saml-user-property-mapper\\",\\r\\n          \\"consentRequired\\": false,\\r\\n          \\"config\\": {\\r\\n            \\"attribute.nameformat\\": \\"urn:oasis:names:tc:SAML:2.0:attrname-format:uri\\",\\r\\n            \\"user.attribute\\": \\"lastName\\",\\r\\n            \\"friendly.name\\": \\"surname\\",\\r\\n            \\"attribute.name\\": \\"urn:oid:2.5.4.4\\"\\r\\n          }\\r\\n        },\\r\\n        {\\r\\n          \\"id\\": \\"7b3b074e-590b-4cc0-8c8c-1663adcbc55b\\",\\r\\n          \\"name\\": \\"X500 email\\",\\r\\n          \\"protocol\\": \\"saml\\",\\r\\n          \\"protocolMapper\\": \\"saml-user-property-mapper\\",\\r\\n          \\"consentRequired\\": false,\\r\\n          \\"config\\": {\\r\\n            \\"attribute.nameformat\\": \\"urn:oasis:names:tc:SAML:2.0:attrname-format:uri\\",\\r\\n            \\"user.attribute\\": \\"email\\",\\r\\n            \\"friendly.name\\": \\"email\\",\\r\\n            \\"attribute.name\\": \\"urn:oid:1.2.840.113549.1.9.1\\"\\r\\n          }\\r\\n        },\\r\\n        {\\r\\n          \\"id\\": \\"865ed0f8-3059-458f-bdfb-cdde874ad4ae\\",\\r\\n          \\"name\\": \\"X500 givenName\\",\\r\\n          \\"protocol\\": \\"saml\\",\\r\\n          \\"protocolMapper\\": \\"saml-user-property-mapper\\",\\r\\n          \\"consentRequired\\": false,\\r\\n          \\"config\\": {\\r\\n            \\"attribute.nameformat\\": \\"urn:oasis:names:tc:SAML:2.0:attrname-format:uri\\",\\r\\n            \\"user.attribute\\": \\"firstName\\",\\r\\n            \\"friendly.name\\": \\"givenName\\",\\r\\n            \\"attribute.name\\": \\"urn:oid:2.5.4.42\\"\\r\\n          }\\r\\n        },\\r\\n        {\\r\\n          \\"id\\": \\"36d50ebe-db8a-4aec-8a78-7d3d628c6e86\\",\\r\\n          \\"name\\": \\"X500 ID\\",\\r\\n          \\"protocol\\": \\"saml\\",\\r\\n          \\"protocolMapper\\": \\"saml-user-property-mapper\\",\\r\\n          \\"consentRequired\\": false,\\r\\n          \\"config\\": {\\r\\n            \\"user.attribute\\": \\"id\\",\\r\\n            \\"friendly.name\\": \\"id\\",\\r\\n            \\"attribute.name\\": \\"urn:oid:1.2.840.113549.1.9.1\\"\\r\\n          }\\r\\n        },\\r\\n        {\\r\\n          \\"id\\": \\"5aaf212b-ffb6-49c6-94dd-dbc896228f18\\",\\r\\n          \\"name\\": \\"role list\\",\\r\\n          \\"protocol\\": \\"saml\\",\\r\\n          \\"protocolMapper\\": \\"saml-role-list-mapper\\",\\r\\n          \\"consentRequired\\": false,\\r\\n          \\"config\\": {\\r\\n            \\"single\\": \\"false\\",\\r\\n            \\"attribute.nameformat\\": \\"Basic\\",\\r\\n            \\"attribute.name\\": \\"Role\\"\\r\\n          }\\r\\n        }\\r\\n      ],\\r\\n      \\"defaultClientScopes\\": [\\r\\n        \\"web-origins\\",\\r\\n        \\"role_list\\",\\r\\n        \\"profile\\",\\r\\n        \\"roles\\",\\r\\n        \\"email\\"\\r\\n      ],\\r\\n      \\"optionalClientScopes\\": [\\r\\n        \\"address\\",\\r\\n        \\"phone\\",\\r\\n        \\"offline_access\\",\\r\\n        \\"microprofile-jwt\\"\\r\\n      ]\\r\\n    },\\r\\n```\\r\\n\\r\\n### Below is lms client general information page : \\r\\n \\r\\nAnd it\u2019s Idp xml :\\r\\n \\r\\nAnd lms client settings : \\r\\n \\r\\nAnd it\u2019s the public certificate and the private key :\\r\\n \\r\\nNow we created a test user account : \\r\\n \\r\\nAnd we checked it \\r\\n \\r\\nClicked on the login SSO button :\\r\\n \\r\\nWe arrived Idp login page, with the test user login (lambda@lambda.com) and password (azerty), we successfully retourned to SP(demo.lms.fr)."},{"id":"guide-developpeur","metadata":{"permalink":"/notebook/blog/guide-developpeur","editUrl":"https://github.com/scheffershen/notebook/tree/main/blog/2022-11-01 Guide-developpeur/index.md","source":"@site/blog/2022-11-01 Guide-developpeur/index.md","title":"Guide du d\xe9veloppeur","description":"SOLID","date":"2022-11-01T00:00:00.000Z","formattedDate":"November 1, 2022","tags":[{"label":"solid","permalink":"/notebook/blog/tags/solid"},{"label":"code quality","permalink":"/notebook/blog/tags/code-quality"},{"label":"code analyser","permalink":"/notebook/blog/tags/code-analyser"},{"label":"unit testing","permalink":"/notebook/blog/tags/unit-testing"},{"label":"workflow","permalink":"/notebook/blog/tags/workflow"},{"label":"git","permalink":"/notebook/blog/tags/git"}],"readingTime":4.425,"hasTruncateMarker":false,"authors":[{"name":"Yi Shen","title":"Web Developer","url":"https://github.com/scheffershen","imageURL":"https://github.com/scheffershen.png","key":"yshen"}],"frontMatter":{"slug":"guide-developpeur","title":"Guide du d\xe9veloppeur","authors":["yshen"],"tags":["solid","code quality","code analyser","unit testing","workflow","git"]},"prevItem":{"title":"LMS SSO Configuration and Tests","permalink":"/notebook/blog/LMS-SSO-Configuration-and-Tests"},"nextItem":{"title":"Comment optimiser l\'application symfony","permalink":"/notebook/blog/comment-optimiser-l-application-symfony"}},"content":"### SOLID\\r\\n\\r\\nEn programmation orient\xe9e objet, SOLID est un acronyme mn\xe9monique qui regroupe cinq principes de conception destin\xe9s \xe0 produire des architectures logicielles plus compr\xe9hensibles, flexibles et maintenables. \\r\\n\\r\\n- [Single Responsibility Principle]\\r\\n\\t+ Une classe ne doit avoir qu\'une seule et unique responsabilit\xe9\\r\\n- [Open/Closed Principle]\\r\\n\\t+ Les entit\xe9s doivent \xeatre ouvertes \xe0 l\'extension et ferm\xe9es \xe0 la modification.\\r\\n- [Liskov\u2019s Substitution Principle]\\r\\n\\t+ Les objets dans un programme doivent \xeatre rempla\xe7ables par des instances de leur sous-type sans pour autant alt\xe9rer le bon fonctionnement du programme.\\r\\n- [Interface Segregation Principle]\\r\\n\\t+ Il vaut mieux faire plusieurs petites interfaces qu\u2019une seule grande.\\r\\n- [Dependency Inversion Principle]\\r\\n\\t+ Autrement dit, on \xe9vite de passer des objets en param\xe8tre lorsqu\u2019une interface est disponible.\\r\\n\\r\\n### Code Quality\\r\\n\\r\\nfriendsofphp/php-cs-fixer: A tool to automatically fix PHP Coding Standards issues\\r\\n\\t\\r\\n\\t$ mkdir --parents tools/php-cs-fixer\\r\\n\\t$ composer require --working-dir=tools/php-cs-fixer friendsofphp/php-cs-fixer\\r\\n\\t$ tools/php-cs-fixer/vendor/bin/php-cs-fixer fix src\\r\\n\\r\\n### Code Analyser\\r\\n\\r\\nPHPStan: PHP Static Analysis Tool - discover bugs in your code without running it!\\r\\n\\r\\n\\t$ composer require --dev phpstan/phpstan\\r\\n\\t$ vendor/bin/phpstan analyse ./src\\r\\n\\r\\n### Unit Testing\\r\\n\\r\\nphpunit: The PHP Unit Testing framework.\\r\\n\\t\\r\\n\\t$ composer require --dev phpunit/phpunit symfony/test-pack\\r\\n\\t$ vendor/bin/phpunit --coverage-clover=build/logs/clover.xml\\r\\n\\r\\n### Workflow\\r\\n\\r\\n**D\xe9but du d\xe9veloppement: r\xe9cuperer la branche test, cr\xe9er votre branchee** \\r\\n\\t\\r\\nR\xe9cuperer les inforamtions du serveur git sans fusionner avec les codes locaux \\r\\n\\t\\r\\n\\t$ git fetch --all \\t\\t\\t\\t\\r\\n\\t\\r\\nR\xe9cuperer les codes du serveur git et fusionner avec les codes locaux \\r\\n\\r\\n\\t$ git pull --all \\t\\t\\t\\t\\r\\n\\t\\r\\nBasculer vers la branche `master`\\r\\n\\r\\n\\t$ git checkout master \\t\\t\\t\\r\\n    \\r\\nCr\xe9er une branche `votre_branche`\\r\\n\\r\\n    $ git branch `votre_branche` \\t\\r\\n\\t\\r\\nBasculer vers la branche `votre_branche`\\r\\n\\r\\n\\t$ git checkout `votre_branche` \\t\\r\\n\\r\\n**Fin du d\xe9veloppement**  \\t\\r\\n\\r\\n**Etape 1**: R\xe9cuperer la branche master du serveur, fusionner avec votre branche \\r\\n\\t\\t\\r\\nV\xe9rifier si il y a des changements, et la branche `votre_branche`\\r\\n\\r\\n\\t$ git status \\t\\t\\t\\t\\t\\t\\r\\n\\t\\t\\r\\n\xe0 la fin du developpement ajouter toutes les modifications\\r\\n\\r\\n\\t$ git add . \\t\\t\\t\\t\\t\\t\\r\\n\\t\\t\\r\\nCommettre avec une message\\r\\n\\r\\n\\t$ git commit -m \\"message des modifications\\" \\t\\r\\n\\r\\nV\xe9rifier si la branche `votre_branche` est propre\\r\\n\\r\\n\\t$ git status \\t\\t\\t\\t\\t\\t\\r\\n\\r\\nBasculer vers la branche `master`\\r\\n\\r\\n\\t$ git checkout master \\t\\t\\t\\t \\r\\n\\t\\t\\r\\nR\xe9cuperer la branche `master` du serveur git\\t\\t\\r\\n\\r\\n\\t$ git pull origin master \\t\\t\\t\\t\\r\\n\\r\\nBasculer vers la branche `votre_branche`\\r\\n\\r\\n\\t$ git checkout `votre_branche` \\t\\t  \\r\\n\\r\\nFusionner avec les codes de la branche `master` et votre branche `votre_branche`\\r\\n\\r\\n\\t$ git merge master \\r\\n\\t\\t\\r\\n\xe9ventuellement: `$ composer install` plus `$ php bin/console doctrine:schema:update --force`)\\r\\n\\t\\t\\r\\nTester votre branche s\'il fonctionne encore\\r\\n\\r\\nV\xe9rifier si il y a des changements, et la branche `votre_branche`\\t\\r\\n\\r\\n\\t$ git status \\t\\t\\t\\t\\t\\t\\r\\n\\t\\t\\r\\n\xe0 la fin du developpement ajouter toutes les modifications\\r\\n\\r\\n\\t$ git add . \\t\\t\\t\\t\\t\\t\\r\\n\\r\\nCommettre avec une message\\t\\r\\n\\r\\n\\t$ git commit -m \\"fusionner master\\" \\t\\t\\r\\n\\t\\r\\n**Etape 2**: Basculer vers la branche `master`, fusionner votre branche avec --squash\\r\\n\\t\\t\\r\\nBasculer vers la branche `master`\\r\\n\\r\\n\\t$ git checkout master \\t\\t\\t\\t\\r\\n\\t\\t\\r\\nFusionner avec les codes du votre branche `votre_branche` et la branche `master`\\r\\n\\r\\n\\t$ git merge --squash `votre_branche`  \\r\\n\\t\\t\\r\\nEventuellement: `$ composer install` plus `$ php bin/console doctrine:schema:update --force`)\\r\\n\\t\\t\\r\\nOption `--squash` pour rec\xe9er les commits messages de la branche `master` plus proprement\\r\\n\\t\\t\\r\\nTester votre branche s\'il fonctionne encore\\r\\n\\t\\t\\r\\nV\xe9rifier si il y a des changements, et la branche `master`\\t\\r\\n\\r\\n\\t$ git status \\t\\t\\t\\t\\t\\t\\r\\n\\t\\t*\\r\\nAjouter toutes les modifications\\r\\n\\r\\n\\t$ git add . \\t\\t\\t\\t\\t\\t\\r\\n\\r\\nCommettre avec une message\\t\\r\\n\\r\\n\\t$ git commit -m \\"message des modifications\\"\\r\\n\\t\\t\\r\\nEnvoyer les codes de la branche `master` au serveur\\r\\n\\r\\n\\t$ git push origin master \\t\\t\\t\\t\\r\\n\\t\\r\\n**Etape 3**: Retourner vers votre branche pour l\'autre d\xe9veloppement\\r\\n\\t\\t\\r\\nBasculer vers la branche `votre_branche` \\r\\n\\r\\n\\t$ git checkout `votre_branche` \\t\\t  \\r\\n\\r\\n**Installation du projet avec git** \\r\\n\\r\\nSi vous avez d\xe9j\xe0 le dossier du d\xe9veloppement\\r\\n\\t\\r\\n\\t$ cd `votre_dossier` \\r\\n\\t\\r\\nCr\xe9er un projet initial en git\\r\\n\\r\\n\\t$ git init                     \\t\\t\\r\\n\\t\\r\\nAjouetr un remote git r\xe9positorie\\r\\n\\r\\n\\t$ git remote add origin git@`votre_serveur`:/home/git/`votre_projet`.git  \\r\\n\\r\\nSi vous n\'avez pas le dossier du d\xe9veloppement\\r\\n\\t\\r\\nCloner le projet\\r\\n\\r\\n\\t$ git clone git@`votre_serveur`:/home/git/`votre_projet`.git `votre_dossier`  \\r\\n\\r\\n### Commands utiles\\r\\n    \\r\\nAfficher la information du serveur remote de git\\r\\n\\r\\n    $ git remote -v \\t\\t \\r\\n\\t\\r\\nAfficher les inforamtions de la changement et de la branche\\r\\n\\r\\n\\t$ git status  \\t\\t\\t\\r\\n\\t\\r\\nAfficher les branches locales et les branches remotes\\r\\n\\r\\n\\t$ git branch -a        \\r\\n\\t\\r\\nAfficher les branches locales, les branches remotes et les relations\\t\\r\\n\\t\\r\\n\\t$ git branch -vv  \\t\\r\\n\\t\\r\\nAfficher que les messages de commettre\\t\\r\\n\\r\\n\\t$ git log --oneline     \\r\\n\\t\\r\\nLier la branche locale vers la branche remote ex: `votre_branche` \\r\\n\\r\\n\\t$ git push --set-upstream origin `votre_branche` \\r\\n\\t\\r\\nPouser la branche locale vers la branche remote ex: `votre_branche` \\r\\n\\r\\n\\t$ git push origin `votre_branche`\\r\\n\\t\\r\\nModifer le message du dernier commettre\\r\\n\\r\\n\\t$ git commit --amend \\t\\r\\n\\t\\r\\nSupprimer la branche locale `votre_branche`\\r\\n\\r\\n\\t$ git branch -d `votre_branche` \\t\\r\\n\\t\\r\\nSupprimer la branche locale `votre_branche` en force\\r\\n\\r\\n\\t$ git branch -D `votre_branche` \\t\\r\\n\\t\\r\\nSupprimer la branche remote `votre_branche`\\r\\n\\r\\n\\t$ git push origin --delete `votre_branche` \\r\\n\\t\\r\\nAffichier les fichiers qui ont \xe9t\xe9 modifi\xe9s entre les commetres `55dc9e34`...`575c9e34`\\r\\n\\r\\n\\t$ git diff --nameonly 55dc9e34...575c9e34 \\r\\n\\t\\r\\nDefinir l\'editor par default\\r\\n\\r\\n\\t$ git config --global core.editor \\"\'c:/Program Files/Sublime Text 3/sublime_text.exe\' -w\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\r\\nAfficher les fichiers commetres par le commit `commit`\\r\\n\\r\\n\\t$ git show `commit` --name-only \\r\\n\\t\\r\\nCombiner 3 commits \xe0 1 commit, mais avant le push\\r\\n\\r\\n\\t$ git reset --soft HEAD~3 && git commit \\t\\t\\t\\r\\n\\t\\r\\nCombiner 5 commits \xe0 1 commit, mais avant le push\\r\\n\\r\\n\\t$ git rebase -i HEAD~5  \\t\\r\\n\\r\\n### Branches\\r\\n\\r\\n- Branche master: la branche pour tester et valider et avant d\xe9livrer vers la branche release\\r\\n- Branche dev_1: la branche du d\xe9veloppement de dev_1\\r\\n- Branche dev_2: la branche du d\xe9veloppement de dev_2\\r\\n- Branche dev_3: la branche du d\xe9veloppement de dev_3\\r\\n- Branche release_1.0.0: la branche de la version 1.0.0\\r\\n- Branche release_1.0.1: la branche de la version 1.0.1"},{"id":"comment-optimiser-l-application-symfony","metadata":{"permalink":"/notebook/blog/comment-optimiser-l-application-symfony","editUrl":"https://github.com/scheffershen/notebook/tree/main/blog/2021-12-13 Comment-optimiser-l-application-symfony/index.md","source":"@site/blog/2021-12-13 Comment-optimiser-l-application-symfony/index.md","title":"Comment optimiser l\'application symfony","description":"1. Activer OpCache extension","date":"2021-12-13T00:00:00.000Z","formattedDate":"December 13, 2021","tags":[{"label":"symfony","permalink":"/notebook/blog/tags/symfony"},{"label":"php","permalink":"/notebook/blog/tags/php"},{"label":"optimisation","permalink":"/notebook/blog/tags/optimisation"}],"readingTime":4.25,"hasTruncateMarker":false,"authors":[{"name":"Yi Shen","title":"Web Developer","url":"https://github.com/scheffershen","imageURL":"https://github.com/scheffershen.png","key":"yshen"}],"frontMatter":{"slug":"comment-optimiser-l-application-symfony","title":"Comment optimiser l\'application symfony","authors":["yshen"],"tags":["symfony","php","optimisation"]},"prevItem":{"title":"Guide du d\xe9veloppeur","permalink":"/notebook/blog/guide-developpeur"}},"content":"### 1. Activer OpCache extension\\r\\n\\r\\nOpCache. Il compile et optimise les scripts PHP et les met en cache m\xe9moire afin qu\'ils ne soient pas compil\xe9s chaque fois que la page est charg\xe9e.\\r\\n\\r\\ninstallation: \\r\\n\\r\\n\\t$ sudo apt install php7.4-opcache\\r\\n\\r\\nconfiguration: \\r\\n\\r\\n/etc/php7.4/conf.d/opcache.ini \\r\\n\\r\\n```\\r\\nopcache.memory_consumption=512 ;for caching all compiled files\\r\\nopcache.interned_strings_buffer=32\\r\\nopcache.max_accelerated_files=32531 ;by default can cache 2000 files\\r\\nopcache.revalidate_freq=60\\r\\nopcache.fast_shutdown=1\\r\\nopcache.enable_cli=0\\r\\nopcache.enable=1\\r\\nopcache.save_comments=1\\r\\n```\\r\\n\\r\\n### 2. Asynchroniser les requ\xeats simultan\xe9ment\\r\\n\\r\\nexemple 1: symfony 3.4 et php 7.2\\r\\n\\r\\n```php\\r\\nuse Icicle\\\\{Coroutine\\\\Coroutine, Loop, Awaitable};\\r\\n\\r\\n$_tickets =  new Coroutine($ticket->findAll());\\r\\n$tickets = $_tickets->wait();\\r\\n$_interactions =  new Coroutine($interaction->findAll());\\r\\n$interactions = $_interactions->wait();\\r\\n$_faqs =  new Coroutine($faq->findAll());\\r\\n$faqs = $_faqs->wait();\\r\\n...\\r\\n\\r\\nLoop\\\\Run();\\r\\n```\\r\\n\\r\\n### 3. Utiliser la fonction g\xe9n\xe9rateur pour consommer moins des m\xe9moires\\r\\n\\r\\nUn g\xe9n\xe9rateur vous permet d\'\xe9crire du code qui utilise foreach pour parcourir un jeu de donn\xe9es, sans avoir \xe0 construire un tableau en m\xe9moire pouvant conduire \xe0 d\xe9passer la limite de la m\xe9moire ou n\xe9cessiter un temps important pour sa g\xe9n\xe9ration.\\r\\n\\r\\nune fonction g\xe9n\xe9rateur, qui est identique \xe0 une fonction normale, mis \xe0 part le fait qu\'au lieu de retourner une seule fois, un g\xe9n\xe9rateur peut utiliser yield autant de fois que n\xe9cessaire, afin de fournir les valeurs \xe0 parcourir.\\r\\n\\r\\nUn exemple simple de ce m\xe9canisme est la r\xe9-impl\xe9mentation de la fonction range() sous la forme d\'un g\xe9n\xe9rateur. La fonction standard range() doit g\xe9n\xe9rer un tableau contenant chaque valeur, et le retourner, ce qui peut conduire \xe0 des tableaux de taille importante : par exemple, l\'appel du code range(0, 1000000) peut consommer nettement plus de 100 Mo de m\xe9moire.\\r\\n\\r\\nComme alternative, nous pouvons impl\xe9menter un g\xe9n\xe9rateur xrange(), qui n\'aura en besoin m\xe9moire que la seule cr\xe9ation d\'un objet Iterator, et devra garder trace en interne du statut courant du g\xe9n\xe9rateur, ce qui revient \xe0 une consommation m\xe9moire inf\xe9rieure \xe0 1 Ko.\\r\\n\\r\\nexemple: findAll() \\r\\n\\r\\n```php\\r\\n    public function findAll()\\r\\n    {\\r\\n        $queryBuilder = $this->createQueryBuilder(\'t\')\\r\\n            ->select(\'t.id, t.question, t.answer, t.answer, t.date\')\\r\\n            ->orderBy(\'t.id\');\\r\\n\\r\\n        $limit = 1000;\\r\\n        $offset = 0;\\r\\n\\r\\n        while (true) {\\r\\n            $queryBuilder->setFirstResult($offset);\\r\\n            $queryBuilder->setMaxResults($limit);\\r\\n\\r\\n            $tickets = $queryBuilder->getQuery()->getResult();\\r\\n\\r\\n            if (count($tickets) === 0) {\\r\\n                break;\\r\\n            }\\r\\n\\r\\n            foreach ($tickets as $ticket) {\\r\\n                yield $ticket;\\r\\n                $this->_em->detach($ticket);\\r\\n            }\\r\\n\\r\\n            $offset += $limit;\\r\\n        }\\r\\n    } \\r\\n```\\r\\n\\r\\n### 3. Eviter d\'utiliser \\"select * \\" dans le doctrine requ\xeate.\\r\\n\\r\\nexemple: \\r\\n\\r\\n\\tSELECT F.id, F.reference FROM FAQ F WHERE F.isValid = 1\\r\\n\\r\\n### 4. Activer le cache de Doctrine.\\r\\n\\r\\nIl faut savoir qu\u2019il y a 3 types de cache pour Doctrine :\\r\\n\\r\\n- Query Cache : transformation DQL -> SQL;\\r\\n- Result Cache : r\xe9sultat de la requ\xeate;\\r\\n- Metadata Cache : annotation des entities.\\r\\n\\r\\ninstallation: \\r\\n\\r\\n    $ sudo apt install redis-server\\r\\n    $ composer require snc/redis-bundle\\r\\n\\r\\nconfiguration: \\r\\n\\r\\n```yaml\\r\\n# Doctrine Configuration\\r\\ndoctrine:\\r\\n  dbal:\\r\\n    #...\\r\\n  orm:\\r\\n    auto_generate_proxy_classes: \'%kernel.debug%\'\\r\\n    naming_strategy: doctrine.orm.naming_strategy.underscore\\r\\n    # IMPORTANT!\\r\\n    auto_mapping: true\\r\\n    metadata_cache_driver: redis\\r\\n    query_cache_driver: redis\\r\\n\\r\\n```\\r\\n\\r\\nMettre en cache le r\xe9sultat\\r\\n\\r\\n```php\\r\\npublic function findBeers()\\r\\n{\\r\\n    $query = $this->getEntityManager()\\r\\n        ->createQuery(\\r\\n            \'select beers from MaxpouBeerBundle:Beers b\'\\r\\n        )\\r\\n    ;\\r\\n\\r\\n    $query->useResultCache(true);\\r\\n    $query->setResultCacheLifetime(3600); //3600sec = 1 hour\\r\\n\\r\\n    return $query->getResult();\\r\\n}\\r\\n```\\r\\n\\r\\nPour nettoyer le cache, voici quelques commandes \\r\\n\\r\\n    # Nettoyer cache des queries\\r\\n    $ php bin/console doctrine:cache:clear-query\\r\\n    # Nettoyer cache des metadatas\\r\\n    $ php bin/console doctrine:cache:clear-metadata\\r\\n    # Nettoyer cache des r\xe9sultats\\r\\n    $ php bin/console doctrine:cache:clear-result\\r\\n    # Vider la base redis\\r\\n    $ php bin/console redis:flushdb\\r\\n\\r\\n### 5. Mise en cache les HTTP req\xeates\\r\\n\\r\\nexemple: \\r\\n\\r\\n```php\\r\\n    $response = $this->render(\'SearchManagement/Dci/index.html.twig\', [\\r\\n        \'dcis\' => $this->dciRepository->findAll(),\\r\\n    ]);\\r\\n\\r\\n    $response->setSharedMaxAge(60);\\r\\n\\r\\n    return $response;\\r\\n```\\r\\n\\r\\n### 6. Augementer le nombre des cores, la fr\xe9quence de cpu, et la RAM\\r\\n\\r\\nPHP n\'est pas con\xe7u pour le multithreading. Par cons\xe9quent, chaque page/requ\xeate est servie par un processus PHP et chaque processus se verrouille sur un c\u0153ur de processeur.\\r\\n\\r\\nSi votre serveur Web a des demandes de pages simultan\xe9es, vous aurez \xe9galement plusieurs processus PHP - chacun utilisant un c\u0153ur de processeur - s\'ex\xe9cutant simultan\xe9ment.\\r\\n\\r\\nS\'il faut 3 secondes \xe0 un c\u0153ur de processeur \xe0 2 GHz pour traiter une demande, un c\u0153ur de processeur \xe0 3 GHz renvoie la m\xeame demande en 2 secondes environ.\\r\\n\\r\\nLa r\xe8gle est RAM=2x(Nombre de Cores) Go ou RAM=4x(Nombre de Cores) Go\\r\\n\\r\\n### 7. Augementer la taille du swap\\r\\n\\r\\nAugmenter l\'espace d\'\xe9change (SWAP), la r\xe8gle d\'or est swap=2xRAM.\\r\\n\\r\\nLinux supporte la m\xe9moire virtuelle, c\'est \xe0 dire l\'utilisation d\'un disque comme extension de la RAM de telle sorte que la taille effective de la m\xe9moire utilisable s\'accro\xeet d\'autant. Le noyau \xe9crira le contenu d\'un bloc m\xe9moire inutilis\xe9 sur le disque dur, ainsi la m\xe9moire vive peut \xeatre utilis\xe9e pour autre chose. Quand ce contenu est \xe0 nouveau n\xe9cessaire, il est relu en m\xe9moire. Tout ceci se d\xe9roule de fa\xe7on transparente pour l\'utilisateur ; les programmes s\'ex\xe9cutant sous Linux voient seulement toute la m\xe9moire disponible et ne remarquent pas que des parties de celle-ci se trouvent sur le disque de temps \xe0 autre. Bien s\xfbr, lire et \xe9crire sur le disque dur est plus lent (de l\'ordre de mille fois plus lent) qu\'en utilisant la m\xe9moire r\xe9elle et donc les programmes ne s\'ex\xe9cutent pas aussi vite. La partie du disque dur utilis\xe9e comme m\xe9moire virtuelle est appel\xe9e espace de swap\\r\\n\\r\\n### 8. Utiliser le crontab pour les t\xe2ches lourdes\\r\\n\\r\\nCrontab est un outil qui permet de lancer des applications de fa\xe7on r\xe9guli\xe8re, pratique pour un serveur pour y lancer des scripts de sauvegardes, etc"}]}')}}]);