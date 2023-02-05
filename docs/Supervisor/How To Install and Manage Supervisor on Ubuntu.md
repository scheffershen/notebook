How To Install and Manage Supervisor on Ubuntu and Debian VPS
===

*date:Jul 23, 2013*

In many VPS environments, it is often the case that you will have a number of small programs that you want to `run persistently`, whether these be `small shell scripts`, `Node.js apps`, or any `large-sized packages`.

`Supervisor` is a process manager which makes managing a number of long-running programs a trivial task by providing a consistent interface through which they can be monitored and controlled.

## Installation

    $ apt-get install supervisor

    $ service supervisor restart

## Adding a Program

we'll assume we have a shell script we wish to keep persistently running that we have saved at /usr/local/bin/long.sh and looks like the following:

```
    #!/bin/bash
    while true
    do 
        # Echo current date to stdout
        echo `date`
        # Echo 'error!' to stderr
        echo 'error!' >&2
        sleep 1
    done
```

    chmod +x /usr/local/bin/long.sh

The program configuration files for Supervisor programs are found in the `/etc/supervisor/conf.d` directory, 

A simple configuration for our script, saved at `/etc/supervisor/conf.d/long_script.conf`, would look like so:

```
[program:long_script]
command=/usr/local/bin/long.sh
autostart=true
autorestart=true
stderr_logfile=/var/log/long.err.log
stdout_logfile=/var/log/long.out.log
```

```
[program:rabbitmq_video_add_script]
command=php /var/www/html/medical-on-demand.universalmedica.com/bin/console --env=prod rabbitmq:video_add
autostart=true
autorestart=true
stderr_logfile=/var/log/rabbitmq_video_add_script.err.log
stdout_logfile=/var/log/rabbitmq_video_add_script.out.log
```

First we tell `Supervisor` to look for any new or changed program configurations in the `/etc/supervisor/conf.d` directory with:

    $ supervisorctl reread

Followed by telling it to enact any changes with:

    $ supervisorctl update

At this point our program should now be running and we can check this is the case by looking at the output log file:

    $ tail /var/log/long.out.log
    Sat Jul 20 22:21:22 UTC 2013
    Sat Jul 20 22:21:23 UTC 2013
    Sat Jul 20 22:21:24 UTC 2013
    Sat Jul 20 22:21:25 UTC 2013
    Sat Jul 20 22:21:26 UTC 2013
    Sat Jul 20 22:21:27 UTC 2013
    Sat Jul 20 22:21:28 UTC 2013

## Managing Programs

To enter the interactive mode, start supervisorctl with no arguments:

```
    $ supervisorctl
    long_script                      RUNNING    pid 12614, uptime 1:49:37
    supervisor>
```

```
    supervisor> help

    default commands (type help ):
    =====================================
    add    clear  fg        open  quit    remove  restart   start   stop  update
    avail  exit   maintail  pid   reload  reread  shutdown  status  tail  version
```

To start in a simple manner, we can start, stop and restart a program with the associated commands followed by the program name:

    supervisor> stop long_script
    long_script: stopped
    supervisor> start long_script
    long_script: started
    supervisor> restart long_script
    long_script: stopped
    long_script: started

Using the tail command, we can view the most recent entries in the stdout and stderr logs for our program:

    supervisor> tail long_script
    Sun Jul 21 00:36:10 UTC 2013
    Sun Jul 21 00:36:11 UTC 2013
    Sun Jul 21 00:36:12 UTC 2013
    Sun Jul 21 00:36:13 UTC 2013
    Sun Jul 21 00:36:14 UTC 2013
    Sun Jul 21 00:36:15 UTC 2013
    Sun Jul 21 00:36:17 UTC 2013

    supervisor> tail long_script stderr
    error!
    error!
    error!
    error!
    error!
    error!
    error!

Using status we can view again the current execution state of each program after making any changes:
    
    supervisor> status
    long_script                      STOPPED    Jul 21 01:07 AM

    supervisor> quit



