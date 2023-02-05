installation
============

	$ composer require scheb/2fa-bundle

## config/routes

config/routes/scheb_2f2.yaml

```
2fa_login:
    path: /2fa
    defaults:
        _controller: "scheb_two_factor.form_controller:form"

2fa_login_check:
    path: /2fa_check
```

## config/packages

config/packages/scheb_2f2.yaml

```
# config/packages/scheb_2fa.yaml
# See the configuration reference at https://github.com/scheb/2fa/blob/master/doc/configuration.md
scheb_two_factor:
    email:
        enabled: true                  # If email authentication should be enabled, default false
        sender_email: me@example.com   # Sender email address
        sender_name: John Doe          # Sender name
        digits: 4                      # Number of digits in authentication code
        template: UserManagement/security/2fa.html.twig   # Template used to render the authentication form
        mailer: App\Mailer\MyAuthCodeMailer
```

config/packages/security.yaml

```
security:
	...
	firewalls:
		...
		main:
			...
            two_factor:
                auth_form_path: 2fa_login    # The route name you have used in the routes.yaml
                check_path: 2fa_login_check  # The route name you have used in the routes.yaml
                auth_code_parameter_name: _auth_code
                trusted_parameter_name: _trusted
                multi_factor: true
                provider: app_user_provider
                prepare_on_login: true
                prepare_on_access_denied: true
                enable_csrf: true
    ...
    access_control:   
        ...
        - { path: ^/2fa, roles: IS_AUTHENTICATED_2FA_IN_PROGRESS }                
```

##  src/Mailer/MyAuthCodeMailer

```php
<?php

namespace App\Mailer;

use App\Entity\UserManagement\User;
use App\Mailer\Mailer;
use App\Message\UserManagement\SendResetPasswordLink;
use Scheb\TwoFactorBundle\Model\Email\TwoFactorInterface;
use Scheb\TwoFactorBundle\Mailer\AuthCodeMailerInterface;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use Twig\Environment;

class MyAuthCodeMailer implements AuthCodeMailerInterface
{
    public function __construct(Environment $twig, Mailer $mailer, TranslatorInterface $translator, UrlGeneratorInterface $router, ParameterBagInterface $parameter)
    {
        $this->mailer = $mailer;
        $this->translator = $translator;
        $this->router = $router;
        $this->twig = $twig;
        $this->parameter = $parameter;
    }

    public function sendAuthCode(TwoFactorInterface $user): void
    {
        // Send email
        $this->mailer->sendMail($this->getSender(), $user->getEmail(), $this->getSubject(), $this->getBody($user));
    }

    private function getSender(): array
    {
        return [$this->parameter->get('admin_email')];
    }

    private function getSubject(): string
    {
        return $this->translator->trans('auth.code.mail');
    }

    private function getBody(User $user): ?string
    {
    	$authCode = $user->getEmailAuthCode();
    	
        return $this->twig->render('UserManagement/emails/auth_code.txt.twig', [
                  'authCode' => $authCode,
                ]);
    }    
}
```

## templates

templates/UserManagement/Security/2fa.html.twig


```html
{% extends "base.html.twig" %}

{% block body %}

    <div class="row justify-content-center mt-4 mb-5">
        <div class="col-md-6">
            <div class="card">

                {# Authentication errors #}
                {% if authenticationError %}
                    <p>{{ authenticationError|trans(authenticationErrorData, 'SchebTwoFactorBundle') }}</p>
                {% endif %}


                {# Display current two-factor provider #}
                <p class="label"><label for="_auth_code">{{ "auth_code"|trans({}, 'SchebTwoFactorBundle') }} {{ twoFactorProvider }}:</label></p>

                <form class="form" action="{{ checkPathUrl ? checkPathUrl: path(checkPathRoute) }}" method="post">
                    <p class="widget">
                        <input
                            id="_auth_code"
                            type="text"
                            name="{{ authCodeParameterName }}"
                            autocomplete="one-time-code"
                            autofocus
                        />
                    </p>

                    {% if displayTrustedOption %}
                        <p class="widget"><label for="_trusted"><input id="_trusted" type="checkbox" name="{{ trustedParameterName }}" /> {{ "trusted"|trans({}, 'SchebTwoFactorBundle') }}</label></p>
                    {% endif %}
                    
                    {% if isCsrfProtectionEnabled %}
                        <input type="hidden" name="{{ csrfParameterName }}" value="{{ csrf_token(csrfTokenId) }}">
                    {% endif %}
                    <p class="submit"><input type="submit" value="{{ "login"|trans({}, 'SchebTwoFactorBundle') }}" /></p>
                </form>

            </div>
        </div>
    </div>
{% endblock %}
```

templates/UserManagement/eamils/auth_code.txt.twig

```html
{% extends 'mail_base.html.twig' %}

{% block body %}

<table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;">

  <!-- START MAIN CONTENT AREA -->
  <tr>
    <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;">
      <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
        <tr>
          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
            <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">
            	{{ authCode }}
			       </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>

<!-- END MAIN CONTENT AREA -->
</table>

{% endblock %}
```