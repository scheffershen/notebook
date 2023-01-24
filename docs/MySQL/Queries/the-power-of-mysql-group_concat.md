---
slug: the-power-of-mysql-group_concat
---

the-power-of-mysql-group_concat
==============================

*Date: 22/10/2013* 

https://www.percona.com/blog/2013/10/22/the-power-of-mysql-group_concat/

**This is a test table:**

    CREATE TABLE `group_c` (
    `parent_id` int(11) DEFAULT NULL,
    `child_id` int(11) DEFAULT NULL
    ) ENGINE=InnoDB;
    INSERT INTO group_c(parent_id, child_id)
    VALUES (1,1),(1,2),(1,3),(2,1),(2,4),(1,4),(2,6),(3,1),(3,2),(4,1),(4,1),(1,1),(5,0);

**Without grouping info the only way you can check things is:**

    mysql> SELECT DISTINCT
        -> parent_id, child_id
        -> FROM group_c
        -> ORDER BY parent_id;
    +-----------+----------+
    | parent_id | child_id |
    +-----------+----------+
    |         1 |        1 |
    |         1 |        2 |
    |         1 |        3 |
    |         1 |        4 |
    |         2 |        1 |
    |         2 |        3 |
    |         2 |        4 |
    |         2 |        6 |
    |         3 |        1 |
    |         3 |        2 |
    |         4 |        1 |
    |         5 |        0 |
    +-----------+----------+
    12 rows in set (0.00 sec)

**But it looks much better and easier to read with GROUP_CONCAT:**

    mysql> SELECT DISTINCT
        -> parent_id, GROUP_CONCAT(DISTINCT child_id ORDER BY child_id) AS child_id_list
        -> FROM group_c
        -> group by parent_id
        -> ORDER BY parent_id;
    +-----------+---------------+
    | parent_id | child_id_list |
    +-----------+---------------+
    |         1 | 1,2,3,4       |
    |         2 | 1,3,4,6       |
    |         3 | 1,2           |
    |         4 | 1             |
    |         5 | 0             |
    +-----------+---------------+
    5 rows in set (0.00 sec)

**Assume you have 4 Support Engineers who were working with 6 Customers this week on 15 issues.**

Create test tables:

* engineers (id, name, surname, URL) – list of engineers
* customers (id, company name, URL) – list of customers
* issues (id, customer_id, description) – list of issues assigned to customers
* workflow (id, engineer_id, issue_id) – list of actions: issues and engineers who worked on them

Create test tables:

    -- Engineers
    CREATE TABLE engineers (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    e_name VARCHAR(30) NOT NULL,
    e_surname VARCHAR(30) NOT NULL,
    url VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
    ) ENGINE=InnoDB;
    -- Customers
    CREATE TABLE customers (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    company_name VARCHAR(30) NOT NULL,
    url VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
    ) ENGINE=InnoDB;
    -- Issues (Issue-Customer)
    CREATE TABLE issues (
    id MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT,
    customer_id VARCHAR(30) NOT NULL,
    description TEXT,
    PRIMARY KEY (id)
    ) ENGINE=InnoDB;
    -- Workflow (Action: Engineer-Issue(Customer))
    CREATE TABLE workflow (
    action_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    engineer_id SMALLINT UNSIGNED NOT NULL,
    issue_id SMALLINT UNSIGNED NOT NULL,
    PRIMARY KEY (action_id)
    ) ENGINE=InnoDB;
    INSERT INTO engineers (e_name, e_surname, url)
    VALUES
    ('Miguel', 'Nieto', 'https://www.percona.com/about-us/our-team/miguel-angel-nieto'),
    ('Marcos', 'Albe', 'https://www.percona.com/about-us/our-team/marcos-albe'),
    ('Valerii', 'Kravchuk', 'https://www.percona.com/about-us/our-team/valerii-kravchuk'),
    ('Michael', 'Rikmas', 'https://www.percona.com/about-us/our-team/michael-rikmas');
    INSERT INTO customers (company_name, url)
    VALUES
    ('OT','http://www.ovaistariq.net/'),
    ('PZ','http://www.peterzaitsev.com/'),
    ('VK','http://mysqlentomologist.blogspot.com/'),
    ('FD','http://www.lefred.be/'),
    ('AS','http://mysqlunlimited.blogspot.com/'),
    ('SS','https://www.flamingspork.com/blog/');
    INSERT INTO issues(customer_id, description)
    VALUES
    (1,'Fix replication'),
    (2,'Help with installation of Percona Cluster'),
    (3,'Hardware suggestions'),
    (4,'Error: no space left'),
    (5,'Help with setup daily backup by Xtrabackup'),
    (6,'Poke sales about Support agreement renewal'),
    (4,'Add more accounts for customer'),
    (2,'Create Hot Fix of Bug 1040735'),
    (1,'Query optimisation'),
    (1,'Prepare custom build for Solaris'),
    (2,'explain about Percona Monitoring plugins'),
    (6,'Prepare access for customer servers for future work'),
    (5,'Decribe load balancing for pt-online-schema-change'),
    (4,'Managing deadlocks'),
    (1,'Suggestions about buffer pool size');
    INSERT INTO workflow (engineer_id, issue_id)
    VALUES (1,1),(4,2),(2,3),(1,4),(3,5),(2,6),(3,7),(2,8),(2,9),(1,10),(3,11),(2,12),(2,13),(3,14),(1,15),(1,9),(4,14),(2,9),(1,15),(3,10),(4,2),(2,15),(4,8),(4,4),(3,11),(1,7),(3,7),(1,1),(1,9),(3,4),(4,3),(1,5),(1,7),(1,4),(2,4),(2,5);

