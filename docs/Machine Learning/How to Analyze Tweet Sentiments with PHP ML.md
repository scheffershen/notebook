---
title: How to Analyze Tweet Sentiments with PHP Machine Learning
slug: How-to-Analyze-Tweet-Sentiments-with-PHP-Machine-Learning
---

How to Analyze Tweet Sentiments with PHP Machine Learning
===

https://www.sitepoint.com/how-to-analyze-tweet-sentiments-with-php-machine-learning

July 07, 2017

ML, Python, TensorFlow, Spark, Scala, 

take a look at PHP-ML – a machine learning library for PHP – and we’ll write a sentiment analysis class that we can later reuse for our own chat or tweet bot.

## PHP Artificial Intelligence

* https://github.com/php-ai
* https://github.com/php-ai/php-ml

## What is Machine Learning?

Machine learning is a subset of Artificial Intelligence that focuses on giving “computers the ability to learn without being explicitly programmed”. This is achieved by using generic algorithms that can “learn” from a particular set of data.

For example, one common usage of machine learning is classification. Classification algorithms are used to put data into different groups or categories. Some examples of classification applications are:

* Email spam filters
* Market segmentation
* Fraud detection

Machine learning is something of an umbrella term that covers many generic algorithms for different tasks, and there are two main algorithm types classified on how they learn – supervised learning and unsupervised learning.

1. Supervised Learning

In supervised learning, we train our algorithm using labelled data in the form of an input object (vector) and a desired output value; the algorithm analyzes the training data and produces what is referred to as an inferred function which we can apply to a new, unlabelled dataset.

For the remainder of this post we will focus on supervised learning, just because its easier to see and validate the relationship; keep in mind that both algorithms are equally important and interesting; one could argue that unsupervised is more useful because it precludes the labelled data requirements.

2. Unsupervised Learning

This type of learning on the other hand works with unlabelled data from the get-go. We don’t know the desired output values of the dataset and we are letting the algorithm draw inferences from datasets; unsupervised learning is especially handy when doing exploratory data analysis to find hidden patterns in the data.

## PHP-ML

Meet PHP-ML, a library that claims to be a fresh approach to Machine Learning in PHP. The library implements algorithms, neural networks, and tools to do data pre-processing, cross validation, and feature extraction.

I’ll be the first to admit PHP is an unusual choice for machine learning, as the language’s strengths are not that well suited for Machine Learning applications. That said, not every machine learning application needs to process petabytes of data and do massive calculations – for simple applications, we should be able to get away with using PHP and PHP-ML.

The best use case that I can see for this library right now is the implementation of a classifier, be it something like a spam filter or even sentiment analysis. We are going to define a classification problem and build a solution step by step to see how we can use PHP-ML in our projects.

## The Problem

To exemplify the process of implementing PHP-ML and adding some machine learning to our applications, I wanted to find a fun problem to tackle and what better way to showcase a classifier than building a tweet sentiment analysis class.

One of the key requirements needed to build successful machine learning projects is a decent starting dataset. Datasets are critical since they will allow us to train our classifier against already classified examples. As there has recently been significant noise in the media around airlines, what better dataset to use than tweets from customers to airlines?

Fortunately, a dataset of tweets is already available to us thanks to Kaggle.io. The Twitter US Airline Sentiment database can be downloaded from their site using this link

## The Solution

Let’s begin by taking a look at the dataset we will be working on. The raw dataset has the following columns:

* tweet_id
* airline_sentiment
* airline_sentiment_confidence
* negativereason
* negativereason_confidence
* airline
* airline_sentiment_gold
* name
* negativereason_gold
* retweet_count
* text
* tweet_coord
* tweet_created
* tweet_location
* user_timezone

Where text will become our feature and the airline_sentiment becomes our target. The rest of the columns can be discarded as they will not be used for our exercise. Let’s start by creating the project, and initialize composer using the following file:

```json
{
    "name": "amacgregor/phpml-exercise",
    "description": "Example implementation of a Tweet sentiment analysis with PHP-ML",
    "type": "project",
    "require": {
        "php-ai/php-ml": "^0.4.1"
    },
    "license": "Apache License 2.0",
    "authors": [
        {
            "name": "Allan MacGregor",
            "email": "amacgregor@allanmacgregor.com"
        }
    ],
    "autoload": {
        "psr-4": {"PhpmlExercise\\": "src/"}
    },
    "minimum-stability": "dev"
}
```

