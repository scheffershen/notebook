## Question Answering Beyond SQuAD: Larger Datasets and New Domains, with Branden Chan, deepset.ai

https://www.youtube.com/watch?v=E80qHThomok

A timeline of language models

- 2013-2014: Uncontextualised Vector Space Modles
	+ GloVe
	+ Word2Vec
- 2017-2018: Contextualised LSTM Models
	+ ELMO
	+ ULMFit
- 2019-2020: Contextualised Transformer Models
	+ BERT
		- XLM (Crosslingual)
		- MT-DNN (Multitask)
		- T5 (Text2Text+Data)
		- SpanBERT (Masked spans)
		- RoBERTa (Data+Train time+Batchsize+NSP) 
		- ALBERT (Shared wieghts NSP -> Sentence order Factorized Embedding)
		- Q-BERT (Model size)
		- ELECTRA ( Replaced token detection)
		- DistilBERT ()
		- ERNIE(Tsinghua) (Knowledge graph)
		- XLNet (Permutation LM TransformerXL+Data)
	+ XLNET

Demo: demo.deepset.ai

Overview of QA Datasets

- SQuAD v1 -2016
	+ SQuAD v2 - 2019
		- Answer types
			* Yes/no answer and multi answer span
				+ Natural Questions
		- Scale
			+ Open Domain
				+ Open QA
				+ MSMarco
				+ TREC
				+ WebQuestions
		- Language
			+ Non-Englisg
				- KQUAD
				- FQuAD
				- SberQuAD
			+ Multilingual
				- TyDi
				- XQuAD
				- MLQA
		- Multi-hop
			+ Reasoning and Synthesis
				+ NewsQA
				+ TriviaQA
				+ HotPotQA
				+ HybridQA
			+ Tabular Data
				+ WikiTable Questions
		- Data structure
			+ Visual
				+ VisualQA

https://github.com/deepset-ai/haystack/
https://medium.com/deepset-ai/going-beyond-squad-part-1-question-answering-in-different-languages-8eac6cf56f21

