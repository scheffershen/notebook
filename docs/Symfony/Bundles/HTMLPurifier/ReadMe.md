ReadMe
===

## chamilo-lms

- composer.json
    + "ezyang/htmlpurifier": "~4.10",
- main\inc\lib\security.lib.php
    + $config = HTMLPurifier_Config::createDefault();
    + $purifier[$user_status] = new HTMLPurifier($config);
    + $purifier[$user_status]->purify($var);
- main\inc\lib\formvalidator\Rule\allowed_tags.inc.php
    + function convert_kses_to_htmlpurifier($allowed_tags)
    + $allowed_html_student = convert_kses_to_htmlpurifier(array_merge($allowed_tags_student));
- main\wiki\wiki.inc.php
    + $purifier = new HTMLPurifier();
      $_clean['content'] = $purifier->purify($_clean['content']);
- src\CoreBundle\Component\HTMLPurifier\Filter\AllowIframes.php
    + class AllowIframes extends HTMLPurifier_Filter
- src\CoreBundle\Composer\ScriptHandler.php
    + main/inc/lib/htmlpurifier

main\inc\lib\security.lib.php

```php
    $config = HTMLPurifier_Config::createDefault();
    $config->set('Cache.SerializerPath', $cache_dir);
    $config->set('Core.Encoding', api_get_system_encoding());
    $config->set('HTML.Doctype', 'XHTML 1.0 Transitional');
    $config->set('HTML.MaxImgLength', '2560');
    $config->set('HTML.TidyLevel', 'light');
    $config->set('Core.ConvertDocumentToFragment', false);
    $config->set('Core.RemoveProcessingInstructions', true);

    if ('true' == api_get_setting('enable_iframe_inclusion')) {
        $config->set('Filter.Custom', [new AllowIframes()]);
    }
    // Shows _target attribute in anchors
    $config->set('Attr.AllowedFrameTargets', ['_blank', '_top', '_self', '_parent']);

    if (STUDENT == $user_status) {
        global $allowed_html_student;
        $config->set('HTML.SafeEmbed', true);
        $config->set('HTML.SafeObject', true);
        $config->set('Filter.YouTube', true);
        $config->set('HTML.FlashAllowFullScreen', true);
        $config->set('HTML.Allowed', $allowed_html_student);
    } elseif (COURSEMANAGER == $user_status) {
        global $allowed_html_teacher;
        $config->set('HTML.SafeEmbed', true);
        $config->set('HTML.SafeObject', true);
        $config->set('Filter.YouTube', true);
        $config->set('HTML.FlashAllowFullScreen', true);
        $config->set('HTML.Allowed', $allowed_html_teacher);
    } else {
        global $allowed_html_anonymous;
        $config->set('HTML.Allowed', $allowed_html_anonymous);
    }

    // We need it for example for the flv player (ids of surrounding div-tags have to be preserved).
    $config->set('Attr.EnableID', true);
    $config->set('CSS.AllowImportant', true);
    // We need for the flv player the css definition display: none;
    $config->set('CSS.AllowTricky', true);
    $config->set('CSS.Proprietary', true);

    // Allow uri scheme.
    $config->set('URI.AllowedSchemes', [
        'http' => true,
        'https' => true,
        'mailto' => true,
        'ftp' => true,
        'nntp' => true,
        'news' => true,
        'data' => true,
    ]);

    // Allow <video> tag
    //$config->set('HTML.Doctype', 'HTML 4.01 Transitional');
    $config->set('HTML.SafeIframe', true);

    // Set some HTML5 properties
    $config->set('HTML.DefinitionID', 'html5-definitions'); // unqiue id
    $config->set('HTML.DefinitionRev', 1);
    if ($def = $config->maybeGetRawHTMLDefinition()) {
        // https://html.spec.whatwg.org/dev/media.html#the-video-element
        $def->addElement(
            'video',
            'Block',
            'Optional: (source, Flow) | (Flow, source) | Flow',
            'Common',
            [
                'src' => 'URI',
                'type' => 'Text',
                'width' => 'Length',
                'height' => 'Length',
                'poster' => 'URI',
                'preload' => 'Enum#auto,metadata,none',
                'controls' => 'Bool',
            ]
        );
        // https://html.spec.whatwg.org/dev/media.html#the-audio-element
        $def->addElement(
            'audio',
            'Block',
            'Optional: (source, Flow) | (Flow, source) | Flow',
            'Common',
            [
                'autoplay' => 'Bool',
                'src' => 'URI',
                'loop' => 'Bool',
                'preload' => 'Enum#auto,metadata,none',
                'controls' => 'Bool',
                'muted' => 'Bool',
            ]
        );
        $def->addElement(
            'source',
            'Block',
            'Flow',
            'Common',
            ['src' => 'URI', 'type' => 'Text']
        );
    }

    $purifier[$user_status] = new HTMLPurifier($config);
}

    if (is_array($var)) {
        return $purifier[$user_status]->purifyArray($var);
    } else {
        return $purifier[$user_status]->purify($var);
    }
```

    $allowed_html_teacher = convert_kses_to_htmlpurifier(array_merge($allowed_tags_teacher));

