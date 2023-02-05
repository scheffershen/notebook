Defining Services Dependencies Automatically (Autowiring)
=========================================================

https://symfony.com/doc/current/service_container/autowiring.html

It reads the type-hints on your constructor (or other methods) and automatically passes the correct services to each method.

If you're using the default *services.yaml* configuration, *all classes are automatically registered as services and configured to be autowired*. This means you can use them immediately without any configuration.

If you load services automatically, each service's id is its class name.

## Using Aliases to Enable Autowiring

## Working with Interfaces

## Dealing with Multiple Implementations of the Same Type

## Autowiring other Methods (e.g. Setters)

When autowiring is enabled for a service, you can also configure the container to call methods on your class when it's instantiated. For example, suppose you want to inject the *logger* service, and decide to use setter-injection:

```php
namespace App\Util;

class Rot13Transformer
{
    private $logger;

    /**
     * @required
     */
    public function setLogger(LoggerInterface $logger)
    {
        $this->logger = $logger;
    }

    public function transform($value)
    {
        $this->logger->info('Transforming '.$value);
        // ...
    }
}
```

Autowiring will automatically call any method with the *@required* annotation above it, 

## symfonycasts[https://symfonycasts.com/screencast/symfony4-fundamentals/slack-autowiring-alias]

## Public Versus Private Services

In *Symfony 3*, *services were defined as public*. This means that you could use a *$this->get()** shortcut method in your controller to fetch a service by its id. Or, if you had the *container object* itself - yep, that's totally possible - you could say *$container->get()* to do the same thing.

But in *Symfony 4*, *most services are private*. What does that mean? Very simply, when a service is private, you *cannot use the $this->get()* shortcut to fetch it.

more and more third-party bundles are also making their services private.

And because so many services are now private, instead of using *$this->get()*, we need to fetch services via "*dependency injection*"

## Fetching a Service by id

how the heck can we fetch this service?

    php bin/console debug:container nexy_slack.client

Apparently the class for this object is *Nexy\Slack\Client*.

* debug:autowiring - Lists classes/interfaces you can use for autowiring
* debug:config - Dumps the current configuration for an extension
* debug:container - Displays current services for an application
* debug:event-dispatcher - Displays configured listeners for an application
* debug:form - Displays form type information
* debug:router - Displays current routes for an application
* debug:swiftmailer - Displays current mailers for an application
* debug:translation - Displays translation messages information
* debug:twig - Shows a list of twig functions, filters, globals and tests

## custom aliases for autowiring

```yaml
services:
    # custom aliases for autowiring
    Nexy\Slack\Client: '@nexy_slack.client'
```

## setup special, global autowiring rules

```yaml
services:
    # default configuration for services in *this* file
    _defaults:
        # setup special, global autowiring rules
        bind:
            Nexy\Slack\Client: '@nexy_slack.client'
```

## controller autowiring