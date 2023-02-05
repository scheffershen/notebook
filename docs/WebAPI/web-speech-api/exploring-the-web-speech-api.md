exploring-the-web-speech-api
============================

https://www.voorhoede.nl/en/blog/exploring-the-web-speech-api/
https://experiment-web-speech.now.sh/pages/blog.html
https://experiment-web-speech.now.sh/

## Conclusion

*SpeechRecognition* interface is poorly supported
*speechSynthesis* works surprisingly well once you iron out all of its quirks and issues

- Some browsers provide custom voices, and these voices sound better than the native ones
- Their quality does vary a lot from browser to browser
- Microsoft Edge’s sounds much more natural compared to Google Chrome’s, for example.
- *SpeechRecognition* works fine for short sentences; results tend to get inconsistent with longer paragraphs
- *SpeechRecognition* is also quite bad at recognizing more complex character sequences like email addresses and phone numbers
- Thus, I should say that the Web Speech API is not suited for interacting with web forms
- Yet, it does have its use cases if you are creative enough.