BluLMS
===

- projet demo pour avoir trouver l'autre projet et des travailles
- "less is more"
- lancement 2025 or 2035

https://www.zhihu.com/question/33602031

## TODO 2020

symfony 5, php 7.4, scorm, h5p, IMS test import export, ION visuconference, notes, commentaire

### assets 

1. refactoriser aseets js and css avec model de code source "cardiostat" (date: 2020-04)
    - refactorise assets, 28/04/2020

### login page 

    - refactorise login page 28/04/2020
		+ translation  28/04/2020

### divers front pages 
	- créer about page (FR, EN, CN) 29/04/2020
	- créer faq page (FR, EN, CN) 29/04/2020
	- créer help page (FR, EN, CN) 29/04/2020
	- ceéer contact page (FR, EN, CN) 29/04/2020
	- créer terms page (FR, EN, CN) 29/04/2020

### register page
    - refactorise register page, contoller, eventDispatcher, template, mail sending 
		+ new company(other) et new user (admin) 29/04/2020
		    1. register::event, sending alert mail to root and set a role(admin) 
			2. mail service, valider par root and sending a validation mail
		+ old comapny && new user 
		    1. register::event, sending alert mail to admin and set a role(admin, teacher, learner)
			2. mail service, valider par admin and sending a validation mail 
    - créer password forgot page
    - refactorise translations
		+ template by template, controller by controller
		+ classifier les translations par classe(CRUD), par action(link), par page, par label

### password forgot page

### root 

- Dashboard
- Gestion des utilisateurs
	+ Liste des nouveaux utilisateurs
	+ Liste des utilisateurs
	+ Liste des utilisateurs refusée
	+ Liste des l'entreprise
- Gestion des LOV
	+ Type de reponse
	+ Civility
	+ Pays
	+ Type de test
	+ Module type
	+ Mode de validation
- Audit
- Tracking

### admin 

### teacher 

### learner 

4. importation des utilisateurs
5. creer des formations en scorm
6. creer des formations en format h5p
7. importation des tests en ims
8. visuconference en ION
7. Suivi des formations (scorm, h5p, visu) par utilisateur
8. Suivi des formations par administrateur
9. pas de sondage 


## TODO 2019

symfony 4, php 7.2, scorm