reviewDataset.php i

```php
namespace PhpmlExercise;

require __DIR__ . '/vendor/autoload.php';

use Phpml\Dataset\CsvDataset;

$dataset = new CsvDataset('datasets/raw/Tweets.csv',1);

foreach ($dataset->getSamples() as $sample) {
    print_r($sample);
}
```

Now, run the script with *php reviewDataset.php*, and let’s review the output:

```php
    public function __construct(string $filepath, int $features, bool $headingRow = true)
    {
        if (!file_exists($filepath)) {
            throw FileException::missingFile(basename($filepath));
        }

        if (false === $handle = fopen($filepath, 'rb')) {
            throw FileException::cantOpenFile(basename($filepath));
        }

        if ($headingRow) {
            $data = fgetcsv($handle, 1000, ',');
            $this->columnNames = array_slice($data, 0, $features);
        } else {
            $this->columnNames = range(0, $features - 1);
        }

        while (($data = fgetcsv($handle, 1000, ',')) !== false) {
            $this->samples[] = array_slice($data, 0, $features);
            $this->targets[] = $data[$features];
        }
        fclose($handle);
    }
```

We will need to generate a clean dataset with only the columns we need to continue working. Let’s call this script generateCleanDataset.php :

```php
namespace PhpmlExercise;

require __DIR__ . '/vendor/autoload.php';

use Phpml\Exception\FileException;

$sourceFilepath         = __DIR__ . '/datasets/raw/Tweets.csv';
$destinationFilepath    = __DIR__ . '/datasets/clean_tweets.csv';

$rows =[];

$rows = getRows($sourceFilepath, $rows);
writeRows($destinationFilepath, $rows);


/**
 * @param $filepath
 * @param $rows
 * @return array
 */
function getRows($filepath, $rows)
{
    $handle = checkFilePermissions($filepath);

    while (($data = fgetcsv($handle, 1000, ',')) !== false) {
        $rows[] = [$data[10], $data[1]];
    }
    fclose($handle);
    return $rows;
}

/**
 * @param $filepath
 * @param string $mode
 * @return bool|resource
 * @throws FileException
 */
function checkFilePermissions($filepath, $mode = 'rb')
{
    if (!file_exists($filepath)) {
        throw FileException::missingFile(basename($filepath));
    }

    if (false === $handle = fopen($filepath, $mode)) {
        throw FileException::cantOpenFile(basename($filepath));
    }
    return $handle;
}

/**
 * @param $filepath
 * @param $rows
 * @internal param $list
 */
function writeRows($filepath, $rows)
{
    $handle = checkFilePermissions($filepath, 'wb');

    foreach ($rows as $row) {
        fputcsv($handle, $row);
    }

    fclose($handle);
}

```

Nothing too complex, just enough to do the job. Let’s execute it with phpgenerateCleanDataset.php.

Now, let’s go ahead and point our reviewDataset.php script back to the clean dataset:

## Conclusion

This article fell a bit on the long side, so let’s do a recap of what we’ve learned so far:

Having a good dataset from the start is critical for implementing machine learning algorithms.
The difference between supervised learning and unsupervised Learning.
The meaning and use of cross-validation in machine learning.
That vectorization and transformation are essential to prepare text datasets for machine learning.
How to implement a Twitter sentiment analysis by using PHP-ML’s NaiveBayes classifier.
This post also served as an introduction to the PHP-ML library and hopefully gave you a good idea of what the library can do and how it can be embedded in your own projects.

Finally, this post is by no means comprehensive and there is plenty to learn, improve and experiment with; here are some ideas to get you started on how to improve things further:

Replace the NaiveBayes algorithm with the Support Vector Classification algorithm.
If you tried running against the full dataset (14,000 rows) you’d probably notice how memory intensive the process can be. Try implementing model persistence so it doesn’t have to be trained on each run.
Move the dataset generation to its own helper class.
I hope you found this article useful. If you have some application ideas regarding PHP-ML or any questions, don’t hesitate to drop them below into the comments area!