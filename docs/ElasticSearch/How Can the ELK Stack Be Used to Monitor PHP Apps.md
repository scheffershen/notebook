How Can the ELK Stack Be Used to Monitor PHP Apps?
===================================================

link: https://www.sitepoint.com/how-can-the-elk-stack-be-used-to-monitor-php-apps

https://github.com/jmyoung/docker-elk

Daniel Berman
May 11, 2016

The ELK Stack (Elasticsearch, Logstash, and Kibana), 
 
ELK is a great way to centralize logs from multiple sources, identify correlations, and perform deep-data analysis.

Elasticsearch is a search-and-analytics engine based on Apache Lucene that allows users to search and analyze large amounts of data in almost real time.

Logstash can ingest and forward logs from anywhere to anywhere.

Kibana is the stack’s pretty face — a user interface that allows you to query, visualize, and explore Elasticsearch data easily.

This article will describe how to set up the ELK Stack on a local development environment, ship web server logs (Apache logs in this case) into Elasticsearch using Logstash, and then analyze the data in Kibana.

## Installing ELK

    $ wget -qO - https://packages.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -

    $ echo "deb http://packages.elastic.co/elasticsearch/2.x/debian stable main" | sudo tee -a /etc/apt/sources.list.d/elasticsearch-2.x.list

    $ sudo apt-get update && sudo apt-get install elasticsearch

    $ sudo nano /etc/elasticsearch/elasticsearch.yml

        network.host: localhost

    $ sudo service elasticsearch restart
    
    $ sudo update-rc.d elasticsearch defaults 95 10

    $ sudo curl 'http://localhost:9200'

## Installing Logstash

Logstash, the “L” in the “ELK Stack”, is used at the beginning of the log pipeline, ingesting and collecting data before sending it on to Elasticsearch.

    $ echo "deb http://packages.elastic.co/logstash/2.2/debian stable main" | sudo tee -a /etc/apt/sources.list

    $ sudo apt-get update && sudo apt-get install logstash

## Installing Kibana

    $ echo "deb http://packages.elastic.co/kibana/4.5/debian stable main" | sudo tee -a /etc/apt/sources.list
    
    $ sudo apt-get update && apt-get install kibana

    $ sudo nano /opt/kibana/config/kibana.yml

        server.host: "localhost"
    
    $ sudo update-rc.d kibana defaults 96 9
    $ sudo service kibana start    

## Install Nginx

    $ sudo apt-get install nginx apache2-utils
    $ sudo htpasswd -c /etc/nginx/htpasswd.users kibanaadmin

kibanapass

    $ sudo nano /etc/nginx/sites-available/default

```
    server {
        listen 8080;

        server_name example.com;

        auth_basic "Restricted Access";
        auth_basic_user_file /etc/nginx/htpasswd.users;

        location / {
            proxy_pass http://localhost:5601;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;        
        }
    }
```

    $ sudo service nginx restart    

## Shipping Logs

Logstash configuration files are written in JSON format and reside in /etc/logstash/conf.d. The configuration consists of three plugin sections: input, filter, and output.

Create a configuration file called apache-logs.conf:

    $ sudo nano /etc/logstash/conf.d/apache-logs.conf

/var/www/medflix.universalmedica.com/medflixs_access.log

/etc/logstash/conf.d/apache-logs.conf

```conf
input {
    file {
        path => "/var/www/medflix.universalmedica.com/medflixs_access.log"
        type => "apache-access"
    }
}   
filter {
  if [type] == "apache-access" {
    grok {
      match => { "message" => "%{COMBINEDAPACHELOG}" }
    }
  }
}
output {
    elasticsearch {}
}
```

That’s it. Once you’re done, start Logstash with the new configuration:

    $ sudo service logstash configtest
    
    $ sudo service logstash restart
    $ sudo update-rc.d logstash defaults 96 9

/opt/logstash/bin/logstash -f /etc/logstash/conf.d/apache-logs.conf

## Generate SSL Certificates

Since we are going to use Filebeat to ship logs from our Client Servers to our ELK Server, we need to create an SSL certificate and key pair. The certificate is used by Filebeat to verify the identity of ELK Server. 

    $ sudo mkdir -p /etc/pki/tls/certs
    $ sudo mkdir /etc/pki/tls/private

### Option 1: IP Address

## Configure Logstash

    $ sudo nano /etc/logstash/conf.d/02-beats-input.conf

/etc/logstash/conf.d/02-beats-input.conf

```conf
    input {
      beats {
        port => 5044
        ssl => true
        ssl_certificate => "/etc/pki/tls/certs/logstash-forwarder.crt"
        ssl_key => "/etc/pki/tls/private/logstash-forwarder.key"
      }
    }
```

    $ sudo vi /etc/logstash/conf.d/10-syslog-filter.conf

/etc/logstash/conf.d/10-syslog-filter.conf

```conf
    filter {
      if [type] == "syslog" {
        grok {
          match => { "message" => "%{SYSLOGTIMESTAMP:syslog_timestamp} %{SYSLOGHOST:syslog_hostname} %{DATA:syslog_program}(?:\[%{POSINT:syslog_pid}\])?: %{GREEDYDATA:syslog_message}" }
          add_field => [ "received_at", "%{@timestamp}" ]
          add_field => [ "received_from", "%{host}" ]
        }
        syslog_pri { }
        date {
          match => [ "syslog_timestamp", "MMM  d HH:mm:ss", "MMM dd HH:mm:ss" ]
        }
      }
    }
```    