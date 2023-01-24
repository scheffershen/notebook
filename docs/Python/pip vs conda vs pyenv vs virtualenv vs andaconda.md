pip vs conda vs pyenv vs virtualenv vs andaconda
================================================

https://stackoverflow.com/questions/38217545/what-is-the-difference-between-pyenv-virtualenv-anaconda

as conda and pip have similarities 

## pip or conda: the Python Package Manager.

- You might think of `pip` as the python equivalent of the ruby `gem` command, the php `composer`, the javascript `npm`
- pip is not included with python by default.
- You can find and publish python packages using `PyPI`: The Python Package Index
- The `requirements.txt` file is comparable to the ruby `gemfile`, the php `compose.json`, the javascript `package.json`
- To create a requirements text file, `pip freeze > requirements.txt`
- Note, at this point, we have python installed on our system, and we have created a requirements.txt file that outlines all of the python packages that have been installed on your system.

## pyenv: Python Version Manager

-  pyenv lets you easily switch between multiple versions of Python. 

## virtualenv: Python Environment Manager.

- To create a `virtualenv`, simply invoke `virtualenv ENV`, where `ENV` is is a directory to place the new virtual environment.
- To initialize the `virtualenv`, you need to `source ENV/bin/activate`. To stop using, simply call `deactivate`.
- Once you activate the `virtualenv`, you might install all of a workspace's package requirements by running `pip install -r` against the project's `requirements.txt` file.

## Anaconda: Package Manager + Environment Manager + Additional Scientific Libraries.

- Anaconda 4.2.0 includes an easy installation of Python (2.7.12, 3.4.5, and/or 3.5.2) and updates of over 100 pre-built and tested scientific and analytic Python packages that include NumPy, Pandas, SciPy, Matplotlib, and IPython, with over 620 more packages available via a simple `conda install <packagename>`
- As a web developer, I haven't used Anaconda. It's ~3GB including all the packages.
- There is a slimmed down `miniconda` version, which seems like it could be a more simple option than using `pip + virtualenv`, although I don't have experience using it personally.
- While `conda` allows you to install packages, these packages are separate than PyPI packages, so you may still need to use pip additionally depending on the types of packages you need to install.

## what-are-the-differences-between-conda-and-anaconda

- conda is the package manager. 
- Anaconda is a set of about a hundred packages including conda, numpy, scipy, ipython notebook, and so on.
- You installed Miniconda, which is a smaller alternative to Anaconda that is just conda and its dependencies, not those listed above.
- Once you have Miniconda, you can easily install Anaconda into it with conda install anaconda.

## Pip vs Conda:

- Pip: Python libraries only
- Conda: Any dependency can be a Conda package (almost)

The environment.yml that corresponds (somewhat) to the requirements.txt we saw above will include all of these packages:

```yml
name: myenv
channels:
  - conda-forge
dependencies:
  - python=3.9
  - numpy
  - pandas
  - gnuplot
```

We can see the difference if the corresponding Dockerfile; there is no need to install any system packages:

```Dockerfile
FROM continuumio/miniconda3
COPY environment.yml .
RUN conda env create
```