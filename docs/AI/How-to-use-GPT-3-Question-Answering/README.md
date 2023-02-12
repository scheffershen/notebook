# README

### Env setting

    $ py --list
    $ py -3.9 -m venv env
    $ env\Script\activate

    $ pip freeze > requirements.txt

    $ pip install -r requirements.txt

    $ pip install --upgrade pip

### bash-pip-command-not-found

    $ curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py

    #Run get-pip.py using the following command:
    $ sudo python get-pip.py

    #After you done installing, run this command to check if pip is installed.
    $ pip --version

    #Remove get-pip.py file after installing pip.
    $ rm get-pip.py
