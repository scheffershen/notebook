Python veille BBB
=================

petite app qui mettre un mot en majscule, miniscule, plurial, en anglais

## Streamlit

## Convert singular word to plural, according to french grammar rules

https://github.com/sblondon/pluralizefr

```pyhon
import pluralizefr
pluralizefr.pluralize("fromage") # return fromages
pluralizefr.singularize("fromages") # return fromage
```

## python inflector 🌀 for French language : control gender, tense and number

Installation

	$ pip install -U transformers 
	$ pip install -U inflecteur

```python
from inflecteur import inflecteur

inflecteur = inflecteur()
inflecteur.load_dict()

inflecteur.inflect_sentence("Elle boit un café et mange un croissant.", tense='Futur')
'Elle boira un café et mangera un croissant .'

inflecteur.inflect_sentence("Elle boit un café et mange un croissant.", tense='Passé simple')
'Elle but un café et mangea un croissant .'

inflecteur.inflect_sentence("Elle boit un café et mange un croissant.", gender='m')
'Il boit un café et mange un croissant .'

inflecteur.inflect_sentence("Elle boit un café et mange un croissant.", number='p')
'Elles boivent des cafés et mangent des croissants .'

inflecteur.get_word_form('pris')
```