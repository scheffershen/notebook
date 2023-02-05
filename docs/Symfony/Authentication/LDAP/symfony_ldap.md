symfony_ldap
===

- https://symfony.com/doc/current/security/ldap.html


1. to connect to a start-TLS secured LDAP server:
2. The bind() method authenticates a previously configured connection using both the distinguished name (DN) and the password of a user:
3. Once bound (or if you enabled anonymous authentication on your LDAP server), you may query the LDAP server using the query() method:

```php
use Symfony\Component\Ldap\Ldap;

$ldap = Ldap::create('ext_ldap', 
    ['connection_string' => 'ldaps://my-server:636']);

$ldap->bind($dn, $password);

$query = $ldap->query('dc=symfony,dc=com', '(&(objectclass=person)(ou=Maintainers))');
$results = $query->execute();

foreach ($results as $entry) {
    // Do something with the results
}

```

The bind() method authenticates a previously configured connection using both the distinguished name (DN) and the password of a user: