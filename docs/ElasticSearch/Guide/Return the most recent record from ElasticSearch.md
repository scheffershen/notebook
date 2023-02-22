Return the most recent record from ElasticSearch index
===

http://stackoverflow.com/questions/20723379/return-the-most-recent-record-from-elasticsearch-index

```php
        // elastic Search client
        $client = \Elasticsearch\ClientBuilder::create()->setHosts($hosts)->build();

        $searchParams = []; 
        $searchParams['index'] = 'inteldata_db';
        $searchParams['type'] = 'post';

        $searchParams['body']['query'] = array( "match_all" => array());
        $searchParams['body']['size'] = 1;
        $searchParams['body']['sort'][] = array( "_timestamp" => array("order"=> "desc"));

        try {
             $response = $client->search($searchParams);
             $stats_elasticsearch = $response;               
        } catch (Exception $e) {
             //echo 'Exception reçue : ',  $e->getMessage(), "\n";
             throw $e;
        }
```