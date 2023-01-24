Google Trends with Python
=========================

https://dev.to/stankukucka/google-trends-with-python-5fh7

 20 nov. 2021

## Scripts to Download

`requirements.txt` and `google-trends-analysis.py`
[Simply download these two files](https://github.com/stanislav-kukucka/google-trends-analysis/tree/main/google-trends-analysis)

## Activate Virtualenv

    $ python --version
    $ pip --vesrion
    $ pip list
	$ sudo pip install virtualenv
	$ cd google-trends-analysis

To make all stuff properly done activate `virtualenv` with the creation of working virtual environment directory called `venv`.

	$ virtualenv venv 

Now activate this working environment.

	$ source venv/bin/activate

or

	$ venv\Scripts\activate (windows)

## Pytrends and Plotly Libraries to Install

Now execute installation in a virtual environment we already activated.

	$ pip3 install -r requirements.txt

After installation to run `google-trends-analysis.py` script hereunder just type this command and enjoy response in your browser IP `127.0.0.1` on a random port.

	$ python3 google-trends-analysis.py

