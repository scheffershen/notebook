Create a question-answer service using GPT-3 and OpenAI
=======================================================

For any existing knowledgebase for your product or service, it is easier than ever to create an AI powered add-on that can search the knowledgebase and answer questions in natural language.

Using GPT-3 (developed by OpenAI), one can easily build an API driven service with great results, without actually learning or implementing any Machine Learning code or putting heavy compute power to support it.

The OpenAI APIs are easy to understand and are backed by a decent documentation. This service recently came out of private beta. You can simply signup at OpenAI website and start using the APIs.

Now, let’s see how we can use GPT-3 to create an answering service on top of our existing knowledgebase. 

https://platform.openai.com/account/api-keys

Check the menu on the top right and click on ‘View API Keys’ to view your API Key.

## Preparing Feed from the Knowledgebase

## Understanding OpenAI Answers API

The Answers API Endpoint is: `https://api.openai.com/v1/answers`
The request method is `POST`
The API Key must go into `Authorization` header (prefixed with `Bearer`)

## Resources

- https://www.pragnakalp.com/question-answering-using-gpt3-examples/
- https://platform.openai.com/docs/guides/answers
- https://www.reddit.com/r/artificial/comments/ijc68p/there_is_a_gpt3_question_answering_tool_to_try/
- https://arxiv.org/pdf/2210.17284.pdf
- https://www.mlq.ai/fine-tuning-gpt-3-question-answer-bot/
- https://github.com/openai/openai-cookbook/blob/main/examples/Question_answering_using_embeddings.ipynb
- https://pub.towardsai.net/build-chatgpt-like-chatbots-with-customized-knowledge-for-your-websites-using-simple-programming-f393206c6626
- openai  question-answering github
- https://www.youtube.com/watch?v=dRUIGgNBvVk&t=66s
- [Question And Answering System Using GPT3](https://www.pragnakalp.com/question-answering-using-gpt3-examples/)
- [Summarizing Papers With Python and GPT-3](https://medium.com/geekculture/a-paper-summarizer-with-python-and-gpt-3-2c718bc3bc88)
- [Fine Tuning GPT-3: Building a Custom Q&A Bot](https://www.mlq.ai/fine-tuning-gpt-3-question-answer-bot/)
- [OpenAI Question and Answer demonstration: Can it read Wikipedia?](https://www.youtube.com/watch?v=_x6Rma-K2Ho)
- [Generative Question-Answering with OpenAI's GPT-3.5 and Davinci](https://www.youtube.com/watch?v=dRUIGgNBvVk)
- [GPT-3: How to Summarize a PDF with 70,000+ Words](https://www.youtube.com/watch?v=AZDVvVYiHfg)
- [Generative Question-Answering with Long-Term Memory](https://www.pinecone.io/learn/openai-gen-qa/)