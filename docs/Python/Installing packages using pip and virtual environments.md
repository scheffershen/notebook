Installing packages using pip and virtual environments
======================================================

https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/

This guide discusses how to install packages using `pip` and a virtual environment manager: either `venv` for Python 3 or `virtualenv` for Python 2. 

## Installing pip

	# for linux users: 
	$ python3 -m pip install --user --upgrade pip
	$ python3 -m pip --version

	# for windows users: 
	$ py -m pip install --upgrade pip
	$ py -m pip --version

## Installing virtualenv

> If you are using `Python 3.3` or newer, the `venv` module is the preferred way to create and manage virtual environments.

`virtualenv` is used to manage Python packages for different projects. Using virtualenv allows you to avoid installing Python packages globally which could break system tools or other projects.

	$ python3 -m pip install --user virtualenv #linux
	$ py -m pip install --user virtualenv      #windows

## Creating a virtual environment

`venv` (for `Python 3`) and `virtualenv` (for `Python 2`) allow you to manage separate package installations for different projects.

To create a virtual environment, go to your project’s directory and run venv. If you are using `Python 2`, replace `venv` with `virtualenv` in the below commands.

	$ python3 -m venv env # linux
	OR
	$ virtualenv env      # linux
	$ py -m venv env      # windows

The second argument is the location to create the virtual environment. Generally, you can just create this in your project and call it `env`.	

## Activating a virtual environment

Before you can start installing or using packages in your virtual environment you’ll need to activate it.

	$ source env/bin/activate # linux
	$ .\env\Scripts\activate  # windows

You can confirm you’re in the virtual environment by checking the location of your Python interpreter:

	$ which python # linux
	$ where python # windows

## Leaving the virtual environment¶

	$ deactivate

## Installing packages

	$ python3 -m pip install requests # linux
	$ py -m pip install requests      # windows

## Installing specific versions

pip allows you to specify which version of a package to install using version specifiers. 

	$ python3 -m pip install requests==2.18.4 # linux
	$ python3 -m pip install requests>=2.0.0,<3.0.0
	$ python3 -m pip install --pre requests

	$ py -m pip install requests==2.18.4
	$ py -m pip install requests>=2.0.0,<3.0.0
	$ py -m pip install --pre requests

## Installing extras
	
	$ python3 -m pip install requests[security]

	$ py -m pip install requests[security]

## Installing from source

pip can install a package directly from source, for example:

	$ cd google-auth
	$ python3 -m pip install .

	$ cd google-auth
	$ py -m pip install .

Additionally, pip can install packages from source in development mode, meaning that changes to the source directory will immediately affect the installed package without needing to re-install:

	$ python3 -m pip install --editable .

	$ py -m pip install --editable .

## Installing from version control systems

	$ git+https://github.com/GoogleCloudPlatform/google-auth-library-python.git#egg=google-auth

## Installing from local archives

If you have a local copy of a Distribution Package’s archive (a zip, wheel, or tar file) you can install it directly with pip:

	$ python3 -m pip install requests-2.18.4.tar.gz

	$ py -m pip install requests-2.18.4.tar.gz

If you have a directory containing archives of multiple packages, you can tell pip to look for packages there and not to use the `Python Package Index (PyPI)` at all:

	$ python3 -m pip install --no-index --find-links=/local/dir/ requests

	$ py -m pip install --no-index --find-links=/local/dir/ requests

## Using other package indexes

If you want to download packages from a different index than the `Python Package Index (PyPI)`, you can use the `--index-url` flag:

	$ python3 -m pip install --index-url http://index.example.com/simple/ SomeProject

	$ py -m pip install --index-url http://index.example.com/simple/ SomeProject

## Upgrading packages

pip can upgrade packages in-place using the --upgrade flag.

	$ python3 -m pip install --upgrade requests

	$ py -m pip install --upgrade requests

## Using requirements files

Instead of installing packages individually, pip allows you to declare all dependencies in a `Requirements File`. For example you could create a `requirements.txt` file containing:

```
requests==2.18.4
google-auth==1.1.0
```

And tell pip to install all of the packages in this file using the -r flag:

	$ python3 -m pip install -r requirements.txt

	$ py -m pip install -r requirements.txt

## Freezing dependencies

Pip can export a list of all installed packages and their versions using the `reeze` command:

	$ python3 -m pip freeze

	$ py -m pip freeze

