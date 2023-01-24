---
slug: MysqlCommandLine
---

Mysql command line
===

**login by console linux**

**run mysql console**

    mysql -u root -p

**command in mysql console: **

    > USE partnering2015;
    > select * from Status;
    > update Status set visible = 1 where id = 1; 
    > show tables;   
    > insert into BoothSuperficies (`booth_superficies`,`price`, `order`) values ("12 m2 booth package", "3500", "2");
    > delete form BoothSuperficies where id = 4;
    > 
    > update `user` set InscriptionDate = `1970-01-01 00:00:00`  where InscriptionDate = '0000-00-00';
    > 
    > ALTER TABLE `user` ADD `newsletter` TINYINT(4) NOT NULL DEFAULT '1' AFTER `member_ip`;

**sql data import**

    mysql -u root -p santesur < santesur.sql 

**1、创建用户**

    create user hncu identified by '1234'

**2、创建数据库***

    CREATE DATABASE IF NOT EXISTS hncu DEFAULT CHARACTER SET 'utf8';

**3. 删除数据库**

    DROP DATABASE mydb2; 
    SHOW DATABASES;

二、数据库编码问题

1、指定数据库编码

方法1:  可以在MySQL的配置文件如my.ini中指定： default-character-set = GBK  或 default-character-set = utf8

方法2：在创建数据库时自己指定，如： CREATE DATABASE IF NOT EXISTS hncu DEFAULT CHARACTER SET 'utf8';

2、查看数据库编码

    SHOW VARIABLES; //查询系统中的所有变量

    SHOW VARIABLES WHERE variable_name LIKE 'character%'; //查询系统中所有的编码方面的参数    

编码方面的参数查询结果：

    character_set_client utf8  //客户端编码 (不同的客户端显示的可能不一样，如cmd窗口和SQLyong)

    character_set_connection  utf8  //客户端连接数据库时用的编码

    character_set_database gbk  //数据库的默认编码(一般来讲，这是由my.ini配置文件定的。这是没进数据库时的通用编码)

    character_set_filesystem binary  //这是数据库自己存储数据文件时用的编码，跟我们关系不大

    character_set_results utf8  //查询之后的结果集的编码

    character_set_server gbk  //MySQL数据库服务器自己的编码  iso8859-1在这里称Latin1

    character_set_system  utf8

    character_set_dir   MySQL安装目录 \share\charsets

对我们来讲，为了不出现乱码，必须保证client和connection的编码一致，否则就会乱码。

3、设置（修改）数据编码

    //如何设置指定的编码
    set character_set_client=gbk;

    SET character_set_client=gbk;

    SHOW VARIABLES WHERE variable_name LIKE 'character%';

    SELECT * FROM stud;//原来的数据显示正常

    INSERT INTO stud VALUES(1011,'城院',20,88,'数计学院');

    SELECT * FROM stud;//刚刚插入的那条记录，是乱码 //因为我们这里client是gbk，而connection是utf8，不一致了

    SET character_set_connection=gbk;//已经把client和connection设成gbk，一致了

    INSERT INTO stud VALUES(1012,'城院2',20,88,'数计学院');

    SELECT * FROM stud;//显示刚刚插入的那条记录，还是乱码。因为数据库表stud的编码是utf8，而我们客户端与它的连接都是gbk


6、创建视图

    CREATE VIEW studView AS SELECT * FROM stud WHERE score>=60; 

    SELECT * FROM studview;

4、空值查询    

    //查询无名英雄学生的信息(VARCHAR)
    SELECT * FROM stud WHERE sname IS NULL;

    //查询没有年龄信息的学生
    SELECT * FROM stud WHERE age IS NULL;

6 、WHERE子句+ IN子句

    //查询年龄最小的那个人的名字
    SELECT sname FROM stud WHERE age=(SELECT MIN(age) FROM stud);
    SELECT sname FROM stud WHERE age IN(SELECT MIN(age) FROM stud);

8、distinct（不重复的值）

    SELECT DISTINCT sname,age FROM stud GROUP BY age DESC;

9、EXISTS() 判断括号内的内容是否存在----注意，下面的例子，只要存在年龄为26的学生，就会输出所有数据
    
    SELECT * FROM stud WHERE EXISTS( SELECT * FROM stud WHERE age=26 );    

10 NOT IN example
    
find user id is not exist in user_theme

    SELECT * FROM user WHERE UserId NOT IN (SELECT UserId FROM user_theme)

    SELECT id_member, member_name, FROM_UNIXTIME(date_registered, '%Y-%m-%d') as date_registered, email_address, location, member_ip FROM members WHERE date_registered > :date_registered AND id_member NOT IN (SELECT id_member FROM `themes` WHERE `variable` LIKE 'cust_newsle' AND `value` LIKE '1')

11 Requête pour trouver les doublons absolus

    SELECT COUNT( UserMail ) AS nbr_doublon, UserMail
    FROM user
    GROUP BY UserMail
    HAVING COUNT( UserMail ) >1
    LIMIT 0 , 30   

12 Requête pour supprimer les doublons

    DELETE user 
    FROM user
    LEFT OUTER JOIN (
            SELECT MIN(UserId) as id, UserMail
            FROM user
            GROUP BY UserMail
        ) as t1 
        ON user.UserId = t1.id
    WHERE t1.id IS NULL

14. JOIN example in medica source doctrine

    $query = "SELECT T.id, T.createDate, H.createDate as endDate FROM SupportBundle:Ticket T JOIN umdsSupportBundle:TicketHistory H WHERE T.id = H.ticketId AND T.isValid = 1 AND T.interaction >= 50 AND T.interaction != 58 AND T.line = 2 AND T.createDate >= :dateStart AND T.createDate <= :dateEnd  AND T.ticketStatus != 3  AND (H.ticketStatus = 'Closed' OR H.ticketStatus = 'Transferred') GROUP BY H.ticketId ORDER BY H.createDate DESC ";
    $parameters = array("dateStart" => $dateStart,
        "dateEnd" => $dateEnd
    );

    $results = $this->getEntityManager()->createQuery($query)->setParameters($parameters)->getResult();

15. NOT IN example in medica source  doctrine

    $listInteractionEmpty = $em->createQuery("
            SELECT i FROM SupportBundle:Interaction i
            WHERE i.id NOT IN (SELECT I FROM SupportBundle:Interaction I JOIN SupportBundle:Ticket ti WHERE I.id = ti.interaction AND ti.isValid = 1 AND I.isValid = 1 GROUP BY I.id)
            AND i.isValid = 1
    ");

    $listInteraction = $listInteractionEmpty->getResult(); 