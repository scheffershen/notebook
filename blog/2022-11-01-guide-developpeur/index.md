---
slug: guide-developpeur
title: Guide du développeur
authors: [yshen]
tags: [solid, code quality, code analyser, unit testing, workflow, git]
---

- [SOLID](#solid)
- [Code Quality](#code-quality)
- [Code Analyser](#code-analyser)
- [Unit Testing](#unit-testing)
- [Workflow](#workflow)
- [Commands utiles](#commands-utiles)
- [Branches](#branches)

### SOLID

En programmation orientée objet, SOLID est un acronyme mnémonique qui regroupe cinq principes de conception destinés à produire des architectures logicielles plus compréhensibles, flexibles et maintenables. 

- [Single Responsibility Principle]
	+ Une classe ne doit avoir qu'une seule et unique responsabilité
- [Open/Closed Principle]
	+ Les entités doivent être ouvertes à l'extension et fermées à la modification.
- [Liskov’s Substitution Principle]
	+ Les objets dans un programme doivent être remplaçables par des instances de leur sous-type sans pour autant altérer le bon fonctionnement du programme.
- [Interface Segregation Principle]
	+ Il vaut mieux faire plusieurs petites interfaces qu’une seule grande.
- [Dependency Inversion Principle]
	+ Autrement dit, on évite de passer des objets en paramètre lorsqu’une interface est disponible.

### Code Quality

friendsofphp/php-cs-fixer: A tool to automatically fix PHP Coding Standards issues
	
	$ mkdir --parents tools/php-cs-fixer
	$ composer require --working-dir=tools/php-cs-fixer friendsofphp/php-cs-fixer
	$ tools/php-cs-fixer/vendor/bin/php-cs-fixer fix src

### Code Analyser

PHPStan: PHP Static Analysis Tool - discover bugs in your code without running it!

	$ composer require --dev phpstan/phpstan
	$ vendor/bin/phpstan analyse ./src

### Unit Testing

phpunit: The PHP Unit Testing framework.
	
	$ composer require --dev phpunit/phpunit symfony/test-pack
	$ vendor/bin/phpunit --coverage-clover=build/logs/clover.xml

### Workflow

**Début du développement: récuperer la branche test, créer votre branchee** 
	
Récuperer les inforamtions du serveur git sans fusionner avec les codes locaux 
	
	$ git fetch --all 				
	
Récuperer les codes du serveur git et fusionner avec les codes locaux 

	$ git pull --all 				
	
Basculer vers la branche `master`

	$ git checkout master 			
    
Créer une branche `votre_branche`

    $ git branch `votre_branche` 	
	
Basculer vers la branche `votre_branche`

	$ git checkout `votre_branche` 	

**Fin du développement**  	

**Etape 1**: Récuperer la branche master du serveur, fusionner avec votre branche 
		
Vérifier si il y a des changements, et la branche `votre_branche`

	$ git status 						
		
à la fin du developpement ajouter toutes les modifications

	$ git add . 						
		
Commettre avec une message

	$ git commit -m "message des modifications" 	

Vérifier si la branche `votre_branche` est propre

	$ git status 						

Basculer vers la branche `master`

	$ git checkout master 				 
		
Récuperer la branche `master` du serveur git		

	$ git pull origin master 				

Basculer vers la branche `votre_branche`

	$ git checkout `votre_branche` 		  

Fusionner avec les codes de la branche `master` et votre branche `votre_branche`

	$ git merge master 
		
éventuellement: `$ composer install` plus `$ php bin/console doctrine:schema:update --force`)
		
Tester votre branche s'il fonctionne encore

Vérifier si il y a des changements, et la branche `votre_branche`	

	$ git status 						
		
à la fin du developpement ajouter toutes les modifications

	$ git add . 						

Commettre avec une message	

	$ git commit -m "fusionner master" 		
	
**Etape 2**: Basculer vers la branche `master`, fusionner votre branche avec --squash
		
Basculer vers la branche `master`

	$ git checkout master 				
		
Fusionner avec les codes du votre branche `votre_branche` et la branche `master`

	$ git merge --squash `votre_branche`  
		
Eventuellement: `$ composer install` plus `$ php bin/console doctrine:schema:update --force`)
		
Option `--squash` pour recéer les commits messages de la branche `master` plus proprement
		
Tester votre branche s'il fonctionne encore
		
Vérifier si il y a des changements, et la branche `master`	

	$ git status 						
		*
Ajouter toutes les modifications

	$ git add . 						

Commettre avec une message	

	$ git commit -m "message des modifications"
		
Envoyer les codes de la branche `master` au serveur

	$ git push origin master 				
	
**Etape 3**: Retourner vers votre branche pour l'autre développement
		
Basculer vers la branche `votre_branche` 

	$ git checkout `votre_branche` 		  

**Installation du projet avec git** 

Si vous avez déjà le dossier du développement
	
	$ cd `votre_dossier` 
	
Créer un projet initial en git

	$ git init                     		
	
Ajouetr un remote git répositorie

	$ git remote add origin git@`votre_serveur`:/home/git/`votre_projet`.git  

Si vous n'avez pas le dossier du développement
	
Cloner le projet

	$ git clone git@`votre_serveur`:/home/git/`votre_projet`.git `votre_dossier`  

### Commands utiles
    
Afficher la information du serveur remote de git

    $ git remote -v 		 
	
Afficher les inforamtions de la changement et de la branche

	$ git status  			
	
Afficher les branches locales et les branches remotes

	$ git branch -a        
	
Afficher les branches locales, les branches remotes et les relations	
	
	$ git branch -vv  	
	
Afficher que les messages de commettre	

	$ git log --oneline     
	
Lier la branche locale vers la branche remote ex: `votre_branche` 

	$ git push --set-upstream origin `votre_branche` 
	
Pouser la branche locale vers la branche remote ex: `votre_branche` 

	$ git push origin `votre_branche`
	
Modifer le message du dernier commettre

	$ git commit --amend 	
	
Supprimer la branche locale `votre_branche`

	$ git branch -d `votre_branche` 	
	
Supprimer la branche locale `votre_branche` en force

	$ git branch -D `votre_branche` 	
	
Supprimer la branche remote `votre_branche`

	$ git push origin --delete `votre_branche` 
	
Affichier les fichiers qui ont été modifiés entre les commetres `55dc9e34`...`575c9e34`

	$ git diff --nameonly 55dc9e34...575c9e34 
	
Definir l'editor par default

	$ git config --global core.editor "'c:/Program Files/Sublime Text 3/sublime_text.exe' -w"
								
Afficher les fichiers commetres par le commit `commit`

	$ git show `commit` --name-only 
	
Combiner 3 commits à 1 commit, mais avant le push

	$ git reset --soft HEAD~3 && git commit 			
	
Combiner 5 commits à 1 commit, mais avant le push

	$ git rebase -i HEAD~5  	

### Branches

- Branche master: la branche pour tester et valider et avant délivrer vers la branche release
- Branche dev_1: la branche du développement de dev_1
- Branche dev_2: la branche du développement de dev_2
- Branche dev_3: la branche du développement de dev_3
- Branche release_1.0.0: la branche de la version 1.0.0
- Branche release_1.0.1: la branche de la version 1.0.1
