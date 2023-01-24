---
title: PHP Performance - Additional CPU cores vs Faster CPU cores
slug: PHP-Performance-Additional-CPU-cores-vs-Faster-CPU-cores
---

PHP Performance: Additional CPU cores vs Faster CPU cores
=========================================================

https://haydenjames.io/php-performance-additional-cpu-cores-vs-faster-cpu-cores/

February 26, 2021 by Hayden James

> Each PHP-FPM process uses a single CPU core. PHP benefits greatly from CPU single-thread performance.

PHP is not designed for multithreading.  Therefore, each page/request is served by one PHP process, and each process locks on to one CPU core.  However, unlike PHP, MySQL is multithreaded, 

If your web server has concurrent page requests, you’ll also have several PHP processes – each using a CPU core – running concurrently. 

> You have a lot of CPU cores (18) but the core speed is only 2.0GHz. Since PHP processes are executed per-core, a VPS with 3+GHz cores would fit your workload better.

## Faster CPU cores vs. Additional CPU cores

`If it takes a 2GHz processor core 3 seconds to process a request, then a 3GHz processor core would return the same request in around 2 seconds`. Which, in turn, frees up cores for additional requests at a faster rate. This means we can safely reduce the # of cores from 18 to 8.

## Checking CPU core speed and number of cores – Linux command line

Suppose you are unsure of your server’s CPU specs. You can quickly check with the following command

	$ lscpu
		On-line CPU(s) list: 0-7
		Thread(s) per core: 1
		Model name: Intel(R) Xeon(R) CPU E5-1650 v2 @ 3.50GHz
		CPU MHz: 3499.998
		BogoMIPS: 6999.99

## How do you make good use of multicore CPUs in your PHP/MySQL applications?

https://stackoverflow.com/questions/2267345/how-do-you-make-good-use-of-multicore-cpus-in-your-php-mysql-applications

PHP is not quite oriented towards multi-threading : as you already noticed, each page is served by one PHP process -- that does one thing at a time, including just "waiting" while an SQL query is executed on the database server.

Each PHP process will run on one core, in response to the request of one user, but there are several sub-processes of Apache running in parallel (one for each request, up to a couple of dozens or hundreds, depending on your configuration)

The MySQL server is multi-threaded, which means it can use several distinct cores to answer several concurrent requests -- even if each request cannot be served by more that one core.

Same for e-mail sending : anyway, several minutes will pass before your users receive/read their mail, so there is no need to send them immediately.

A solution that I often use is some queuing mechanism :

- The web application store things in a "todo-list"
- And that "todo-list" is de-queued by some batches that are run frequently via a cronjob

And for some other manipulations, you just want them run every X minutes -- and, here too, a cronjob is the perfect tool.