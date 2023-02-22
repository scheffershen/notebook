Dockerfile
==========

## Dockerfile

```Dockerfile
FROM arcseldon/elasticsearch-kibana-marvel-sense:latest

MAINTAINER Bo-Yi Wu <appleboy.tw@gmail.com>

COPY elasticsearch.yml /usr/share/elasticsearch/config/

EXPOSE 9200 9300
EXPOSE 5601 5601
```