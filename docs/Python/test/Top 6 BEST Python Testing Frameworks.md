Top 6 BEST Python Testing Frameworks
====================================

### Robot

The most popular Robot Framework is an open-source Automation Testing framework based on Python.

Example:

```
*** Settings ***
Library           SeleniumLibrary
 
*** Variables ***
${SERVER}         localhost:7272
${BROWSER}        Firefox
${DELAY}        0
${VALID USER}     demo
${VALID PASSWORD}    mode
${LOGIN URL}      http://${SERVER}/
${WELCOME URL}    http://${SERVER}/welcome.html
${ERROR URL}      http://${SERVER}/error.html

*** Keywords ***
Open Browser To Login Page
    Open Browser    ${LOGIN URL}    ${BROWSER}
    Maximize Browser Window
    Set Selenium Speed    ${DELAY}
Login Page Should Be Open
    Title Should Be    Login Page
 
Go To Login Page
    Go To    ${LOGIN URL}
    Login Page Should Be Open
 
Input Username
    [Arguments]    ${username}
    Input Text    username_field    ${username}
 
Input Password
    [Arguments]    ${password}
    Input Text    password_field    ${password}
 
Submit Credentials
    Click Button    login_button
 
Welcome Page Should Be Open
    Location Should Be    ${WELCOME URL}
    Title Should Be    Welcome Page
```

Resources: 

- https://pypi.org/project/robotframework/
- https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html

### PyTest

PyTest is an open-source Python-based testing framework that is generally all-purpose but especially for Functional and API testing.

Example:

```python
import pytest                          #Import unittest module
def test_file1_method():               #Function inside class
      x=5
      y=6
      assert x+1 == y,"test failed"
```

Packages/Methods:

- pytest.approx()
- pytest.fail()
- pytest.skip()
- pytest.exit()
- pytest.main()
- pytest.raises()
- pytest.warns()

Resources:

- https://docs.pytest.org/en/latest/reference/reference.html
- https://pypi.org/project/pytest/

### Unittest

Unittest is the very first Python-based automated unit test framework that was designed to work with the Python standard library.

Example:

```python
import unittest                        #Import unittest module
def add(x,y):
   return x + y
 
class Test(unittest.TestCase):         #Define your class with testcase
 
   def addition(self):
      self.assertEquals(add(4,5),9)<strong>  #Function inside class
 
if __name__ == '__main__':
   unittest.main()<strong>	#Insert main() method
```

Packages/Methods:

- setUp()
- tearDown()
- setUpClass()
- tearDownClass()
- run()
- debug()
- addTest()
- Discover()
- assertEqual(a,b)
- asserTrue/assertFalse(condition)

Resources:

- https://docs.python.org/3/library/unittest.html
- https://github.com/Codewars/python-unittest

### DocTest

Doctest is a module that is included in Python’s standard distribution and is used for White-box Unit Testing.

Example: 

```python
def test(n): 
import math
    if not n >= 0:
        raise ValueError("n must be >= 0") #number should be 0 or greater than 0
    if math.floor(n) != n:
               raise ValueError("n must be exact integer")   #Error when number is not an integer
  if n+1 == n:  
        raise OverflowError("n too large") #Error when number is too large
    r = 1
    f = 2
    while f <= n:         #Calculate factorial
        r *= f
        f += 1
    return r
 
if __name__ == "__main__":
     import doctest               #Import doctest
    doctest.testmod()             #Calling the testmod method
```

Packages/Functions:

- doctest.testfile()
- doctest.testmod()
- doctest.DocFileSuite()
- doctest.DocTestSuite()

Resources:

- https://docs.python.org/2/library/doctest.html#basic-api
- https://github.com/doctest/doctest

### Nose2

Nose2 is the successor of Nose and it is a Python-based Unit Testing framework that can run Doctests and UnitTests.

Example:

```python
from mynum import *
import nose
 
def test_add_integers():
    assert add(5, 3) == 8
 
def test_add_floats():
    assert add(1.5, 2.5) == 4
 
def test_add_strings():
    nose.tools.assert_raises(AssertionError, add, 'paul', 'carol') 
// To throw one of the expected exception to pass
 
if __name__ == '__main__':   
    nose.run()
```

Packages/Methods:

- nose.tools.ok_
- nose.tools.make_decorator
- nose.tools.raises
- nose.tools.timed
- nose.tools.with_setup
- nose.tools.intest
- nose.tools.nottest

Resources:

- https://pypi.org/project/nose2/


### Testify

Testify was designed to replace unittest and nose. Testify has more advanced features over unittest.

Example:

```python
from testify import *
 
class AdditionTestCase(TestCase):
 
    @class_setup
    def init_the_variable(self):
        self.variable = 0
 
    @setup
    def increment_the_variable(self):
        self.variable += 1
 
    def test_the_variable(self):
        assert_equal(self.variable, 1)
 
    @suite('disabled', reason='ticket #123, not equal to 2 places')
    def test_broken(self):
        # raises 'AssertionError: 1 !~= 1.01'
        assert_almost_equal(1, 1.01, threshold=2)
 
    @teardown
    def decrement_the_variable(self):
        self.variable -= 1
 
    @class_teardown
    def get_rid_of_the_variable(self):
        self.variable = None
 
if __name__ == "__main__":
run()
```

Packages/Methods:

- assert
- mock
- require
- suite