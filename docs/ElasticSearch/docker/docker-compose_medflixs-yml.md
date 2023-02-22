docker-compose_medflixs-yml
===========================

## docker-compose_medflixs.yml

```
# docker-compose.yml
version: '3.1'

services:

  # maildev:
  #   image: maildev/maildev
  #   container_name: maildev
  #   ports:
  #       - "1080:80"
  #   networks:
  #       - backend  
  mailhog:
    image: mailhog/mailhog
    container_name: mailhog
    ports:
        #- "1025:1025"
        - "1080:8025"
    networks:
        - backend  
  php:
    ##build: ./docker/php
    image: scheffer_shen/php71:latest
    container_name: php
    working_dir: /var/www/html
    volumes:
      - "./:/var/www/html"
    networks:
      - backend  

  caddy:
    image: caddy:2
    container_name: caddy
    environment:
      SERVER_NAME: ${SERVER_NAME:-medflixs.local, caddy:80}
    ports:
      - 80:80
      - 443:443
    working_dir: /var/www/html
    volumes:
      - "./:/var/www/html"
      - "./docker/caddy/Caddyfile:/etc/caddy/Caddyfile:ro"
      - "./docker/.data/caddy/data:/data"
      - "./docker/.data/caddy/config:/config"
    networks:
      - backend       
      - frontend

  db:
    image: mysql:5.7
    container_name: db
    # command: --default-authentication-plugin=mysql_native_password
    # command: mysqld --default-authentication-plugin=mysql_native_password
    # command: [mysqld, --default-authentication-plugin=mysql_native_password, --character-set-server=utf8mb4, --collation-server=utf8mb4_unicode_ci, --innodb_monitor_enable=all, --max-connections=1001]
    ports:
      - 3306:3306
    environment:
      MYSQL_ROOT_PASSWORD: 9TT4fgq5
    volumes:
      - "./docker/.data/db:/var/lib/mysql"
      - "./sql:/home"
    networks:
      - backend

  redis:
    image: redis:5-alpine
    container_name: redis
    restart: always
    #ports: [6379]
    networks:
      - backend

  phpmyadmin:
    image: phpmyadmin/phpmyadmin:5.1.3
    container_name: phpmyadmin
    restart: always    
    ports:
      - "8080:80"      
    environment:
        PMA_HOST: db
    networks:
      - backend   
      - frontend

  # elasticsearch:
  #   image: arcseldon/elasticsearch-kibana-marvel-sense
  #   container_name: elasticsearch
  #   volumes:
  #     - ./.data/esdata1:/home/elasticsearch/elasticsearch/data
  #   ports:
  #    - 9200:9200
  #    - 5601:5601
  #   networks:
  #       - backend       
  #       - frontend 
  
  # docker pull nshou/elasticsearch-kibana:kibana3    
  elasticsearch:
    image: nshou/elasticsearch-kibana:kibana3
    container_name: elasticsearch
    environment:
      - cluster.name=docker-cluster
      - bootstrap.memory_lock=true
      - "ES_JAVA_OPTS=-Xms2g -Xmx2g"
      #- "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    ulimits:
      memlock:
        soft: -1
        hard: -1
    volumes:
      - esdata1:/home/elasticsearch/elasticsearch/data
    ports:
      - 9200:9200
      - 5601:5601
    networks:
      - backend 

#  elasticsearch2:
    # image: docker.elastic.co/elasticsearch/elasticsearch:6.4.1
    # container_name: elasticsearch2
    # environment:
    #   - cluster.name=docker-cluster
    #   - bootstrap.memory_lock=true
    #   - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    #   - "discovery.zen.ping.unicast.hosts=elasticsearch"
    # ulimits:
    #   memlock:
    #     soft: -1
    #     hard: -1
    # volumes:
    #   - esdata2:/usr/share/elasticsearch/data
    # networks:
    #   - backend

volumes:
  esdata1:
    driver: local
  # esdata2:
  #   driver: local
    
networks:
    frontend:
        driver: bridge
    backend:
        driver: bridge         
```