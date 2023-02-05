docker-supervisor-php-workers
===

Starting point configuration for running (PHP) workers inside Docker containers with Supervisor.

https://github.com/slashfan/docker-supervisor-php-workers

## How to use

    $ docker-compose build --pull
    $ docker-compose up --build

## List worker(s)

    $ docker-compose exec php_worker supervisorctl status

## Stop all worker(s)

    $ docker-compose exec php_worker supervisorctl stop all

## Start all worker(s)

    $ docker-compose exec php_worker supervisorctl start all

## Stop container(s)

    $ docker-compose stop

## Cleanup container(s)

    $ docker-compose down --volumes --remove-orphans