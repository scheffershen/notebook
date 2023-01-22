Docker Roadmap
==============

- Dockerfile references
- [Docker references](docker-cheat-sheet.pdf)
	+ Buld
		* `docker build -t myimage:1.0 .`
		* `docker image ls`
		* `docker image rm alpine:3.4`
	+ Share
		* `docker pull myimage:1.0 `
		* `docker tag myimage:1.0 myrepo/myimage:2.0 `
		* `docker push myrepo/myimage:2.0 `
	+ Run
		* `docker push myrepo/myimage:2.0 `
		* `docker container run --name web -p 5000:80 alpine:3.9`
		* `docker container stop web`
		* `docker container kill web`
		* `docker network ls `
		* `docker container ls `
		* `docker container rm -f $(docker ps -aq) `
		* `docker container logs --tail 100 web`
	+ Create a new image from a container’s changes
		$ docker commit <container_id> scheffer_shen/php71
	+ Reame a image
		$ docker tag <image_id> scheffer_shen/php72
	+ Import/Export
		* `docker save --output php72.tar scheffer_shen/php72`
		* `docker import php72.tar` 
		* `docker tag <....> scheffer_shen/php72`
		* piegés: (https://serverfault.com/questions/757210/no-command-specified-from-re-imported-docker-image-container)
			- `docker import --change 'CMD ["php-fpm"]' ./php71.tar scheffer_shen/php71` (l'autre problème)
- Docker compose references
	+ docker compose up -d
	+ docker compose exec `container` bash|sh
- Crontab 
	+ run docker-compose command in crontab
		+ `docker-compose exec -T`
- Docker-sync
	+ [Docker sync](Docker-sync/docker-sync.md)
	+ [Docker sync installation](Docker-sync/docker-sync-installation.md)
	+ [Docker sync examples](Docker-sync/docker-sync-examples.md)
- Examples
	+ `mes-docker-PHP56-72-74-examples.md`
	+ `open-source-docker-examples.md`
- FAQs
	+ [From inside of a Docker container, how do I connect to the localhost of the machine](From-inside-of-a-Docker-container-how-do-I-connect-to-the-localhost-of-the-machine.md)
- References
