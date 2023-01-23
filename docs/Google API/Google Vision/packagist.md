packagist
===

## jordikroon/google-vision (2019-11-29)

```php
$vision = new \Vision\Vision(
    $apiKey, 
    [
        // See a list of all features in the table below
        // Feature, Limit
        new \Vision\Feature(\Vision\Feature::FACE_DETECTION, 100),
    ]
);

$imagePath = $_FILES['file']['tmp_name'];
$response = $vision->request(
    // See a list of all image loaders in the table below
    new \Vision\Request\Image\LocalImage($imagePath)
);

$faces = $response->getFaceAnnotations();
foreach ($faces as $face) {
    foreach ($face->getBoundingPoly()->getVertices() as $vertex) {
        echo sprintf('Person at position X %f and Y %f', $vertex->getX(), $vertex->getY());
    }
}
```

## wapnen/google-cloud-vision-php (2019-02-26)

```php
include "vendor/autoload.php";
use GoogleCloudVision\GoogleCloudVision;
use GoogleCloudVision\Request\AnnotateImageRequest;
use GoogleCloudVision\Request\Request;


$annotateImageRequest1 = new AnnotateImageRequest();
$annotateImageRequest1->setImageUri("https://cdn.pixabay.com/photo/2016/02/19/11/25/supreme-court-building-1209701_960_720.jpg");
$annotateImageRequest1->setFeature('IMAGE_PROPERTIES');
$annotateImageRequest1->setFeature('LABEL_DETECTION');
$annotateImageRequest1->setFeature('WEB_DETECTION');

$gcvRequest = new GoogleCloudVision([$annotateImageRequest1], "Your_api_key");
$response = $gcvRequest->annotate();

echo json_encode($response);
```

The function `setImageUri()`; takes a Google Cloud Storage image location, or publicly-accessible image URL. Alternatively you can use setImage(); which takes a base64 encoded image string.

You can set as many features as are available to the annotateImageRequest by calling the `setFeature()`; function on the annotateImageRequest which takes any of the following enum parameters ; TYPE_UNSPECIFIED, FACE_DETECTION, LANDMARK_DETECTION, LOGO_DETECTION, LABEL_DETECTION, TEXT_DETECTION, DOCUMENT_TEXT_DETECTION, SAFE_SEARCH_DETECTION, IMAGE_PROPERTIES, CROP_HINTS, WEB_DETECTION.

## headoo/google-vision-api-bundle (2017)

GoogleVisionApiBundle is a Symfony2/3 Bundle for use the API Google Vision simpl

```yaml
headoo_google_vision_api:
    api_key: '%apikey%'
```

```php
$google_vision = $this->container->get('headoo_google_vision_api.helper');
$google_vision->vision($image, $type); // $type=TEXT_DETECTION
```

## wikisource/google-cloud-vision-php (2017-09-18)

```php
use GoogleCloudVisionPHP\GoogleCloudVision;

$gcv = new GoogleCloudVision();

// Get your API key from the Google Cloud Platform site.
$gcv->setKey("[Key from Google]");

// An image can be set from either a filename or URL (the default), raw data, or a Google Cloud Storage item:
$gcv->setImage("local/filesystem/file.png");
$gcv->setImage("https://example.org/url/to/file.png");
$gcv->setImage(file_get_contents('local/file.png'), GoogleCloudVision::IMAGE_TYPE_RAW);
$gcv->setImage("gs://bucket_name/object_name", GoogleCloudVision::IMAGE_TYPE_GCS);

// Set which features you want to retrieve:
$gcv->addFeatureUnspecified(1);
$gcv->addFeatureFaceDetection(1);
$gcv->addFeatureLandmarkDetection(1);
$gcv->addFeatureLogoDetection(1);
$gcv->addFeatureLabelDetection(1);
$gcv->addFeatureTextDetection(1);
$gcv->addFeatureDocumentTextDetection(1);
$gcv->addFeatureSafeSeachDetection(1);
$gcv->addFeatureImageProperty(1);

// Optional. The API will try to guess the language if you don't set this.
$gcv->setImageContext(['languageHints' => ['th']]);

$response = $gcv->request();
```

## thangman22/google-cloud-vision-php (2016-12-24)

```php
use GoogleCloudVisionPHP\GoogleCloudVision;

$gcv = new GoogleCloudVision();

// Follow instruction from Google Cloud Vision Document
$gcv->setKey("[Key from Google]");

$gcv->setImage("[File path]");

// 1 is Max result
$gcv->addFeature("LABEL_DETECTION", 1);

$gcv->addFeatureUnspecified(1);
$gcv->addFeatureFaceDetection(1);
$gcv->addFeatureLandmarkDetection(1);
$gcv->addFeatureLogoDetection(1);
$gcv->addFeatureLabelDetection(1);
$gcv->addFeatureOCR(1);
$gcv->addFeatureSafeSeachDetection(1);
$gcv->addFeatureImageProperty(1);

//Optinal
$gcv->setImageContext(array("languageHints"=>array("th")));

$response = $gcv->request();
```