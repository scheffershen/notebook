"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2646],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=m(r),y=o,u=d["".concat(s,".").concat(y)]||d[y]||c[y]||l;return r?n.createElement(u,a(a({ref:t},p),{},{components:r})):n.createElement(u,a({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var m=2;m<l;m++)a[m]=r[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5706:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=r(7462),o=(r(7294),r(3905));const l={slug:"copiercoller-une-base-de-donnees-mysql"},a="copiercoller-une-base-de-donnees-mysql",i={unversionedId:"MySQL/Import-Export/copiercoller-une-base-de-donnees-mysql",id:"MySQL/Import-Export/copiercoller-une-base-de-donnees-mysql",title:"copiercoller-une-base-de-donnees-mysql",description:"Can I copy the entire /var/lib/mysql folder to a different server? (mysql vs mariadb, different versions)",source:"@site/docs/MySQL/Import-Export/copiercoller-une-base-de-donnees-mysql.md",sourceDirName:"MySQL/Import-Export",slug:"/MySQL/Import-Export/copiercoller-une-base-de-donnees-mysql",permalink:"/notebook/docs/MySQL/Import-Export/copiercoller-une-base-de-donnees-mysql",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/MySQL/Import-Export/copiercoller-une-base-de-donnees-mysql.md",tags:[],version:"current",frontMatter:{slug:"copiercoller-une-base-de-donnees-mysql"},sidebar:"tutorialSidebar",previous:{title:"Migrate MySQL 5.7 to 8.0 via mysqldump",permalink:"/notebook/docs/MySQL/Import-Export/Migrate_MySQL_5_7_to_8_0_via_mysqldump"},next:{title:"How to Install MySQL 5.7 on Ubuntu 18.04 LTS",permalink:"/notebook/docs/MySQL/Installation/How-to-Install-MySQL-5.7-on-Ubuntu-18.04-LTS"}},s={},m=[{value:"Can I copy the entire /var/lib/mysql folder to a different server? (mysql vs mariadb, different versions)",id:"can-i-copy-the-entire-varlibmysql-folder-to-a-different-server-mysql-vs-mariadb-different-versions",level:2}],p={toc:m};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"copiercoller-une-base-de-donnees-mysql"},"copiercoller-une-base-de-donnees-mysql"),(0,o.kt)("h2",{id:"can-i-copy-the-entire-varlibmysql-folder-to-a-different-server-mysql-vs-mariadb-different-versions"},"Can I copy the entire /var/lib/mysql folder to a different server? (mysql vs mariadb, different versions)"),(0,o.kt)("p",null,"Yes, it is possible"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install MariaDB in the new Arch system, verify that it works. Do your changes to the ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/mysql/my.cnf"),". E.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"innodb_file_per_table"),". (more of this is out of scope for this question)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"sudo systemctl stop mysqld"),". (You want to stop on both servers, but in my case the other was already off)"),(0,o.kt)("li",{parentName:"ol"},"Rename the ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/lib/mysql")," folder, e.g. to ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/lib/_mysql"),"."),(0,o.kt)("li",{parentName:"ol"},"Copy the old ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/lib/mysql")," folder from the old Debian (LMDE) system."),(0,o.kt)("li",{parentName:"ol"},"Restore file ownership to ",(0,o.kt)("inlineCode",{parentName:"li"},"mysql:mysql")," for everything in ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/lib/mysql"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo chown -R mysql:mysql /var/lib/mysql")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"sudo systemctl start mysqld"),'.\n-> Job for mysqld.service failed. See "systemctl status mysqld.service" and "journalctl -xe" for details.'),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"sudo systemctl status mysqld"),".\n-> This shows that the service is running, but some things are going wrong. This is what mysql_upgrade is for."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"mysql_upgrade -u root -p"),"\nNotes:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"It is the mysql root password from the old system!"),(0,o.kt)("li",{parentName:"ul"},"I had to remove one leftover folder from /var/lib/mysql due to invalid database name."),(0,o.kt)("li",{parentName:"ul"},"The file /var/lib/mysql/mysql_upgrade_info needs to be writable."),(0,o.kt)("li",{parentName:"ul"},"The process can take a while."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"sudo systemctl restart mysqld"),".")),(0,o.kt)("p",null,"CAVEAT: Apparently you cannot downgrade to a lower MySQL version. I tried to migrate my databases to ",(0,o.kt)("inlineCode",{parentName:"p"},"MySQL 5.5")," (or rather, the corresponding MariaDB), and the server would not start. I had to install ",(0,o.kt)("inlineCode",{parentName:"p"},"MySQL 5.6")," instead. (the ",(0,o.kt)("inlineCode",{parentName:"p"},"MariaDB")," corresponding to ",(0,o.kt)("inlineCode",{parentName:"p"},"MySQL 5.6")," is not available on my Linux distro)."))}d.isMDXComponent=!0}}]);