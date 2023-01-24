How to build a deep learning model in 15 minutes
================================================

https://tech.instacart.com/how-to-build-a-deep-learning-model-in-15-minutes-a3684c6f71e

## A common feeling in Machine Learning:

Common Problems

1. Performance bottlenecks are easy to hit when you’re writing bespoke code at high levels like Python or SQL.
2. Code Complexity grows because valuable models are the result of many iterative changes, making individual insights harder to maintain and communicate as the code evolves in an unstructured way.
3. Repeatability suffers as data and library dependencies are constantly in flux.
4. Information overload makes it easy to miss newly available low hanging fruit when trying to keep up with the latest papers, packages, features, bugs… it’s much worse for people just entering the field.

## TLDR

```sh
$ pip3 install lore
$ git clone https://github.com/montanalow/my_app.git
$ cd my_app 
$ lore install # caching all dependencies locally takes a few minutes the first time
$ lore server & 
$ curl "http://localhost:5000/product_popularity.Keras/predict.json?product_name=Banana&department=produce"
```

## Feature Specs

* Models support hyper parameter search over estimators with a data pipeline. They will efficiently utilize multiple GPUs (if available) with a couple different strategies, and can be saved and distributed for horizontal scalability.
* Estimators from multiple packages are supported: Keras, XGBoost and SciKit Learn. They can all be subclassed with build, fit or predict overridden to completely customize your algorithm and architecture, while still benefiting from everything else.
* Pipelines avoid information leaks between train and test sets, and one pipeline allows experimentation with many different estimators. A disk based pipeline is available if you exceed your machines available RAM.
* Transformers standardize advanced feature engineering. For example, convert an American first name to its statistical age or gender using US Census data. Extract the geographic area code from a free form phone number string. Common date, time and string operations are supported efficiently through pandas.
* Encoders offer robust input to your estimators, and avoid common problems with missing and long tail values. They are well tested to save you from garbage in/garbage out.
* IO connections are configured and pooled in a standard way across the app for popular (no)sql databases, with transaction management and read write optimizations for bulk data, rather than typical ORM single row operations. Connections share a configurable query cache, in addition to encrypted S3 buckets for distributing models and datasets.
* Dependency Management for each individual app in development, that can be 100% replicated to production. No manual activation, or magic env vars, or hidden files that break python for everything else. No knowledge required of venv, pyenv, pyvenv, virtualenv, virtualenvwrapper, pipenv, conda. Ain’t nobody got time for that.
* Tests for your models can be run in your Continuous Integration environment, allowing Continuous Deployment for code and training updates, without increased work for your infrastructure team.
* Workflow Support whether you prefer the command line, a python console, jupyter notebook, or IDE. Every environment gets readable logging and timing statements configured for both production and development.

## 15 minute Outline

1. Create a new app (3 min)
2. Design a model (1 min)
3. Generate a scaffold (2 min)
4. Implement a pipeline (5 min)
5. Test the code (1 min)
6. Train the model (1 min)
7. Deploy to production (2 min)

## 1) Create a new app

```sh
# On Linux
$ pip install lore
# On OS X use homebrew python 2 or 3
$ brew install python3 && pip3 install lore
```

    $ lore init my_app --python-version=3.6.4 --keras

## 2) Designing a Model

## 3) Generate a scaffold

    $ cd my_app
    $ lore generate scaffold product_popularity --keras --regression --holdout

##4) Implement a Pipeline

Here is the implementation of get_data:

```python
# my_app/pipelines/product_popularity.py part 1

import os

from lore.encoders import Token, Unique, Norm
import lore.io
import lore.pipelines
import lore.env

import pandas


class Holdout(lore.pipelines.holdout.Base):
    # You can inspect the source data csv's yourself from the command line with:
    # $ wget https://s3.amazonaws.com/instacart-datasets/instacart_online_grocery_shopping_2017_05_01.tar.gz
    # $ tar -xzvf instacart_online_grocery_shopping_2017_05_01.tar.gz

    def get_data(self):
        url = 'https://s3.amazonaws.com/instacart-datasets/instacart_online_grocery_shopping_2017_05_01.tar.gz'

        # Lore will extract and cache files in lore.env.data_dir by default
        lore.io.download(url, cache=True, extract=True)
        
        # Defined to DRY up paths to 3rd party file hierarchy
        def read_csv(name):
            path = os.path.join(
                lore.env.data_dir,
                'instacart_2017_05_01',
                name + '.csv')
            return pandas.read_csv(path, encoding='utf8')
        
        # Published order data was split into irrelevant prior/train
        # sets, so we will combine them to re-purpose all the data.
        orders = read_csv('order_products__prior')
        orders = orders.append(read_csv('order_products__train'))

        # count how many times each product_id was ordered
        data = orders.groupby('product_id').size().to_frame('sales')

        # add product names and department ids to ordered product ids
        products = read_csv('products').set_index('product_id')
        data = data.join(products)

        # add department names to the department ids
        departments = read_csv('departments').set_index('department_id')
        data = data.set_index('department_id').join(departments)
        
        # Only return the columns we need for training
        data = data.reset_index()
        return data[['product_name', 'department', 'sales']]
```            
