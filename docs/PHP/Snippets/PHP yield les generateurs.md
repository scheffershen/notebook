PHP yield les générateurs
===

http://mcamuzat.github.io/blog/2015/09/06/php-yield-les-generateurs/

Nous allons voir une nouveauté de PHP 5.5 l’instruction yield

Cela permet de mettre en place ce qu’on appelle les générateurs.

##Un premier exemple

```php

function generateAnimal() {
    echo "Je suis dans le générateur\n";
    yield "Panda";
    echo "Je suis retourné dans le générateur\n";
    yield "Lama";
    echo "je suis de retour\n";
    yield "Alpaga";
    echo "plus de d'animaux\n";
}

$generator = generateAnimal();
foreach ($generator as $value) {
    echo "j'ai reçu $value \n";
}
//j'ai reçu Panda 
//Je suis retourné dans le générateur
//j'ai reçu Lama
//je suis de retour
//j'ai reçu Alpaga 
//plus de d'animaux
```

D’abord un générateur se comporte comme un iterator. C’est grâce à cela que je peux faire un foreach.

##premier passage

```php
function generateAnimal() {
    echo "Je suis dans le générateur\n";
    yield "Panda"; // Je retourne ici 
        echo "Je suis retourné dans le générateur\n";
    yield "Lama";
        echo "je suis de retour\n";
    yield "Alpaga";
    echo "plus de d'animaux\n";
}


$generator = generateAnimal();

echo $generator->current();
// "je suis dans le générateur
// $value = "Panda"
```

##Itération suivante

```php
function generateAnimal() {
    echo "Je suis dans le générateur\n";
    yield "Panda"; // Je suis reste ici .. je continue 
    echo "Je suis retourné dans le générateur\n";
    yield "Lama"; // je m'arrete à nouveau 
    echo "je suis de retour\n";
    yield "Alpaga";
    echo "plus d'animaux\n";
}


$generator->next() // On récupère la valeur suivante
echo $generator->current();
// "je suis retourné dans le générateur
// "Lama"
```

##Troisième itération

```php
function generateAnimal() {
    echo "Je suis dans le générateur\n";
    yield "Panda";
    echo "Je suis retourné dans le générateur\n";
    yield "Lama"; // je me suis arrété ici 
    echo "je suis de retour\n";
    yield "Alpaga"; // je retourne .. 
    echo "plus d'animaux\n";
}


$generator->next() // On récupère la valeur suivante
echo $generator->current();
// Je suis de retour
// "Alpaga"
```

##Dernière Itération

```php
function generateAnimal() {
    echo "Je suis dans le générateur\n";
    yield "Panda";
    echo "Je suis retourné dans le générateur\n";
    yield "Lama";
    echo "je suis de retour\n";
    yield "Alpaga"; // je me suis arréte ici
    echo "plus d'animaux\n"; //pas de yield je renvoie null..
}

$generator->next() // On récupère la valeur suivante
echo $generator->current();
// Plus d'animaux 
// il n'y a rien car echo null;
```

Une fois qu’un générateur a fini, on ne peux le réutiliser

```php
foreach ($generator as $value) {
    echo "j'ai reçu $value \n";
}
// PHP Fatal error:  Uncaught exception 'Exception' with message 'Cannot traverse an already closed generator' in /home/marc/yield.php:16

```

##Quel est l’intérêt ?

Admettons que je veux faire un foreach sur un tableau d’un millions de lignes.

Pour faire un Array de 1 Million de valeurs ce n’est pas très compliqué. Une instruction suffit.

    range(1000000) = [1,2,3,4,...,1000000];

Mais cela prend un peu de mémoire. Utilisons notre générateur de manière sympathique

```php
function xrange($min, $max) {
  for ($i = $min; $i < $max; $i++) yield $i;
}

foreach (xrange(1,1000000) as $value) {
   echo $value;
}
```

l’énorme avantage est que je n’ai pas besoin de générer un array de 1 Millions de lignes, je génère valeur par valeur.

##Un exemple encore plus concret

```php
function getLinesFromFile($fileName) {
    if (!$fileHandle = fopen($fileName, 'r')) {
        throw new RuntimeException('Impossible d\'ouvrir le fichier : "' . $fileName . '"');
    }

    while (false !== $line = fgets($fileHandle)) {
        yield $line;
    }

    fclose($fileHandle);
}

$lines = getLinesFromFile($fileName);
foreach ($lines as $line) {
    // do something with $line
}
```

Ce code a plusieurs avantages.

* On va chercher la ligne à la demande.
* Il y a une couche d’abstraction entre la lecture et le programme principale.

##Un petit quizz

```php
function mystere() {
    $last = 0;
    $current = 1;
    yield 1;
    while (true) {
        list($current, $last) = array($current + $last, $current);
        yield $current;
    }
}

$count = 0;
foreach (mystere() as $value) {
    $count++;
    echo $value . "\n";
    if ($count > 10) {
        break;
        // pas cool la boucle infinie
    }
}
```

