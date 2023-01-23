cloud-vision lib
===

https://packagist.org/packages/google/cloud

	$ composer require google/cloud

## Google\Cloud\Vision\VisionClient

```php
use Google\Cloud\Vision\VisionClient;

$vision = new VisionClient();
```

### Annotate a single image.

```php
$familyPhotoResource = fopen(__DIR__ . '/assets/family-photo.jpg', 'r');

$image = $vision->image($familyPhotoResource, [
    'FACE_DETECTION'
]);

$result = $vision->annotate($image);
```

### Annotate a set of images.

```php
$images = [];

$familyPhotoResource = fopen(__DIR__ . '/assets/family-photo.jpg', 'r');
$eiffelTowerResource = fopen(__DIR__ . '/assets/eiffel-tower.jpg', 'r');

$images[] = $vision->image($familyPhotoResource, [
    'FACE_DETECTION'
]);

$images[] = $vision->image($eiffelTowerResource, [
    'LANDMARK_DETECTION'
]);

$result = $vision->annotateBatch($images);
```

### Image Overview

```php
use Google\Cloud\Vision\VisionClient;

$vision = new VisionClient();

$imageResource = fopen(__DIR__ . '/assets/family-photo.jpg', 'r');
$image = $vision->image($imageResource, [
    'FACE_DETECTION'
]);
```

Images can be directly instantiated.

```php
use Google\Cloud\Vision\Image;

$imageResource = fopen(__DIR__ . '/assets/family-photo.jpg', 'r');
$image = new Image($imageResource, [
    'FACE_DETECTION'
]);
```

Image data can be given as a string

```php
use Google\Cloud\Vision\Image;

$imageData = file_get_contents(__DIR__ .'/assets/family-photo.jpg');
$image = new Image($imageData, [
   'FACE_DETECTION'
]);
```

Files stored in Google Cloud Storage can be used.

```php
use Google\Cloud\Storage\StorageClient;
use Google\Cloud\Vision\Image;

$storage = new StorageClient();
$file = $storage->bucket('my-test-bucket')->object('family-photo.jpg');
$image = new Image($file, [
    'FACE_DETECTION'
]);
```

The client library also offers shortcut names which can be used in place of the longer feature names.

```php
use Google\Cloud\Vision\Image;

$imageResource = fopen(__DIR__ . '/assets/family-photo.jpg', 'r');
$image = new Image($imageResource, [
    'faces',          // Corresponds to `FACE_DETECTION`
    'landmarks',      // Corresponds to `LANDMARK_DETECTION`
    'logos',          // Corresponds to `LOGO_DETECTION`
    'labels',         // Corresponds to `LABEL_DETECTION`
    'text',           // Corresponds to `TEXT_DETECTION`,
    'document',       // Corresponds to `DOCUMENT_TEXT_DETECTION`
    'safeSearch',     // Corresponds to `SAFE_SEARCH_DETECTION`
    'imageProperties',// Corresponds to `IMAGE_PROPERTIES`
    'crop',           // Corresponds to `CROP_HINTS`
    'web'             // Corresponds to `WEB_DETECTION`
]);
```

requestObject: Return a formatted annotate image request.

```php
use Google\Cloud\Vision\Image;

$imageResource = fopen(__DIR__ . '/assets/family-photo.jpg', 'r');
$image = new Image($imageResource, [
    'FACE_DETECTION'
]);

$requestObj = $image->requestObject();
```

### Represents a Google Cloud Vision image annotation result.

```php
use Google\Cloud\Vision\VisionClient;

$vision = new VisionClient();

$imageResource = fopen(__DIR__ . '/assets/family-photo.jpg', 'r');
$image = $vision->image($imageResource, [
    'FACE_DETECTION'
]);

$annotation = $vision->annotate($image);
```

Fetch Crop Hints

```php
$hints = $annotation->cropHints();
```

Return the full text annotation.

```php
$fullText = $annotation->fullText();
```

Get the result of a safe search detection

```php
$safeSearch = $annotation->safeSearch();
```

Return an array containing all text found in the image

```php
$text = $annotation->text();
```

## CropHint Overview: Represents a recommended image crop.

```php
use Google\Cloud\Vision\VisionClient;

$vision = new VisionClient();

$imageResource = fopen(__DIR__ . '/assets/family-photo.jpg', 'r');
$image = $vision->image($imageResource, [ 'CROP_HINTS' ]);
$annotation = $vision->annotate($image);

$hints = $annotation->cropHints();
$hint = $hints[0];
```

boundingPoly: The bounding polygon of the recommended crop.

```php
$poly = $hint->boundingPoly();
```

## Document Overview: Represents a Document Text Detection result.

```php
use Google\Cloud\Vision\VisionClient;

$vision = new VisionClient();

$imageResource = fopen(__DIR__ . '/assets/the-constitution.jpg', 'r');
$image = $vision->image($imageResource, [ 'DOCUMENT_TEXT_DETECTION' ]);
$annotation = $vision->annotate($image);

$document = $annotation->fullText();
```

pages: Get the document pages.

```php
$pages = $document->pages();
```

test: Get the document text.

```php
$text = $document->text();
```

## Entity Overview

```php
use Google\Cloud\Vision\VisionClient;

$vision = new VisionClient();

$imageResource = fopen(__DIR__ . '/assets/family-photo.jpg', 'r');
$image = $vision->image($imageResource, [ 'text' ]);
$annotation = $vision->annotate($image);

$text = $annotation->text()[0];
```

For TEXT_DETECTION (OCR), boundingPolys are produced for the entire text detected in an image region, followed by boundingPolys for each word within the detected text.

```php
print_r($text->boundingPoly());
```

For example, for an image containing 'Eiffel Tower,' this field represents the confidence that there is a tower in the query image.

```php
echo $text->confidence();
```

Entity textual description, expressed in its locale language.

```php
echo $text->description();
```

Get the raw annotation result

```php
$info = $text->info();
```

The language code for the locale in which the entity textual description (next field) is expressed.

```php
echo $text->locale();
```

Some IDs might be available in Knowledge Graph(KG).

```php
echo $text->mid();
```

## SafeSearch Overview: Represents a SafeSearch annotation result

```php
use Google\Cloud\Vision\VisionClient;

$vision = new VisionClient();

$imageResource = fopen(__DIR__ . '/assets/family-photo.jpg', 'r');
$image = $vision->image($imageResource, [ 'safeSearch' ]);
$annotation = $vision->annotate($image);

$safeSearch = $annotation->safeSearch();
```

isMedical: Check whether the image contains medical content

```php
if ($safeSearch->medical()) {
    echo "Image contains medical content.";
}
```

