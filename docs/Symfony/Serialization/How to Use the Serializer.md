How to Use the Serializer
=========================

Symfony provides a serializer to serialize/deserialize to and from objects

use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Serializer\Normalizer\CacheableSupportsMethodInterface;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

ObjectNormalizer: to handle typical data objects

Object <--deserialize-- Format(JSON, XML,CSV) 
Object ---serialize---> Format(JSON, XML,CSV) 
Object <--denormalize-- Array <--decode-- Format(JSON, XML,CSV) 
Object ---normalize---> Array --encode--> Format(JSON, XML,CSV) 

an array is used as an intermediary between objects and serialized contents

## Serializing an Object

if you want to serialize this object into JSON

```php
use App\Model\Person;

$person = new Person();
$person->setName('foo');
$person->setAge(99);
$person->setSportsperson(false);

$jsonContent = $serializer->serialize($person, 'json');

// $jsonContent contains {"name":"foo","age":99,"sportsperson":false,"createdAt":null}

echo $jsonContent; // or return it in a Response
```

## Deserializing an Object

the Person class would be encoded in XML format:

```php
use App\Model\Person;

$data = <<<EOF
<person>
    <name>foo</name>
    <age>99</age>
    <sportsperson>false</sportsperson>
</person>
EOF;

$person = $serializer->deserialize($data, Person::class, 'xml');
```

## Attributes Groups

you want to serialize different sets of attributes from your entities

```php
namespace Acme;

use Symfony\Component\Serializer\Annotation\Groups;

class MyObj
{
    /**
     * @Groups({"group1", "group2"})
     */
    public $foo;

    /**
     * @Groups("group3")
     */
    public function getBar() // is* methods are also supported
    {
        return $this->bar;
    }

    // ...
}
```

You are now able to serialize only attributes in the groups you want:

```php
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

$obj = new MyObj();
$obj->foo = 'foo';
$obj->setBar('bar');

$normalizer = new ObjectNormalizer($classMetadataFactory);
$serializer = new Serializer([$normalizer]);

$data = $serializer->normalize($obj, null, ['groups' => 'group1']);
// $data = ['foo' => 'foo'];

$obj2 = $serializer->denormalize(
    ['foo' => 'foo', 'bar' => 'bar'],
    'MyObj',
    null,
    ['groups' => ['group1', 'group3']]
);
// $obj2 = MyObj(foo: 'foo', bar: 'bar')
```

## Converting Property Names when Serializing and Deserializing

Sometimes serialized attributes must be named differently than properties or getter/setter methods of PHP classes.

The Serializer component provides a handy way to translate or map PHP field names to serialized names: The Name Converter System.

```php
class Company
{
    public $name;
    public $address;
}

// {"org_name": "Acme Inc.", "org_address": "123 Main Street, Big City"}

use Symfony\Component\Serializer\NameConverter\NameConverterInterface;

class OrgPrefixNameConverter implements NameConverterInterface
{
    public function normalize($propertyName)
    {
        return 'org_'.$propertyName;
    }

    public function denormalize($propertyName)
    {
        // removes 'org_' prefix
        return 'org_' === substr($propertyName, 0, 4) ? substr($propertyName, 4) : $propertyName;
    }
}

use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

$nameConverter = new OrgPrefixNameConverter();
$normalizer = new ObjectNormalizer(null, $nameConverter);

$serializer = new Serializer([$normalizer], [new JsonEncoder()]);

$company = new Company();
$company->name = 'Acme Inc.';
$company->address = '123 Main Street, Big City';

$json = $serializer->serialize($company, 'json');
// {"org_name": "Acme Inc.", "org_address": "123 Main Street, Big City"}
$companyCopy = $serializer->deserialize($json, Company::class, 'json');
// Same data as $company
```