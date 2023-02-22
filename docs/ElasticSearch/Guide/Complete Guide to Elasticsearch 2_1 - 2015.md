Complete Guide to Elasticsearch 2.1 - 2015
==========================================

## how-to-completely-uninstall-elasticsearch

Find where is elasticsearch:

    $ find / -name "elasticsearch"

Then remove the folders. Also, remove service script at

    $ cd /etc/init.d/elasticsearch

It's just java files, no magic (almost).

## Installing Elasticsearch

1. Installing Elasticsearch
2. Installing Kibana
3. Installing Sense

## Introduction to Elasticsearch

1. Introduction to Elasticsearch
2. Introduction to mapping
3. Introduction to searching

   $ curl -X GET `http://localhost:9200/ecommerce/product/_search?q=pasta`

## mappings

http://www.medflixs.com:8089/app/sense
http://www.medflixs.com:9200

## Field data types

Core data types
    String, numeric, data, boolean, binary
Complex data types
    Objects, array, nested
Geo data types
    Geo-point, Geo shape
Speciallized data types
    IPv4, completion, token count, attachement   

## Adding mappings

```
    PUT  /ecommerce
    {
        "mappings": {
            "product": {
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "price": {
                        "type": "double"
                    },
                    "status": {
                        "type": "string"
                    },
                    "quantity": {
                        "type": "integer"
                    },
                    "categories": {
                        "type": "nested",
                        "properties": {
                            "name": {
                                "type": "string"
                            }
                        }
                    }, 
                    "tags": {
                        "type": "string"
                    }
                }
            }
        }
    }
```

##  Adding test data

    $ curl -XPOST http://localhost:9200/ecommerce/product/_bulk --data-binary "@test-data.json"

## Meta fields

    _index
    _type
    _id

    _source

    $ sudo bin/plugin install mapper-size


## Creating an index (/ecommerce)**

```
    PUT  /ecommerce
    {}
```

## cat indices

The indices command provides a cross-section of each index. 

    GET 

## Deleting an index

    DELETE /ecommerce

## listing all index

    GET /_cat/indices?v

## Adding documents (/index/document/id)

```
    PUT  /ecommerce/product/1001
    {
        "SortAs": "SGML",
        "GlossTerm": "Standard Generalized Markup Language",
        "Acronym": "SGML",
        "Abbrev": "ISO 8879:1986",
        "categories": [
                {
                    "name": "Sofware",
                    +"GlossSee": "markup"
                }  
        ],
        "tags": ["A meta-markup language", "used to create markup languages such as", "DocBook"]         
    }
```

## Updating documents

```
    POST /ecommerce/product/1001/_update
    {
        "doc": {
            SortAs": "SGML2",
        }
    }    

```

## Replacing documents

```
    PUT  /ecommerce/product/1001
    {
        "SortAs": "SGML2",
        "GlossTerm": "Standard Generalized Markup Language",
        "Acronym": "SGML2",
        "Abbrev": "ISO 8879:1986",
        "categories": [
                {
                    "name": "Sofware",
                    +"GlossSee": "markup"
                }  
        ],
        "tags": ["A meta-markup language", "used to create markup languages such as", "DocBook"]         
    }
```

## Deleting documents

```
    DELETE /ecommerce/product/1001
```

## get a document

    GET /my_index/my_type/my_id

## Batch processing

```
    POST /ecommerce/product/_bulk
    {"index": {"_id":"1002"}}
    {
        "SortAs": "SGML2",
        "GlossTerm": "Standard Generalized Markup Language",
        "Acronym": "SGML2",
        "Abbrev": "ISO 8879:1986",
        "categories": [
                {
                    "name": "Sofware",
                    +"GlossSee": "markup"
                }  
        ],
        "tags": ["A meta-markup language", "used to create markup languages such as", "DocBook"]         
    }
    {"index": {"_id":"1003"}}
    {
        "SortAs": "SGML3",
        "GlossTerm": "Standard Generalized Markup Language",
        "Acronym": "SGML3",
        "Abbrev": "ISO 8879:1986",
        "categories": [
                {
                    "name": "Sofware",
                    +"GlossSee": "markup"
                }  
        ],
        "tags": ["A meta-markup language", "used to create markup languages such as", "DocBook"]         
    }
```


```
    POST /ecommerce/_bulk
```


```
    POST /_bulk
    {"update": {"_id":"1002", "_index": "ecommerce", "_type": "product"}}
    {"doc": {"SortAs": "SGML22"}}
```

## Searching

http://www.medflixs.com.loc:81/app/sense
http://www.medflixs.com:8089/app/sense

## example1

    GET /inteldata_db/twitter/_search
    {
      "query": {
        "match_all": {}
      }
    }

## Retrieving document by ID

    GET /medflixs_en/video/950

