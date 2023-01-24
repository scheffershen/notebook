"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9814],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>N});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,N=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return r?t.createElement(N,a(a({ref:n},u),{},{components:r})):t.createElement(N,a({ref:n},u))}));function N(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4443:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=r(7462),o=(r(7294),r(3905));const i={slug:"the-power-of-mysql-group_concat"},a="the-power-of-mysql-group_concat",s={unversionedId:"MySQL/Queries/the-power-of-mysql-group_concat",id:"MySQL/Queries/the-power-of-mysql-group_concat",title:"the-power-of-mysql-group_concat",description:"Date: 22/10/2013",source:"@site/docs/MySQL/Queries/the-power-of-mysql-group_concat.md",sourceDirName:"MySQL/Queries",slug:"/MySQL/Queries/the-power-of-mysql-group_concat",permalink:"/notebook/docs/MySQL/Queries/the-power-of-mysql-group_concat",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/MySQL/Queries/the-power-of-mysql-group_concat.md",tags:[],version:"current",frontMatter:{slug:"the-power-of-mysql-group_concat"},sidebar:"tutorialSidebar",previous:{title:"learn-sql-join-multiple-tables",permalink:"/notebook/docs/MySQL/Queries/earn-sql-join-multiple-tables"},next:{title:"OpenAI",permalink:"/notebook/docs/category/openai"}},l={},c=[],u={toc:c};function p(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-power-of-mysql-group_concat"},"the-power-of-mysql-group_concat"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Date: 22/10/2013")," "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.percona.com/blog/2013/10/22/the-power-of-mysql-group_concat/"},"https://www.percona.com/blog/2013/10/22/the-power-of-mysql-group_concat/")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This is a test table:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CREATE TABLE `group_c` (\n`parent_id` int(11) DEFAULT NULL,\n`child_id` int(11) DEFAULT NULL\n) ENGINE=InnoDB;\nINSERT INTO group_c(parent_id, child_id)\nVALUES (1,1),(1,2),(1,3),(2,1),(2,4),(1,4),(2,6),(3,1),(3,2),(4,1),(4,1),(1,1),(5,0);\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Without grouping info the only way you can check things is:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> SELECT DISTINCT\n    -> parent_id, child_id\n    -> FROM group_c\n    -> ORDER BY parent_id;\n+-----------+----------+\n| parent_id | child_id |\n+-----------+----------+\n|         1 |        1 |\n|         1 |        2 |\n|         1 |        3 |\n|         1 |        4 |\n|         2 |        1 |\n|         2 |        3 |\n|         2 |        4 |\n|         2 |        6 |\n|         3 |        1 |\n|         3 |        2 |\n|         4 |        1 |\n|         5 |        0 |\n+-----------+----------+\n12 rows in set (0.00 sec)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"But it looks much better and easier to read with GROUP_CONCAT:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> SELECT DISTINCT\n    -> parent_id, GROUP_CONCAT(DISTINCT child_id ORDER BY child_id) AS child_id_list\n    -> FROM group_c\n    -> group by parent_id\n    -> ORDER BY parent_id;\n+-----------+---------------+\n| parent_id | child_id_list |\n+-----------+---------------+\n|         1 | 1,2,3,4       |\n|         2 | 1,3,4,6       |\n|         3 | 1,2           |\n|         4 | 1             |\n|         5 | 0             |\n+-----------+---------------+\n5 rows in set (0.00 sec)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Assume you have 4 Support Engineers who were working with 6 Customers this week on 15 issues.")),(0,o.kt)("p",null,"Create test tables:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"engineers (id, name, surname, URL) \u2013 list of engineers"),(0,o.kt)("li",{parentName:"ul"},"customers (id, company name, URL) \u2013 list of customers"),(0,o.kt)("li",{parentName:"ul"},"issues (id, customer_id, description) \u2013 list of issues assigned to customers"),(0,o.kt)("li",{parentName:"ul"},"workflow (id, engineer_id, issue_id) \u2013 list of actions: issues and engineers who worked on them")),(0,o.kt)("p",null,"Create test tables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-- Engineers\nCREATE TABLE engineers (\nid SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,\ne_name VARCHAR(30) NOT NULL,\ne_surname VARCHAR(30) NOT NULL,\nurl VARCHAR(255) NOT NULL,\nPRIMARY KEY (id)\n) ENGINE=InnoDB;\n-- Customers\nCREATE TABLE customers (\nid SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,\ncompany_name VARCHAR(30) NOT NULL,\nurl VARCHAR(255) NOT NULL,\nPRIMARY KEY (id)\n) ENGINE=InnoDB;\n-- Issues (Issue-Customer)\nCREATE TABLE issues (\nid MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT,\ncustomer_id VARCHAR(30) NOT NULL,\ndescription TEXT,\nPRIMARY KEY (id)\n) ENGINE=InnoDB;\n-- Workflow (Action: Engineer-Issue(Customer))\nCREATE TABLE workflow (\naction_id INT UNSIGNED NOT NULL AUTO_INCREMENT,\nengineer_id SMALLINT UNSIGNED NOT NULL,\nissue_id SMALLINT UNSIGNED NOT NULL,\nPRIMARY KEY (action_id)\n) ENGINE=InnoDB;\nINSERT INTO engineers (e_name, e_surname, url)\nVALUES\n('Miguel', 'Nieto', 'https://www.percona.com/about-us/our-team/miguel-angel-nieto'),\n('Marcos', 'Albe', 'https://www.percona.com/about-us/our-team/marcos-albe'),\n('Valerii', 'Kravchuk', 'https://www.percona.com/about-us/our-team/valerii-kravchuk'),\n('Michael', 'Rikmas', 'https://www.percona.com/about-us/our-team/michael-rikmas');\nINSERT INTO customers (company_name, url)\nVALUES\n('OT','http://www.ovaistariq.net/'),\n('PZ','http://www.peterzaitsev.com/'),\n('VK','http://mysqlentomologist.blogspot.com/'),\n('FD','http://www.lefred.be/'),\n('AS','http://mysqlunlimited.blogspot.com/'),\n('SS','https://www.flamingspork.com/blog/');\nINSERT INTO issues(customer_id, description)\nVALUES\n(1,'Fix replication'),\n(2,'Help with installation of Percona Cluster'),\n(3,'Hardware suggestions'),\n(4,'Error: no space left'),\n(5,'Help with setup daily backup by Xtrabackup'),\n(6,'Poke sales about Support agreement renewal'),\n(4,'Add more accounts for customer'),\n(2,'Create Hot Fix of Bug 1040735'),\n(1,'Query optimisation'),\n(1,'Prepare custom build for Solaris'),\n(2,'explain about Percona Monitoring plugins'),\n(6,'Prepare access for customer servers for future work'),\n(5,'Decribe load balancing for pt-online-schema-change'),\n(4,'Managing deadlocks'),\n(1,'Suggestions about buffer pool size');\nINSERT INTO workflow (engineer_id, issue_id)\nVALUES (1,1),(4,2),(2,3),(1,4),(3,5),(2,6),(3,7),(2,8),(2,9),(1,10),(3,11),(2,12),(2,13),(3,14),(1,15),(1,9),(4,14),(2,9),(1,15),(3,10),(4,2),(2,15),(4,8),(4,4),(3,11),(1,7),(3,7),(1,1),(1,9),(3,4),(4,3),(1,5),(1,7),(1,4),(2,4),(2,5);\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"List of issues for each engineer (GROUP_CONCAT):")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> SELECT\n    ->  CONCAT (e_name, ' ', e_surname) AS engineer,\n    ->  GROUP_CONCAT(DISTINCT issue_id, ' (', c.company_name,')' ORDER BY issue_id SEPARATOR ', ' ) AS 'issue (customer)'\n    -> FROM\n    ->  workflow w,\n    ->  engineers e,\n    ->  customers c,\n    ->  issues i\n    -> WHERE\n    ->  w.engineer_id = e.id\n    ->  AND w.issue_id = i.id\n    ->  AND i.customer_id = c.id\n    -> GROUP BY\n    ->  e.id\n    -> ORDER BY\n    ->  e_name, e_surname;\n+------------------+---------------------------------------------------------------------------+\n| engineer         | issue (customer)                                                          |\n+------------------+---------------------------------------------------------------------------+\n| Marcos Albe      | 3 (VK), 4 (FD), 5 (AS), 6 (SS), 8 (PZ), 9 (OT), 12 (SS), 13 (AS), 15 (OT) |\n| Michael Rikmas   | 2 (PZ), 3 (VK), 4 (FD), 8 (PZ), 14 (FD)                                   |\n| Miguel Nieto     | 1 (OT), 4 (FD), 5 (AS), 7 (FD), 9 (OT), 10 (OT), 15 (OT)                  |\n| Valerii Kravchuk | 4 (FD), 5 (AS), 7 (FD), 10 (OT), 11 (PZ), 14 (FD)                         |\n+------------------+---------------------------------------------------------------------------+\n4 rows in set (0.00 sec)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"List of engineers for each customer (GROUP_CONCAT inside of GROUP_CONCAT):")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> SELECT\n    ->  c.company_name AS company,\n    ->  GROUP_CONCAT(DISTINCT issue_id, ' (', engineer_list, ')' ORDER BY issue_id SEPARATOR ', ' ) AS issue\n    -> FROM\n    ->  workflow w,\n    ->  engineers e,\n    ->  customers c,\n    ->  issues i,\n    ->  (SELECT\n    ->    i.id AS i_id,\n    ->    GROUP_CONCAT(DISTINCT CONCAT(e_name, ' ', e_surname) ORDER BY e_name SEPARATOR ', ') AS engineer_list\n    ->   FROM\n    ->    workflow w,\n    ->    engineers e,\n    ->    issues i\n    ->   WHERE\n    ->    w.engineer_id = e.id\n    ->    AND w.issue_id = i.id\n    ->   GROUP BY\n    ->    i.id) AS e_list\n    -> WHERE\n    ->  w.engineer_id = e.id\n    ->  AND w.issue_id = i.id\n    ->  AND i.customer_id = c.id\n    ->  AND w.issue_id = e_list.i_id\n    -> GROUP BY\n    ->  c.id\n    -> ORDER BY\n    ->  c.company_name;\n+---------+--------------------------------------------------------------------------------------------------------------------------------------------+\n| company | issue (engineer)                                                                                                                           |\n+---------+--------------------------------------------------------------------------------------------------------------------------------------------+\n| AS      | 5 (Marcos Albe, Miguel Nieto, Valerii Kravchuk), 13 (Marcos Albe)                                                                          |\n| FD      | 4 (Marcos Albe, Michael Rikmas, Miguel Nieto, Valerii Kravchuk), 7 (Miguel Nieto, Valerii Kravchuk), 14 (Michael Rikmas, Valerii Kravchuk) |\n| OT      | 1 (Miguel Nieto), 9 (Marcos Albe, Miguel Nieto), 10 (Miguel Nieto, Valerii Kravchuk), 15 (Marcos Albe, Miguel Nieto)                       |\n| PZ      | 2 (Michael Rikmas), 8 (Marcos Albe, Michael Rikmas), 11 (Valerii Kravchuk)                                                                 |\n| SS      | 6 (Marcos Albe), 12 (Marcos Albe)                                                                                                          |\n| VK      | 3 (Marcos Albe, Michael Rikmas)                                                                                                            |\n+---------+--------------------------------------------------------------------------------------------------------------------------------------------+\n6 rows in set (0.00 sec)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"PHP/HTML")),(0,o.kt)("p",null,"Source Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\u201c; foreach($rows as $row) { echo \u201c\u2018.$row[\u201ccompany\u201d].\u201d.$row[\u201cdescription\u201d].\u201d.$row[\u201cengineer_list\u201d].\u2019 \u2018; } echo \u201d\n\u201c.$row[\u201cid\u201d].\u2019\n\u201c; $result->close(); $mysqli->close(); \n?>\n")),(0,o.kt)("p",null,"Result:"),(0,o.kt)("p",null,"1   OT  Fix replication Miguel Nieto\n2   PZ  Help with installation of Percona Cluster   Michael Rikmas\n3   VK  Hardware suggestions    Marcos Albe, Michael Rikmas\n4   FD  Error: no space left    Marcos Albe, Michael Rikmas, Miguel Nieto, Valerii Kravchuk\n5   AS  Help with setup daily backup by Xtrabackup  Marcos Albe, Miguel Nieto, Valerii Kravchuk\n6   SS  Poke sales about Support agreement renewal  Marcos Albe\n7   FD  Add more accounts for customer  Miguel Nieto, Valerii Kravchuk\n8   PZ  Create Hot Fix of Bug 1040735   Marcos Albe, Michael Rikmas\n9   OT  Query optimisation  Marcos Albe, Miguel Nieto\n10  OT  Prepare custom build for Solaris    Miguel Nieto, Valerii Kravchuk\n11  PZ  explain about Percona Monitoring plugins    Valerii Kravchuk\n12  SS  Prepare access for customer servers for future work Marcos Albe\n13  AS  Decribe load balancing for pt-online-schema-change  Marcos Albe\n14  FD  Managing deadlocks  Michael Rikmas, Valerii Kravchuk\n15  OT  Suggestions about buffer pool size  Marcos Albe, Miguel Nieto"))}p.isMDXComponent=!0}}]);