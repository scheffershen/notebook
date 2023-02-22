nshou_elasticsearch-kibana_kibana3_Dockfile
===========================================


## nshou_elasticsearch-kibana_kibana3_Dockfile


```Dockefile
## nshou/elasticsearch-kibana:kibana3
ADD file ... in /

/bin/sh -c [ -z "$(apt-get

/bin/sh -c set -xe &&

/bin/sh -c mkdir -p /run/systemd

CMD ["/bin/bash"]

MAINTAINER nshou <nshou@coronocoya.net>

/bin/sh -c apt-get update -q

/bin/sh -c apt-get install -yq

ENV ES_VERSION=1.7.4

/bin/sh -c cd /tmp &&

ENV KIBANA_VERSION=3.1.3

/bin/sh -c cd /tmp &&

CMD ["/bin/sh" "-c" "/elasticsearch/bin/elasticsearch

EXPOSE 5601 9200
```