## Searching with query strings - Basics

    GET /medflixs_en/video/_search?q=benjamin

    GET /medflixs_en/video/_search?q=Cardiomyopathie

    GET /medflixs_en/video/_search?q=title:Cardiomyopathie

## Searching with query strings - Bool query

    GET /medflixs_en/video/_search?q=-Elena+minimally

without `elena` but have `minimally`

    GET /medflixs_en/video/_search?q=-Tommaso-minimally-benjamin-2015

without -Tommaso-minimally-benjamin-2015

    GET /medflixs_en/video/_search?q=+Tommaso+minimally+benjamin+2015

    GET /medflixs_en/video/_search?q=*shen*
    GET /medflixs_en/video/_search?q=*shen
    GET /medflixs_en/video/_search?q=shen


**Searching with query strings - Phrase query**

    GET /_analyze?analyzer=standard&text=yi

    GET /_analyze?analyzer=standard&text=yi+banjamin

## Searching with query strings - Remarks

## Searching with Query DSL - Compound queries

* must

```
GET /medflixs_en/video/_search
{
    "query": {
        "bool": {
            "must":[
                { "match": {"title": "innovation"}},
                { "match": {"title": "2014"}}     
            ]
        }
    },
      "options" : [ {
        "text" : "xorr the god jewel",
        "highlighted": "<em>xorr</em> the <em>god</em> jewel",
        "score" : 0.17877324
      }    
}
```

* must_not

```
GET /medflixs_en/video/_search
{
    "query": {
        "bool": {
            "must":[
                { "match": {"title": "innovation"}},
            ], 
            "must_not":[
                { "match": {"speaker": "Patrick"}}
            ]            
        }
    }
}
```

* should

```
GET /medflixs_en/video/_search
{
    "query": {
        "bool": {
            "must":[
                { "match": {"title": "innovation"}},
            ], 
            "should":[
                { "match": {"speaker": "Patrick"}}
            ]            
        }
    }
}
```

```
GET /medflixs_en/video/_search
{
    "query": {
        "bool": {
            "should":[
                { "match": {"speaker": "Patrick"}}
            ]            
        }
    }
}
```

operator or 

```
    GET /medflixs_en/video/_search
    {
        "query": {
            "match": {
               "_all": {
                  "query": "benjamin 2015",
                  "operator": "or"
               }
            }
        }
    }
```

operator and 

```
    GET /medflixs_en/video/_search
    {
        "query": {
            "match": {
               "_all": {
                  "query": "benjamin 2015",
                  "operator": "and"
               }
            }
        }
    }
```

## Searching with Query DSL - Full text queries

```
GET /medflixs_en/video/_search
{
    "query": {
        "match_all": {}
    }
}
```

```php
            // get total post
            $stats_elasticsearch['post'] = 0;
            $hosts = [
                'http://user:pass@localhost:9200'
            ];   

            // elastic Search client
            $client = \Elasticsearch\ClientBuilder::create()->setHosts($hosts)->build();

            $searchParams = []; 
            $searchParams['index'] = 'inteldata_db';
            $searchParams['type'] = 'post';

            $searchParams['body']['query'] = array( "match_all" => array());

            try {
                 $response = $client->count($searchParams);
                 $stats_elasticsearch['post'] = $response['count'];
                 $userActionsLogger->logger->info('elasticSearch post = '.$stats_elasticsearch['post']);                
            } catch (Exception $e) {
                 //echo 'Exception reçue : ',  $e->getMessage(), "\n";
                 throw $e;
            }
```

```
GET /medflixs_en/video/_search
{
    "query": {
        "match": {
            "title": "Cardiomyopathie"
        }
    }
}

$searchParams['body']['query'] = array( "match" => array("title" => "Cardiomyopathie"));

```

## Multi_match

```
GET /medflixs_en/video/_search
{
    "query": {
        "multi_match": {
            "query": "Cardiomyopathie",
            "fields": ["title", "content"]
        }
    }
}

$searchParams['body']['query'] = array( "multi_match" => array("query" => "Cardiomyopathie", "fields" => array("title", "content")));
```

## match_phrase

```
GET /medflixs_en/video/_search
{
    "query": {
        "match_phrase": {
            "title": "Cardiomyopathie"
        }
    }
}

$searchParams['body']['query'] = array( "match_phrase" => array("title" => "Cardiomyopathie"));

```

## Searching with Query DSL - Term level queries

```
GET /medflixs_fr/video/_search
{
    "query": {
        "terms": {
            "speaker": ["bejamin", "yi"]
        }
    }
}
```

## suggestion

```
GET /medflixs_en/video/_search
{
    "suggest": {
        "autocomplete": {
            "text": "benjamon",
            "term": {
                "field": "speaker"
            }
        }
    },
    "size": 0
}
```
