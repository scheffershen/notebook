"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[34729],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),u=r,g=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return t?a.createElement(g,i(i({ref:n},d),{},{components:t})):a.createElement(g,i({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},68149:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={},i="ElasticSearchIndexingCommand php",s={unversionedId:"ElasticSearch/PHP codes/ElasticSearchIndexingCommand-php",id:"ElasticSearch/PHP codes/ElasticSearchIndexingCommand-php",title:"ElasticSearchIndexingCommand php",description:"",source:"@site/docs/ElasticSearch/PHP codes/ElasticSearchIndexingCommand-php.md",sourceDirName:"ElasticSearch/PHP codes",slug:"/ElasticSearch/PHP codes/ElasticSearchIndexingCommand-php",permalink:"/notebook/docs/ElasticSearch/PHP codes/ElasticSearchIndexingCommand-php",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/ElasticSearch/PHP codes/ElasticSearchIndexingCommand-php.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"introduction-to-elasticsearch-in-php",permalink:"/notebook/docs/ElasticSearch/Installation/introduction-to-elasticsearch-in-php"},next:{title:"PluralSight Administering An Elasticsearch Cluster",permalink:"/notebook/docs/ElasticSearch/PluralSight Administering An Elasticsearch Cluster"}},l={},c=[],d={toc:c};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"elasticsearchindexingcommand-php"},"ElasticSearchIndexingCommand php"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace Event\\Bundle\\Command;\n\nuse Symfony\\Bundle\\FrameworkBundle\\Command\\ContainerAwareCommand;\nuse Symfony\\Component\\Console\\Input\\InputArgument;\nuse Symfony\\Component\\Console\\Input\\InputInterface;\nuse Symfony\\Component\\Console\\Input\\InputOption;\nuse Symfony\\Component\\Console\\Output\\OutputInterface;\n\nuse Event\\Bundle\\Entity\\Comment;\nuse Video\\Bundle\\Entity\\Video;\nuse Video\\Bundle\\Entity\\VideoNote;\n\nclass ElasticSearchIndexingCommand extends ContainerAwareCommand\n{\n    protected function configure()\n    {\n        $this\n            ->setName('elasticSearch:indexing')\n            ->setDescription('Indexing the videos in elasticSearch')\n            ->addArgument(\n                 'lang',\n                 InputArgument::OPTIONAL,\n                 'Which langage (fr or en) do you want to indexing ?'\n             )\n            // ->addOption(\n            //     'yell',\n            //     null,\n            //     InputOption::VALUE_NONE,\n            //     'If set, the task will yell in uppercase letters'\n            // )\n            // crontab\n            // 30 23 * * * /usr/bin/php /var/www/medflixs2016.universalmedica.com/app/console elasticSearch:indexing en --no-reset -v >> /var/log/syslog\n\n        ;\n    }\n\n    protected function execute(InputInterface $input, OutputInterface $output)\n    {\n        $begin = new \\DateTime();\n        $output->writeln('<comment>Begin : ' . $begin->format('d-m-Y G:i:s') . ' ---</comment>');\n\n        $lang = $input->getArgument('lang'); // fr or en\n\n        $client = \\Elasticsearch\\ClientBuilder::create()->build();\n\n        // get doctrine manager\n        $em = $this->getContainer()->get('doctrine')->getManager();\n\n        // Turning off doctrine default logs queries for saving memory\n        $em->getConnection()->getConfiguration()->setSQLLogger(null);\n            \n        // get videos zero number notes\n        $all_videos = $em->getRepository('VideoBundle:Video')->findAll(); //findBy(array(\"id\"=>2278));  // $em->getRepository('VideoBundle:Video')->findBy(array('nbNotes' => 0));\n\n        // each video find the total number of notes\n        foreach($all_videos as $video)\n        {\n            $output->writeln(sprintf('Traitement video <comment>%s</comment>', $video->getId().\"-\".$video->getTitle())); \n\n            $video->setTranslatableLocale($lang);\n            $em->refresh($video);\n\n            $params['body'][] = [\n                'index' => [\n                    '_index' => 'medflixs_'.$lang,\n                    '_type' => 'video',\n                    '_id' => $video->getId()\n                ]\n            ];\n\n            // event\n            $event = $video->getEvent();\n            $event->setTranslatableLocale($lang);\n            $em->refresh($event);\n\n            // country\n            $country = $event->getCountry(); \n            $country->setTranslatableLocale($lang);\n            $em->refresh($country); \n\n            // cibles\n            $cibles = $event->getCible();\n            $tab_cibles = array();\n            foreach ($cibles as $key => $value) {\n                $value->setTranslatableLocale($lang);\n                $em->refresh($value);                \n                $tab_cibles[] = $value->getTitle();\n            }\n            \n            // specialites\n            $specialites = $event->getSpecialite();\n            $tab_specialites = array();\n            foreach ($specialites as $key => $value) {\n                $value->setTranslatableLocale($lang);\n                $em->refresh($value);                  \n                $tab_specialites = $value->getTitle();\n            }\n            // video tags\n            $video_tags = explode(\",\", $video->getTags());\n\n            // event tags \n            $event_tags = explode(\",\", $event->getTags());   \n\n            // bulk         \n            $params['body'][] = [\n                'id' => $video->getId(),\n                'title' => $video->getTitle(),\n                'tags' => (array)$video_tags,\n                'slug' => $video->getSlug(),\n                'img' => $video->getImg(),\n                'mp4' => $video->getMP4(),\n                'content' => strip_tags($video->getContent()),\n                'speaker' => $video->getSpeaker(),\n                'nbDownload' => $video->getNbDownload(),\n                'nbComments' => $video->getNbComments(),\n                'nbNotes' => $video->getNbNotes(),\n                'date' => $video->getDateEvent()->format(\"Y-m-d\"),\n                'event' => [ \n                    'id' => $event->getId(),                 \n                    'title' => $event->getTitle(),\n                    'slug' => $event->getSlug(),\n                    'img' => $event->getImg(),  \n                    'imgMedium' => $event->getImgMedium(),                   \n                    'address' => $event->getAddress(),\n                    'zip' => $event->getZip(),\n                    'city' => $event->getCity(),\n                    'country' => $country->getTitle(),\n                    'content' => strip_tags($event->getContent()),\n                    'date_begin' => $event->getDateEvent()->format(\"Y-m-d\"),\n                    'date_end' => $event->getDateEventFin()->format(\"Y-m-d\"),\n                    'tags' => (array)$event_tags,\n                    'url' => $event->getUrl(),\n                    'email' => $event->getEmail(),\n                    'phone' => $event->getPhone(),\n                 ],\n                 'cibles' => (array)$tab_cibles,\n                 'specialites' => (array)$tab_specialites                                 \n            ];\n\n        }\n\n        $response = $client->bulk($params);\n\n        $output->writeln($response);\n\n        $end = new \\DateTime();\n        $output->writeln('<comment>End : ' . $end->format('d-m-Y G:i:s') . ' ---</comment>');\n    }    \n}\n")))}p.isMDXComponent=!0}}]);