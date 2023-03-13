import sys

#sys.path.append("..")

"""Ces codes sont en fait un script Python qui permet de faire de la vectorisation de phrases et de les insérer dans une base de données Qdrant."""

"""Pour commencer, le script importe plusieurs modules Python, tels que "numpy", "pandas", "torch", "json" et "SentenceTransformer". Ces modules permettent de manipuler des tableaux, des fichiers JSON, d'effectuer des opérations mathématiques et de transformer des phrases en vecteurs, entre autres."""
import json

import numpy as np
import pandas as pd
import torch

from qdrant_client import QdrantClient
from qdrant_client.http import models
from sentence_transformers import SentenceTransformer

from tqdm.notebook import tqdm

from config import QDRANT_HOST, QDRANT_PORT, QDRANT_API_KEY, DATA, COLLECTION_NAME

#Set relevant parameters
BOOK_FILENAME = "Marcus_Aurelius_Antoninus_-_His_Meditations_concerning_himselfe"

"""Ensuite, le script se connecte à une base de données Qdrant en utilisant le module "qdrant_client". La base de données est configurée pour stocker des vecteurs de dimension 384 et utiliser la distance cosinus pour mesurer la similarité entre les vecteurs."""

#Connect to Qdrant and 
client = QdrantClient(host=QDRANT_HOST, port=QDRANT_PORT, api_key=QDRANT_API_KEY)
client.recreate_collection(
    collection_name=COLLECTION_NAME,
    vectors_config=models.VectorParams(size=384, distance=models.Distance.COSINE),
)

"""Le script lit ensuite un fichier JSON contenant des phrases, extrait les phrases de plus de 15 mots et les stocke dans un DataFrame "df". Ensuite, les phrases sont vectorisées à l'aide du modèle "SentenceTransformer" et stockées dans un tableau vectors."""
#Read sentences
with open(f"{DATA}/processed/{BOOK_FILENAME}/{BOOK_FILENAME}.json", "r", encoding="utf-8") as file:
    meditations_json = json.load(file)

"""Enfin, le script insère les vecteurs et les métadonnées associées (titre, URL) dans la base de données Qdrant à l'aide de la méthode "upsert" du module "qdrant_client"."""
rows = []
for chapter in tqdm(meditations_json["data"]):
    for sentence in chapter["sentences"]:
        rows.append(
            (
                chapter["title"],
                chapter["url"],
                sentence,
            )
        )

df = pd.DataFrame(data=rows, columns=["title", "url", "sentence"])

df = df[df["sentence"].str.split().str.len() > 15]

"""En résumé, ce script effectue de la vectorisation de phrases et de l'indexation dans une base de données pour permettre une recherche efficace de phrases similaires à partir d'une requête donnée."""
#Vectorize sentences
model = SentenceTransformer(
    "msmarco-MiniLM-L-6-v3",
    device="cuda"
    if torch.cuda.is_available()
    else "mps"
    if torch.backends.mps.is_available()
    else "cpu",
)

vectors = []
batch_size = 512
batch = []

for doc in tqdm(df["sentence"].to_list()):
    batch.append(doc)

    if len(batch) >= batch_size:
        vectors.append(model.encode(batch))
        batch = []

if len(batch) > 0:
    vectors.append(model.encode(batch))
    batch = []

vectors = np.concatenate(vectors)

book_name = meditations_json["book_title"]

client.upsert(
    collection_name=COLLECTION_NAME,
    points=models.Batch(
        ids=[i for i in range(df.shape[0])],
        payloads=[
            {
                "text": row["sentence"],
                "title": row["title"] + f", {book_name}",
                "url": row["url"],
            }
            for _, row in df.iterrows()
        ],
        vectors=[v.tolist() for v in vectors],
    ),
)