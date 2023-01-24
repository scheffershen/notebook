---
slug: Backup-Performance-Comparison
---

Backup Performance Comparison: mysqldump vs MySQL Shell Utilities vs mydumper vs mysqlpump vs XtraBackup
========================================================================================================

27 Dec 2021

https://www.percona.com/blog/dump-performance-comparison-mysqldump-vs-mysql-shell-utilities-vs-mydumper/

we will compare the performance of performing a backup from a MySQL database using `mysqldump`, MySQL Shell feature called Instance Dump, `mysqlpump`, `mydumper`, and `Percona XtraBackup`.

## Benchmark Results

The benchmark was run on an `m5dn.8xlarge` instance, with `128GB RAM`, `32 vCPU`, and 2xNVMe disks of `600GB` (one for backup and the other one for MySQL data). The MySQL version was `8.0.26` and configured with `89Gb` of buffer pool, `20Gb` of redo log, and a sample database of `177 GB` (more details below).

I’ve run each command three times in order to experiment using `16, 32, and 64 threads`.  The exception for this is `mysqldump`, which does not have a parallel option and only runs in a `single-threaded` mode.

We can observe interesting outcomes:

1. When using `zstd` compression, `mydumper` really shines in terms of performance. This option was added not long ago (`MyDumper 0.11.3`).
2. When `mydumper` is using gzip, `MySQL Shell` is the fastest backup option.
3. In 3rd we have `Percona XtraBackup`.
4. `mysqlpump` is the 4th fastest followed closer by mydumper when using gzip.
5. `mysqldump` is the classic old-school style to perform dumps and is the slowest of the four tools.
6. In a server with more CPUs, the potential parallelism increases, giving even more advantage to the tools that can benefit from multiple threads.

## Hardware and Software Specs

These are the specs of the benchmark:

- 32 CPUs
- 128GB Memory
- 2x NVMe disks 600 GB
- Centos 7.9
- MySQL 8.0.26
- MySQL shell 8.0.26
- mydumper 0.11.5 – gzip
- mydumper 0.11.5 – zstd
- Xtrabackup 8.0.26

The my.cnf configuration

```
[mysqld]
innodb_buffer_pool_size = 89G
innodb_log_file_size = 10G
```
 
## Performance Test

to load the data, I choose the [tpcc](https://github.com/Percona-Lab/sysbench-tpcc) method:

	$ ./tpcc.lua --mysql-user=sysbench --mysql-password='sysbench' --mysql-db=percona --time=300 --threads=64 --report-interval=1 --tables=10 --scale=100 --db-driver=mysql prepare

	$ time mysqldump --all-databases --max-allowed-packet=4294967295 --single-transaction -R --master-data=2 --flush-logs | gzip > /backup/dump.dmp.gz

	$ mysqlsh
		MySQL JS > shell.connect('root@localhost:3306');
		MySQL localhost:3306 ssl test JS > util.dumpInstance("/backup", {ocimds: true, compatibility: ["strip_restricted_grants","ignore_missing_pks"],threads: 16})

	$ time mydumper --threads=16 --trx-consistency-only --events --routines --triggers --compress --outputdir /backup/ --logfile /backup/log.out --verbose=2

	$ time mysqlpump --default-parallelism=16 --all-databases > backup.out

	$ time xtrabackup --backup --parallel=16 --compress --compress-threads=16 --datadir=/mysql_data/ --target-dir=/backup/

[mydumper](https://github.com/mydumper/mydumper)