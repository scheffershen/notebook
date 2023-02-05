NelmioCorsBundle
===============

*trop facile*

Adds CORS headers support in your Symfony2 application

## Projects which it use

- omed
    * "friendsofsymfony/user-bundle": "~2.0@dev",
    * "api-platform/api-pack": "^1.0",
    * "lexik/jwt-authentication-bundle": "^2.4",
    * "nelmio/cors-bundle": "^1.5",
- documentManager
    * "api-platform/api-pack": "^1.0",
    * "javiereguiluz/easyadmin-bundle": "^1.17",
    * "lexik/jwt-authentication-bundle": "^2.4",
    * "nelmio/cors-bundle": "^1.5",
- Services
    + "api-platform/core": "^2.0",
    + "nelmio/cors-bundle": "^1.4",
    + "lexik/jwt-authentication-bundle",
- symfony4-mongodb-jwt-starter
    + "lexik/jwt-authentication-bundle": "^2.4",
    + "nelmio/cors-bundle": "^1.5",

## config/packages/nelmio_cors.yaml

- omed

```yaml
nelmio_cors:
    defaults:
        origin_regex: true
        allow_origin: ['%env(CORS_ALLOW_ORIGIN)%']
        allow_methods: ['GET', 'OPTIONS', 'POST', 'PUT', 'PATCH', 'DELETE']
        allow_headers: ['Content-Type', 'Authorization']
        max_age: 3600

```

- documentManager

```yaml
nelmio_cors:
    defaults:
        origin_regex: true
        allow_origin: ['%env(CORS_ALLOW_ORIGIN)%']
        allow_methods: ['GET', 'OPTIONS', 'POST', 'PUT', 'PATCH', 'DELETE']
        allow_headers: ['Content-Type', 'Authorization']
        max_age: 3600
    paths:
        '^/': ~
```

- coopcycle-web

```yaml
nelmio_cors:
    defaults:
        allow_origin:   ["%cors_allow_origin%"]
        allow_methods:  ["POST", "PUT", "GET", "DELETE", "OPTIONS"]
        allow_headers:  ["content-type", "authorization"]
        expose_headers: ["link"]
        max_age:        3600
    paths:
        '^/api/':
            allow_origin: ['*']
```

- Services

```yaml
nelmio_cors:
    defaults:
        allow_origin: ['%cors_allow_origin%']
        allow_methods: ['POST', 'PUT', 'GET', 'DELETE', 'OPTIONS']
        allow_headers: ['content-type', 'authorization']
        expose_headers: ['link']
        max_age: 3600
    paths:
        '^/': ~
```

- symfony4-mongodb-jwt-starter

```yaml
nelmio_cors:
    defaults:
        origin_regex: true
        allow_origin: ['%env(CORS_ALLOW_ORIGIN)%']
        allow_methods: ['GET', 'OPTIONS', 'POST', 'PUT', 'PATCH', 'DELETE']
        allow_headers: ['Content-Type', 'Authorization']
        max_age: 3600
    paths:
        '^/': ~
```

- symfony_coopcycle

```yaml
nelmio_cors:
    defaults:
        allow_origin:   ["%cors_allow_origin%"]
        allow_methods:  ["POST", "PUT", "GET", "DELETE", "OPTIONS"]
        allow_headers:  ["content-type", "authorization"]
        expose_headers: ["link"]
        max_age:        3600
    paths:
        '^/api/':
            allow_origin: ['*']
```
