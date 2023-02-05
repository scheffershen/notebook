Les Turbos Frames
===

*Il s’agit de nouvelles balises HTML ajoutées par Turbo, qui auront pour effet de rendre une partie de template indépendante*. Cela permet, entre autres, de ne pas recharger le reste de la page si une interaction est effectuée dans ces balises (cliquer sur un lien, valider un *formulaire*, etc.).

À la place, une requête est envoyée à l’URL du lien ou en action du formulaire, avec comme indication que cette requête a été déclenchée par Turbo.

```html
{# templates/pages/contact/index.html.twig #}

[...]

<div>
    <turbo-frame id="contact_form">
        {% include 'pages/contact/partials/_form.html.twig' with {
            form: contactForm,
        } only %}
    </turbo-frame>
</div>

[...]
```

```php
// src/Controller/PagesController.php

[...]

use Symfony\Component\HttpFoundation\Request;
use Symfony\UX\Turbo\Stream\TurboStreamResponse;

[...]

public function contact(Request $request): Response
{
    $form = $this->createForm(ContactType::class);
    $form->handleRequest($request);
    
    if ($form->isSubmitted() && $form->isValid()) {
        $contactName = $form->get('name')->getData();
    
        if (TurboStreamResponse::STREAM_FORMAT === $request->getPreferredFormat()) {
            // Si la requête provient de Turbo, on va la traiter ici !
        }
    
        // Si le client ne supporte pas ou n'accepte pas l'utilisation de JavaScript, l'application doit continuer de fonctionner.
        // Ici, on rajoute un flash message ainsi qu'une redirection classique.
    
        $this->addFlash('success', "Merci pour votre message $contactName !");
    
        return $this->redirectToRoute('app_contact', [], Response::HTTP_SEE_OTHER);
    }
    
    return $this->render('pages/contact/index.html.twig', [
        'contactForm' => $form->createView(),
    ]);

[...]
```

*Les Turbo Streams sont des balises HTML ayant comme attributs des actions visant à modifier le contenu d’un Turbo Frame existant par un ID ciblé.*

*Voici la liste totale des actions disponibles*, pour vous donner une idée de ce qu’il est possible de faire :

- append
- prepend
- replace
- update
- remove

Pour continuer l’exemple, nous allons à la fois *vider le formulaire si celui-ci est valide, et afficher un message de confirmation*.

```html
{# templates/pages/contact/success.stream.html.twig #}

{# Mise à jour du formulaire pour vider les champs #}
<turbo-stream action="update" target="contact_form">
    <template>
        {% include 'pages/contact/partials/_form.html.twig' with {
            form: contactForm,
        } only %}
    </template>
</turbo-stream>

{# Ajout d'un "flash message" au dessus du formulaire, dans la frame "contact_form" #}
<turbo-stream action="prepend" target="contact_form">
    <template>
        <p style="font-weight: bold; color: green">Merci pour votre message {{ contactName }} !</p>

        <hr>
    </template>
</turbo-stream>
```

```php
// src/Controller/PagesController.php

[...]

$form = $this->createForm(ContactType::class);
$blankForm = clone $form;
$form->handleRequest($request);

if ($form->isSubmitted() && $form->isValid()) {
    $contactName = $form->get('name')->getData();

    if (TurboStreamResponse::STREAM_FORMAT === $request->getPreferredFormat()) {
        return $this->render('pages/contact/success.stream.html.twig', [
            'contactName' => $contactName,
            'contactForm' => $blankForm->createView(),
        ], new TurboStreamResponse());
    }

[...]
```

Une dernière chose : comme je l’ai indiqué plus haut, les Turbo Frames sont des parties de templates indépendantes, ce qui veut dire qu’*ils peuvent être chargés sur n’importe quelle page en lazy-loading !*

```html
{# templates/pages/produits/list.html.twig #}

[...]
<turbo-frame id="products_list">
    <ul>
        {% for product in products %}
            <li>{{ product.title }}</li>
        {% endfor %}
    </ul>
</turbo-frame>
[...]
```

```html
{# templates/pages/home.html.twig #}

[...]

<turbo-frame id="products_list" src="{{ path('app_produits') }}">
    <p>Chargement de la liste des produits...</p>
</turbo-frame>

[...]
```

Il reste énormément de choses à voir avec, comme la possibilité de brancher `Mercure` aux streams pour gérer l’affichage en temps réel du modification de contenu chez plusieurs clients.

## Conclusion sur Symfony X Turbo

Les outils de l’écosystème Hotwire (Stimulus, Turbo) sont très intéressants à utiliser, avec une prise en main simple et rapide.