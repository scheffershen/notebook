import openai

openai.api_key = "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

response = openai.File.create(
 file=open("sample_qna.jsonl"),
 purpose='answers'
)
 
print(response)

