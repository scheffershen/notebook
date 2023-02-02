Web Application Sécurité Test
=============================

Kali Linux machine a été installé en local avec VWare Player 7,  Tous les tests effectuent avec des outils fournies par kali linux. Les deux principaux sont le logiciel Brup et l’application xHydra. 
Partie 1. 6 types de tests à effectués (nmap scan, Brute force, SQL injection, XSS, Uploade, sniffer)

## 1.	Utilise msfconsole pour scanner les ports ouverts du serveur.
 
## 2.	Brute force test sur l’application, utilise logiciel Brup free édition pour tester l’intrusion du web application, donc 17952602 combinaison du mot de passe à effectués.

Comment ça marche ? Sur une base de donnes mot de passe mondiale partage, s’appelle rockyou.txt.
Lancer l’application en java,  Mettre le browser en proxy 127.0.0.1, port 8080,  allez sur la page login de la plateforme.

Etape 1 : Récupérer la requête par le menu Intercept de Proxy
Etape 2 : Localiser le champ mot de passe pour préparer l’attaque
Etape 3 : Utilise une base de données mondiale (rockyou.txt 140Mo en format .Txt)  
Etape 4 : Lancer l’intrusion attaque

## 3.	Brute force test sur SSH, utilise xHydra pour tester l’intrusion SSH, donc 17952602 combinaison du mot de passe à effectués.

Etape 1 : lancer l’application xHydra, localiser le serveur 
Etape 2 : Utilise la base de données rockyou pour attaque le mot de passe
Etape 3 : mettre 10 secondes timeout 
Etape 4 : lancer le démarrage 
 
## 4.	SQL injection test

Sur tous les champs texte input de formulaire, teste SQL injection avec :
		1' or 0=0 #

Sur le champ de recherche injecte  1' or 0=0 # pour faire SQL injection attaque. Rien à affiche.
  
## 5.	XSS attaque test (Cross Site Scripting)

Sur tous les champs texte de formulaire, teste cross domaine script attaque :

```html
<script>alert("XSS Exploitation");</script>
```

Sur le formulaire d’ajout, essaie d’ajouter XSS attaque test, Donc la plateforme filtre le balise 
 
## 6.	Upload test

Sur le champ uploader de la fiche, teste avec le fiche script.  Le fiche est uploadée, mais le script n’exécute pas, et la localisation est cachée du web public  
   
## 7.	Sniffing le mot de passe Wireshark

Les transactions sur les réseaux sont cryptes,   
 
Si non les transactions sont claires aux réseaux 
 
## Partie 2. Suggestion

1.	Fermer le port SSH (bas)
2.	Bloquer IP pour accéder la page.
3.	Bloquer le compte après trois fois essaies le mot de passe. 
4.	Autre ???

## Partie 3. References

1.	Web Penetration Testing with Kali Linux - 2013
2.	Kali Linux Wireless Penetration Testing - 2015
3.	CBT Nuggets - BackTrack and Kali Linux - 2013
4.	Kali Linux - Backtrack Evolved - 2013
