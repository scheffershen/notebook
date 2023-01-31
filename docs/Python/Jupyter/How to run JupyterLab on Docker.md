How to run JupyterLab on Docker
===============================

https://dev.to/juanbelieni/how-to-run-jupyterlab-on-docker-4n80

8 oct. 2021

Jupyter and JupyterLab are great tools for data science.

## Running with Docker Compose

```yaml
jupyter:
  image: jupyter/datascience-notebook:latest
  container_name: jupyter
  ports:
    - 8888:8888
  environment:
    JUPYTER_ENABLE_LAB: "yes"
    JUPYTER_TOKEN: "docker"
```

## Running from Docker CLI

	$ docker run -p 8888:8888 \
           -e JUP
           YTER_ENABLE_LAB=yes \
           -e JUPYTER_TOKEN=docker \
           --name jupyter \
           -d jupyter/datascience-notebook:latest


## Accessing JupyterLab

http://localhost:8888