**List of issues for each engineer (GROUP_CONCAT):**

```
mysql> SELECT
    ->  CONCAT (e_name, ' ', e_surname) AS engineer,
    ->  GROUP_CONCAT(DISTINCT issue_id, ' (', c.company_name,')' ORDER BY issue_id SEPARATOR ', ' ) AS 'issue (customer)'
    -> FROM
    ->  workflow w,
    ->  engineers e,
    ->  customers c,
    ->  issues i
    -> WHERE
    ->  w.engineer_id = e.id
    ->  AND w.issue_id = i.id
    ->  AND i.customer_id = c.id
    -> GROUP BY
    ->  e.id
    -> ORDER BY
    ->  e_name, e_surname;
+------------------+---------------------------------------------------------------------------+
| engineer         | issue (customer)                                                          |
+------------------+---------------------------------------------------------------------------+
| Marcos Albe      | 3 (VK), 4 (FD), 5 (AS), 6 (SS), 8 (PZ), 9 (OT), 12 (SS), 13 (AS), 15 (OT) |
| Michael Rikmas   | 2 (PZ), 3 (VK), 4 (FD), 8 (PZ), 14 (FD)                                   |
| Miguel Nieto     | 1 (OT), 4 (FD), 5 (AS), 7 (FD), 9 (OT), 10 (OT), 15 (OT)                  |
| Valerii Kravchuk | 4 (FD), 5 (AS), 7 (FD), 10 (OT), 11 (PZ), 14 (FD)                         |
+------------------+---------------------------------------------------------------------------+
4 rows in set (0.00 sec)
```

**List of engineers for each customer (GROUP_CONCAT inside of GROUP_CONCAT):**

```
mysql> SELECT
    ->  c.company_name AS company,
    ->  GROUP_CONCAT(DISTINCT issue_id, ' (', engineer_list, ')' ORDER BY issue_id SEPARATOR ', ' ) AS issue
    -> FROM
    ->  workflow w,
    ->  engineers e,
    ->  customers c,
    ->  issues i,
    ->  (SELECT
    ->    i.id AS i_id,
    ->    GROUP_CONCAT(DISTINCT CONCAT(e_name, ' ', e_surname) ORDER BY e_name SEPARATOR ', ') AS engineer_list
    ->   FROM
    ->    workflow w,
    ->    engineers e,
    ->    issues i
    ->   WHERE
    ->    w.engineer_id = e.id
    ->    AND w.issue_id = i.id
    ->   GROUP BY
    ->    i.id) AS e_list
    -> WHERE
    ->  w.engineer_id = e.id
    ->  AND w.issue_id = i.id
    ->  AND i.customer_id = c.id
    ->  AND w.issue_id = e_list.i_id
    -> GROUP BY
    ->  c.id
    -> ORDER BY
    ->  c.company_name;
+---------+--------------------------------------------------------------------------------------------------------------------------------------------+
| company | issue (engineer)                                                                                                                           |
+---------+--------------------------------------------------------------------------------------------------------------------------------------------+
| AS      | 5 (Marcos Albe, Miguel Nieto, Valerii Kravchuk), 13 (Marcos Albe)                                                                          |
| FD      | 4 (Marcos Albe, Michael Rikmas, Miguel Nieto, Valerii Kravchuk), 7 (Miguel Nieto, Valerii Kravchuk), 14 (Michael Rikmas, Valerii Kravchuk) |
| OT      | 1 (Miguel Nieto), 9 (Marcos Albe, Miguel Nieto), 10 (Miguel Nieto, Valerii Kravchuk), 15 (Marcos Albe, Miguel Nieto)                       |
| PZ      | 2 (Michael Rikmas), 8 (Marcos Albe, Michael Rikmas), 11 (Valerii Kravchuk)                                                                 |
| SS      | 6 (Marcos Albe), 12 (Marcos Albe)                                                                                                          |
| VK      | 3 (Marcos Albe, Michael Rikmas)                                                                                                            |
+---------+--------------------------------------------------------------------------------------------------------------------------------------------+
6 rows in set (0.00 sec)
```

**PHP/HTML**

Source Code:

```php
<?php
“; foreach($rows as $row) { echo “‘.$row[“company”].”.$row[“description”].”.$row[“engineer_list”].’ ‘; } echo ”
“.$row[“id”].’
“; $result->close(); $mysqli->close(); 
?>
```

Result:

1   OT  Fix replication Miguel Nieto
2   PZ  Help with installation of Percona Cluster   Michael Rikmas
3   VK  Hardware suggestions    Marcos Albe, Michael Rikmas
4   FD  Error: no space left    Marcos Albe, Michael Rikmas, Miguel Nieto, Valerii Kravchuk
5   AS  Help with setup daily backup by Xtrabackup  Marcos Albe, Miguel Nieto, Valerii Kravchuk
6   SS  Poke sales about Support agreement renewal  Marcos Albe
7   FD  Add more accounts for customer  Miguel Nieto, Valerii Kravchuk
8   PZ  Create Hot Fix of Bug 1040735   Marcos Albe, Michael Rikmas
9   OT  Query optimisation  Marcos Albe, Miguel Nieto
10  OT  Prepare custom build for Solaris    Miguel Nieto, Valerii Kravchuk
11  PZ  explain about Percona Monitoring plugins    Valerii Kravchuk
12  SS  Prepare access for customer servers for future work Marcos Albe
13  AS  Decribe load balancing for pt-online-schema-change  Marcos Albe
14  FD  Managing deadlocks  Michael Rikmas, Valerii Kravchuk
15  OT  Suggestions about buffer pool size  Marcos Albe, Miguel Nieto
