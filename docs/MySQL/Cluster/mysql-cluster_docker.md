---
slug: mysql-cluster-docker
---

mysql cluster
===

https://hub.docker.com/r/mysql/mysql-cluster/

Experimental MySQL Cluster Docker images

    $ docker pull mysql/mysql-cluster

## What is MySQL Cluster?

*MySQL Cluster* is built on the *NDB* storage engine and provides a highly scalable, real-time, *ACID*-compliant transactional database, combining 99.999% availability with the low *TCO* of open source.

Designed around a distributed, multi-master architecture with no single point of failure

## Start a MySQL Cluster Using Default Configuration

First we create an internal Docker network that the containers will use to communicate:

    $ docker network create cluster --subnet=192.168.0.0/16

Then we start the management node:

    $ docker run -d --net=cluster --name=management1 --ip=192.168.0.2 mysql/mysql-cluster ndb_mgmd

The two data nodes

    $ docker run -d --net=cluster --name=ndb1 --ip=192.168.0.3 mysql/mysql-cluster ndbd
    $ docker run -d --net=cluster --name=ndb2 --ip=192.168.0.4 mysql/mysql-cluster ndbd

And finally the MySQL server node

    $ docker run -d --net=cluster --name=mysql1 --ip=192.168.0.10 -e MYSQL_RANDOM_ROOT_PASSWORD=true mysql/mysql-cluster mysqld

The server will be initialized with a randomized password that will need to be changed, so fetch it from the log, then log in and change the password

    $ docker logs mysql1 2>&1 | grep PASSWORD
    $ docker exec -it mysql1 mysql -uroot -p
        $ ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPass';

Finally start a container with an interactive management client to verify that the cluster is up

    $ docker run -it --net=cluster mysql/mysql-cluster ndb_mgm

Run the SHOW command to print cluster status. 

```
Starting ndb_mgm
-- NDB Cluster -- Management Client --
ndb_mgm> show
Connected to Management Server at: 192.168.0.2:1186
Cluster Configuration
---------------------
[ndbd(NDB)]    2 node(s)
id=2    @192.168.0.3  (mysql-5.7.18 ndb-7.6.2, Nodegroup: 0, *)
id=3    @192.168.0.4  (mysql-5.7.18 ndb-7.6.2, Nodegroup: 0)

[ndb_mgmd(MGM)]    1 node(s)
id=1    @192.168.0.2  (mysql-5.7.18 ndb-7.6.2)

[mysqld(API)]    1 node(s)
id=4    @192.168.0.10  (mysql-5.7.18 ndb-7.6.2)
```