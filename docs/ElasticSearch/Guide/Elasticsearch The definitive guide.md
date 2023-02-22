Elasticsearch The definitive guide
===

## Chapter 1 You know, for Search ...

RESTful API with JSON over HTTP

A request to Elasticsearch consists of the same parts as any HTTP request:

    $ curl -X<VERB> '<PROTOCOL>://<HOST>/<PATH>?<QUERY_STRING>' -d '<BODY>'

* VERB - The appropriate HTTP method or verb: GET, POST, PUT, HEAD, or DELETE.
* PROTOCOL - Either http or https (if you have an https proxy in front of Elasticsearch.)
* QUERY_STRING - Any optional query-string parameters
* BODY - A JSON-encoded request body

to count the number of documents in the cluster

    GET /medflixs_en/video/_count
    {
      "query": {
        "match_all": {}
      }
    }


```php
        $hosts = [
            'http://user:pwd@localhost:9200'
        ];   

        // elastic Search client
        $client = \Elasticsearch\ClientBuilder::create()->setHosts($hosts)->build();

        $searchParams = []; 
        $searchParams['index'] = 'inteldata_db';
        $searchParams['type'] = 'post';

        $searchParams['body']['query'] = array( "match_all" => array());

        try {
             $response = $client->count($searchParams);
             //echo "<pre>";
             //var_dump($response);
        } catch (Exception $e) {
             //echo 'Exception reçue : ',  $e->getMessage(), "\n";
        }
```

In Elasticsearch, a document belongs to a type, and those types live inside an index.
You can draw some (rough) parallels to a traditional relational database:

    Relational DB ⇒ Databases ⇒ Tables ⇒ Rows ⇒ Columns
    Elasticsearch ⇒ Indices ⇒ Types ⇒ Documents ⇒ Fields

An Elasticsearch cluster can contain multiple indices (databases), which in turn contain
multiple types (tables). These types hold multiple documents (rows), and each
document has multiple fields (columns).

**Search with Query DSL**

    GET /medflixs_en/video/_search
    {
      "query": {
        "match" : {
            "title" : "innovation paris"
        }
      }
    }

**Full-Text Search**

    GET /medflixs_en/video/_search
    {
      "query": {
        "match" : {
            "title" : "innovation paris"
        }
      }
    }

```php
        // elastic Search client
        $client = \Elasticsearch\ClientBuilder::create()->build();

        $searchParams = []; 
        $searchParams['index'] = 'medflixs_'.$_locale;
        $searchParams['type'] = 'video';

        // this is how you specify a query in ES
        $searchParams['body']['query']['match']['_all'] = array( "query" => $keyword, "operator" => "and");
        $searchParams['body']['suggest']['suggestions'] = array( "text" => $keyword, "term" => array("size" => 1, "field" => "_all", "sort" => "score", "min_word_length" => 3));

        //default sorting: _score descending (score  is a simple relevance metric)
        if ($filtre == "date" ) {
            //default sorting: _score descending (score  is a simple relevance metric)
            $searchParams['body']['sort'] = array( "date" => array("order" => "desc"));
        } else {
            $searchParams['body']['sort'] = ['_score'];
        }
        $searchParams['size'] = 8000;
        $searchParams['from'] = 0;

        // the actual query. Results are stored in a PHP array
        $retDoc = $client->search($searchParams);

          // suggestion if no result
        if ($retDoc["suggest"]["suggestions"][0]["options"]) {
            $suggestions = $retDoc["suggest"]["suggestions"][0]["options"][0];
        } else {
            $suggestions = array();
        }

        $videos = $retDoc["hits"]["hits"]; // $em->getRepository("AdministrationBundle:KeywordVideo")->searchVideos($array_kw);
```

**Phrase Search**

    GET /medflixs_en/video/_search
    {
      "query": {
        "match_phrase" : {
            "event.city" : "Paris"
        }
      }
    }
    
    $searchParams['body']['query']['match_phrase'] = array( "event.city" => "Paris");

To do this, we use a slight variation of the match query called the match_phrase
query:

    GET /medflixs_en/video/_search
    {
      "query": {
        "match_phrase" : {
            "title" : "innovation paris"
        }
      }
    }
    $searchParams['body']['query']['match_phrase'] = array( "title" => "Innovation");

**More-Complicated Searches**

Our query will change a little to accommodate a filter, which allows us to execute structured searches efficiently:

    GET /medflixs_en/video/_search
    {
      "query": {
        "filtered" : {
            "filter" : {
                "range" : {
                    "date" : { "gt" : 2015 }
                 }
            },  
            "query" : {
              "match" : {
                  "title" : "innovation"
              }
            }
        }
      }
    }

**Analytics**

Elasticsearch has functionality called aggregations, which
allow you to generate sophisticated analytics over your data. It is similar to GROUP BY
in SQL,

**Combining Multiple Clauses**

For instance, a bool clause allows you to combine other clauses that either must match, must_not match, or should match if possible:

    GET /medflixs_en/video/_search
    {
      "query": {
        "bool": {
            "must": { "match": { "title": "innovation" }},
            "must_not": { "match": { "event.city": "paris" }},
            "should": { "match": { "title": "innovation day" }}
        }
      }  
    }

**terms Filter**

The terms filter is the same as the term filter, but allows you to specify multiple values to match.

    GET /medflixs_en/video/_search
    {
        "query": {
            "terms": {
                "speaker": ["benjamin", "yi"]
            }
        }
    }

    GET /medflixs_en/video/_search
    {
        "query": {
            "multi_match": {
                "query": "innovation",
                "fields": [ "title", "event.title" ]
            }
        }
    } 

## Scroll

While a search request returns a single “page” of results, the scroll API can be used to retrieve large numbers of results.

In order to use scrolling, the initial search request should specify the scroll parameter in the query string, which tells Elasticsearch how long it should keep the “search context” alive.

```
POST /twitter/tweet/_search?scroll=1m
{
    "size": 100,
    "query": {
        "match" : {
            "title" : "elasticsearch"
        }
    }
}
```

The result from the above request includes a _scroll_id, which should be passed to the scroll API in order to retrieve the next batch of results.

```
POST  /_search/scroll 
{
    "scroll" : "1m", 
    "scroll_id" : "DXF1ZXJ5QW5kRmV0Y2gBAAAAAAAAAD4WYm9laVYtZndUQlNsdDcwakFMNjU1QQ==" 
}
```