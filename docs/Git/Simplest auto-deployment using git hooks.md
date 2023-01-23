Simplest auto-deployment using git hooks
========================================

Steps to set up a deployment from a local git repository to a server using git hooks.

Git hooks are scripts that Git executes before or after events such as commit, push, and receive.

Git hooks are run locally.

## Some example hook scripts include:

- `pre-commit`: Check the commit message for spelling errors.
- `pre-receive`: Enforce project coding standards.
- `post-commit`: Email/SMS team members of a new commit.
- `post-receive`: Push the code to production.

## Steps:

1. Have a local git repository

2. Create a repository to deploy on the production server

	$ ssh user@server.com
	$ git init --bare \~/project.git

3. Add the `post-receive` hook script

This script is executed when the push from the local machine has been completed and moves the files into place.

It resides in `project.git/hooks/` and is named `post-receive`. 

```bash
#!/bin/bash

TARGET="/var/www/dev-lms.universalmedica.com"
GIT_DIR="/home/git/lmsv3-universalmedica.git"

BRANCH="test"

while read oldrev newrev ref
do
 # only checking out the master (or whatever branch you would like to deploy)
 if [ "$ref" = "refs/heads/$BRANCH" ];
 then
  echo "Ref $ref received. Deploying ${BRANCH} branch to production..."
  git --work-tree=$TARGET --git-dir=$GIT_DIR checkout -f $BRANCH

  cd $TARGET
  php bin/console doctrine:schema:update --force
  php bin/console cache:clear --no-warmup
  php bin/console cache:warmup
 else
  
  # perform more tasks like migrate and run test, the output of these commands will be shown on the push screen
echo "Ref $ref received. Doing nothing: only the ${BRANCH} branch may be deployed on this server."
 fi
done
```

Remember to make the script executable by adding the execute permission.

	$ chmod +x post-receive

4. Add a remote to production on the local repository

Now we add the bare (production) repository to local repository as a remote, where `server` is the name you want to give the remote.

	$ cd ~/path/to/working-copy/ # local
	$ git remote add server demo@yourserver.com:project.git

5. Push to the production server

	$ git push server master

6. (Optional) Add your SSH key to the server

	$ ssh-keygen -t rsa #local
	$ cat ~/.ssh/id_rsa.pub | ssh user@hostname 'cat >> .ssh/authorized_keys' #local