How to master Streamlit for data science
========================================================

https://blog.streamlit.io/how-to-master-streamlit-for-data-science/
https://www.youtube.com/channel/UC3LD42rjj-Owtxsa6PwGU5Q
https://www.youtube.com/watch?v=ZZ4B0QUHuNc&list=PLtqF5YXg7GLmCvTswG32NqQypOuYkPRUE
https://www.youtube.com/watch?v=_9WiB2PDO7k&list=PLJ39kWiJXSixyRMcn3lrbv8xI8ZZoYNZU
https://www.youtube.com/watch?v=Iv2vt-7AYNQ&list=PLpdmBGJ6ELUI6Tws8BqVVNadsYOQlWGtw

January 18 2022

## The essential Streamlit for all your data science needs

To build a web app you’d typically use such Python web frameworks as Django and Flask. 

Streamlit makes the app creation process as simple as writing Python scripts!

## Reuse data and computation. 

Historically, data and computations had been cached with the `@st.cache` decorator. This saves computational time for app changes. It can be hundreds of times if you actively revise the app! In 0.89.0 release Streamlit launched two new primitives (`st.experimental_memo` and `st.experimental_singleton`) to afford a significant speed improvement to that of `@st.cache`.

## 3.1. Install Streamlit

    $ py --list
    $ py -3.9 -m venv env
    $ env\Script\activate

    $ pip install -r requirements.txt
    $ pip install --upgrade pip
    $ pip install streamlit

OR 

	$ git clone https://github.com/streamlit/streamlit-example.git .
    $ streamlit run app.py

https://www.programiz.com/python-programming/online-compiler/
	
## 3.2. Code a Streamlit app

After doing so, you can start to code an app by creating a Python script file (e.g. `app.py`

## Step 6. Launch the app:

	$ streamlit run app.py

## 5.3. Lay out the app

I like to put widgets on the left-hand sidebars of the app. Use `st.sidebar`.
to place the text input box in the sidebar, use `st.sidebar.text_input('Name')`

## Display and style data

- st.write() 
- st.dataframe()
- st.table()
	+ st.table(df)

### Draw a line chart

```python
import streamlit as st
import numpy as np
import pandas as pd

chart_data = pd.DataFrame(
     np.random.randn(20, 3),
     columns=['a', 'b', 'c'])

st.line_chart(chart_data)
```

### widgets

- st.slider()
- st.button()
- st.selectbox()

```python
st.text_input("Your name", key="name")

# You can access the value at any point with:
st.session_state.name
```

### Use checkboxes to show/hide data

```python
if st.checkbox('Show dataframe'):
    chart_data = pd.DataFrame(
       np.random.randn(20, 3),
       columns=['a', 'b', 'c'])

    chart_data
```

### Use a selectbox for options

```python
df = pd.DataFrame({
    'first column': [1, 2, 3, 4],
    'second column': [10, 20, 30, 40]
    })

option = st.selectbox(
    'Which number do you like best?',
     df['first column'])

'You selected: ', option
```

### Layout

- st.sidebar.slider()
- st.sidebar.selectbox()

### Text elements

- st.markdown()
- st.title()
- st.header()
- st.subheader()
- st.st.caption()
- 