```python
#!/usr/bin/python

# Dependencies
import sys
import os
import time
import json
import tarfile
import shutil
import requests

url = "http://es_admin:3i8ph9@151.80.217.138:9200/"
print "Using ElasticSearch at %s" % url

try:
	r = requests.get(url)
	if r.status_code != 200:
		print "Error hitting ElasticSearch on %s, response code was %i" % (url, r.status_code)
		exit(1)
	else:
		print "Verified ElasticSearch server"
except:
	print "Unable to hit ElasticSearch on %s" % url
	exit(1)

# Check with the user
index = "inteldata_db"
print "Backing up index '%s'" % index
print "Ctrl+C now to abort..."

time.sleep(3)

# Make the directories we need
print "Checking write permission to current directory"
try:
	os.mkdir(index)
	os.mkdir("%s/data" % index)
except:
	print "Unable to write to the current directory, please resolve this and try again"
	exit(1)

# Download and save the settings
print "Downloading '%s' settings" % index

r = requests.get("%s/%s/_settings" % (url, index))
if r.status_code != 200:
        print "Unable to get settings for index '%s', error code: %i" % (index, r.status_code)
        exit(1)

settings_file = open("%s/settings" % index, "w")
settings_file.write(r.content)
settings_file.close()

# Download and save the schema
print "Downloading '%s' schema" % index

r = requests.get("%s/%s/_mapping" % (url, index))
if r.status_code != 200:
	print "Unable to get schema for index '%s', error code: %i" % (index, r.status_code)
	exit(1)

schema_file = open("%s/schema" % index, "w")
schema_file.write(r.content)
schema_file.close()

# Download the data
query = {}
query["query"] = {}
query["query"]["indices"] = {}
query["query"]["indices"]["indices"] = [index]
query["query"]["indices"]["query"] = {}
query["query"]["indices"]["query"]["match_all"] = {}
query = json.dumps(query)

r = requests.get("%s/_search?search_type=scan&scroll=10m&size=100" % url, data=query)
data = json.loads(r.content)
scroll_id = data["_scroll_id"]

finished = False
count = 0

while not finished:

	count = count + 1
	r = requests.get("%s/_search/scroll?scroll=10m" % url, data=scroll_id)
	content = json.loads(r.content)
	scroll_id = content["_scroll_id"]
	number = len(content["hits"]["hits"])
	print "Pass %i: Got %i results" % (count, number)
	
	if number < 1:
		finished = True
	else:
		data_file = open("%s/data/%i" % (index, count), "w")
		data_file.write(json.dumps(content["hits"]["hits"]))
		data_file.close()

# Zip up the data
filename = "%s.esbackup" % index
tar = tarfile.open(filename, "w:gz")
tar.add(index)
tar.close()

# Delete the directory
shutil.rmtree(index)

print "Complete. Your file is:"
print filename
exit(0)
```