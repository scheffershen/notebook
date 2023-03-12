David Shapiro
=============

url: https://github.com/daveshap?tab=repositories
Natural Language Cognitive Architecture, Benevolent by Design, Symphony of Thought, Artificial Cognition Research, AutoMuse

#### ChatGPT_QA_Regenerative_Medicine

Build a ChatGPT API powered QA chatbot to accelerate regenerative medicine science

prompt: "write a python script that opens all txt files from the folder "papers_txt", splits them into a list of strings with the demarcator "NEW PAGE". Then take each page, and get an embedding by passing the string to a function called "gpt3_embedding". Finally, save all of that into a JSON file, one JSON file for each original txt file. The JSON should have elements such as "original_filename" and then a list of "pages" where each page has a number (which order it was), the original text, and finally the embedding. "

prompt: "That's great, but let's make the "for filename in dirpath" a function, and then call it from if __name__ == __main__ "

prompt: "one more problem, the output directory needs to be specified as "papers json" "

prompt: "let's remove the gpt3_embedding function from being nested inside another function. That is not PEP8 approved (I don't think at least)"

prompt: "Why is the outpath hardcoded and not parameterized? Does that make any sense to you? "

prompt: "Got an error can you fixe it: 

text = f.read() 
File "C:\Program Files\Python310\lib\encodings\cp1252.py", line 23, in decode return codecs.charmap_decode(input,self.errors,decoding_table)[0] 
UnicodeDecodeError: 'charmap' codec can't decode byte 0x90 in position 11841: character maps to <undefined> "


#### ChatGPT_API_Salience

Demonstrate the concept of "salience" using the ChatGPT API

#### raven 

RAVEN (Realtime Assistant Voice Enabled Network) Open Source Software (OSS) community repo

#### LongtermChatExternalSources

GPT-3 chatbot with long-term memory and external sources

#### RecursiveSummarizer

#### PDF_OCR_ChatGPT_Investigation

Using ChatGPT and PDF OCR to investigate documentation

#### Document_Scraping

Public repo for scraping PDF and Word documents with Python and PowerShell

#### PythonGPT3Tutorial

Public Hello World to get used to Python and GPT-3