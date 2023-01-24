pyenv-win
=======

https://github.com/pyenv-win/pyenv-win#usage


## pyenv

pyenv is a simple python version management tool. It lets you easily switch between multiple versions of Python. It's simple, unobtrusive, and follows the UNIX tradition of single-purpose tools that do one thing well.


## pyenv-win commands

- commands     List all available pyenv commands
- local        Set or show the local application-specific Python version
- global       Set or show the global Python version
- shell        Set or show the shell-specific Python version
- install      Install 1 or more versions of Python 
- uninstall    Uninstall 1 or more versions of Python
- update       Update the cached version DB
- rehash       Rehash pyenv shims (run this after switching Python versions)
- vname        Show the current Python version
- version      Show the current Python version and its origin
- version-name Show the current Python version
- versions     List all Python versions available to pyenv
- exec         Runs an executable by first preparing PATH so that the selected Python
- which        Display the full path to an executable
- whence       List all Python versions that contain the given executable

## Installation

- With pip (to support existing python users)
	+ Powershell or Git Bash: 
		$ pip install pyenv-win --target $HOME\\.pyenv

## Finish the installation

1. Add PYENV, PYENV_HOME and PYENV_ROOT to your Environment Variables

```
[System.Environment]::SetEnvironmentVariable('PYENV',$env:USERPROFILE + "\.pyenv\pyenv-win\","User")
[System.Environment]::SetEnvironmentVariable('PYENV_ROOT',$env:USERPROFILE + "\.pyenv\pyenv-win\","User")
[System.Environment]::SetEnvironmentVariable('PYENV_HOME',$env:USERPROFILE + "\.pyenv\pyenv-win\","User")
```

2. Now add the following paths to your USER PATH variable in order to access the pyenv command. Run the following in PowerShell or Windows 8/above Terminal:

```
[System.Environment]::SetEnvironmentVariable('path', $env:USERPROFILE + "\.pyenv\pyenv-win\bin;" + $env:USERPROFILE + "\.pyenv\pyenv-win\shims;" + [System.Environment]::GetEnvironmentVariable('path', "User"),"User")
```

3. Close and reopen your terminal app and run `pyenv --version`

## Usage

- Update the list of discoverable Python versions using: 
	$ pyenv update
- To view a list of python versions supported by pyenv windows: 
	$ pyenv install -l 
- To install a python version
	$ pyenv install 3.9.6
- To set a python version as the global version: 
	$ pyenv global 3.5.2
- To set a python version as the local version: 
	$ pyenv local 3.5.2
- After (un)installing any libraries using pip or modifying the files in a version's folder, you must run `pyenv rehash` to update pyenv with new shims for the python and libraries' executables.
	$ pyenv rehash
- To uninstall a python version: 
	$ pyenv uninstall 3.5.2
- To view which python you are using and its path: 
	$ pyenv version
- To view all the python versions installed on this system: 
	$ pyenv versions

## How to update pyenv

	$ pip install --upgrade pyenv-win
