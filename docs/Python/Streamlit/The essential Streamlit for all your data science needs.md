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

	$ pip install streamlit

## 3.2. Code a Streamlit app

After doing so, you can start to code an app by creating a Python script file (e.g. `app.py`

## Step 6. Launch the app:

	$ streamlit run app.py

## 5.3. Lay out the app

I like to put widgets on the left-hand sidebars of the app. Use `st.sidebar`.
to place the text input box in the sidebar, use `st.sidebar.text_input('Name')`

