```python
import elasticsearch
from elasticsearch import helpers
es = elasticsearch.Elasticsearch('http://es_admin:3i8ph9@151.80.217.138:9200')

# form http://oksoft.blogspot.fr/2016/06/elasticsearch-with-python.html

# list all the indexes
indices=es.indices.get_aliases().keys()
sorted(indices)

# save match all query as python variable
myquery={"query": {"match_all": {}}}

# execute the query using body parameter and return total number of records
# select count(*) from table
res = es.search(index="inteldata_db", doc_type="post", body=myquery)
print("Got %d Hits:" % res['hits']['total'])

# The same as above, variable myquery replaced by query string
res = es.search(index="inteldata_db", doc_type="post", body={"query": {"match_all": {}}})
print("Got %d Hits:" % res['hits']['total'])

# select count(*) from table where req_uuid = '940...33fa'
res = es.search(index="inteldata_db", doc_type="post", request_timeout=60, body={"query": {"match":{"req_uuid":"940b60ab-a51a-429"}}})
mylist=res['hits']['hits']
print("Got %d Hits:" % res['hits']['total'])

# show the column 'message' returned from above query
for i in range(len(res['hits']['hits'])):
    print res['hits']['hits'][i]['_source']['message']

#export elastic query results to pandas dataframe:
import pandas as pd
df=pd.DataFrame(mylist)
_____

# index 1 record
# insert into table values ('Outfound Call',

es.index(index='calls', doc_type='customer', request_timeout=60,   body={
 "caller_id_name" : "Outbound", "caller_id_number" : 1234567890, "destination_number" : 7500,
        "context" : "default", "start_stamp" : "2015-05-03 23:53:55", "answer_stamp" : "2015-05-03 23:54:05",  "end_stamp" : "2015-05-03 23:54:25", "duration" : 30
})

# Add datetime column
from datetime import datetime
es.index(index="my-index", doc_type="test-type", id=42, body={"any": "data", "timestamp": datetime.now()})

# open json file and read all the lines into a list for bulk import

mylist=[]
with open('sbi_call_passenger.log.2015-04-17') as fhandle:
    for line in fhandle:
        action = {
        "_index": "tickets-index1",
        "_type": "tickets",
        "_source": line.rstrip()
        }

        mylist.append(action)

# Import the list into elastic
helpers.bulk(es, mylist)


# import data from pandas dataframe into elastic

import json
tmp = df.to_json(orient = "records")
df_json= json.loads(tmp)
for doc in df_json:
    es.index(index="myindex", doc_type="testtype",body=doc)

# if you have a CSV file then import it to pandas dataframe first
# and then export the dataframe to elastic search as shown above
```