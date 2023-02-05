<?php

/*
 * This file is part of the Claroline Connect package.
 *
 * (c) Claroline Consortium <consortium@claroline.net>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Claroline\CoreBundle\Manager;

use Claroline\AppBundle\Persistence\ObjectManager;
use Claroline\CoreBundle\Entity\File\PublicFile;
use Claroline\CoreBundle\Entity\Import\File as HistoryFile;
use FOS\RestBundle\View\View;
use JMS\DiExtraBundle\Annotation as DI;

/**
 * @DI\Service("claroline.manager.api_manager")
 * This service allows 2 instances of claroline-connect to communicate through their REST api.
 * The REST api requires an oauth authentication (wich is why the $id/$secret combination is required)
 */
class ApiManager
{
    /**
     * @DI\InjectParams({
     *     "om"           = @DI\Inject("claroline.persistence.object_manager"),
     *     "oauthManager" = @DI\Inject("claroline.manager.oauth_manager"),
     *     "curlManager"  = @DI\Inject("claroline.manager.curl_manager"),
     *     "viewHandler"  = @DI\Inject("fos_rest.view_handler"),
     *     "container"    = @DI\Inject("service_container"),
     *     "transfer"     = @DI\Inject("claroline.api.transfer"),
     *     "finder"       =  @DI\Inject("claroline.api.finder"),
     *     "serializer"   =  @DI\Inject("claroline.api.serializer"),
     *     "fileUt"       = @DI\Inject("claroline.utilities.file"),
     *     "crud"         = @DI\Inject("claroline.api.crud"),
     * })
     */
    public function __construct(
        ObjectManager $om,
        OauthManager $oauthManager,
        CurlManager $curlManager,
        $viewHandler,
        $container,
        $transfer,
        $finder,
        $serializer,
        $fileUt,
        $crud
    ) {
        $this->om = $om;
        $this->oauthManager = $oauthManager;
        $this->curlManager = $curlManager;
        $this->viewHandler = $viewHandler;
        $this->container = $container;
        $this->transfer = $transfer;
        $this->finder = $finder;
        $this->serializer = $serializer;
        $this->fileUt = $fileUt;
        $this->crud = $crud;
    }

    public function import(PublicFile $publicFile, $action, $log)
    {
        $historyFile = $this->finder->fetch(
            HistoryFile::class,
            ['file' => $publicFile->getId()]
        )[0];

        $this->crud->replace($historyFile, 'log', $log);
        $this->crud->replace($historyFile, 'executionDate', new \DateTime());
        //this is here otherwise the entity manager can crash and... well that's an issue.
        $this->crud->replace($historyFile, 'status', HistoryFile::STATUS_ERROR);

        $content = $this->fileUt->getContents($publicFile);

        $data = $this->transfer->execute(
          $content,
          $action,
          $publicFile->getMimeType(),
          $log
      );

        //should probably reset entity manager here
        if (0 === count($data['data']['error'])) {
            $this->crud->replace($historyFile, 'status', HistoryFile::STATUS_SUCCESS);
        }
    }
}
