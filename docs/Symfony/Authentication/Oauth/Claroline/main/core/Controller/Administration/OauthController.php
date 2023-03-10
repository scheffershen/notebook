<?php

/*
 * This file is part of the Claroline Connect package.
 *
 * (c) Claroline Consortium <consortium@claroline.net>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Claroline\CoreBundle\Controller\Administration;

use Claroline\CoreBundle\Entity\Oauth\Client;
use Claroline\CoreBundle\Entity\Oauth\FriendRequest;
use Claroline\CoreBundle\Entity\Oauth\PendingFriend;
use Claroline\CoreBundle\Form\Administration\FriendAuthenticationType;
use Claroline\CoreBundle\Form\Administration\OauthClientType;
use Claroline\CoreBundle\Form\Administration\RequestFriendType;
use Claroline\CoreBundle\Manager\Exception\FriendRequestException;
use Claroline\CoreBundle\Manager\OauthManager;
use JMS\DiExtraBundle\Annotation as DI;
use JMS\SecurityExtraBundle\Annotation as SEC;
use Monolog\Handler\StreamHandler;
use Monolog\Logger;
use Sensio\Bundle\FrameworkExtraBundle\Configuration as EXT;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Form\FormError;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Translation\TranslatorInterface;

/**
 * @DI\Tag("security.secure_service")
 */
class OauthController extends Controller
{
    private $oauthManager;
    private $request;
    private $translator;

    /**
     * @DI\InjectParams({
     *     "oauthManager" = @DI\Inject("claroline.manager.oauth_manager"),
     *     "request"      = @DI\Inject("request_stack"),
     *     "translator"   = @DI\Inject("translator")
     * })
     */
    public function __construct(
        OauthManager $oauthManager,
        RequestStack $request,
        TranslatorInterface $translator
    ) {
        $this->oauthManager = $oauthManager;
        $this->request = $request->getMasterRequest();
        $this->translator = $translator;
    }

    /**
     * @EXT\Route(
     *     "/",
     *     name="claro_admin_oauth_claroline",
     *     options = {"expose"=true}
     * )
     * @EXT\Template("ClarolineCoreBundle:administration:oauth\list.html.twig")
     * @SEC\PreAuthorize("canOpenAdminTool('main_settings')")
     *
     * @return Response
     */
    public function listAction()
    {
        $clients = $this->oauthManager->findVisibleClients();
        $friendRequests = $this->oauthManager->findAllFriendRequests();
        $pendingFriends = $this->oauthManager->findAllPendingFriends();

        return [
            'clients' => $clients,
            'friendRequests' => $friendRequests,
            'pendingFriends' => $pendingFriends,
        ];
    }

    /**
     * @EXT\Route(
     *     "/clients",
     *     name="claro_admin_oauth_clients",
     *     options = {"expose"=true}
     * )
     * @EXT\Template("ClarolineCoreBundle:administration:oauth\clients.html.twig")
     * @SEC\PreAuthorize("canOpenAdminTool('main_settings')")
     *
     * @return Response
     */
    public function clientsAction()
    {
        $clients = $this->oauthManager->findVisibleClients();

        return [
            'clients' => $clients,
        ];
    }

    /**
     * @EXT\Route(
     *     "/form",
     *     name="claro_admin_oauth_client_form",
     *     options = {"expose"=true}
     * )
     * @EXT\Template("ClarolineCoreBundle:administration:oauth\modal_create_form.html.twig")
     * @SEC\PreAuthorize("canOpenAdminTool('main_settings')")
     *
     * @return Response
     */
    public function modalCreateFormAction()
    {
        $form = $this->get('form.factory')->create(OauthClientType::class);

        return ['form' => $form->createView()];
    }

    /**
     * @EXT\Route(
     *     "/form/edit/{client}",
     *     name="claro_admin_oauth_form_edit",
     *     options = {"expose"=true}
     * )
     * @EXT\Template("ClarolineCoreBundle:administration:oauth\modal_edit_form.html.twig")
     * @SEC\PreAuthorize("canOpenAdminTool('main_settings')")
     *
     * @return Response
     */
    public function modalEditFormAction(Client $client)
    {
        $form = $this->get('form.factory')->create(OauthClientType::class, $client);

        return ['form' => $form->createView(), 'client' => $client];
    }

