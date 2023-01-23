---
sidebar_position: 1
slug: Comment-durcir-la-configuration-de-son-serveur-SSH
---

Comment durcir la configuration de son serveur SSH ?
====================================================

[Comment durcir la configuration de son serveur SSH ?](https://www.it-connect.fr/durcissement-de-config-comment-securiser-son-serveur-ssh/)

09/12/2021

## Présentation

Avant de commencer, installez SSH sur votre serveur :

	$ sudo apt install openssh-server
	# apt utilise aussi l'alias ssh, pour identifier le paquet openssh-server

## Sécurisation générale de SSH

Pour cela, nous allons modifier le fichier "/etc/ssh/sshd_config" de notre serveur SSH. 

	$ sudo nano /etc/ssh/sshd_config

## Modifier le port et l'interface réseau d'écoute par défaut

Pour que SSH écoute seulement sur l'adresse IP "192.168.175.129", voici la configuration :

	ListenAddress 116.88.219.15
	ListenAddress 2406:3003:2005:19d9::/64

Puis, redémarrez le service :

	$ systemctl restart ssh

## Configurer le timeout des sessions SSH

définir un temps maximal d'inactivité pour une session SSH, afin d'éviter que certaines connexions SSH restent actives indéfiniment.

```
ClientAliveInterval 600
ClientAliveCountMax 0
```

	$ systemctl restart ssh

## Empêcher la connexion de l'utilisateur root en SSH

```
PermitRootLogin No
```

## III. Sécuriser l'authentification par mot de passe classique

A. Autoriser seulement la connexion pour un ou plusieurs utilisateurs.

	$ sudo nano /etc/ssh/sshd_config

```
AllowUsers tintin
```

	$ systemctl restart ssh

Vous préférez spécifier un groupe pour l'autorisation de connexion en SSH ?

```
AllowGroups MonGroupeSSH
```

## IV. Authentification par clés publique/privée

il est recommandé d'utiliser une authentification basée sur un couple de clés. Pour ce faire, créez la paire de clés en utilisant la commande suivante (à partir de `votre machine cliente`) :

	$ ssh-keygen -b 8192

Puis, entrez la commande suivante, afin de copier votre clé publique vers `le serveur SSH` (192.168.175.129) (en écoute sur le port 2021) depuis votre machine cliente :

	$ ssh -p 2021 tintin@192.168.175.129

## Désactivez l'authentification par mot de passe classique

	$ sudo nano /etc/ssh/sshd_config

```
PasswordAuthentication no
```

	$ sudo systemctl restart ssh