public\main\inc\lib\formvalidator\Rule\allowed_tags.inc.php

## moodle

- moodle\lib\weblib.php
    + htmlpurifier/HTMLPurifier.safe-includes.php
    + htmlpurifier/locallib.php
    + $purifier = new HTMLPurifier($config)
- moodle\lib\htmlpurifier\HTMLPurifier.php
    + class HTMLPurifier
- moodle\lib\htmlpurifier\HTMLPurifier.safe-includes.php
    + HTMLPurifier.php
    + HTMLPurifier/Config.php
    + HTMLPurifier/Context.php

## en-marche.fr

from pc

- composer.json
    + "exercise/htmlpurifier-bundle": "^1.0",
- config\services\services.xml
    + Exercise\HTMLPurifierBundle\Form\HTMLPurifierTransformer


from mac

- ezyang/htmlpurifier: v4.10.0
- exercise/htmlpurifier-bundle: 1.0
- config/services.yaml

```yaml
# Form
App\Form\PurifiedTextareaType:
    arguments:
        -
            default: '@app.html_purifier.default'
            enrich_content: '@app.html_purifier.enrich_content'
            basic_content: '@app.html_purifier.basic_content'
```

- config/packages/exercise_html_purifier.yaml

```yaml
exercise_html_purifier:
    default:
        Core.Encoding: 'UTF-8'
        Cache.SerializerPermissions: ~
    enrich_content:
        HTML.AllowedElements: p,h1,h2,h3,h4,h5,h6,div,address,center,em,strong,pre,div,u,s,ol,ul,li,br,img,a,iframe
        HTML.AllowedAttributes: "*.style,img.src,img.alt,a.href,a.target,*.class,iframe.src,iframe.width,iframe.height,iframe.frameborder"
        HTML.SafeIframe: true
        URI.SafeIframeRegexp: '#^(https?:)?(\/\/www\.youtube(?:-nocookie)?\.com\/embed\/)#'
        Attr.AllowedFrameTargets: "_blank"
        CSS.AllowedProperties: text-align,border-style,border-width,float,height,width,margin
        AutoFormat.Custom:
            - '@App\HTMLPurifier\Injector\ImageDimension'
    basic_content:
        HTML.AllowedElements: p,ol,ul,li,br
```

- config/services/services.xml:

```xml
<!-- HTML Purifiers -->
<service id="app.html_purifier.default" class="Exercise\HTMLPurifierBundle\Form\HTMLPurifierTransformer">
    <argument type="service" id="exercise_html_purifier.default"/>
</service>
<service id="app.html_purifier.enrich_content" class="Exercise\HTMLPurifierBundle\Form\HTMLPurifierTransformer">
    <argument type="service" id="exercise_html_purifier.enrich_content"/>
</service>
<service id="app.html_purifier.basic_content" class="Exercise\HTMLPurifierBundle\Form\HTMLPurifierTransformer">
    <argument type="service" id="exercise_html_purifier.basic_content"/>
</service>
<service id="App\HTMLPurifier\Injector\ImageDimension">
    <argument>%image_max_length%</argument>
</service>
```

- src/Admin/CitizenProjectAdmin.php

```php
use App\Form\PurifiedTextareaType;

    ->add('proposedSolution', PurifiedTextareaType::class, [
        'label' => 'Solution du problème',
        'filter_emojis' => true,
        'purifier_type' => 'enrich_content',
        'attr' => ['class' => 'ck-editor'],
    ])
```

- src/Form/PurifiedTextareaType.php

```php
    $resolver->setDefaults([
        'purifier_type' => 'default',
    ]);

    $resolver->setAllowedValues('purifier_type', array_keys($this->purifierTransformers));
```

## symfony4-demo

- composer.json
    + "ezyang/htmlpurifier": "^4.9"
    + "erusev/parsedown": "^1.6",

- App\Utils\Markdown

```php
namespace App\Utils;

class Markdown
{
    private $parser;
    private $purifier;

    public function __construct()
    {
        $this->parser = new \Parsedown();

        $purifierConfig = \HTMLPurifier_Config::create([
            'Cache.DefinitionImpl' => null, // Disable caching
        ]);
        $this->purifier = new \HTMLPurifier($purifierConfig);
    }

    public function toHtml(string $text): string
    {
        $html = $this->parser->text($text);
        $safeHtml = $this->purifier->purify($html);

        return $safeHtml;
    }
}
```

- App\Twig\AppExtension.php


```php
    private $parser;

    public function __construct(Markdown $parser, $locales)

        new TwigFilter('md2html', [$this, 'markdownToHtml'], ['is_safe' => ['html']]),

    /**
     * Transforms the given Markdown content into HTML content.
     */
    public function markdownToHtml(string $content): string
    {
        return $this->parser->toHtml($content);
    }

```

- templates/admin/blog/show.html.twig

```twig
    {{ post.content|md2html }}
```