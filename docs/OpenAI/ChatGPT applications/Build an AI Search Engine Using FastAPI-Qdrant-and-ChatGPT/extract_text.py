import sys

"""Ces codes sont écrits en langage de programmation Python et ont pour objectif d'extraire du texte à partir de fichiers HTML contenant le texte d'un livre et de le traiter pour le stocker dans un fichier JSON."""

# Cette ligne de code ajoute le répertoire parent au chemin de recherche de modules. Cela permet d'importer des modules situés dans le répertoire parent.
#sys.path.append("..")

import json #Cette ligne de code importe le module json, qui permet de lire et d'écrire des fichiers JSON.
import re #Cette ligne de code importe le module re, qui fournit des fonctions de traitement des expressions régulières.
from pathlib import Path #Cette ligne de code importe la classe Path du module pathlib, qui fournit une interface simple et intuitive pour manipuler les chemins de fichiers et de répertoires.

from bs4 import BeautifulSoup #Cette ligne de code importe la classe BeautifulSoup du module bs4, qui fournit une interface pour extraire des informations à partir de fichiers HTML et XML.
from config import DATA #Cette ligne de code importe la constante DATA du module config, qui contient le chemin du répertoire de données.

"""Cette fonction prend une chaîne de caractères text et un délimiteur delim en entrée et renvoie une liste de sous-chaînes séparées par le délimiteur, tout en conservant le délimiteur dans la liste. Par exemple, si text vaut "Bonjour, comment ça va?" et "delim" vaut ",", la fonction renvoie ["Bonjour,", " comment ça va?"]."""
def split_with_delimiter(text: str, delim: str) -> list:
    split_sentences = re.split(f"({delim})", text)
    combined_sentences: list = []
    for i in range(0, len(split_sentences)):
        if split_sentences[i] == ".":
            combined_sentences[-1] += split_sentences[i]
        else:
            combined_sentences.append(split_sentences[i])
    return combined_sentences

"""Cette fonction prend une chaîne de caractères "text" en entrée et renvoie une version nettoyée de cette chaîne. La fonction supprime les caractères non-ASCII, les espaces multiples, les espaces en début et fin de ligne et les sauts de ligne superflus."""
def clean_text(text: str) -> str:
    clean_text = text.encode("ascii", "ignore").decode("utf-8")
    clean_text = re.sub(r" {2,}", " ", clean_text)
    clean_text = re.sub(r" \n", "\n", clean_text)
    clean_text = re.sub(r"\n ", "\n", clean_text).strip()
    return clean_text

"""Cette fonction prend en entrée le nom d'un livre "book", le titre du livre "book_name" et une longueur maximale de phrase "max_sentence_length" (par défaut 100). La fonction extrait le texte du livre à partir d'un fichier HTML, en utilisant la bibliothèque "BeautifulSoup" pour analyser le fichier et extraire les sections de texte. Elle nettoie ensuite le texte à l'aide de la fonction "clean_text", puis découpe le texte en phrases de longueur "maximale max_sentence_length" à l'aide de la fonction "split_with_delimiter". Elle stocke finalement les données dans un fichier JSON."""
def extract_text_from_html(
    book: str,
    book_name: str,
    max_sentence_length: int = 100,
) -> None:
    file = DATA / "unzipped" / book / "index.html"
    output_folder = DATA / "processed" / book

    Path(output_folder).mkdir(parents=True, exist_ok=True)

    with open(file, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f, "html.parser")

    data = []
    excluded_sections = ["GLOSSARY", "NOTES", "APPENDIX", "INTRODUCTION"]

    for section in soup.select("section"):
        if (
            section.find("h2")
            and section.find("h2").get_text().strip() not in excluded_sections
        ):
            section_title = section.find("h2").get_text()
            section_text = ""

            for t in section.select("p"):
                for elem_to_remove in (
                    t.select("[class='calibre24']")
                    + t.select("[class='mw-ref']")
                    + t.select("[class='reference']")
                ):
                    elem_to_remove.decompose()
                section_text += "\n" + t.get_text()

            section_text = clean_text(section_text)

            fixed_length_sentences = []

            for paragraph in section_text.split("\n"):
                if len(paragraph.split()) > max_sentence_length:
                    sentences = split_with_delimiter(paragraph, "\.")
                    current_sentence = ""

                    for i in range(len(sentences)):
                        if (
                            len(current_sentence.split()) + len(sentences[i].split())
                            < max_sentence_length
                        ):
                            current_sentence += sentences[i]
                        else:
                            fixed_length_sentences.append(current_sentence)
                            current_sentence = sentences[i]
                else:
                    fixed_length_sentences.append(paragraph)

            data.append(
                {
                    "title": section_title,
                    "url": f"https://en.wikisource.org/wiki/{book}#{'_'.join(section_title.split())}",
                    "sentences": fixed_length_sentences,
                }
            )

    output = {
        "book_title": book_name,
        "url": f"https://en.wikisource.org/wiki/{book}",
        "data": data,
    }

    json.dump(output, open(output_folder / f"{book}.json", "w"), indent=4)
    print(f"Saved {book}.json with content of book.")

"""Enfin, la condition "if __name__ == '__main__':" vérifie si le fichier Python est exécuté en tant que script principal, et si c'est le cas, elle appelle la fonction "extract_text_from_html" avec les arguments "Marcus_Aurelius_Antoninus_-_His_Meditations_concerning_himselfe" et "Meditations by Marcus Aurelius"."""
if __name__ == '__main__':
	extract_text_from_html(
	    "Marcus_Aurelius_Antoninus_-_His_Meditations_concerning_himselfe",
	    "Meditations by Marcus Aurelius",
	)
