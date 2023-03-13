import openai
from fastapi import FastAPI
from qdrant_client import QdrantClient
from sentence_transformers import SentenceTransformer #permet de transformer des phrases en vecteurs.

from config import (
    COLLECTION_NAME,
    OPENAI_API_KEY,
    QDRANT_API_KEY,
    QDRANT_HOST,
    QDRANT_PORT,
)

openai.api_key = OPENAI_API_KEY

qdrant_client = QdrantClient(
    host=QDRANT_HOST,
    port=QDRANT_PORT,
    api_key=QDRANT_API_KEY,
)

'''Ces codes sont pour une application FastAPI qui utilise l'API OpenAI pour répondre à une question sur les méditations de Marc Aurèle. Voici une brève explication de chaque partie du code :'''

#crée une instance de la classe SentenceTransformer pour transformer des phrases en vecteurs.
retrieval_model = SentenceTransformer("msmarco-MiniLM-L-6-v3")

app = FastAPI()

#crée une fonction qui construit une chaîne de caractères à partir d'une question et d'une liste de références.
def build_prompt(question: str, references: list) -> tuple[str, str]:
    prompt = f"""
    You're Marcus Aurelius, emperor of Rome. You're giving advice to a friend who has asked you the following question: '{question}'

    You've selected the most relevant passages from your writings to use as source for your answer. Cite them in your answer.

    References:
    """.strip()

    references_text = ""

    for i, reference in enumerate(references, start=1):
        text = reference.payload["text"].strip()
        references_text += f"\n[{i}]: {text}"

    prompt += (
        references_text
        + "\nHow to cite a reference: This is a citation [1]. This one too [3]. And this is sentence with many citations [2][3].\nAnswer:"
    )
    return prompt, references_text

#crée une route pour l'URL de base.
@app.get("/")
def read_root():
    return {
        "message": "Make a post request to /ask to ask a question about Meditations by Marcus Aurelius"
    }

#crée une route pour la requête POST sur l'URL "/ask".
@app.post("/ask")
def ask(question: str):
    #effectue une recherche dans l'API Qdrant pour trouver les documents les plus similaires à la question.
    similar_docs = qdrant_client.search(
        collection_name=COLLECTION_NAME,
        query_vector=retrieval_model.encode(question),
        limit=3,
        append_payload=True,
    )

    #construit une chaîne de caractères à partir de la question et des documents similaires.
    prompt, references = build_prompt(question, similar_docs)

    #utilise l'API OpenAI pour générer une réponse à la question.
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": prompt},
        ],
        max_tokens=250,
        temperature=0.2,
    )

    #renvoie la réponse et les références.
    return {
        "response": response["choices"][0]["message"]["content"],
        "references": references,
    }
