XLM-RoBERTa: The alternative for non-english NL
===============================================

https://medium.com/deepset-ai/xlm-roberta-the-multilingual-alternative-for-non-english-nlp-cf0b889ccbbf

Branden Chan, Jan 15, 2020

If you are doing NLP in a non-english language, you’ll often be agonising over the question “what language model should I use?” While there’s a growing number of monolingual models trained by the community, there’s also an alternative that seems to get less attention: multilingual models.

In this article, we highlight the key ingredients of the `XLM-R` model and explore its performance on German. We find that it’s outperforming our monolingual `GermanBERT` on three popular German datasets; while being on par with SOTA on `GermEval18` (Hate speech detection), it significantly outperforms previous methods on `GermEval14` (NER).

## Why multilingual models?

`XLM-Roberta` comes at a time when there is a proliferation of non-English models such as `Finnish BERT`, `French BERT`(a.k.a. `CamemBERT`) and `German BERT`. 

## What’s New in XLM-Roberta?

The Facebook AI team released `XLM-RoBERTa` in November 2019 as an update to their original `XLM-100` model.

## Conclusion

The strength of these results show that multilingual models exhibit great performance even when evaluated on a single language and we suggest that German NLP practitioners at least consider one of the XLM-Roberta variants when choosing a language model for their NLP systems.

