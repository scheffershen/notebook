```python
#!/usr/bin/python

# Dependencies
import os
import time
import json
import tarfile
import shutil
import requests
import argparse

parser = argparse.ArgumentParser(description='will scan and backup all your data from a searchly index, into a file')
parser.add_argument('index_name', metavar='index_name', help='your index\'s name')
parser.add_argument('api_key', metavar='api_key', help='your searchly api key')
parser.add_argument('searchly_host', metavar='searchly_host', help='your searchly host, check in their console')
parser.add_argument('--scroll_minutes', dest='scroll_minutes', type=int, default=10, help='minutes to keep scroll open')
parser.add_argument('--scroll_size', dest='scroll_size', type=int, default=1000, help='records to get in each scroll query')
args = parser.parse_args()

url = "https://site:{}@{}/{}".format(args.api_key, args.host, args.index_name)
url_without_index = "https://site:{}@{}/".format(args.api_key, args.host)
print "Using ElasticSearch at {}".format(url)

try:
    r = requests.get("{}/_search".format(url))
    if r.status_code != 200:
        print "Error hitting ElasticSearch on %s, response code was %i" % (url, r.status_code)
        exit(1)
    else:
        print "Verified ElasticSearch server"
except:
    print "Unable to hit ElasticSearch on %s" % url
    exit(1)

# ################
# Main script
#################

if __name__ == '__main__':
    print "starting...."


    # Check with the user
    print "Backing up index '%s'" % args.index_name
    print "Ctrl+C now to abort..."

    time.sleep(3)

    # Make the directories we need
    print "Checking write permission to current directory"
    try:
        # Delete the directory
        shutil.rmtree(args.index_name, ignore_errors=True)
        os.mkdir(args.index_name)
        os.mkdir("%s/data" % args.index_name)
    except:
        print "Unable to write to the current directory, please resolve this and try again"
        exit(1)

    # Download the data
    query = {
        "query": {
            "indices": {
                "indices": [args.index_name],
                "query": {
                    "match_all": {}
                }
            }
        }
    }
    query_str = json.dumps(query)

    r = requests.get("{}/_search?search_type=scan&scroll={}m&size={}".format(url, args.scroll_minutes, args.scroll_size), data=query_str)
    data = json.loads(r.content)
    scroll_id = data["_scroll_id"]

    finished = False
    count = 0

    while not finished:

        count += 1
        params = {"scroll_id": scroll_id, "scroll": "{}m".format(args.scroll_minutes)}
        r = requests.get("%s/_search/scroll" % url_without_index, params=params)
        content = json.loads(r.content)
        scroll_id = content["_scroll_id"]
        number = len(content["hits"]["hits"])
        print "Pass %i: Got %i results" % (count, number)

        if number < 1:
            finished = True
        else:
            data_file = open("%s/data/%i" % (args.index_name, count), "w")
            data_file.write(json.dumps(content["hits"]["hits"]))
            data_file.close()

    # Zip up the data
    filename = "%s.esbackup" % args.index_name
    tar = tarfile.open(filename, "w:gz")
    tar.add(args.index_name)
    tar.close()

    # Delete the directory
    shutil.rmtree(args.index_name)

    print "Complete. Your file is:"
    print filename
    exit(0)
```