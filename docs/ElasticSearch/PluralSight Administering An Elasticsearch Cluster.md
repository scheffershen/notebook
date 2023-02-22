PluralSight Administering An Elasticsearch Cluster
===

## 02-02 Installing Elasticsearch 2 on Ubuntu 14

    # cat /etc/os-release
    # cat /etc/hostname
    # add-apt-repository ppa:webupd8team/java
    # apt-get update
    # apt-get install oracle-java8-installer
    # java -version
    # wget https://download.elasticsearch.org/elasticsearch/release/org/elasticsearch/distribution/deb/elasticsearch/2.0.0-beta2/elasticsearch-2.0.0-beta2.deb
    # dpkg -i elasticsearch-2.0.0-beta2.deb
    # service elasticsearch start
    # update-rc.d elasticsearch defaults 95 10
    # curl http://localhost:9200 #invoke-webrequest http://localhost:9200
    # nano /etc/elasticsearch/elasticsearch.yaml


```yaml
cluster.name: pluralsight

node.name: es01 #/etc/hostname

path.data: "/volume/data"
path.logs: "/var/logs/special_folder"
path:plugins: "/volume/plugins"

minimum_master_nodes: 2

# Wait until at least 8 nodes present and start recovery when either 3 minutes passes or all 9 nodes are present and active
gateway.recovery_after_nodes: 8
gateway.expected_nodes: 9
gateway.recover_after_time: 3m

#List your nodes by host or by IP address, Should be setup on each node in the same way
discovery.zen.ping.unicast.hosts: "host1", "host2"
discovery.zen.ping.multicast.enabled: false

node.master: true
node.data: false

# node.data: true
# node.master: false
# node.client: false

# We don't want to allow data nodes to be queried
http.enabled: false

#remove swapfile
bootstrap.mlockall: true
```

## Elasticsearch Nodes

- Data Node: 
    + Hard working since they pgysically house all the shards and data, 
    + Don't typically service query request
    + Tend to have the "beefiest" resources
- Client Node:
    + Gateway to the cluster
    + Handles all query requests and directs them to data nodes
    + They're important but don't need a lot of muscle
- Manager Node:
    + Brains of the whole operation
    + In charge of maintaining the "cluster state"
    + It's the only node allowed to update the state
    + Without a master the cluster won't function

## 03_03-Server and Hardware Requirements

- Vitual IP or Load Balancer
- 2 client nodes (32Go RAM, 2 CPU cores, 20 GB disk space)
- 3 manager nodes (32Go RAM, 2 CPU cores, 20 GB disk space)
- 4 data nodes (64Go RAM, 4 core CPU, 4x1 TB SSD disk in RAID 0 )

## Configuration: Swap

- Most systems come with a swap file configured
- Can harm performance drastically
- Consult OS docs and remove/swapfile
- Alternatively, modify elasticsearch.yml

```yaml
bootstrap.mlockall: true
```

## Configuration: MMap and File Descriptors

File descriptiors: How many files can a process use?

File Descriptors: 64,000
MMap: unlimited

    # ulimit -m

/etc/security/limits.conf

```
*       soft    nofile  64000
*       hard    nofile  64000
root    soft    nofile  64000
root    hard    nofile  64000
```

/etc/pam.d/common-session

```
session required                        pam_permit.so
session required                        pam_limits.so
```

/etc/pam.d/common-session-noninteractive

```
session required                        pam_permit.so
session required                        pam_limits.so
```

    # ulimit -m

## RAM/2 = heap 

/etc/environment

```
ES_HEAP_SIZE="8g"
```

## Heap: Sizing and Swappingedit

The default installation of Elasticsearch is configured with a 1 GB heap. For just about every deployment, this number is usually too small. 

If you are using the default heap values, your cluster is probably configured incorrectly.

There are two ways to change the heap size in Elasticsearch. The easiest is to set an environment variable called ES_HEAP_SIZE. When the server process starts, it will read this environment variable and set the heap accordingly. As an example, you can set it via the command line as follows:

/etc/environment

```
ES_HEAP_SIZE="512m"
```

OR

    export ES_HEAP_SIZE=2g
    nohup ./bin/elasticsearch > log_05_04_2018.log 2>&1 &

## 04-02 Creating the First Client Node

```yaml
cluster.name: globomantics_kb_production

node.name: es-client-01 #/etc/hostname

node.data: false
node.master: false
node.client: true

network.host: 

discovery.zen.ping.multicast.enabled: false
discovery.zen.ping.unicast.hosts: ["es-client-01", "es-client-02", "es-master-01","es-master-02","es-master-03","es-data-01","es-data-02","es-data-03"]
```

https://infogerance-linux.net/2011/augmenter-le-max-open-files/

    # ulimit -n
    # nano /etc/security/limits.conf

    # curl http://es-client-01:9200/_cluster/stats
    # cd /user/share/elasticsearch/bin
    # ./plugin install mobz/elasticsearch-head
    # http://es-client-01:9200/_plugin/head

## 04_03-Creating the First Master Node

```yaml
cluster.name: globomantics_kb_production

node.name: es-master-01 #/etc/hostname

node.data: false
node.master: true
node.client: false

#The node will bind to this hostname or IP address and publish (advertise) this host to other nodes in the cluster.
network.host: 

discovery.zen.ping.multicast.enabled: false
discovery.zen.ping.unicast.hosts: ["es-client-01", "es-client-02", "es-master-01","es-master-02","es-master-03","es-data-01","es-data-02","es-data-03"]

```

## 04_04-Creating the First Data Node

```yaml
cluster.name: globomantics_kb_production

node.name: es-data-01 #/etc/hostname

node.data: true
node.master: false
node.client: false

#The node will bind to this hostname or IP address and publish (advertise) this host to other nodes in the cluster.
network.host: 

discovery.zen.ping.multicast.enabled: false
discovery.zen.ping.unicast.hosts: ["es-client-01", "es-client-02", "es-master-01","es-master-02","es-master-03","es-data-01","es-data-02","es-data-03"]

```