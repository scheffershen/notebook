API Cloud Vision
===

L'API Cloud Vision fournit un ensemble de fonctionnalités pour l'analyse des images. Dans toutes ces situations, vous ne paierez que ce que vous utilisez sans engagement préalable. Les fonctionnalités suivantes sont disponibles avec l'API :

### Type de fonctionnalité

`CROP_HINTS`: Suggère des sommets pour cadrer une zone d'une image.
`DOCUMENT_TEXT_DETECTION`: Exécute la reconnaissance optique de caractères (OCR) sur des images de texte dense, telles que des documents (PDF/TIFF) et des images contenant du texte manuscrit. TEXT_DETECTION peut être utilisé pour les images de texte épars. Prioritaire lorsque DOCUMENT_TEXT_DETECTION et TEXT_DETECTION sont présents.
`TEXT_DETECTION`: Effectue une reconnaissance optique des caractères (OCR) sur le texte de l'image. La détection de texte est optimisée pour les zones de texte épars dans une image plus grande. Si l'image est un document (PDF/TIFF), si elle contient du texte dense ou qu'elle contient une écriture manuscrite, utilisez plutôt DOCUMENT_TEXT_DETECTION.

### Limites

Les limites d'utilisation ci-dessous sont appliquées à l'API Vision :

- Taille du fichier image: 20 Mo
- Taille de l'objet de requête JSON: 10 Mo
- Nombre d'images par requête: 16

Les images encodées en Base64 peuvent dépasser la limite de taille JSON, même si elles sont comprises dans la limite de la taille du fichier image. Les images plus volumineuses doivent être hébergées sur Cloud Storage ou sur une URL accessible publiquement. Notez que la taille de fichier des images encodées en Base64 peut être supérieure à celle du fichier image d'origine (d'environ 37 %, généralement).

