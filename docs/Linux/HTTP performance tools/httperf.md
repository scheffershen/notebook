httperf
=======

Httperf is a tool designed to measure the performance of web servers, allowing administrators to diagnose potential problems and fix issues

## Installation

    $ wget https://github.com/rtCamp/httperf/archive/master.zip
    $ unzip master.zip
    $ cd httperf-master
    $ autoreconf -i
    $ mkdir build
    $ cd build
    $ ../configure
    $ make 
    $ make install

Verify Build

    $ httperf -v | grep open

    $ httperf: maximum number of open descriptors = 500000

## Run

    $ httperf --server example.com --port 80 --num-conns 1000 --rate 1000

## Interpretation

Most important is “Reply status” line:

    Reply status: 1xx=0 2xx=1000 3xx=0 4xx=0 5xx=0

## is "ab" or "httperf" better for checking performance of a website?

Well, it does depend a bit on what you want to check, but I always use httperf myself.

The key difference is that `httperf` attempts to send a continuous stream of requests at a given speed regardless of whether they are answered or not. This can show you not only what your web server's maximum load is, but more importantly, its behaviour when overloaded. Many applications have the unfortunate characteristic of performance that falls off rapidly as the offered load goes higher than the server can handle: i.e., when offered 100 requests per second, it can handle 80 of them, and when offered 150 requests per second it can handle only 10 of them.