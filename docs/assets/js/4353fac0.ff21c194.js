"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7134],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,d=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(d,l(l({ref:t},h),{},{components:n})):a.createElement(d,l({ref:t},h))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={title:"How to Analyze Tweet Sentiments with PHP Machine Learning",slug:"How-to-Analyze-Tweet-Sentiments-with-PHP-Machine-Learning"},l="How to Analyze Tweet Sentiments with PHP Machine Learning",o={unversionedId:"Machine Learning/How to Analyze Tweet Sentiments with PHP ML",id:"Machine Learning/How to Analyze Tweet Sentiments with PHP ML",title:"How to Analyze Tweet Sentiments with PHP Machine Learning",description:"https://www.sitepoint.com/how-to-analyze-tweet-sentiments-with-php-machine-learning",source:"@site/docs/Machine Learning/How to Analyze Tweet Sentiments with PHP ML.md",sourceDirName:"Machine Learning",slug:"/Machine Learning/How-to-Analyze-Tweet-Sentiments-with-PHP-Machine-Learning",permalink:"/notebook/docs/Machine Learning/How-to-Analyze-Tweet-Sentiments-with-PHP-Machine-Learning",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Machine Learning/How to Analyze Tweet Sentiments with PHP ML.md",tags:[],version:"current",frontMatter:{title:"How to Analyze Tweet Sentiments with PHP Machine Learning",slug:"How-to-Analyze-Tweet-Sentiments-with-PHP-Machine-Learning"},sidebar:"tutorialSidebar",previous:{title:"52 \u4e2a\u6709\u7528\u7684\u673a\u5668\u5b66\u4e60\u4e0e\u9884\u6d4b API \u76d8\u70b9",permalink:"/notebook/docs/Machine Learning/52 useful machin learning and predict API"},next:{title:"Essential cheat sheets for machine learning and deep learning",permalink:"/notebook/docs/Machine Learning/essential-cheat-sheets-for-machine-learning-and-deep-learning"}},s={},p=[{value:"PHP Artificial Intelligence",id:"php-artificial-intelligence",level:2},{value:"What is Machine Learning?",id:"what-is-machine-learning",level:2},{value:"PHP-ML",id:"php-ml",level:2},{value:"The Problem",id:"the-problem",level:2},{value:"The Solution",id:"the-solution",level:2},{value:"Conclusion",id:"conclusion",level:2}],h={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-analyze-tweet-sentiments-with-php-machine-learning"},"How to Analyze Tweet Sentiments with PHP Machine Learning"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.sitepoint.com/how-to-analyze-tweet-sentiments-with-php-machine-learning"},"https://www.sitepoint.com/how-to-analyze-tweet-sentiments-with-php-machine-learning")),(0,i.kt)("p",null,"July 07, 2017"),(0,i.kt)("p",null,"ML, Python, TensorFlow, Spark, Scala, "),(0,i.kt)("p",null,"take a look at PHP-ML \u2013 a machine learning library for PHP \u2013 and we\u2019ll write a sentiment analysis class that we can later reuse for our own chat or tweet bot."),(0,i.kt)("h2",{id:"php-artificial-intelligence"},"PHP Artificial Intelligence"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/php-ai"},"https://github.com/php-ai")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/php-ai/php-ml"},"https://github.com/php-ai/php-ml"))),(0,i.kt)("h2",{id:"what-is-machine-learning"},"What is Machine Learning?"),(0,i.kt)("p",null,"Machine learning is a subset of Artificial Intelligence that focuses on giving \u201ccomputers the ability to learn without being explicitly programmed\u201d. This is achieved by using generic algorithms that can \u201clearn\u201d from a particular set of data."),(0,i.kt)("p",null,"For example, one common usage of machine learning is classification. Classification algorithms are used to put data into different groups or categories. Some examples of classification applications are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Email spam filters"),(0,i.kt)("li",{parentName:"ul"},"Market segmentation"),(0,i.kt)("li",{parentName:"ul"},"Fraud detection")),(0,i.kt)("p",null,"Machine learning is something of an umbrella term that covers many generic algorithms for different tasks, and there are two main algorithm types classified on how they learn \u2013 supervised learning and unsupervised learning."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Supervised Learning")),(0,i.kt)("p",null,"In supervised learning, we train our algorithm using labelled data in the form of an input object (vector) and a desired output value; the algorithm analyzes the training data and produces what is referred to as an inferred function which we can apply to a new, unlabelled dataset."),(0,i.kt)("p",null,"For the remainder of this post we will focus on supervised learning, just because its easier to see and validate the relationship; keep in mind that both algorithms are equally important and interesting; one could argue that unsupervised is more useful because it precludes the labelled data requirements."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Unsupervised Learning")),(0,i.kt)("p",null,"This type of learning on the other hand works with unlabelled data from the get-go. We don\u2019t know the desired output values of the dataset and we are letting the algorithm draw inferences from datasets; unsupervised learning is especially handy when doing exploratory data analysis to find hidden patterns in the data."),(0,i.kt)("h2",{id:"php-ml"},"PHP-ML"),(0,i.kt)("p",null,"Meet PHP-ML, a library that claims to be a fresh approach to Machine Learning in PHP. The library implements algorithms, neural networks, and tools to do data pre-processing, cross validation, and feature extraction."),(0,i.kt)("p",null,"I\u2019ll be the first to admit PHP is an unusual choice for machine learning, as the language\u2019s strengths are not that well suited for Machine Learning applications. That said, not every machine learning application needs to process petabytes of data and do massive calculations \u2013 for simple applications, we should be able to get away with using PHP and PHP-ML."),(0,i.kt)("p",null,"The best use case that I can see for this library right now is the implementation of a classifier, be it something like a spam filter or even sentiment analysis. We are going to define a classification problem and build a solution step by step to see how we can use PHP-ML in our projects."),(0,i.kt)("h2",{id:"the-problem"},"The Problem"),(0,i.kt)("p",null,"To exemplify the process of implementing PHP-ML and adding some machine learning to our applications, I wanted to find a fun problem to tackle and what better way to showcase a classifier than building a tweet sentiment analysis class."),(0,i.kt)("p",null,"One of the key requirements needed to build successful machine learning projects is a decent starting dataset. Datasets are critical since they will allow us to train our classifier against already classified examples. As there has recently been significant noise in the media around airlines, what better dataset to use than tweets from customers to airlines?"),(0,i.kt)("p",null,"Fortunately, a dataset of tweets is already available to us thanks to Kaggle.io. The Twitter US Airline Sentiment database can be downloaded from their site using this link"),(0,i.kt)("h2",{id:"the-solution"},"The Solution"),(0,i.kt)("p",null,"Let\u2019s begin by taking a look at the dataset we will be working on. The raw dataset has the following columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"tweet_id"),(0,i.kt)("li",{parentName:"ul"},"airline_sentiment"),(0,i.kt)("li",{parentName:"ul"},"airline_sentiment_confidence"),(0,i.kt)("li",{parentName:"ul"},"negativereason"),(0,i.kt)("li",{parentName:"ul"},"negativereason_confidence"),(0,i.kt)("li",{parentName:"ul"},"airline"),(0,i.kt)("li",{parentName:"ul"},"airline_sentiment_gold"),(0,i.kt)("li",{parentName:"ul"},"name"),(0,i.kt)("li",{parentName:"ul"},"negativereason_gold"),(0,i.kt)("li",{parentName:"ul"},"retweet_count"),(0,i.kt)("li",{parentName:"ul"},"text"),(0,i.kt)("li",{parentName:"ul"},"tweet_coord"),(0,i.kt)("li",{parentName:"ul"},"tweet_created"),(0,i.kt)("li",{parentName:"ul"},"tweet_location"),(0,i.kt)("li",{parentName:"ul"},"user_timezone")),(0,i.kt)("p",null,"Where text will become our feature and the airline_sentiment becomes our target. The rest of the columns can be discarded as they will not be used for our exercise. Let\u2019s start by creating the project, and initialize composer using the following file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "amacgregor/phpml-exercise",\n    "description": "Example implementation of a Tweet sentiment analysis with PHP-ML",\n    "type": "project",\n    "require": {\n        "php-ai/php-ml": "^0.4.1"\n    },\n    "license": "Apache License 2.0",\n    "authors": [\n        {\n            "name": "Allan MacGregor",\n            "email": "amacgregor@allanmacgregor.com"\n        }\n    ],\n    "autoload": {\n        "psr-4": {"PhpmlExercise\\\\": "src/"}\n    },\n    "minimum-stability": "dev"\n}\n')),(0,i.kt)("p",null,"reviewDataset.php i"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace PhpmlExercise;\n\nrequire __DIR__ . '/vendor/autoload.php';\n\nuse Phpml\\Dataset\\CsvDataset;\n\n$dataset = new CsvDataset('datasets/raw/Tweets.csv',1);\n\nforeach ($dataset->getSamples() as $sample) {\n    print_r($sample);\n}\n")),(0,i.kt)("p",null,"Now, run the script with ",(0,i.kt)("em",{parentName:"p"},"php reviewDataset.php"),", and let\u2019s review the output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"    public function __construct(string $filepath, int $features, bool $headingRow = true)\n    {\n        if (!file_exists($filepath)) {\n            throw FileException::missingFile(basename($filepath));\n        }\n\n        if (false === $handle = fopen($filepath, 'rb')) {\n            throw FileException::cantOpenFile(basename($filepath));\n        }\n\n        if ($headingRow) {\n            $data = fgetcsv($handle, 1000, ',');\n            $this->columnNames = array_slice($data, 0, $features);\n        } else {\n            $this->columnNames = range(0, $features - 1);\n        }\n\n        while (($data = fgetcsv($handle, 1000, ',')) !== false) {\n            $this->samples[] = array_slice($data, 0, $features);\n            $this->targets[] = $data[$features];\n        }\n        fclose($handle);\n    }\n")),(0,i.kt)("p",null,"We will need to generate a clean dataset with only the columns we need to continue working. Let\u2019s call this script generateCleanDataset.php :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace PhpmlExercise;\n\nrequire __DIR__ . '/vendor/autoload.php';\n\nuse Phpml\\Exception\\FileException;\n\n$sourceFilepath         = __DIR__ . '/datasets/raw/Tweets.csv';\n$destinationFilepath    = __DIR__ . '/datasets/clean_tweets.csv';\n\n$rows =[];\n\n$rows = getRows($sourceFilepath, $rows);\nwriteRows($destinationFilepath, $rows);\n\n\n/**\n * @param $filepath\n * @param $rows\n * @return array\n */\nfunction getRows($filepath, $rows)\n{\n    $handle = checkFilePermissions($filepath);\n\n    while (($data = fgetcsv($handle, 1000, ',')) !== false) {\n        $rows[] = [$data[10], $data[1]];\n    }\n    fclose($handle);\n    return $rows;\n}\n\n/**\n * @param $filepath\n * @param string $mode\n * @return bool|resource\n * @throws FileException\n */\nfunction checkFilePermissions($filepath, $mode = 'rb')\n{\n    if (!file_exists($filepath)) {\n        throw FileException::missingFile(basename($filepath));\n    }\n\n    if (false === $handle = fopen($filepath, $mode)) {\n        throw FileException::cantOpenFile(basename($filepath));\n    }\n    return $handle;\n}\n\n/**\n * @param $filepath\n * @param $rows\n * @internal param $list\n */\nfunction writeRows($filepath, $rows)\n{\n    $handle = checkFilePermissions($filepath, 'wb');\n\n    foreach ($rows as $row) {\n        fputcsv($handle, $row);\n    }\n\n    fclose($handle);\n}\n\n")),(0,i.kt)("p",null,"Nothing too complex, just enough to do the job. Let\u2019s execute it with phpgenerateCleanDataset.php."),(0,i.kt)("p",null,"Now, let\u2019s go ahead and point our reviewDataset.php script back to the clean dataset:"),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"This article fell a bit on the long side, so let\u2019s do a recap of what we\u2019ve learned so far:"),(0,i.kt)("p",null,"Having a good dataset from the start is critical for implementing machine learning algorithms.\nThe difference between supervised learning and unsupervised Learning.\nThe meaning and use of cross-validation in machine learning.\nThat vectorization and transformation are essential to prepare text datasets for machine learning.\nHow to implement a Twitter sentiment analysis by using PHP-ML\u2019s NaiveBayes classifier.\nThis post also served as an introduction to the PHP-ML library and hopefully gave you a good idea of what the library can do and how it can be embedded in your own projects."),(0,i.kt)("p",null,"Finally, this post is by no means comprehensive and there is plenty to learn, improve and experiment with; here are some ideas to get you started on how to improve things further:"),(0,i.kt)("p",null,"Replace the NaiveBayes algorithm with the Support Vector Classification algorithm.\nIf you tried running against the full dataset (14,000 rows) you\u2019d probably notice how memory intensive the process can be. Try implementing model persistence so it doesn\u2019t have to be trained on each run.\nMove the dataset generation to its own helper class.\nI hope you found this article useful. If you have some application ideas regarding PHP-ML or any questions, don\u2019t hesitate to drop them below into the comments area!"))}c.isMDXComponent=!0}}]);