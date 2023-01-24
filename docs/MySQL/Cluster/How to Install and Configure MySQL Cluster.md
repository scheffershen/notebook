---
slug: How-to-Install-and-Configure-MySQL-Cluster-on-CentOS-7
---

How to Install and Configure MySQL Cluster on CentOS 7
======================================================

[link](https://www.howtoforge.com/tutorial/how-to-install-and-configure-mysql-cluster-on-centos-7/)


Prerequisites
Step 1 - Setup Management Node
    A. Download the MySQL Cluster software
    B. Install and Remove Packages
    C. Install MySQL Cluster
    D. Configure MySQL Cluster
    E. Start the Management Node
Step 2 - Setup the MySQL Cluster Data Nodes
    A. Login as root user and download the MySQL Cluster software
    B. Install and Remove Packages
    C. Install MySQL Cluster
    D. Configure Data Node
    E. Redo step 2.A - 2.D on db3 server.
Step 3 - Setup SQL Node
    A. Log in and Download MySQL Cluster
    B. Install and Remove Packages
    C. Install MySQL Cluster
    D. Configure the SQL Node
    E. Redo step 3.A - 3.D on db5 server.
Step 4 - Monitor the Cluster
Step 5 - Testing the Cluster
Conclusion

The MySQL Cluster technology is implemented through the NDB (Network DataBase) and NDBCLUSTER storage engines and provides shared-nothing clustering and auto-sharding for MySQL database systems.

To implement a MySQL Cluster, we have to install three types of nodes. Each node type will be installed on it's own server. The components are:
1. Management Node - NDB_MGMD/MGM
    The Cluster management server is used to manage the other node of the cluster. We can create and configure new nodes, restart, delete, or backup nodes on the cluster from the management node.

2. Data Nodes - NDBD/NDB
    This is the layer where the process of synchronizing and data replication between nodes happens.

3. SQL Nodes - MySQLD/API
    The interface servers that are used by the applications to connect to the database cluster.

##Prerequisites    

- The OS is CentOS 7 - 64bit.
- 5 CentOS servers or virtual machines. I will use the hostnames and IP addresses as shown below:
* Management Node
    db1 = 192.168.1.120
* Data Nodes
    db2 = 192.168.1.121
    db3 = 192.168.1.122
* SQL Nodes
    db4 = 192.168.1.123
    db5 = 192.168.1.124


##Step 1 - Setup Management Node

The first step is to create the "Management Node" with CentOS 7 db1 and IP 192.168.1.120. Make sure you are logged into the db1 server as root user.

**A. Download the MySQL Cluster software**

    # cd ~
    # wget http://dev.mysql.com/get/Downloads/MySQL-Cluster-7.4/MySQL-Cluster-gpl-7.4.10-1.el7.x86_64.rpm-bundle.tar
    # tar -xvf MySQL-Cluster-gpl-7.4.10-1.el7.x86_64.rpm-bundle.tar

**B. Install and Remove Packages**

    # yum -y install perl-Data-Dumper
    # yum -y remove mariadb-libs

**C. Install MySQL Cluster**

    # cd ~
    # rpm -Uvh MySQL-Cluster-client-gpl-7.4.10-1.el7.x86_64.rpm
    # rpm -Uvh MySQL-Cluster-server-gpl-7.4.10-1.el7.x86_64.rpm
    # rpm -Uvh MySQL-Cluster-shared-gpl-7.4.10-1.el7.x86_64.rpm

**D. Configure MySQL Cluster**

    # mkdir -p /var/lib/mysql-cluster
    # cd /var/lib/mysql-cluster
    # vi config.ini

```config.ini
[ndb_mgmd default]
# Directory for MGM node log files
DataDir=/var/lib/mysql-cluster
 
[ndb_mgmd]
#Management Node db1
HostName=192.168.1.120
 
[ndbd default]
NoOfReplicas=2      # Number of replicas
DataMemory=256M     # Memory allocate for data storage
IndexMemory=128M    # Memory allocate for index storage
#Directory for Data Node
DataDir=/var/lib/mysql-cluster
 
[ndbd]
#Data Node db2
HostName=192.168.1.121

[ndbd]
#Data Node db3
HostName=192.168.1.122
 
[mysqld]
#SQL Node db4
HostName=192.168.1.123
 
[mysqld]
#SQL Node db5
HostName=192.168.1.124
```

**E. Start the Management Node**

    # ndb_mgmd --config-file=/var/lib/mysql-cluster/config.ini

The management node is started, now you can use command "ndb_mgm" to monitor the node:

    # ndb_mgm
        > show

##Step 2 - Setup the MySQL Cluster Data Nodes

We will use 2 CentOS servers for the Data Nodes.
- db2 = 192.168.1.121
- db3 = 192.168.1.122

**A. Login as root user and download the MySQL Cluster software**

Login to the db2 server with ssh:

    ssh root@192.168.1.121

Then download the MySQL Cluster package and extract it:

    # cd ~
    # wget http://dev.mysql.com/get/Downloads/MySQL-Cluster-7.4/MySQL-Cluster-gpl-7.4.10-1.el7.x86_64.rpm-bundle.tar
    # tar -xvf MySQL-Cluster-gpl-7.4.10-1.el7.x86_64.rpm-bundle.tar

**B. Install and Remove Packages**

    # yum -y install perl-Data-Dumper
    # yum -y remove mariadb-libs

**C. Install MySQL Cluster**

    # cd ~
    # rpm -Uvh MySQL-Cluster-client-gpl-7.4.10-1.el7.x86_64.rpm
    # rpm -Uvh MySQL-Cluster-server-gpl-7.4.10-1.el7.x86_64.rpm
    # rpm -Uvh MySQL-Cluster-shared-gpl-7.4.10-1.el7.x86_64.rpm    

**D. Configure Data Node**

    # vi /etc/my.cnf

```my.cnf
[mysqld]
ndbcluster
ndb-connectstring=192.168.1.120     # IP address of Management Node
 
[mysql_cluster]
ndb-connectstring=192.168.1.120     # IP address of Management Node
```

Then create the new directory for the database data that we defined in the management node config file "config.ini".

    # mkdir -p /var/lib/mysql-cluster

Now start the data node/ndbd:

    # ndbd

##Step 3 - Setup SQL Node

This is step contains the setup for the SQL Node that provides the application access to the database.

**A. Log in and Download MySQL Cluster**

Login to the db4 server as root user:

    # ssh root@192.168.1.123

    # cd ~
    # wget http://dev.mysql.com/get/Downloads/MySQL-Cluster-7.4/MySQL-Cluster-gpl-7.4.10-1.el7.x86_64.rpm-bundle.tar
    # tar -xvf MySQL-Cluster-gpl-7.4.10-1.el7.x86_64.rpm-bundle.tar

**B. Install and Remove Packages**

    # yum -y install perl-Data-Dumper
    # yum -y remove mariadb-libs  

**C. Install MySQL Cluster**

    # cd ~
    # rpm -Uvh MySQL-Cluster-client-gpl-7.4.10-1.el7.x86_64.rpm
    # rpm -Uvh MySQL-Cluster-server-gpl-7.4.10-1.el7.x86_64.rpm
    # rpm -Uvh MySQL-Cluster-shared-gpl-7.4.10-1.el7.x86_64.rpm

**D. Configure the SQL Node**

    # vi /etc/my.cnf

```my.cnf
[mysqld]
ndbcluster
ndb-connectstring=192.168.1.120       # IP address for server management node
default_storage_engine=ndbcluster     # Define default Storage Engine used by MySQL
 
[mysql_cluster]
ndb-connectstring=192.168.1.120       # IP address for server management node
```

Start the SQL Node by starting the MySQL server:

    # service mysql start

##Step 4 - Monitor the Cluster

To see the cluster status, we have to log into the management node db1.

    # ssh root@192.168.1.120

We can use the ndb_mgm command to see the cluster status:

    ndb_mgm
        > show

Another useful command is:

    # ndb_mgm -e "all status"
    # ndb_mgm -e "all report memory"

##Conclusion

MySQL Cluster is a technology that provides High Availability and Redundancy for MySQL databases. It uses NDB or NDBCLUSTER as the storage engine and provides shared-nothing clustering and auto-sharding for MySQL databases.  To implement the cluster, we need 3 components: Management Node(MGM), Data Nodes (NDB) and SQL Nodes (API). Each of node must have its own memory and disk. It is not recommended to use network storage such as NFS. To install MySQL Cluster on a CentOS 7 minimal system, we have to remove the mariadb-libs package, mariadb-libs conflict with MySQL-Cluster-server and you have to install the perl-Data-Dumper package, it's needed by MySQL-Cluster-server. A MySQL Cluster is easy to install and configure on multiple CentOS servers.    