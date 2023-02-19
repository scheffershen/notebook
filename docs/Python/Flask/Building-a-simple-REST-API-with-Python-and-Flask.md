Building-a-simple-REST-API-with-Python-and-Flask
================================================

## install flask.

	$ pip install Flask

## Setting up a Virtual Environment.

	$ py -3.9 -m venv env

To activate the environment, navigate to `./venv/Scripts/` and on Linux `.venv/bin/activate`. On windows, use cmd.

## Create a minimal Flask application.


```python
#hello.py
from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
  return 'Server Works!'
  
@app.route('/greet')
def say_hello():
  return 'Hello from Server'
```

First, set the environment to development and tell your terminal the application to work with by exporting the FLASK_APP environment variable

in Linux

	$ export FLASK_ENV=development
	$ export FLASK_APP=app.py

and windows

	$ set FLASK_ENV=development
	$ set FLASK_APP=app.py

## Run

	$ flask --app hello run

OR

	$ py -m flask run 
		* Running on http://127.0.0.1:5000

OR 

	$ sudo nohup flask --app hello run > log.txt 2>&1 &

OR 

	$ flask --app hello run &

## for more

https://medium.com/@onejohi/building-a-simple-rest-api-with-python-and-flask-b404371dc699