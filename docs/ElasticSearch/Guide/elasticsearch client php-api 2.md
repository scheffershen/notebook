elasticsearch client php-api 2.0
================================

https://www.elastic.co/guide/en/elasticsearch/client/php-api/2.0/_quickstart.html#_index_a_document

## Installation

Include elasticsearch-php in your composer.json file:

```composer.json
    {
        "require": {
            "elasticsearch/elasticsearch": "~2.0"
        }
    }
```

Install the client with composer:

    curl -s http://getcomposer.org/installer | php
    php composer.phar install --no-dev

Include the autoloader in your main project (if you haven’t already), and instantiate a new client :

```php
    require 'vendor/autoload.php';

    $client = \Elasticsearch\ClientBuilder::create()->build();

```

## Index a document

```php
    require 'vendor/autoload.php';

    $client = \Elasticsearch\ClientBuilder::create()->build();

    $params = [
        'index' => 'my_index',
        'type' => 'my_type',
        'id' => 'my_id',
        'body' => ['testField' => 'abc']
    ];

    $response = $client->index($params);
    print_r($response);
    
```

## Making a Query

```php
    $searchParams = []; 
    $searchParams['index'] = 'my_first_index';
    $searchParams['type'] = 'my_first_type';

    // this is how you specify a query in ES
    $searchParams['body']['query']['match']['_all'] = 'my_query';
    
    //default sorting: _score descending (score  is a simple relevance metric)
    $searchParams['body']['sort'] = ['_score'];
    
    // the actual query. Results are stored in a PHP array
    $retDoc = $client->search($searchParams);

```

```json
   GET /my_first_index/my_first_type/_search
    {
        "query": {
            "match": {
               "_all": 'my_query'
            }
        }
    }

```

**Search with Specific Fields**

```php
    $searchParams = []; 
    $searchParams['index'] = 'my_first_index';
    $searchParams['type'] = 'my_first_type';

    // this is how you specify a query in ES
    $searchParams['body']['query']['match']['age'] = 15;
    
    // the actual query. Results are stored in a PHP array
    $retDoc = $client->search($searchParams);

```

```json
GET /medflixs_en/video/_search
{
    "query": {
        "match": {
            "age": 15
        }
    }
}
```

Let’s break the results down:

* took – number of milliseconds it took for the request to finish.
* timed_out – returns true if the request timed out.
* _shards – by default, Elasticsearch distributes the data into 5 shards. If you get 5 as the value for total and successful then every shard is currently healthy. You can find a more detailed explanation in this Stackoverflow thread.
* hits contains the results.

**use bool queries**

To do that, we specify bool as an item for the query. Then we can traverse to the field we want by using . starting from the first-level field down to the field we want to use as a query.

    $params['body']['query']['bool']['must'][]['match']['pokemon.psyduck.type'] = 'water';

```json
GET /medflixs_en/video/_search
{
    "query": {
        "bool": {
            "must":[
                { "match": {"title": "innovation"}}
            ]           
        }
    }
}
```

**Searching with Arrays**

In the example below we’re selecting documents which have an age that is equal to 10 and 15.

    $params['body']['query']['bool']['must']['terms']['age'] = array(10, 15);

**Filtered Search**

In the example below, we’re using the age as the field. We’re selecting documents which have ages greater than or equal to (gte) 11 but less than or equal (lte) to 20.

    $params['body']['query']['filtered']['filter']['range']['age']['gte'] = 11;
    $params['body']['query']['filtered']['filter']['range']['age']['lte'] = 20;

**OR and AND**

In the example below we’re using the and filter to select documents which have an age of 10 and a badge count of 8. Only the documents which matched this criteria are returned.

    $params['body']['query']['filtered']['filter']['and'][]['term']['age'] = 10;
    $params['body']['query']['filtered']['filter']['and'][]['term']['badges'] = 8;

If you want to select either of those then you can use or instead.

    $params['body']['query']['filtered']['filter']['or'][]['term']['age'] = 10;
    $params['body']['query']['filtered']['filter']['or'][]['term']['badges'] = 8;

**Limiting Results**

Results can be limited to a specific number by specifying the size field. Here’s an example:

    $params['body']['query']['filtered']['filter']['and'][]['term']['age'] = 10;
    $params['body']['query']['filtered']['filter']['and'][]['term']['badges'] = 8;
    $params['size'] = 1;

**Pagination**

In Elasticsearch we have size and from. from allows us to specify the index of the first result in the resultset. Documents are zero-indexed. So for 10 results per page, if we have a size of 10, we add 10 to the from value every time the user navigates to the next page.

    $params['size'] = 10;
    $params['from'] = 10; // <-- will return second page