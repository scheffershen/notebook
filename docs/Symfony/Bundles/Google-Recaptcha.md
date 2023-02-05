google/recaptcha
================

*utile pour le spam*

## composer.json

    $ composer require google/recaptcha
        > "google/recaptcha": "^1.1",

## .env

```
RECAPTCHA_KEY=6Ley_k0UAAAAALX1xyCuNLx0-KgH_u8Gt1RSJDo8
RECAPTCHA_SECRET=6Ley_k0UAAAAAJ-_BKipd-j-YI_H_Dm-qU_9Y9Re
```

## config/services.yaml

```yaml
parameters:
    locale: 'en'
    app.email_noreply: noreply@noreply.com
    app.recaptcha_key: '%env(RECAPTCHA_KEY)%'
    app.recaptcha_secret: '%env(RECAPTCHA_SECRET)%'

services:
    App\Service\CaptchaValidator:
        arguments:
            $key: '%app.recaptcha_key%'
            $secret: '%app.recaptcha_secret%'
```

## App\Service\CaptchaValidator

```php
namespace App\Service;

use ReCaptcha\ReCaptcha;

class CaptchaValidator
{
    private $key;
    private $secret;

    public function __construct($key, $secret)
    {
        $this->key = $key;
        $this->secret = $secret;
    }

    public function validateCaptcha($gRecaptchaResponse)
    {
        $recaptcha = new ReCaptcha($this->secret);
        $resp = $recaptcha->verify($gRecaptchaResponse);
        return $resp->isSuccess();
    }

    /**
     * @return string
     */
    public function getKey(): string
    {
        return $this->key;
    }
}
```

## Controller/UserController

```php
/**
 * @Route("/user", name="user_")
 */
class UserController extends AbstractController
{
    public function register(Request $request, 
        TokenGenerator $tokenGenerator,          
        UserPasswordEncoderInterface $encoder,
        Mailer $mailer, 
        CaptchaValidator $captchaValidator, 
        TranslatorInterface $translator)
    {
                if (!$captchaValidator->validateCaptcha($request->get('g-recaptcha-response'))) {
                    $form->addError(new FormError($translator->trans('captcha.wrong')));
                    throw new ValidatorException('captcha.wrong');
                }
        return $this->render('user/register.html.twig', [
            'form' => $form->createView(),
            'captchakey' => $captchaValidator->getKey()
        ]); 
    }
}                   
```

## templates/user/register.html.twig

```html
     <div class="g-recaptcha" data-sitekey="{{ captchakey }}"></div><br>

     <script src='//www.google.com/recaptcha/api.js?hl={{ locale }}'></script>
```

## config\packages\twig.yaml:

```yaml
twig:
    paths: ['%kernel.project_dir%/templates']
    debug: '%kernel.debug%'
    strict_variables: '%kernel.debug%'
    form_themes: ['bootstrap_4_layout.html.twig']
    globals:
        locale: '%locale%'
```