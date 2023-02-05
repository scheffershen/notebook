twig filter multiple parameters and Symfony Equivalent in_array() collection
============================================================================

## project pv_ml

App\Twig\Extension\TwigExtension

```php
...
    new TwigFilter('nb_clients_user', [$this, 'nbClientsByUser']),
...
    public function nbClientsByUser(array $clients, User $user): int
    {
        $nb_client = 0;
        foreach ($clients as $client) {
            if ( $user->getClientsResponsable()->contains($client) || $user->getClientsBackupResponsable()->contains($client) ) {
                $nb_client++;
            }
        }
        return $nb_client;
    }
```

twig:

```html.twig
Vous avez {{ clients|nb_clients_user(user) }} bilan(s) à envoyer aujourd'hui pour le compte de:
```