4-Python-libraries-to-detect-English-and-Non-English-language
=============================================================

We will discuss spacy-langdetect, Pycld2, TextBlob, and Googletrans for language detection

## spacy-langdetect

You need to install the `spacy-langdetect` and `spacy` python libraries for the below code to work.

```python
from spacy_langdetect import LanguageDetector

import spacy

nlp = spacy.load('en')  # 1
nlp.add_pipe(LanguageDetector(), name='language_detector', last=True) #2
text_content = "Er lebt mit seinen Eltern und seiner Schwester in Berlin."
doc = nlp(text_content) #3
detect_language = doc._.language #4
print(detect_language)
{'language': 'de', 'score': 0.9999958526911192}
```

```python
from langdetect import detect, detect_langs

def language_detection(text, method = "single"):

  """
  @desc: 
    - detects the language of a text
  @params:
    - text: the text which language needs to be detected
    - method: detection method: 
      single: if the detection is based on the first option (detect)
  @return:
    - the langue/list of languages
  """

  if(method.lower() != "single"):
    result = detect_langs(text)

  else:
    result = detect(text)

  return result

result = language_detection("FLUOSTEROL")

print(result)
```

## Pycld2

```python
import pycld2 as cld2
>>> text_content = """ A accès aux chiens et aux frontaux qui lui ont été il peut consulter et modifier ses collections et exporter Cet article concerne le pays européen aujourd’hui appelé République française. 
Pour d’autres usages du nom France, Pour une aide rapide et effective, veuiller trouver votre aide dans le menu ci-dessus. 
Welcome, to this world of Data Scientist. Today is a lovely day."""
>>> _, _, _, detected_language = cld2.detect(text_content,  returnVectors=True)
>>> print(detected_language)
((0, 323, 'FRENCH', 'fr'), (323, 64, 'ENGLISH', 'en'))
```

## TextBlob

```python
>>> from textblob import TextBlob
>>> text = "это компьютерный портал для гиков. It was a beautiful day ."
>>> lang = TextBlob(text)
>>> print(lang.detect_language())
ru
```

## Googletrans

## Resources

- https://towardsdatascience.com/4-python-libraries-to-detect-english-and-non-english-language-c82ad3efd430
- https://towardsdatascience.com/4-nlp-libraries-for-automatic-language-identification-of-text-data-in-python-cbc6bf664774