---
slug: mysql-cluster_docker-compose
---

mysql-cluster_docker-compose
===

https://github.com/docker-box/mysql-cluster

docker-compose 构建 mysql 主从复制(读写分离)集群

```yaml
version: '3'
services:
  mysql_master:
    image: mysql:5.7
    env_file:
      - ./master/mysql_master.env
    container_name: "mysql_master"
    restart: "no"
    ports:
      - 4406:3306
    volumes:
      - ./master/conf/mysql.conf.cnf:/etc/mysql/conf.d/mysql.conf.cnf
      - ./master/data:/var/lib/mysql
    networks:
      - overlay

  mysql_slave:
    image: mysql:5.7
    env_file:
      - ./slave/mysql_slave.env
    container_name: "mysql_slave"
    restart: "no"
    ports:
      - 5506:3306
    depends_on:
      - mysql_master
    volumes:
      - ./slave/conf/mysql.conf.cnf:/etc/mysql/conf.d/mysql.conf.cnf
      - ./slave/data:/var/lib/mysql
    networks:
      - overlay

  mysql_slave2:
    image: mysql:5.7
    env_file:
      - ./slave2/mysql_slave.env
    container_name: "mysql_slave2"
    restart: "no"
    ports:
      - 5507:3306
    depends_on:
      - mysql_master
    volumes:
      - ./slave2/conf/mysql.conf.cnf:/etc/mysql/conf.d/mysql.conf.cnf
      - ./slave2/data:/var/lib/mysql
    networks:
      - overlay

networks:
  overlay:

```