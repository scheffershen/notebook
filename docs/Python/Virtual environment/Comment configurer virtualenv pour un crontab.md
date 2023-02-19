Comment configurer virtualenv pour un crontab?
==============================================

https://www.it-swarm-fr.com/fr/python/comment-configurer-virtualenv-pour-un-crontab/970833695/

Vous pouvez configurer votre crontab pour appeler un script bash qui fait ceci:

```bash
#! /bin/bash    
cd my_python_project_path
source bin/activate

# virtualenv is now active, which means your PATH has been modified.
# Don't try to run python from /usr/bin/python, just run "python" and
# let the PATH figure out which version to run (based on what your
# virtualenv has configured).

python cron_script.py
```

Une autre solution qui fonctionne bien

```
0    9    *    *    *    /path/to/virtenv/bin/python /path/to/cron_script.py
```