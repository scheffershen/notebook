Working with Edge Side Includes
==============================

https://symfony.com/doc/current/http_cache/esi.html

Gateway caches are a great way to make your website perform better. But they have one limitation: they can only cache whole pages. If your pages contain dynamic sections, such as the user name or a shopping cart, you are out of luck. Fortunately, Symfony provides a solution for these cases, based on a technology called ESI, or Edge Side Includes. Akamai wrote this specification in 2001 and it allows specific parts of a page to have a different caching strategy than the main page.

```html
<!DOCTYPE html>
<html>
    <body>
        <!-- ... some content -->

        <!-- Embed the content of another page here -->
        <esi:include src="http://..."/>

        <!-- ... more content -->
    </body>
</html>
```

## Using ESI in Symfony

First, to use ESI, be sure to enable it in your application configuration:

```yaml
# config/packages/framework.yaml
framework:
    # ...
    esi: { enabled: true }
```

Now, suppose you have a page that is relatively static, except for a news ticker at the bottom of the content. With ESI, you can cache the news ticker independently of the rest of the page:

```php
// src/Controller/DefaultController.php

// ...
class DefaultController extends AbstractController
{
    public function about()
    {
        $response = $this->render('static/about.html.twig');
        $response->setPublic();
        $response->setMaxAge(600);

        return $response;
    }
}
```

As the embedded content comes from another page (or controller for that matter), Symfony uses the standard render helper to configure ESI tags:

```twig
{# templates/static/about.html.twig #}

{# you can use a controller reference #}
{{ render_esi(controller('App\\Controller\\NewsController::latest', { 'maxPerPage': 5 })) }}

{# ... or a URL #}
{{ render_esi(url('latest_news', { 'maxPerPage': 5 })) }}
```

When using a controller reference, the ESI tag should reference the embedded action as an accessible URL so the gateway cache can fetch it independently of the rest of the page. Symfony takes care of generating a unique URL for any controller reference and it is able to route them properly thanks to the FragmentListener that must be enabled in your configuration:

```yaml
# config/packages/framework.yaml
framework:
    # ...
    fragments: { path: /_fragment }
```