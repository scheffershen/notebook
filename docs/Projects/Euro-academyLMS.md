Euro-academy lms
===

environement technique

- sf4
- php7.2

- composer.json
    + FOSUser
- Events
    + LoginListener implements EventSubscriberInterface
        * getSubscribedEvents
            - FOSUserEvents::SECURITY_IMPLICIT_LOGIN => 'onLogin',
            - SecurityEvents::INTERACTIVE_LOGIN => 'onLogin', 
    + ResettingListener implements EventSubscriberInterface
        * getSubscribedEvents()
            - FOSUserEvents::RESETTING_RESET_INITIALIZE => 'onResettingResetInitialize',
            - FOSUserEvents::RESETTING_RESET_SUCCESS => 'onResettingResetSuccess',
            - FOSUserEvents::RESETTING_RESET_REQUEST => 'onResettingResetRequest',
    + RegistrationUserEvent