ElasticSearchIndexingCommand php
================================

```php
<?php

namespace Event\Bundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

use Event\Bundle\Entity\Comment;
use Video\Bundle\Entity\Video;
use Video\Bundle\Entity\VideoNote;

class ElasticSearchIndexingCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('elasticSearch:indexing')
            ->setDescription('Indexing the videos in elasticSearch')
            ->addArgument(
                 'lang',
                 InputArgument::OPTIONAL,
                 'Which langage (fr or en) do you want to indexing ?'
             )
            // ->addOption(
            //     'yell',
            //     null,
            //     InputOption::VALUE_NONE,
            //     'If set, the task will yell in uppercase letters'
            // )
            // crontab
            // 30 23 * * * /usr/bin/php /var/www/medflixs2016.universalmedica.com/app/console elasticSearch:indexing en --no-reset -v >> /var/log/syslog

        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
		$begin = new \DateTime();
        $output->writeln('<comment>Begin : ' . $begin->format('d-m-Y G:i:s') . ' ---</comment>');

        $lang = $input->getArgument('lang'); // fr or en

        $client = \Elasticsearch\ClientBuilder::create()->build();

        // get doctrine manager
        $em = $this->getContainer()->get('doctrine')->getManager();

        // Turning off doctrine default logs queries for saving memory
        $em->getConnection()->getConfiguration()->setSQLLogger(null);
            
    	// get videos zero number notes
    	$all_videos = $em->getRepository('VideoBundle:Video')->findAll(); //findBy(array("id"=>2278));  // $em->getRepository('VideoBundle:Video')->findBy(array('nbNotes' => 0));

        // each video find the total number of notes
        foreach($all_videos as $video)
        {
			$output->writeln(sprintf('Traitement video <comment>%s</comment>', $video->getId()."-".$video->getTitle())); 

            $video->setTranslatableLocale($lang);
            $em->refresh($video);

            $params['body'][] = [
                'index' => [
                    '_index' => 'medflixs_'.$lang,
                    '_type' => 'video',
                    '_id' => $video->getId()
                ]
            ];

            // event
            $event = $video->getEvent();
            $event->setTranslatableLocale($lang);
            $em->refresh($event);

            // country
            $country = $event->getCountry(); 
            $country->setTranslatableLocale($lang);
            $em->refresh($country); 

            // cibles
            $cibles = $event->getCible();
            $tab_cibles = array();
            foreach ($cibles as $key => $value) {
                $value->setTranslatableLocale($lang);
                $em->refresh($value);                
                $tab_cibles[] = $value->getTitle();
            }
            
            // specialites
            $specialites = $event->getSpecialite();
            $tab_specialites = array();
            foreach ($specialites as $key => $value) {
                $value->setTranslatableLocale($lang);
                $em->refresh($value);                  
                $tab_specialites = $value->getTitle();
            }
            // video tags
            $video_tags = explode(",", $video->getTags());

            // event tags 
            $event_tags = explode(",", $event->getTags());   

            // bulk         
            $params['body'][] = [
                'id' => $video->getId(),
                'title' => $video->getTitle(),
                'tags' => (array)$video_tags,
                'slug' => $video->getSlug(),
                'img' => $video->getImg(),
                'mp4' => $video->getMP4(),
                'content' => strip_tags($video->getContent()),
                'speaker' => $video->getSpeaker(),
                'nbDownload' => $video->getNbDownload(),
                'nbComments' => $video->getNbComments(),
                'nbNotes' => $video->getNbNotes(),
                'date' => $video->getDateEvent()->format("Y-m-d"),
                'event' => [ 
                    'id' => $event->getId(),                 
                    'title' => $event->getTitle(),
                    'slug' => $event->getSlug(),
                    'img' => $event->getImg(),  
                    'imgMedium' => $event->getImgMedium(),                   
                    'address' => $event->getAddress(),
                    'zip' => $event->getZip(),
                    'city' => $event->getCity(),
                    'country' => $country->getTitle(),
                    'content' => strip_tags($event->getContent()),
                    'date_begin' => $event->getDateEvent()->format("Y-m-d"),
                    'date_end' => $event->getDateEventFin()->format("Y-m-d"),
                    'tags' => (array)$event_tags,
                    'url' => $event->getUrl(),
                    'email' => $event->getEmail(),
                    'phone' => $event->getPhone(),
                 ],
                 'cibles' => (array)$tab_cibles,
                 'specialites' => (array)$tab_specialites                                 
            ];

        }

        $response = $client->bulk($params);

        $output->writeln($response);

		$end = new \DateTime();
        $output->writeln('<comment>End : ' . $end->format('d-m-Y G:i:s') . ' ---</comment>');
    }    
}
```