Running a Jupyter Notebook Server Using Docker
==============================================

http://dockerfordatascience.com/running_a_jupyter_notebook_server.html

## Run a Jupyter Notebook Server Using Docker

Project Jupyter maintains a set of Docker images defining a suite of Jupyter Notebook servers provisioned for a variety of tasks. The definitions for these images can be found at the GitHub repository jupyter/docker-stacks.

This repo provides eight notebook images starting with a base-notebook image.

- base-notebook
- minimal-notebook
- scipy-notebook
- r-notebook
- tensorflow-notebook
- datascience-notebook
- pyspark-notebook
- all-spark-notebook

## Recommended Best Practice for Running a Jupyter Notebook Server with Docker

We recommend the following command as a best practice for running a Jupyter Notebook Server, here with the jupyter/scipy-notebook image:

    $ docker run -d --name jupyter -p 8888:8888 -v `pwd`:/home/jovyan jupyter/scipy-notebook

https://www.dataquest.io/blog/docker-data-science/

## Sharing notebooks between the host and container

    $ mkdir ~/notebooks
    $ docker run -p 8888:8888 -v ~/sandbox/yBook2/_Python/Chatbot:/home/joyvan jupyter/minimal-notebook

## Installing additional packages

    $ docker exec 874108dfc9d9 pip install tensorflow