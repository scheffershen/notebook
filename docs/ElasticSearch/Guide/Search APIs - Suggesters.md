Search APIs Suggesters
===

https://www.elastic.co/guide/en/elasticsearch/reference/current/search-suggesters.html

The suggest feature suggests similar looking terms based on a provided text by using a suggester. Parts of the suggest feature are still under development. 

The suggest request part is either defined alongside the query part in a _search request or via the REST `_suggest` endpoint.

```
    $ curl -s -XPOST 'localhost:9200/_search' -d '{
      "query" : {
        ...
      },
      "suggest" : {
        ...
      }
    }'
```

```
    GET /medflixs_en/video/_search
    {
        "query": {
            "match": {
               "_all": {
                  "query": "inovation",
                  "operator": "and"
               }
            }
        },
        "suggest": {
            "text" : "inovation",
            "term" : {
              "size" : 1,
              "field" : "_all"
            }
        }   
    }
```

```
GET /medflixs_en/video/_search
{
    "query": {
        "match": {
           "_all": {
              "query": "inovation",
              "operator": "and"
           }
        }
    },
    "suggest": {
      "my-suggest-1" : {
        "text" : "inovation",
        "term" : {
          "size" : 3,
          "field" : "title"
        }
      },
      "my-suggest-2" : {
        "text" : "inovation",
        "term" : {
          "field" : "speaker"
        }
      }
    }   
}    
```

on the title field with a maximum of 3 suggestions per term inside the suggest text. 

### term suggester