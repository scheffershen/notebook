Haystack US 2021 
================

https://www.youtube.com/watch?v=bWc4DOM-CHk&list=PLqWhaw58wr9oJbIitQJzeOP-umnTTxxjR&index=16

## A brif History og information Retrieval

- 1960-1970: Text Search
	+ Boolean Retrieval
	+ Regexes
- 1980-2000: Probablilistic IR
	+ Tf.idf, BM25
	+ Stop words
	+ Stemming
- 2000-2010: ML Enhanced
	+ LTR
	+ NLP models
	+ Concept Search
- 2010-2020: Neural IR
	+ Deepp Neural Nets
	+ Vector Based

### Matching Engine

- 1960-1970: Boolean Matching
- 1980-2010: Tokens + Inverted Index
- 2010-2020: Vectors + KNN
- 2020-2025: XMC


https://www.youtube.com/watch?v=Ez2zNu2I7oI

## What is Haystack?

- Fully open source NLP framework

## Hello world in Haystack

```python
document_store = ElasticsearchDocumentStore()
retriver = ElasticseachRetriver(document_sotre=document_store)
reader = FARMReader(model_name_or_path="deepset/roberta-base-squad2")
pipe = ExtractiveQAPipline(reader, retriver)
prediction = pipe.run(query="Who is the father of Arya Statk?")
print_answers(prediction, detailes="minimal")

```

```python
reader = FARMReader(model="deepset/roberta-base-squad2")
result = reader.predict(
    query="Which country is Canberra located in?",
    documents=documents,
    top_k=10
)
```

```python
p = Pipeline()
p.add_node(component=retriever, name="Retriever", inputs=["Query"])
p.add_node(component=reader, name="Reader", inputs=["Retriever"])
result = p.run(query="What did Einstein work on?")
```

	$ curl -X 'POST' \
	  'http://127.0.0.1:8000/query' \
	  -H 'accept: application/json' \
	  -H 'Content-Type: application/json' \
	  -d '{
	  "query": "Who is the father of Arya Stark?",
	  "params": {}
	}'

```python
p = ExtractiveQAPipeline(reader, retriever)
result = p.run(query="What is the capital of Australia?")
```

## Features of Haystack

- Core NLP tasks covered
	+ Reader
	+ Summarizer
	+ classifier
	+ Retriver
	+ Ranker
	+ Query classifier
	+ Question Generator
	+ Generator
- Data Connectors
	+ => File converter => PreProcessor
	+ File converters from txt, pdf, docs, markdown
	+ Web scaper to turn website int text
	+ Preprocessor to split long documents, clean text
- Document stroes
	+ Elasticsearch, OpenSearch, SQL(standard options)
	+ FAISS, Milvus, Weaviate (vector optimized)

## Long Form Question Answering

```python
document_store = FAISSDocumentStore()
retriver = EmbeddingRetriver(
	document_sotre=document_store,
	embedding_model="yjernite/retribert-base-uncased",
	model_format="retribert")
generator = Seq2SeqGenerator(model_name_or_path="yjernite/bart_eli5")
pipe = GenerativeQAPipline(reader, retriver)
pipe.run(query="What kind of character des Arya Stark play?")

```

## Haystack Tutorials

https://haystack.deepset.ai/overview/intro