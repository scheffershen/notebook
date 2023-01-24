How to skip certain database tables with mysqldump?
===================================================


	$ mysqldump -u USERNAME -pPASSWORD DATABASE --ignore-table=DATABASE.tracking > database.sql