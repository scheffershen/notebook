---
slug: bitnami-mysql-replication-slave_docker
---

bitnami-mysql_docker
====================

https://hub.docker.com/r/bitnami/mysql/

## Get this image

    $ docker pull bitnami/mysql:5.7

## Persisting your database

    $ docker run \
    -e ALLOW_EMPTY_PASSWORD=yes \
    -v /path/to/mysql-persistence:/bitnami/mysql/data \
    bitnami/mysql:5.7

or 

    services:
      mysql:
      ...
        volumes:
          - /path/to/mysql-persistence:/bitnami/mysql/data

>NOTE: As this is a non-root container, the mounted files and directories must have the proper permissions for the UID 1001.          

## Using Docker Compose

When not specified, Docker Compose automatically sets up a new network and attaches all deployed services to that network.
However, we will explicitly define a new *bridge* network named *app-tier*. 

```yaml
version: '2'

networks:
  app-tier:
    driver: bridge

services:
  mysql:
    image: 'bitnami/mysql:5.7'
    environment:
      - MYSQL_ROOT_PASSWORD=password123
      - MYSQL_USER=my_user
      - MYSQL_PASSWORD=my_password
      - MYSQL_DATABASE=my_database      
    networks:
      - app-tier
  myapp:
    image: 'YOUR_APPLICATION_IMAGE'
    networks:
      - app-tier
```

## Setting up a replication cluster

A zero downtime MySQL master-slave replication cluster can easily be setup with the Bitnami MySQL Docker image using the following environment variables:

Step 1: Create the replication master

The first step is to start the MySQL master.

    $ docker run --name mysql-master \
      -e MYSQL_ROOT_PASSWORD=master_root_password \
      -e MYSQL_REPLICATION_MODE=master \
      -e MYSQL_REPLICATION_USER=my_repl_user \
      -e MYSQL_REPLICATION_PASSWORD=my_repl_password \
      -e MYSQL_USER=my_user \
      -e MYSQL_PASSWORD=my_password \
      -e MYSQL_DATABASE=my_database \
      bitnami/mysql:5.7

Step 2: Create the replication slave      

Next we start a MySQL slave container.

    $ docker run --name mysql-slave --link mysql-master:master \
      -e MYSQL_REPLICATION_MODE=slave \
      -e MYSQL_REPLICATION_USER=my_repl_user \
      -e MYSQL_REPLICATION_PASSWORD=my_repl_password \
      -e MYSQL_MASTER_HOST=master \
      -e MYSQL_MASTER_ROOT_PASSWORD=master_root_password \
      bitnami/mysql:5.7

With Docker Compose the master/slave replication can be setup using:

```yaml
version: '2'

services:
  mysql-master:
    image: 'bitnami/mysql:5.7'
    ports:
      - '3306'
    volumes:
      - /path/to/mysql-persistence:/bitnami/mysql/data
    environment:
      - MYSQL_REPLICATION_MODE=master
      - MYSQL_REPLICATION_USER=repl_user
      - MYSQL_REPLICATION_PASSWORD=repl_password
      - MYSQL_ROOT_PASSWORD=master_root_password
      - MYSQL_USER=my_user
      - MYSQL_PASSWORD=my_password
      - MYSQL_DATABASE=my_database
  mysql-slave:
    image: 'bitnami/mysql:5.7'
    ports:
      - '3306'
    depends_on:
      - mysql-master
    environment:
      - MYSQL_REPLICATION_MODE=slave
      - MYSQL_REPLICATION_USER=repl_user
      - MYSQL_REPLICATION_PASSWORD=repl_password
      - MYSQL_MASTER_HOST=mysql-master
      - MYSQL_MASTER_PORT_NUMBER=3306
      - MYSQL_MASTER_ROOT_PASSWORD=master_root_password      
```

Scale the number of slaves using:

    $ docker-compose up --detach --scale mysql-master=1 --scale mysql-slave=3