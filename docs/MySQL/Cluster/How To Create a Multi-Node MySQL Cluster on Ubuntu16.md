---
slug: How-To-Create-a-Multi-Node-MySQL-Cluster-on-Ubuntu16
---

How To Create a Multi-Node MySQL Cluster on Ubuntu 16.04
===

[link](https://www.digitalocean.com/community/tutorials/how-to-create-a-multi-node-mysql-cluster-on-ubuntu-16-04)

Posted June 17, 2016

##Introduction

- In short, there is one or more management nodes which control the data nodes (where data is stored). 
- After consulting with the management node, clients (MySQL clients, servers, or native APIs) connect directly to the data nodes.
- With the cluster there is no typical replication of data, but instead there is synchronization of the data nodes.
-  a special data engine must be used — NDBCluster (NDB)
-  Think of the cluster as a single logical MySQL environment with redundant components
-  a MySQL cluster can participate in replication with other MySQL clusters.

A simple MySQL Cluster

- MySQL Server & Cluster Management Server: manager.mysql.cluster
- Cluster Node 1: node1.mysql.cluster
- Cluster Node 2: node2.mysql.cluster

##Prerequisites

We will need a total of three Droplets

- one Droplet for the MySQL cluster manager and the MySQL server/client
- two Droplets for the redundant MySQL data nodes.

In the same DigitalOcean data center, create the following Droplets with private networking enabled:

- Three Ubuntu 16.04 Droplets with a minimum of 1 GB RAM and private networking enabled
- Non-root user with sudo privileges for each Droplet (Initial Server Setup with Ubuntu 16.04 explains how to set this up.)

MySQL cluster stores a lot of information in RAM. Each Droplet should have at least 1GB of RAM.

for each Droplet in the /etc/hosts file:

    10.XXX.XX.X node1.mysql.cluster
    10.YYY.YY.Y node2.mysql.cluster
    10.ZZZ.ZZ.Z manager.mysql.cluster

##Step 1 — Downloading and Installing MySQL Cluster

At the time of writing this tutorial, the latest GPL version of the MySQL cluster is 7.4.11. The product is built on top of MySQL 5.6 and it includes:

- Cluster manager software
- Data node manager software
- MySQL 5.6 server and client binaries

*The installation instructions will be the same for all Droplets, so complete these steps on all 3 Droplets*

Before you start the installation, the libaio1 package must be installed since it is a dependency:

    sudo apt-get install libaio1

After that, install the MySQL cluster package:

    sudo dpkg -i mysql-cluster-gpl-7.4.11-debian7-x86_64.deb

Now you can find the MySQL cluster installation in the directory */opt/mysql/server-5.6/*. We'll be working especially with the bin directory (*/opt/mysql/server-5.6/bin/*) where all the binaries are.

##Step 2 — Configuring and Starting the Cluster Manager

On the manager.mysql.cluster Droplet, first create the directory where this file will reside (/var/lib/mysql-cluster):

    sudo mkdir /var/lib/mysql-cluster
    sudo nano /var/lib/mysql-cluster/config.ini

/var/lib/mysql-cluster/config.ini

```
[ndb_mgmd]
# Management process options:
hostname=manager.mysql.cluster  # Hostname of the manager
datadir=/var/lib/mysql-cluster  # Directory for the log files

[ndbd]
hostname=node1.mysql.cluster    # Hostname of the first data node
datadir=/usr/local/mysql/data   # Remote directory for the data files

[ndbd]
hostname=node2.mysql.cluster    # Hostname of the second data node
datadir=/usr/local/mysql/data   # Remote directory for the data files

[mysqld]
# SQL node options:
hostname=manager.mysql.cluster  # In our case the MySQL server/client is on the same Droplet as the cluster manager
```


Now you can start the manager for the first time by executing the ndb_mgmd binary and specifying the config file with the -f argument like this:

    sudo /opt/mysql/server-5.6/bin/ndb_mgmd -f /var/lib/mysql-cluster/config.ini

have the management service started automatically with the server. 

    sudo systemctl enable rc-local.service
    sudo nano /etc/rc.local

/etc/rc.local

```
...
/opt/mysql/server-5.6/bin/ndb_mgmd -f /var/lib/mysql-cluster/config.ini
exit 0
```

##Step 3 — Configuring and Starting the Data Nodes

Next we'll configure the data nodes (node1.mysql.cluster and node2.mysql.cluster) to store the data files and support properly the NDB engine. All commands should be executed on both nodes.

    sudo nano /etc/my.cnf

/etc/my.cnf

```
[mysql_cluster]
ndb-connectstring=manager.mysql.cluster
```

Specifying the location of the manager is the only configuration needed for the node engine to start. 

    sudo mkdir -p /usr/local/mysql/data
    sudo /opt/mysql/server-5.6/bin/ndbd

You should have the ndbd service started automatically with the server. 

    sudo systemctl enable rc-local.service
    sudo nano /etc/rc.local

/etc/rc.local

```
...
/opt/mysql/server-5.6/bin/ndbd
exit 0
```

##Step 4 — Configuring and Starting the MySQL Server and Client

A standard MySQL server, such as the one that is available in Ubuntu's default apt repository, does not support the MySQL cluster engine NDB.

we'll use the MySQL server and client on the management node (manager.mysql.cluster).

    sudo nano /etc/my.cnf

/etc/my.cnf

```
[mysqld]
ndbcluster # run NDB storage engine
```

As per the best practices, the MySQL server should run under its own user (mysql) which belongs to its own group (again mysql). So let's create first the group:

    sudo groupadd mysql

Then create the mysql user belonging to this group and make sure it cannot use shell by setting its shell path to /bin/false like this:

    sudo useradd -r -g mysql -s /bin/false mysql

The last requirement for the custom MySQL server installation is to create the default database. You can do it with the command:

    sudo /opt/mysql/server-5.6/scripts/mysql_install_db --user=mysql

For starting the MySQL server we'll use the startup script from /opt/mysql/server-5.6/support-files/mysql.server. Copy it to the default init scripts directory under the name mysqld like this:

    sudo cp /opt/mysql/server-5.6/support-files/mysql.server /etc/init.d/mysqld

Enable the startup script and add it to the default runlevels with the command:

    sudo systemctl enable mysqld.service

Now we can start the MySQL server for the first time manually with the command:

    sudo systemctl start mysqld

As a MySQL client we'll use again the custom binary which comes with the cluster installation. It has the following path: /opt/mysql/server-5.6/bin/mysql. For convenience let's create a symbolic link to it in the default /usr/bin path:

    sudo ln -s /opt/mysql/server-5.6/bin/mysql /usr/bin/

Now you can start the client from the command line by simply typing mysql like this:

    mysql
        Output of ndb_mgmd
        Welcome to the MySQL monitor.  Commands end with ; or \g.
        Your MySQL connection id is 3
        Server version: 5.6.29-ndb-7.4.11-cluster-gpl MySQL Cluster Community Server (GPL)

To exit the MySQL prompt, simply type quit or press simultaneously CTRL-D.

##Testing the Cluster

At this point our simple MySQL cluster with one client, one server, one manager, and two data nodes should be complete.

From the cluster manager Droplet (manager.mysql.cluster) open the management console with the command:

    sudo /opt/mysql/server-5.6/bin/ndb_mgm
        Inside the ndb_mgm console
        -- NDB Cluster -- Management Client --
        ndb_mgm> SHOW
            Output of ndb_mgm
            Connected to Management Server at: manager.mysql.cluster:1186
            Cluster Configuration
            ---------------------
            [ndbd(NDB)]     2 node(s)
            id=2    @10.135.27.42  (mysql-5.6.29 ndb-7.4.11, Nodegroup: 0, *)
            id=3    @10.135.27.43  (mysql-5.6.29 ndb-7.4.11, Nodegroup: 0)
            [ndb_mgmd(MGM)] 1 node(s)
            id=1    @10.135.27.51  (mysql-5.6.29 ndb-7.4.11)
            [mysqld(API)]   1 node(s)
            id=4    @10.135.27.51  (mysql-5.6.29 ndb-7.4.11)
        ndb_mgm> 2 STATUS
        ndb_mgm> quit     

The management console is very powerful and gives you many other options for managing the cluster and its data, including creating an online backup. For more information check the [official documentation](https://dev.mysql.com/doc/refman/5.6/en/mysql-cluster-management.html).

Let's have a test with the MySQL client now. From the same Droplet, start the client with the mysql command for the MySQL root user. Please recall that we have created a symlink to it earlier.

    mysql -u root
        mysql> SHOW ENGINE NDB STATUS \G
            Output of mysql
            *************************** 1. row ***************************
              Type: ndbcluster
              Name: connection
            Status: cluster_node_id=4, connected_host=manager.mysql.cluster, connected_port=1186, number_of_data_nodes=2, number_of_ready_data_nodes=2, connect_count=0
            ...

You can try shutting down one of the data nodes in order to test the cluster stability. The simplest thing would be just to restart the whole Droplet in order to have a full test of the recovery process. You will see the value of number_of_ready_data_nodes change to 1 and back to 2 again as the node is restarted.

##Working with the NDB Engine

To see how the cluster really works, let's create a new table with the NDB engine, We have explicitly specified above the engine ndbcluster in order to make use of the cluster.

    mysql> CREATE DATABASE cluster;
    mysql> USE cluster;
    mysql> CREATE TABLE cluster_test (name VARCHAR(20), value VARCHAR(20)) ENGINE=ndbcluster;
    mysql> INSERT INTO cluster_test (name,value) VALUES('some_name','some_value');
    mysql> SELECT * FROM cluster_test;


https://dev.mysql.com/doc/refman/5.6/en/mysql-cluster.html