##En conclusion.

```python
def countdown(n):
    while n > 0:
        yield n
        n -= 1

for x in countdown(10):
    print 'depart dans %s' % x

```

##Yield PHP Co-routine

Mais il y a mieux ! On peux envoyer des valeurs dans le générateur

```php
function generateAnimal() {
    $input = (yield 'Panda');
    var_dump("j'ai reçu $input");
    $input = (yield 'Lama');
    var_dump("j'ai reçu $input");
}

$gen = generateAnimal();
var_dump($gen->current());// string(5) "Panda"
var_dump($gen->send('Canard'));//string(16) "j'ai recu Canard"
                               //string(4) "Lama"
var_dump($gen->send('Poney')); // j'ai recus Poney.
```

```php
            $post = new Coroutine($this->elasticSearchStats('post'));
            $twitter = new Coroutine($this->elasticSearchStats('twitter'));
            $total_drugs = new Coroutine($this->intelStats('total_drugs'));
            $total_dcis = new Coroutine($this->intelStats('total_dcis'));
            $total_sources = new Coroutine($this->intelStats('total_sources'));
            $post_valid = new Coroutine($this->intelStats('post_valid'));
            $tweet = new Coroutine($this->intelStats('tweet'));             
            $post_adverse_event = new Coroutine($this->intelStats('post_adverse_event'));            
            $post_indication= new Coroutine($this->intelStats('post_indication'));

            $stats_elasticsearch["post"] = $post->wait();
            $stats_elasticsearch["twitter"] = $twitter->wait();
            $stats_intel['total_drugs'] = $total_drugs->wait();
            $stats_intel['total_dcis'] = $total_dcis->wait();
            $stats_intel['total_sources'] = $total_sources->wait();
            $stats_intel['post_valid'] = $post_valid->wait();
            $stats_intel['tweet'] = $tweet->wait();
            $stats_intel['post_adverse_event'] = $post_adverse_event->wait();
            $stats_intel['post_indication'] = $post_indication->wait();

            Loop\Run();

    /**
     *  get elasticSeach stats
     */
    public function elasticSearchStats($type = "post")
    {
                    // get total post
            $stats_elasticsearch = 0;
            $hosts = [
                'http://es_admin:3i8ph9@151.80.217.138:9200'
            ];   

            // elastic Search client
            $client = \Elasticsearch\ClientBuilder::create()->setHosts($hosts)->build();

            $searchParams = []; 
            $searchParams['index'] = 'inteldata_db';
            $searchParams['type'] = $type;

            $searchParams['body']['query'] = array( "match_all" => array());

             $response = $client->count($searchParams);
             $stats_elasticsearch = $response['count'];

            yield Awaitable\resolve($stats_elasticsearch);

    }
    
    public function intelStats($type ="total_drugs") 
    {
        
        $em = $this->getDoctrine()->getManager();

        switch ($type) {
            case 'total_drugs':
                $stats_intel = $em->createQuery('SELECT COUNT(D) FROM AdminBundle:Drug D  WHERE D.open = 1 AND D.id > 1248')
                                ->setMaxResults(1)
                                ->getSingleScalarResult(); 
                break;
            case 'total_dcis':
                $stats_intel = $em->createQuery('SELECT COUNT(D) FROM AdminBundle:Dci D')
                                ->setMaxResults(1)
                                ->getSingleScalarResult(); 
                break;
            case 'total_sources':
                $stats_intel = $em->createQuery('SELECT COUNT(S) FROM AdminBundle:Source S')
                                ->setMaxResults(1)
                                ->getSingleScalarResult();
                break;    
            case 'post_valid':
                $stats_intel = $em->createQuery('SELECT COUNT(P) FROM AdminBundle:Post P WHERE P.valid = 1')
                                ->setMaxResults(1)
                                ->getSingleScalarResult();                  
                break;   
            case 'tweet':
                $stats_intel = $em->createQuery('SELECT COUNT(T) FROM AdminBundle:Tweet T ')
                                ->setMaxResults(1)
                                ->getSingleScalarResult(); 
                break;   
            case 'post_adverse_event':
                $stats_intel = $em->createQuery('SELECT COUNT(AE) FROM AdminBundle:PostAdverseEvent AE')
                                ->setMaxResults(1)
                                ->getSingleScalarResult();  
                break;   
            case 'post_indication':
                $stats_intel = $em->createQuery('SELECT COUNT(I) FROM AdminBundle:PostUse I')
                                ->setMaxResults(1)
                                ->getSingleScalarResult(); 
                break;                                                                   
            default:
                $stats_intel = $em->createQuery('SELECT COUNT(D) FROM AdminBundle:Drug D  WHERE D.open = 1 AND D.id > 1248')
                                ->setMaxResults(1)
                                ->getSingleScalarResult(); 
                break;
        }

        yield Awaitable\resolve($stats_intel);                                        
    }            
```