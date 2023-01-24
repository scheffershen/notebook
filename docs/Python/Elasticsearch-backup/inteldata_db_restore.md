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

host = "localhost"
port = "9200"
url = "http://%s:%s" % (host, port)
print "Using ElasticSearch at %s" % url

try:
	r = requests.get(url)
	if r.status_code is not 200:
		print "Error hitting ElasticSearch on %s, response code was %i" % (url, r.status_code)
		exit(1)
	else:
		print "Verified ElasticSearch server"
except:
	print "Unable to hit ElasticSearch on %s" % url
	exit(1)

# Check with the user
index = "inteldata_db"
print "Restoring index '%s'" % index
print "Ctrl+C now to abort..."

time.sleep(3)

# Check the index doesnt already exist
r = requests.get("%s/%s/_mapping" % (url, index))
if r.status_code != 404:
	print "The index already exists. Please ensure it does not exist first."
	print "This command can be executed to do this:"
	print "curl -XDELETE %s/%s" % (url, index)
        exit(1)


# Unzip the backup file
filename = "%s.esbackup" % index
tar = tarfile.open(filename)
tar.extractall()
tar.close()

# Read the settings
settings_file = open("%s/settings" % index, "r")
settings = json.loads(settings_file.read())
settings_file.close()

main_index = settings.keys()[0]
settings = settings[main_index]
if 'settings' in settings:
    settings = settings["settings"]

# Read the schema
schema_file = open("%s/schema" % index, "r")
schema = json.loads(schema_file.read())
schema_file.close()

schema = schema[main_index]
if 'mappings' in schema:
    schema = schema['mappings']

# Create the index on the server
data={}
data["mappings"] = schema
data["settings"] = settings
r = requests.put("%s/%s" % (url, main_index), data=json.dumps(data))
if r.status_code != 200:
	print "Unable to put the index to the server (%i), aborting" % r.status_code
	print r.content
	exit(1)

# Load up the data files and put them all in
data_files = os.listdir("%s/data" % index)
for dfile in data_files:
	data_file = open("%s/data/%s" % (index, dfile))
	items = json.loads(data_file.read())
	data_file.close()
	bulk = ""
	for item in items:
		source = item["_source"]
		del item["_source"]
		command = {}
		command["index"] = item
		bulk = bulk + json.dumps(command) + "\n" + json.dumps(source) + "\n"
	print "Putting %i items" % len(items)
	r = requests.post("%s/_bulk" % url, data=bulk)
	if r.status_code != 200:
		print "Failed with code %i" % r.status_code
		exit(1)

# Create index alias if needed
if main_index != index:
    alias = {}
    alias["actions"] = [{"add": {"index": main_index, "alias": index}}]
    r = requests.post("%s/_aliases" % url, data = json.dumps(alias))
    if r.status_code != 200:
        print "Unable to create the alias of the index (%s), aborting" % main_index
        print r.content
        exit(1)

# Clean up the directory
shutil.rmtree(index)

print "Finished"
```