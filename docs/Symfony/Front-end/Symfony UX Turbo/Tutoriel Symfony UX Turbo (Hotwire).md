Tutoriel Symfony UX Turbo (Hotwire)
===

https://www.youtube.com/watch?v=PZZqa65gplo&list=PLlxQJeQRaKDRU-zMLNvzZK6E1siKZa7nG&index=16
https://speakerdeck.com/dunglas/pedal-to-the-metal-introducing-symfony-turbo?slide=21

- Enhances page level navigation: no more "white flicker"
- Watches for `clicks` and `forme submissions`
- Loads pages in the background using fetch()
- Replaces the &lt;body&gt;, merges the &lt;head&gt;
- Changes browser's history using `history.pushState`
- Customizable progress bar
- Programmatic API (Turbo.visit()) and event system

## Installation

	$ composer rquire symfony/ux-turbo
	$ npm install --force
	$ npm run dev

## entity


## Controller

RoomController.php

```php
#[Route('/rooms/new', name: 'app_rooms_new', methods: ['GET'])]
public function new(Room $room): Response
{
	return $this->renderForm('room/new.html.twig', [
		'form' => $form
	]);
}

#[Route('/rooms/{id<[0-9]+>}', name: 'app_rooms_show', methods: ['GET'])]
public function show(Room $room): Response
{
	return $this->render('room/shwo.html.twig', compact('room'));
}

#[Route('/rooms/{id<[0-9]+>}/edit', name: 'app_rooms_edit', methods: ['GET', 'PUT'])]
public function edit(Room $room, Request $request, EntityManageInterface $em): Response
{
	$form = $this->createForm(RoomType::class, $room, [
		'method' => 'PUT',
		'action' => $this->generateUrl('app_rooms_edit', ['id' => $room->getId()])
	]);
	...
	return $this->renderForm('room/edit.html.twig', [
		'room' => $room,
		'form' => $form
	]);
}
```

## Templates

room/index.html.twig:

```html
<turbo-frame id="room">
    <h1>{{ plualize(rooms|length, 'Room') }}</h1>
    {% if rooms is not empty %}
    	...
    {% endif %}
</turbo-frame>
```

room/show.html.twig:

```html
<turbo-frame id="room" target="_top">
    <h1>Name: {{ room.name}}</h1>
	<a href="{{ path('app_rooms_edit', {'id': room.id}) }}"  data-turbo-frame="room">edit</a>
	<a href="{{ path('app_rooms_index') }}" data-turbo-frame="_top">Back</a>
</turbo-frame>
    {% for message in room.messages %}
    	...
    {% endfor %}
	<a href="{{ path('app_messages_new', {'id': room.id}) }}">New Message</a>
    
```

room/edit.html.twig:

```html
<turbo-frame id="room">
	{{ include('room/_form.html.twig', {'submit_button_label': 'Update Rome'}) }}
</turbo-frame>
	<a href="{{ path('app_rooms_show', {'id': room.id}) }}">Back</a>
```

room/-form.html.twig:

```html
{{ form_start(form, {'attr': {'data-turbo-frame': 'room'}}) }}
```

-flash-messages.html.twig: (turbJs v7-beta8)

```html
{% for message in app.flashes('success') %}
	<div class="alert-success" role="alert" data-turbo-cache="false">
		{{ message }}
	</div>
{% endbfor %}
```
