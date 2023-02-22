docker-compose yml
==================

## docker-compose.yml

```yml
version: '2'

services:

### ElasticSearch Container #################################
    # arcseldon/elasticsearch-kibana-marvel-sense
    elasticsearch:
        build: ./elasticsearch
        volumes:
            - elasticsearch-data:/usr/share/elasticsearch/data
            - elasticsearch-plugins:/usr/share/elasticsearch/data
            - ./elasticsearch/elasticsearch.yml:/home/elasticsearch/elasticsearch/config/elasticsearch.yml:ro,Z
        ports:
            - "9200:9200"
    nginx:
        image: nginx:latest
        restart: unless-stopped
        volumes:
          - ./nginx/config:/etc/nginx/conf.d:ro,Z
          - ./nginx/htpasswd.users:/etc/nginx/htpasswd.users:ro,Z
        ports:
          - "5601:5601"
        depends_on:
          - elasticsearch
### Volumes Setup ###########################################

volumes:
    elasticsearch-data:
        driver: "local"
    elasticsearch-plugins:
        driver: "local"
```