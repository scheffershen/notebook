---
slug: mysql-cluster-ndb-vs-mysql-replication-innodb
---

mysql-cluster-ndb-vs-mysql-replication-innodb
==============================================

https://stackoverflow.com/questions/5300490/mysql-cluster-ndb-vs-mysql-replication-innodb-for-rails-3-apps-pros-cons

There is a good comparison of InnoDB and MySQL Cluster (ndb) recently posted to the docs...worth taking a look: http://dev.mysql.com/doc/refman/5.1/en/mysql-cluster-compared.html

The Cluster architecture consists of a pool of MySQL Servers that are accessed by the application(s); these MySQL Servers don't actually store the Cluster data, the data is partitioned over the pool of data nodes below. Every MySQL Server has access to the data in all of the data nodes. If one MySQL server changes a piece of data then it is instantly visible to all of the other MySQL Servers.

Obviously, this architecture makes it extremely easy to scale out the database. Unlike sharding, the application doesn't need to know where the data is held - it can just load balance across all available MySQL Servers. Unlike scaling out with MySQL replication Cluster allows you to scale writes just as well as reads. New data nodes or MySQL servers can be added to an existing Cluster with no loss of service to the application

MySQL Cluster's shared-nothing architecture means that it can deliver extremely high availability (99.999%+). Every time you change data, it is synchronously replicated to a second data node; if one data node fails then the applications read & write requests are automatically handled by the backup data node.

Due to the distributed nature of MySQL Cluster, some operations can be slower (for example JOINs that have thousands of interim results - though there is a prototype solution available which addresses this) but others can be very fast and can scale extremely well (e.g. primary key reads and writes). You have the option of storing tables (or even columns) in memory or on disk and by choosing the memory option (with changes checkpointed to disk in the backgoround) transactions can be very quick.

MySQL Cluster can be more complex to set up than a single MySQL server but it can prevent you having to implement sharding or read/write splitting in your application. Swings and roundabouts.

To get the best performance and scalability out of MySQL Cluster you need may need to tweak your application (see Cluster performance tuning white paper: http://www.mysql.com/why-mysql/white-papers/mysql_wp_cluster_perfomance.php). If you own the application this isn't normally a big deal but if you're using someone else's application that you can't modify then it could be a problem.

A final note is that it doesn't need to be all or nothing - you can choose to store some of your tables in Cluster and some using other storage engines, this is a per-table option. Also you can replicate between Cluster and other storage engines (for example, use Cluster for your run-time database and then replicate to InnoDB to generate complex reports).




