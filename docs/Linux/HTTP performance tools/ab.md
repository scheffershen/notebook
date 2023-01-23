apachebench (ab) and htop
=====================

ab - L'outil de test des performances du serveur HTTP Apache.

ab est un utilitaire qui vous permet de tester les performances de votre serveur HTTP Apache. Il a été conçu pour vous donner une idée du degré de performances de votre installation d'Apache. Il vous permet en particulier de déterminer le nombre de réquêtes que votre installation d'Apache est capable de servir par seconde.

## Conventions:

Target machine – a machine which is being benchmarked
Host machine – a machine from where benchmark is initiated

## Install apachebench (apache2-utils)

    $ apt-get install apache2-utils

## Run `htop` on target machine

Htop is an interactive system monitor, process viewer, and process manager designed for Unix systems

atop is a real-time system monitor which shows usage of your Linux hardware and network resources

    $ apt-get install htop

Ces deux programmes, `htop` et `atop`, ont la même fonction de base : lister et gérer les processus

## Running Apachebench

    $ ab -n 10000 -c 10000 -l http://example.com/
 
- n = number of total requests, 总的请求数
- c = number of concurrency (yep, this is same concurrency c10k problem refers to), 并发数
- l = 表示当某个请求的回复长度不与第一个请求的回复长度一致时，不把它作为失败的请求
- p = 发送post请求并指定post参数文件

ab 使用很方便，可是问题在于，当我们需要在一个test中对多个 URL 进行并发请求的时候，ab没法做到。这时，我们可以用 siege。

## htop command

htop is a text-mode (console or terminal) process application for Unix systems. It plays three primary roles:

- System monitor.
- Process-viewer.
- Process manager.

    $ htop

## Compare htop and atop

htop is interactive process-viewer and process-manager, 

- Colorful and nicer text-graphics interface
- Easier to use 

atop is a full-screen performance monitor for viewing system load.It shows the most critical hardware resources such as CPU, memory, disk and network. By default, it refreshes every 10 seconds.

- Text based monochrome interface with the exception of highlighting critical resources in colors. Columns are shown based on the size of the window. Columns are dynamically added or removed as you enlarge or shrink the window.
- It is capable of reporting the activity of all processes 


## atop command

The atop command is a tool for monitoring system resources in Linux. It displays tons of information related to the amount of load on the system’s resources at the process level.

    $ sudo apt install atop

The 'atop' command provides the opportunity to study the memory consumption for each process running in the system. We can do so by running:

    $ atop -m

To extract information related to disk utilization, we can use the '-d' option along with 'atop' command.

    $ atop -d

This gives us the commands that are running in the background as processes in a command-line output format.

    $ atop -c

Instead of just inspecting process information, atop command provides the ability to check for thread-specific resource utilization.

    $ atop -y

1. Find process start-times

    $ atop -v

2. Number of processes for each user in the system

    $ atop -au

3. Which core a process is working on?

    $ atop -s