    /**
     * @EXT\Route(
     *     "/form/create",
     *     name="claro_admin_oauth_client_create",
     *     options = {"expose"=true}
     * )
     * @EXT\Template("ClarolineCoreBundle:administration:oauth\modal_create_form.html.twig")
     * @SEC\PreAuthorize("canOpenAdminTool('main_settings')")
     *
     * @return Response
     */
    public function createClientAction()
    {
        $form = $this->get('form.factory')->create(OauthClientType::class);
        $form->handleRequest($this->request);

        if ($form->isValid()) {
            $grantTypes = $form->get('allowed_grant_types')->getData();
            $client = $this->oauthManager->createClient();
            if ($uri = $form->get('uri')->getData()) {
                $client->setRedirectUris([$uri]);
            }
            $client->setAllowedGrantTypes($grantTypes);
            $client->setName($form->get('name')->getData());
            $this->oauthManager->updateClient($client);

            return new JsonResponse([
                'id' => $client->getId(),
                'name' => $form->get('name')->getData(),
                'uri' => $form->get('uri')->getData(),
                'grant_type' => $grantTypes,
            ]);
        }

        return ['form' => $form->createView()];
    }

    /**
     * @EXT\Route(
     *     "/form/edit/{client}/submit",
     *     name="claro_admin_oauth_client_edit",
     *     options = {"expose"=true}
     * )
     * @EXT\Template("ClarolineCoreBundle:administration:oauth\modal_edit_form.html.twig")
     * @SEC\PreAuthorize("canOpenAdminTool('main_settings')")
     *
     * @return Response
     */
    public function editClientAction(Client $client)
    {
        $form = $this->get('form.factory')->create(OauthClientType::class, $client);
        $form->handleRequest($this->request);

        if ($form->isValid()) {
            $grantTypes = $form->get('allowed_grant_types')->getData();
            if ($uri = $form->get('uri')->getData()) {
                $client->setRedirectUris([$uri]);
            }
            $client->setAllowedGrantTypes($grantTypes);
            $client->setName($form->get('name')->getData());
            $this->oauthManager->updateClient($client);

            return new JsonResponse([
                'id' => $client->getId(),
                'name' => $form->get('name')->getData(),
                'uri' => $form->get('uri')->getData(),
                'grant_type' => $grantTypes,
            ]);
        }

        return ['form' => $form->createView(), 'client' => $client];
    }

    /**
     * @EXT\Route(
     *     "/delete/client/{client}",
     *     name="oauth_client_remove",
     *     options = {"expose"=true}
     * )
     * @SEC\PreAuthorize("canOpenAdminTool('main_settings')")
     *
     * @return Response
     */
    public function deleteClientAction(Client $client)
    {
        $oldid = $client->getId();
        $this->oauthManager->deleteClient($client);

        return new JsonResponse(['id' => $oldid]);
    }

    /**
     * @EXT\Route(
     *     "/request/friend/form",
     *     name="oauth_request_friend_form",
     *     options = {"expose"=true}
     * )
     *
     * @EXT\Template("ClarolineCoreBundle:administration:oauth\request_friend_form.html.twig")
     * @SEC\PreAuthorize("canOpenAdminTool('main_settings')")
     *
     * @return Response
     */
    public function requestFriendFormAction()
    {
        $form = $this->get('form.factory')->create(RequestFriendType::class);

        return ['form' => $form->createView()];
    }

    /**
     * @EXT\Route(
     *     "/request/friend/submit",
     *     name="oauth_request_friend_submit",
     *     options = {"expose"=true}
     * )
     * @EXT\Template("ClarolineCoreBundle:administration:oauth\request_friend_form.html.twig")
     * @SEC\PreAuthorize("canOpenAdminTool('main_settings')")
     *
     * @return Response
     */
    public function requestFriendSubmitAction()
    {
        $form = $this->get('form.factory')->create(RequestFriendType::class, new FriendRequest());
        $form->handleRequest($this->request);

        if ($form->isValid()) {
            $request = $form->getData();
            $host = $this->request->getSchemeAndHttpHost().
                $this->container->get('router')->getContext()->getBaseUrl();
            try {
                $data = $this->oauthManager->createFriendRequest($request, $host);
            } catch (FriendRequestException $e) {
                $url = $e->getUrl();
                $form->addError(new FormError($this->translator->trans(
                    'invalid_host',
                    ['%url%' => $url],
                    'platform')
                ));

                return ['form' => $form->createView()];
            }

            return new JsonResponse([
                'id' => $request->getId(),
                'name' => $request->getName(),
                'host' => $request->getHost(),
                'success' => is_array($data),
                'data' => $data,
            ]);
        }

        return ['form' => $form->createView()];
    }

