Packtpub - Building a Search Server with Elasticsearch
===

## term suggestion

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

```
GET /medflixs_en/video/_search
{
    "suggest": {
        "text": "innnvation", 
        "phaseSuggestion": [{
            "phase": {
                "field": "title",
                "suggest_mode": "popular",
                "min_word_length": 3,
                "prefix_length": 2
            }]
        }
    },
    "size": 0
}
```

https://qbox.io/blog/multi-field-partial-word-autocomplete-in-elasticsearch-using-ngrams