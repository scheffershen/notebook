using-google-cloud-machine-learning-apis-programmatically-in-python
===================================================================

https://towardsdatascience.com/using-google-cloud-machine-learning-apis-programmatically-in-python-part-1-430f608af6a5
Feb 7, 2022

https://github.com/Subrahmanyajoshi/Google-Cloud-Machine-Learning-APIs

## Introduction

Developing a machine learning system from scratch is not an easy task. It’s extremely time and resource consuming. The development of an end-to-end machine learning system consists of various different stages like:

1. Problem understanding
2. Data fetching
3. Data cleaning
4. Data labeling
5. Feature selection
6. Model selection, training, and hyperparameter tuning
7. Testing
8. Deployment and maintenance

For general use cases, using already available Machine Learning APIs makes more sense and also saves time and resources.

Google Cloud provides highly accurate, fully managed APIs which solve most of the common machine learning problems. 

These APIs are also trained on huge datasets and results are much more accurate than what we would get if we build and train a custom model ourselves.

## Google Cloud ML APIs

- Vision API
- Speech to Text API
- Text to Speech API
- Natural Language API
- Video Intelligence API
- Translation API

## Prerequisites

- [Create a Google Cloud AI notebooks instance](https://cloud.google.com/vertex-ai/docs/workbench/user-managed/create-new), No need to create a very powerful instance. `n1-standard-2` instances would be fine.
- Install the following python packages through pip in the notebook instance
	+ google-cloud-vision==2.5.0
	+ google-cloud-language==2.3.0
	+ google-cloud-translate==3.6.0
	+ google-cloud-speech==2.11.0
	+ google-cloud-texttospeech==2.10.0
	+ google-cloud-videointelligence==2.5.0
- Create a google cloud service account and its associated key by running commands given below in the Google Cloud shell instance.

```bash
# Set PROJECT_ID environment variable 
export PROJECT_ID=<project-id>

# Create a google cloud service account 
gcloud iam service-accounts create my-api-sa --display-name "api account"

# Create the key
gcloud iam service-accounts keys create ~/key.json --iam-account my-api-sa@${PROJECT_ID}.iam.gserviceaccount.com
```

- [APIs need to be enabled before they are used](https://console.cloud.google.com/apis/library?project=text-analysis-323506&pli=1)

## 1. Vision API

Vision API has features to solve most of the common image processing problems.

List of Vision API features I have experimented with:

- Text Detection

This feature uses OCR to detect all kinds of texts from an input image. 

```python
import os
import io

from IPython.display import Image
from google.cloud import vision

# Setting path to key.json as GOOGLE_APPLICATION_CREDENTIALS environment variable
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.abspath("/home/jupyter/key.json")

# Create a Google Cloud Vision api client object
vision_client = vision.ImageAnnotatorClient()
img_path = './data/gsuite.jpg'
Image(filename=img_path, width=700, height=500) 

# Create a vision image object
with io.open(img_path, 'rb') as image_file:
    content = image_file.read()
        
image_object = vision.Image(content=content)

# Send a request to cloud vision api client to detect texts in input image
response = vision_client.text_detection(image=image_object)

# Results
response.text_annotations[0].description.replace('\n', '\n ')

# 'Google Cloud\n All of us are smarter\n than one of us.\n Introducing G Suite, intelligent apps made for working together\n and building a brighter future for your business.\n google.com/gsuite\n G Suite MB AE\n h田田\n 田 田田\n '
```

## Label Detection

This feature labels the input image. It basically detects and returns a list of everything it finds in the queried image.

```python
import os
import io

from IPython.display import Image
from google.cloud import vision

# Setting path to key.json as GOOGLE_APPLICATION_CREDENTIALS environment variable
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.abspath("/home/jupyter/key.json")
vision_client = vision.ImageAnnotatorClient()

# Create a Google Cloud Vision api client object
vision_client = vision.ImageAnnotatorClient()
img_path = './data/dog.jpg'
Image(filename=img_path, width=400, height=400) 

# Create a vision image object
with io.open(img_path, 'rb') as image_file:
    content = image_file.read()
        
image_object = vision.Image(content=content)

# Send a request to cloud vision api client to detect labels in input image
response = vision_client.label_detection(image=image_object)

# Results
# Response with the highest confidence
print(f"Label: {response.label_annotations[0].description}, Confidence: {response.label_annotations[0].score}")

# Label: Dog, Confidence: 0.9537228941917419

# Other responses
for responses in response.label_annotations:
    print(f"Label: {responses.description}, Confidence: {responses.score}")

# Label: Dog, Confidence: 0.9537228941917419
# Label: Dog breed, Confidence: 0.9165488481521606
# Label: Carnivore, Confidence: 0.8981429934501648
# Label: Disc dog, Confidence: 0.8752759099006653
# Label: Flying disc, Confidence: 0.8572475910186768
# Label: Frisbee games, Confidence: 0.8473882079124451
# Label: Fawn, Confidence: 0.8161194324493408
# Label: Companion dog, Confidence: 0.8147048950195312
# Label: Tail, Confidence: 0.7616308331489563
# Label: Snout, Confidence: 0.7511301040649414
```

## Face Detection

This feature detects all the faces in the queried image. Returns coordinates of bounding boxes for detected faces along with sentiments of each detected face.

## Landmark Detection

This feature detects the place in the queried image. 

```python
import os
import io

from IPython.display import Image
from google.cloud import vision

# Setting path to key.json as GOOGLE_APPLICATION_CREDENTIALS environment variable
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.abspath("/home/jupyter/key.json")

# Create a Google Cloud Vision api client object
vision_client = vision.ImageAnnotatorClient()
img_path = './data/landmark.jpg'
Image(filename=img_path, width=400, height=400) 

# Create a vision image object
with io.open(img_path, 'rb') as image_file:
    content = image_file.read()
        
image_object = vision.Image(content=content)

# Send a request to cloud vision api client to detect landmarks in input image
response = vision_client.landmark_detection(image=image_object)

# Results
print("Detected Landmark: ", response.landmark_annotations[0].description)
print("Score: ", response.landmark_annotations[0].score)

# Detected Landmark:  Times Square
# Score:  0.8622481822967529
```

## Logo Detection

This feature detects popular logos in the queried image.

```python
import os
import io

from IPython.display import Image
from google.cloud import vision

# Setting path to key.json as GOOGLE_APPLICATION_CREDENTIALS environment variable
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.abspath("/home/jupyter/key.json")

# Create a Google Cloud Vision api client object
vision_client = vision.ImageAnnotatorClient()
img_path = './data/logos.jpg'
Image(filename=img_path, width=400, height=400) 

# Create a vision image object
with io.open(img_path, 'rb') as image_file:
    content = image_file.read()
        
image_object = vision.Image(content=content)

# Send a request to cloud vision api client to detect logos in input image
response = vision_client.logo_detection(image=image_object)

# Results
for logo in response.logo_annotations:
    print(logo.description)

# Royal Dutch Shell
# Target Corporation
# Nike
# Apple Inc.
# McDonald's
# NBC News
# World Wide Fund for Nature
# Mercedes-Benz
```

## Web Detection

This feature retrieves images over the internet, which are similar (fully, partially, or visually) to the queried image.

```python
import os
import io

from IPython.display import Image
from google.cloud import vision

# Setting path to key.json as GOOGLE_APPLICATION_CREDENTIALS environment variable
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.abspath("/home/jupyter/key.json")

# Create a Google Cloud Vision api client object
vision_client = vision.ImageAnnotatorClient()
img_path = './data/dog.jpg'
Image(filename=img_path, width=400, height=400) 

# Create a vision image object
with io.open(img_path, 'rb') as image_file:
    content = image_file.read()
        
image_object = vision.Image(content=content)

# Send a request to cloud vision api client to detect similar images as input image
response = vision_client.web_detection(image=image_object)

# Full Matching Images
# response.web_detection.full_matching_images 

# [url: "https://img.gospodari.com/ckfinder/userfiles/images/3525.jpg"
# , url: "https://funart.pro/uploads/posts/2021-07/1627618416_14-funart-pro-p-sobaka-v-polete-zhivotnie-krasivo-foto-16.jpg"
# , url: "https://cameralabs.org/media/lab19/10/29-2/fotograf-klaudio-pikkoli-6.jpg"
# , url: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=146502367480258"
# , url: "https://i.pinimg.com/originals/b1/fb/34/b1fb34fde9e0da61310f1a73d4e1de71.jpg"
# , url: "https://1.bp.blogspot.com/-nGeUlFfslaU/XdVncGu_5RI/AAAAAAAAa08/BQUf30LmIWAjIbpjsQjwlUPlzCdjtC0agCLcBGAsYHQ/s1600/Wonderful%2BPictures%2Bof%2BSuper%2BFlying%2BDogs%2Bby%2BClaudio%2BPiccoli%2B%25288%2529.jpg"
# , url: "https://millionstatusov.ru/pic/statpic/all8/5e20bda8e78a6.jpg"
# , url: "https://i.pinimg.com/736x/b1/fb/34/b1fb34fde9e0da61310f1a73d4e1de71.jpg"
# , url: "https://i.guim.co.uk/img/media/339bbeb00e74a94fce675db75db6b22945a1dc13/0_0_3525_2349/master/3525.jpg?width=700&quality=85&auto=format&fit=max&s=8c3a8add56e61c2b55a5d75023a88329"
# , url: "https://i.pinimg.com/474x/b1/fb/34/b1fb34fde9e0da61310f1a73d4e1de71.jpg"
# ]

# Partially Matching Images
# response.web_detection.partial_matching_images

# [url: "http://ocdn.eu/images/pulscms/OWY7MDA_/55b440ca49f66cfea70203e352cb71ae.jpg"
# , url: "https://img.wprost.pl/_thumb/f8/48/c9f3c054a99c80e1c5xx57e5aeeb.jpeg"
# , url: "https://cdnpt01.viewbug.com/media/mediafiles/2019/01/21/82934242_widepreview400.jpg"
# , url: "https://seuppcdn01.1x.com/images/user/90d7cebdc484c375d0e26eebb688190d-ld.jpg"
# , url: "https://static.wixstatic.com/media/40ce9a_0200a36bab4940ec88f7657937cfdd06~mv2.jpg/v1/fill/w_250,h_166,al_c,q_90/40ce9a_0200a36bab4940ec88f7657937cfdd06~mv2.jpg"
# , url: "https://c1.titrebartar.com//images/news/a60/1398/08/12/1572783357_H6cE0.jpg"
# , url: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=484637275718383"
# , url: "https://seuppcdn01.1x.com/images/user/90d7cebdc484c375d0e26eebb688190d-hd2.jpg"
# , url: "https://static3.55online.news/thumbnail/zhkNmZhOTM3M/odJ5qJgIOksnDoJdBenUlE48u50d9ntalnDkvdNYgn497B9enj5kxs-zhltB_746/zhkNmZhOTM3M.jpg"
# , url: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=136158531125831"
# ]

# Visually Similar Images
# response.web_detection.visually_similar_images

# [url: "https://images.cm.archant.co.uk/resource/image/8626336/landscape_ratio16x9/448/252/1b199d83bf5d3917eaf6595b1819c46/eh/xxx-jumping-dog-1.jpg"
# , url: "https://www.awf.org/sites/default/files/SpeciesPage_AfricanWildDog01_Hero.jpg"
# , url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F11%2F03%2Fcavalier-king-charles-spaniel-1352518937-2000.jpg"
# , url: "https://www.unley.sa.gov.au/files/assets/public/pets/dog-1.jpg?w=1200"
# , url: "https://static.onecms.io/wp-content/uploads/sites/47/2020/06/28/Catahoula-Leopard-Dog-lying-down-627457592-2000.jpg"
# , url: "https://vetstreet.brightspotcdn.com/dims4/default/54186d0/2147483647/thumbnail/590x420/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F40%2F58%2F3bc5c01c4cdb8a0581681831faa9%2Fgreat-dane-shaking-paw-thinkstockphotos-522650067-590.jpg"
# , url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F25%2Fdoberman-pinscher-red-collar-1100812121-2000.jpg"
# , url: "https://i.natgeofe.com/n/187b3223-0b45-4aa5-ae5c-24793dd2d6cb/01-german-shepherd-coronavirus-bwtkdt_16x9.jpg?w=1200"
# ]

```

## 2. Speech to Text API

[Google Cloud Speech to Text API is used for speech transcription.](https://console.cloud.google.com/marketplace/product/google/speech.googleapis.com)


```python
import os
import io

from IPython.display import Audio
from google.cloud import speech_v1

# Setting path to key.json as GOOGLE_APPLICATION_CREDENTIALS environment variable
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.abspath("/home/jupyter/key.json")

# Create a Google Cloud Vision api client object
speech_client = speech_v1.SpeechClient()
speech_file = './data/recording.flac'
Audio(speech_file)

# Read the audio file
with io.open(speech_file, "rb") as audio_file:
    content = audio_file.read()
        
audio = speech_v1.RecognitionAudio(content=content)

speech_config =  {"language_code": "en-In",
                  "encoding": speech_v1.RecognitionConfig.AudioEncoding.FLAC,
                 'audio_channel_count' : 2 
                 }

response = speech_client.recognize(config=speech_config, audio=audio)

# Transcribed speech
# response.results[0].alternatives[0].transcript

# 'hi I am Subramaniam Joshi I am a data scientist at Hewlett Packard enterprise I love machine learning and artificial intelligence'

```

## 3. Text to Speech API

[This API is used for the conversion of text to speech.](https://console.cloud.google.com/marketplace/product/google/texttospeech.googleapis.com?project=flutter-217514)

While converting text to speech, this API provides a lot of different voice configurations.

```python
import os
import io

from IPython.display import Audio
from google.cloud import texttospeech_v1

# Setting path to key.json as GOOGLE_APPLICATION_CREDENTIALS environment variable
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.abspath("/home/jupyter/key.json")

# Create a text to speech client object
tts_client = texttospeech_v1.TextToSpeechClient()

text = "hi I am Subramaniam Joshi I am a data scientist at Hewlett Packard enterprise I love machine learning and artificial intelligence"

input_text = texttospeech_v1.SynthesisInput(text=text)

# Following cell lists all available voice configurations
tts_client.list_voices()

# Here i'm using an en-In configuration with name en-IN-Wavenet-D
voice = texttospeech_v1.VoiceSelectionParams(
        language_code="en-In",
        name="en-IN-Wavenet-D")

# Reponse audio configurations
audio_config = texttospeech_v1.AudioConfig(
        audio_encoding=texttospeech_v1.AudioEncoding.MP3)

response = tts_client.synthesize_speech(request={"input": input_text, "voice": voice, "audio_config": audio_config})

# Response
Audio(response.audio_content)

```

## 1. Translation API

As the name itself suggests, this API is mainly used for text translation.[
Cloud Translation API](https://console.cloud.google.com/marketplace/product/google/translate.googleapis.com?project=text-analysis-323506)

I’m using Translation API to translate a French article to English and Japanese.

```python
import os

from google.cloud import translate_v2

os.environ["PROJECT_ID"] = "text-analysis-323506"

# Setting path to key.json as GOOGLE_APPLICATION_CREDENTIALS environment variable
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.abspath("/home/jupyter/key.json")

# Create a Google Cloud translate api client object
translate_client = translate_v2.Client()

# Text file localted inside data folder contains 'french_article.txt' which contains a new artical in french.

file_path = './data/french_article.txt'

# Original article in French
text_lines = []
with open(file_path, 'r') as fstream:
    lines = fstream.readlines()
    for line in lines:
        text_lines.append(line.strip())
        print(line.strip())

# DÉCRYPTAGESElectronique, bois, plastiques : les entreprises de la planète sont confrontées à un manque de matières et de composants pour répondre à la demande. Voici pourquoi.

# Les prix du gaz et de l’électricité ne sont pas les seuls à s’envoler depuis quelques mois. Ceux de nombreuses matières premières et composants alimentant les chaînes de production des usines du monde entier grimpent aussi, ralentissant la production et la livraison de biens de consommation. Le Monde fait le point sur ces pénuries.

# Qu’est-ce qu’une pénurie ?
# On parle de pénurie lors d’un état de manque partiel ou total de denrées ou de marchandises, à l’échelle d’un territoire ou d’un groupe de personnes. D’un point de vue économique, la pénurie désigne le moment où la demande pour une marchandise est supérieure à l’offre.

# Celles-ci peuvent avoir des causes diverses, d’ordre climatique (mauvaise récolte), politique (situation de guerre, blocus), économique (insuffisance de production) ou encore purement spéculatif : la peur de manquer entraînant une ruée sur un ou plusieurs produits.

# Au début de la crise sanitaire due au Covid-19, le confinement a provoqué une frénésie d’achat de pâtes ou de papier toilettes, qui s’est accentuée par les images de rayons vides, créant ainsi la pénurie dans les supermarchés.

# Pourquoi y a-t-il des pénuries actuellement ?
# · Parce que la demande a repris bien plus fortement que prévu

# Après ces mises à l’arrêt généralisées et successives des économies nationales au cours des confinements en 2020 et 2021, la demande de produits manufacturés et de matières premières a repris fortement, entraînant des tensions par rapport à une offre inférieure à la demande.

# Le graphique ci-dessous montre clairement les déficits d’approvisionnement rencontrés depuis 2020. Le niveau le plus bas de l’indice a été atteint au moment du premier confinement. Les délais d’approvisionnement se sont brièvement raccourcis à l’été 2020, avant de s’allonger durablement jusqu’à aujourd’hui.

# Translation to English

target_language_code = 'en'

responses = translate_client.translate(text_lines, target_language=target_language_code)

with open('./results/english_translation.txt', 'w') as fstream:
    for response in responses:
        w_resposne = response.get('translatedText')
        fstream.write(w_resposne + '\n')
        print(w_resposne)

# DECRYPTIONElectronics, wood, plastics: companies around the world are facing a shortage of materials and components to meet demand. Here&#39;s why.

# Gas and electricity prices are not the only ones to soar in recent months. Those of many raw materials and components feeding the production lines of factories around the world are also climbing, slowing the production and delivery of consumer goods. Le Monde takes stock of these shortages.

# What is a shortage?
# We speak of shortage when there is a partial or total lack of foodstuffs or goods, on the scale of a territory or a group of people. From an economic point of view, scarcity refers to when the demand for a commodity exceeds the supply.

# These can have various causes, of a climatic order (poor harvest), political (war situation, blockade), economic (insufficiency of production) or even purely speculative: the fear of shortage leading to a rush on one or more products .

# At the start of the health crisis due to Covid-19, the confinement caused a frenzy of purchases of pasta or toilet paper, which was accentuated by the images of empty shelves, thus creating a shortage in supermarkets.

# Why are there current shortages?
# Because demand has picked up much more strongly than expected

# After these widespread and successive shutdowns of national economies during the confinements in 2020 and 2021, the demand for manufactured goods and raw materials has recovered strongly, leading to tensions in relation to a lower supply than demand.

# The graph below clearly shows the supply shortages encountered since 2020. The lowest level of the index was reached at the time of the first confinement. Supply times shortened briefly in the summer of 2020, before lengthening sustainably until today.

# Translation to Japanese
target_language_code = 'ja'

responses = translate_client.translate(text_lines, target_language=target_language_code)

with open('./results/japanese_translation.txt', 'w') as fstream:
    for response in responses:
        w_resposne = response.get('translatedText')
        fstream.write(w_resposne + '\n')
        print(w_resposne)

# 説明電子機器、木材、プラスチック：世界中の企業は、需要を満たすための材料とコンポーネントの不足に直面しています。これが理由です。

# ここ数ヶ月で高騰しているのはガスと電気の価格だけではありません。世界中の工場の生産ラインに供給されている多くの原材料や部品も増加しており、消費財の生産と配送が遅れています。ルモンドはこれらの不足を補います。

# 不足とは何ですか？
# 領土や人々のグループの規模で、食料や商品が部分的または全体的に不足している場合、私たちは不足について話します。経済的観点から、希少性とは、商品の需要が供給を上回った場合を指します。

# これらには、気候秩序（不作）、政治的（戦争状況、封鎖）、経済的（生産不足）、さらには純粋に投機的なものなど、さまざまな原因が考えられます。不足の恐れが1つ以上の製品の急増につながります。

# Covid-19による健康危機の開始時に、閉じ込めはパスタやトイレットペーパーの購入の熱狂を引き起こし、それは空の棚のイメージによって強調され、スーパーマーケットで不足を引き起こしました。

# なぜ現在不足しているのですか？
# 需要が予想よりもはるかに強く回復したため

# 2020年と2021年の監禁期間中のこれらの広範囲にわたる連続的な国家経済の閉鎖の後、工業製品と原材料の需要は力強く回復し、需要よりも供給が少ないことに関連する緊張につながった。

# 下のグラフは、2020年以降に発生した供給不足を明確に示しています。最初の監禁時に指数の最低レベルに達しました。供給時間は2020年の夏に一時的に短縮された後、今日まで持続的に延長されました。        
```

## Language Detection

This feature detects the language of the given text.

```python
import os

from google.cloud import translate_v2

os.environ["PROJECT_ID"] = "text-analysis-323506"

# Setting path to key.json as GOOGLE_APPLICATION_CREDENTIALS environment variable
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.abspath("/home/jupyter/key.json")

# Create a Google Cloud translate api client object
translate_client = translate_v2.Client()

text = 'DÉCRYPTAGESElectronique, bois, plastiques : les entreprises de la planète sont confrontées à un manque de matières et de composants pour répondre à la demande. Voici pourquoi.'

response = translate_client.detect_language(text)
response.get('language')

# 'fr'

text = "これらには、気候（不作）、政治（戦争状況、封鎖）、経済（不十分な生産）、さらには純粋に投機的なものなど、さまざまな原因が考えられます"
response = translate_client.detect_language(text)
response.get('language')

# 'ja'

```

## Video Intelligence API

Video Intelligence API is used for common video processing problems.[](https://console.cloud.google.com/marketplace/product/google/videointelligence.googleapis.com?project=flutter-217514)

## Shot Change Detection

This feature detects changes in shots of the video.

```python
import os

from IPython.display import Video
from google.cloud import videointelligence_v1 as videointelligence

# Setting path to key.json as GOOGLE_APPLICATION_CREDENTIALS environment variable
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.abspath("/home/jupyter/key.json")

# Create Google Cloud Video Intelligence API client object
video_client = videointelligence.VideoIntelligenceServiceClient()

video_file_path = './data/audi_advertisement.mp4'

Video(video_file_path)

# Read video
with io.open(video_file_path, "rb") as f:
    input_content = f.read()

# create request
operation = video_client.annotate_video(
    request={
        "features": [videointelligence.Feature.SHOT_CHANGE_DETECTION],
        "input_content": input_content
    }
)

# API endpoint provides start and end times for each shot in the video.

response = operation.result(timeout=300)

#Dumping response to a text file
#Dumping responses to a text file as it's too big to be displayed

with open('./results/shot_change_detection.txt', 'w') as fstream:
    fstream.write(str(response))

```

## Speech Transcription

This feature transcribes speech in the videos. 

```python
import os

from IPython.display import Video
from google.cloud import videointelligence_v1 as videointelligence

# Setting path to key.json as GOOGLE_APPLICATION_CREDENTIALS environment variable
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.abspath("/home/jupyter/key.json")

# Create Google Cloud Video Intelligence API client object
video_client = videointelligence.VideoIntelligenceServiceClient()

video_file_path = './data/audi_advertisement.mp4'

Video(video_file_path)

# Read video
with io.open(video_file_path, "rb") as f:
    input_content = f.read()

# Configure the request
config = videointelligence.SpeechTranscriptionConfig(
    language_code="en-US", enable_automatic_punctuation=True
)

context = videointelligence.VideoContext(speech_transcription_config=config)

# create request
operation = video_client.annotate_video(
        request={
            "features": [videointelligence.Feature.SPEECH_TRANSCRIPTION],
            "input_content": input_content,
            "video_context": context,
    }
)

response = operation.result(timeout=300)

## Transcribed speech
for trans in response.annotation_results[0].speech_transcriptions:
    print(trans.alternatives[0].transcript)

# Ideas are beautiful. At first. They are inside you. Electrify you grow from our imagination.
#  But ultimately, they want to be set, free out into the world, to disrupted, improve it to make it more meaningful more, beautiful, and even more incredible ideas for the future, just like that. The new fully electric Audi, RS, e-tron TT.

#  Audi.
```

## Label Detection

This feature detects labels from videos.

```python
import os

from IPython.display import Video
from google.cloud import videointelligence_v1 as videointelligence

# Setting path to key.json as GOOGLE_APPLICATION_CREDENTIALS environment variable
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.abspath("/home/jupyter/key.json")

# Create Google Cloud Video Intelligence API client object
video_client = videointelligence.VideoIntelligenceServiceClient()

video_file_path = './data/audi_advertisement.mp4'

Video(video_file_path)

# Read video
with io.open(video_file_path, "rb") as f:
    input_content = f.read()

# create request
operation = video_client.annotate_video(
    request={
        "features": [videointelligence.Feature.LABEL_DETECTION],
        "input_content": input_content
    }
)

# Results
response = operation.result(timeout=300)

# Major Labels returned by API
for annotations in response.annotation_results:
    for shot in annotations.shot_label_annotations :
        print(shot.entity.description)

# head
# formal wear
# automotive design
# mid size car
# audi
# motor vehicle
# car
# human
# graphic design
# emotion
# portrait
# suit
# windshield
# performance car
# brand
# hood
# automotive exterior
# luxury vehicle
# mode of transport
# personal luxury car
# headlamp
# coupé
# vehicle
# executive car
# logo
# sky
# daytime
# automotive lighting
# sports car
# mouth
# grille
# audi
# glass
# nose
# sedan
# concept car
# land vehicle
# graphics
# automotive window part
# family car
# black hair
```

## Logo Detection

Detects all popular logos which appear in the video.

```python
import os

from IPython.display import Video
from google.cloud import videointelligence_v1 as videointelligence

# Setting path to key.json as GOOGLE_APPLICATION_CREDENTIALS environment variable
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.abspath("/home/jupyter/key.json")

# Create Google Cloud Video Intelligence API client object
video_client = videointelligence.VideoIntelligenceServiceClient()

video_file_path = './data/pepsi_advertisement.mp4'

Video(video_file_path)

# Read video
with io.open(video_file_path, "rb") as f:
    input_content = f.read()

# create request
operation = video_client.annotate_video(
    request={
        "features": [videointelligence.Feature.LOGO_RECOGNITION],
        "input_content": input_content
    }
)

response = operation.result(timeout=300)

# Results
for annotations in response.annotation_results:
    for logo in annotations.logo_recognition_annotations:
        print(f"Logo: {logo.entity.description}, Confidence: {logo.tracks[0].confidence}")

# Logo: Pepsi, Confidence: 0.9548713564872742
# Logo: Renault Samsung Motors, Confidence: 0.893693208694458
# Logo: UEFA, Confidence: 0.9070633053779602
```

## People Detection

The feature detects people in the videos and provides coordinates to draw bounding boxes around detected people. 

```python
import os

from IPython.display import Video
from google.cloud import videointelligence_v1 as videointelligence

# Setting path to key.json as GOOGLE_APPLICATION_CREDENTIALS environment variable
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.abspath("/home/jupyter/key.json")

# Create Google Cloud Video Intelligence API client object
video_client = videointelligence.VideoIntelligenceServiceClient()

video_file_path = './data/pepsi_advertisement.mp4'

Video(video_file_path)

# Read video
with io.open(video_file_path, "rb") as f:
    input_content = f.read()

# Configure the request
config = videointelligence.PersonDetectionConfig(
    include_bounding_boxes=True, include_attributes=True, include_pose_landmarks=True,
)

context = videointelligence.types.VideoContext(person_detection_config=config)

# create request
operation = video_client.annotate_video(
        request={
            "features": [videointelligence.Feature.PERSON_DETECTION],
            "input_content": input_content,
            "video_context": context,
    }
)

response = operation.result(timeout=300)

#Dumping response to a text file
#Dumping response to a text as it's too big to be displayed on output box

with open('./results/people_detection.txt', 'w') as fstream:
    fstream.write(str(response))
```

## Face Detection

This feature detects faces in the videos. 

```python
import os

from IPython.display import Video
from google.cloud import videointelligence_v1 as videointelligence

# Setting path to key.json as GOOGLE_APPLICATION_CREDENTIALS environment variable
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.abspath("/home/jupyter/key.json")

# Create Google Cloud Video Intelligence API client object
video_client = videointelligence.VideoIntelligenceServiceClient()

video_file_path = './data/pepsi_advertisement.mp4'

Video(video_file_path)

# Read video
with io.open(video_file_path, "rb") as f:
    input_content = f.read()

# Configure the request
config = videointelligence.FaceDetectionConfig(
    include_bounding_boxes=True, include_attributes=True
)

context = videointelligence.VideoContext(face_detection_config=config)

# create request
operation = video_client.annotate_video(
    request={
        "features": [videointelligence.Feature.FACE_DETECTION],
        "input_content": input_content,
        "video_context": context,
    }
)

response = operation.result(timeout=300)

#Dumping response to a text file
#Results are being dumped to a text file because the resoponse is extremely big

with open('./results/face_detection.txt', 'w') as fstream:
    fstream.write(str(response))


```

## Natural Language API

Natural Language API is used to solve some of the common NLP problems.[](https://console.cloud.google.com/marketplace/product/google/language.googleapis.com?project=flutter-217514)

## Entity Analysis

This feature analyzes the input text for known entities like proper names or common nouns. 

```python
import os
import io

from google.cloud import language_v1

os.environ["PROJECT_ID"] = "text-analysis-323506"

# Setting path to key.json as GOOGLE_APPLICATION_CREDENTIALS environment variable
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.abspath("/home/jupyter/key.json")

# Create Google Cloud Video Intelligence API client object
language_client = language_v1.LanguageServiceClient()

text = "Google Cloud has wide range of machine learning APIs."

document = {'content': text, 'type_': language_v1.Document.Type.PLAIN_TEXT, 'language': 'en'}

response  = language_client.analyze_entities(request= {'document': document})

response

# entities {
#   name: "Google Cloud"
#   type_: OTHER
#   metadata {
#     key: "mid"
#     value: "/m/0105pbj4"
#   }
#   metadata {
#     key: "wikipedia_url"
#     value: "https://en.wikipedia.org/wiki/Google_Cloud_Platform"
#   }
#   salience: 0.5621581673622131
#   mentions {
#     text {
#       content: "Google Cloud"
#       begin_offset: -1
#     }
#     type_: PROPER
#   }
# }
# entities {
#   name: "range"
#   type_: OTHER
#   salience: 0.25460705161094666
#   mentions {
#     text {
#       content: "range"
#       begin_offset: -1
#     }
#     type_: COMMON
#   }
# }
# entities {
#   name: "machine learning APIs"
#   type_: CONSUMER_GOOD
#   salience: 0.1832347959280014
#   mentions {
#     text {
#       content: "machine learning APIs"
#       begin_offset: -1
#     }
#     type_: COMMON
#   }
# }
# language: "en"
```

## Sentiment Analysis

This feature detects the sentiment of the input text. 

```python
import os
import io

from google.cloud import language_v1

os.environ["PROJECT_ID"] = "text-analysis-323506"

# Setting path to key.json as GOOGLE_APPLICATION_CREDENTIALS environment variable
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.abspath("/home/jupyter/key.json")

# Create Google Cloud Video Intelligence API client object
language_client = language_v1.LanguageServiceClient()

# Positive Example
# input text
text = "This movie is so good. Loved every second of it !!"

document = {'content': text, 'type_': language_v1.Document.Type.PLAIN_TEXT, 'language': 'en'}

response  = language_client.analyze_sentiment(request= {'document': document})

# Document Sentiment
response.document_sentiment

# magnitude: 1.899999976158142
# score: 0.8999999761581421
# The score shows that the input text has a very positive sentiment. (Towards +1)

# Sentiments for each sentence in the input text
for sentence in response.sentences:
    print("Text: ")
    print(sentence.text.content)
    print("Sentiment: ")
    print(sentence.sentiment)

# Text: 
# This movie is so good.
# Sentiment: 
# magnitude: 0.8999999761581421
# score: 0.8999999761581421

# Text: 
# Loved every second of it !!
# Sentiment: 
# magnitude: 0.8999999761581421
# score: 0.8999999761581421

# Negative Example

# input text
text = "One of the worst movies ever!!. Please don't waste your time watching it.."

document = {'content': text, 'type_': language_v1.Document.Type.PLAIN_TEXT, 'language': 'en'}

response  = language_client.analyze_sentiment(request= {'document': document})

# Document Sentiment
response.document_sentiment

# magnitude: 1.5
# score: -0.699999988079071
# The score shows that the input text has a very negative sentiment. (Towards -1)

# Sentiments for each sentence in the input text
for sentence in response.sentences:
    print("Text: ")
    print(sentence.text.content)
    print("Sentiment: ")
    print(sentence.sentiment)

# Text: 
# One of the worst movies ever!!.
# Sentiment: 
# magnitude: 0.800000011920929
# score: -0.800000011920929

# Text: 
# Please don't waste your time watching it..
# Sentiment: 
# magnitude: 0.699999988079071
# score: -0.699999988079071
```

## Syntax Analysis

This feature analyses the input text and returns syntactic details.

```python
import os
import io

from google.cloud import language_v1

os.environ["PROJECT_ID"] = "text-analysis-323506"

# Setting path to key.json as GOOGLE_APPLICATION_CREDENTIALS environment variable
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.abspath("/home/jupyter/key.json")

# Create Google Cloud Video Intelligence API client object
language_client = language_v1.LanguageServiceClient()

text = "Google Cloud has wide range of machine learning APIs."

document = {'content': text, 'type_': language_v1.Document.Type.PLAIN_TEXT, 'language': 'en'}

response  = language_client.analyze_syntax(request= {'document': document})

response

# sentences {
#   text {
#     content: "Google Cloud has wide range of machine learning APIs."
#     begin_offset: -1
#   }
# }
# tokens {
#   text {
#     content: "Google"
#     begin_offset: -1
#   }
#   part_of_speech {
#     tag: NOUN
#     number: SINGULAR
#     proper: PROPER
#   }
#   dependency_edge {
#     head_token_index: 1
#     label: NN
#   }
#   lemma: "Google"
# }
# tokens {
#   text {
#     content: "Cloud"
#     begin_offset: -1
#   }
#   part_of_speech {
#     tag: NOUN
#     number: SINGULAR
#     proper: PROPER
#   }
#   dependency_edge {
#     head_token_index: 2
#     label: NSUBJ
#   }
#   lemma: "Cloud"
# }
# tokens {
#   text {
#     content: "has"
#     begin_offset: -1
#   }
#   part_of_speech {
#     tag: VERB
#     mood: INDICATIVE
#     number: SINGULAR
#     person: THIRD
#     tense: PRESENT
#   }
#   dependency_edge {
#     head_token_index: 2
#     label: ROOT
#   }
#   lemma: "have"
# }
# tokens {
#   text {
#     content: "wide"
#     begin_offset: -1
#   }
#   part_of_speech {
#     tag: ADJ
#   }
#   dependency_edge {
#     head_token_index: 4
#     label: AMOD
#   }
#   lemma: "wide"
# }
# tokens {
#   text {
#     content: "range"
#     begin_offset: -1
#   }
#   part_of_speech {
#     tag: NOUN
#     number: SINGULAR
#   }
#   dependency_edge {
#     head_token_index: 2
#     label: DOBJ
#   }
#   lemma: "range"
# }
# tokens {
#   text {
#     content: "of"
#     begin_offset: -1
#   }
#   part_of_speech {
#     tag: ADP
#   }
#   dependency_edge {
#     head_token_index: 4
#     label: PREP
#   }
#   lemma: "of"
# }
# tokens {
#   text {
#     content: "machine"
#     begin_offset: -1
#   }
#   part_of_speech {
#     tag: NOUN
#     number: SINGULAR
#   }
#   dependency_edge {
#     head_token_index: 7
#     label: NN
#   }
#   lemma: "machine"
# }
# tokens {
#   text {
#     content: "learning"
#     begin_offset: -1
#   }
#   part_of_speech {
#     tag: NOUN
#     number: SINGULAR
#   }
#   dependency_edge {
#     head_token_index: 8
#     label: NN
#   }
#   lemma: "learning"
# }
# tokens {
#   text {
#     content: "APIs"
#     begin_offset: -1
#   }
#   part_of_speech {
#     tag: NOUN
#     number: SINGULAR
#   }
#   dependency_edge {
#     head_token_index: 5
#     label: POBJ
#   }
#   lemma: "api"
# }
# tokens {
#   text {
#     content: "."
#     begin_offset: -1
#   }
#   part_of_speech {
#     tag: PUNCT
#   }
#   dependency_edge {
#     head_token_index: 2
#     label: P
#   }
#   lemma: "."
# }
# language: "en"
```

## Text Classification

This feature classifies the input text into different known categories. 

```python
import os
import io

from google.cloud import language_v1

os.environ["PROJECT_ID"] = "text-analysis-323506"

# Setting path to key.json as GOOGLE_APPLICATION_CREDENTIALS environment variable
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.abspath("/home/jupyter/key.json")

# Create Google Cloud Video Intelligence API client object
language_client = language_v1.LanguageServiceClient()

text = "China has started shutting down schools, cancelling hundreds of \
        flights and ramping up mass testings following a new outbreak of \
        Covid-19"

document = {'content': text, 'type_': language_v1.Document.Type.PLAIN_TEXT, 'language': 'en'}

response  = language_client.classify_text(request= {'document': document})

response

# categories {
#   name: "/Travel/Air Travel"
#   confidence: 0.8999999761581421
# }
# Example 2:

text = "Mangoes are one of the tastiest fruits out there. I mean, \
        who doesn't like mangoes?. There are a lot of different types \
        of mangoes. Each of them look and taste slightly different."

document = {'content': text, 'type_': language_v1.Document.Type.PLAIN_TEXT, 'language': 'en'}

response  = language_client.classify_text(request= {'document': document})

response

# categories {
#   name: "/Food & Drink/Food"
#   confidence: 0.9800000190734863
# }
```