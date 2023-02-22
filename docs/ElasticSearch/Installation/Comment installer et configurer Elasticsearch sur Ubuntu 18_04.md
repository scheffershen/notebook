Comment installer et configurer Elasticsearch sur Ubuntu 18.04
==============================================================

https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-elasticsearch-on-ubuntu-18-04-fr

May 13, 2020

## Conditions préalables

## Étape 1 — Installation et configuration d'Elasticsearch

	$ curl -fsSL https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -

	$ echo "deb https://artifacts.elastic.co/packages/7.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-7.x.list

	$ sudo apt update

	$ sudo apt install elasticsearch

## Étape 2 — Configurer Elasticsearch

	$ sudo nano /etc/elasticsearch/elasticsearch.yml

/etc/elasticsearch/elasticsearch.yml

```
network.host: localhost
```

	$ sudo systemctl start elasticsearch

Ensuite, exécutez la commande suivante pour permettre à Elasticsearch de démarrer à chaque fois que votre serveur démarre :	

	$ sudo systemctl enable elasticsearch