    /**
     * @EXT\Route(
     *     "/request/friend/remove/{friend}",
     *     name="oauth_request_friend_remove",
     *     options = {"expose"=true}
     * )
     * @SEC\PreAuthorize("canOpenAdminTool('main_settings')")
     *
     * @return Response
     */
    public function removeFriendRequest(FriendRequest $friend)
    {
        $oldid = $friend->getId();
        $this->oauthManager->removeFriendRequest($friend);

        return new JsonResponse(['id' => $oldid]);
    }

    /**
     * @EXT\Route(
     *     "/request/pending/remove/{friend}",
     *     name="oauth_pending_friend_remove",
     *     options = {"expose"=true}
     * )
     * @SEC\PreAuthorize("canOpenAdminTool('main_settings')")
     *
     * @return Response
     */
    public function removePendingFriend(PendingFriend $friend)
    {
        $oldid = $friend->getId();
        $this->oauthManager->removePendingFriend($friend);

        return new JsonResponse(['id' => $oldid]);
    }

    /**
     * @EXT\Route(
     *     "/request/friend/name/{name}",
     *     name="oauth_request_friend_new",
     *     options = {"expose"=true}
     * )
     *
     * @return Response
     */
    public function newFriendRequestAction($name)
    {
        $logFile = $this->container->getParameter('claroline.param.claroline_log');
        $host = $this->request->query->get('host');
        //uncomment this for debugging puroposes...

        if ('dev' === $this->container->get('kernel')->getEnvironment()) {
            $fileLogger = new Logger('claroline.debug.log');
            $fileLogger->pushHandler(new StreamHandler($logFile));
            $fileLogger->addInfo(var_export($this->oauthManager->isAutoCreated($host), true));
        }

        $this->oauthManager->addPendingFriendRequest(
            $name,
            $host,
            $this->oauthManager->isAutoCreated($host)
        );

        return new JsonResponse(['name' => $name, 'host' => $host]);
    }

    /**
     * @EXT\Route(
     *     "/friends/accept/{friend}",
     *     name="oauth_friends_accept",
     *     options = {"expose"=true}
     * )
     * @SEC\PreAuthorize("canOpenAdminTool('main_settings')")
     *
     * @return Response
     */
    public function acceptFriendAction(PendingFriend $friend)
    {
        $client = $this->oauthManager->acceptFriendAction($friend);

        return new JsonResponse(['id' => $client->getId()]);
    }

    /**
     * @EXT\Route(
     *     "/id/{id}/secret/{secret}/name/{name}",
     *     name="oauth_receive_data",
     *     options = {"expose"=true}
     * )
     *
     * @return Response
     */
    public function receiveOauthDataAction($id, $secret, $name)
    {
        $friendRequest = $this->oauthManager->findFriendRequestByName($name);
        $this->oauthManager->connect($friendRequest->getHost(), $id, $secret, $friendRequest);

        return new JsonResponse('done');
    }

    /**
     * @EXT\Route(
     *     "/hide/client/{client}",
     *     name="oauth_client_hide",
     *     options = {"expose"=true}
     * )
     *
     * @return Response
     */
    public function hideClientAction(Client $client)
    {
        $this->oauthManager->hideClient($client);

        return new JsonResponse('done');
    }

    /**
     * @EXT\Route(
     *     "/request/authentication/form/{friend}",
     *     name="oauth_request_authentication_form",
     *     options = {"expose"=true}
     * )
     *
     * @EXT\Template("ClarolineCoreBundle:administration/oauth:friend_authentication_form.html.twig")
     * @SEC\PreAuthorize("canOpenAdminTool('main_settings')")
     *
     * @return Response
     */
    public function friendAuthenticationFormAction(FriendRequest $friend)
    {
        $form = $this->get('form.factory')->create(FriendAuthenticationType::class, $friend);

        return ['form' => $form->createView(), 'friend' => $friend];
    }

    /**
     * @EXT\Route(
     *     "/request/authentication/submit/{friend}",
     *     name="oauth_request_authentication_submit",
     *     options = {"expose"=true}
     * )
     *
     * @EXT\Template("ClarolineCoreBundle:administration:oauth\friend_authentication_form.html.twig")
     * @SEC\PreAuthorize("canOpenAdminTool('main_settings')")
     *
     * @return Response
     */
    public function friendAuthenticationSubmitAction(FriendRequest $friend)
    {
        $form = $this->get('form.factory')->create(FriendAuthenticationType::class, $friend);
        $form->handleRequest($this->request);

        if ($form->isValid()) {
            $request = $form->getData();
            $this->oauthManager->updateFriend($request);

            return new JsonResponse('done');
        }

        return ['form' => $form->createView(), 'friend' => $friend];
    }
}
