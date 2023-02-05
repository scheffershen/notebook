Difference between Include, Extends, Use, Macro, Embed in Twig
==============================================================

## Include

Main Goal: Code Reuse

Use Case: Using `header.html.twig` & `footer.html.twig` inside `base.html.twig`.

header.html.twig

```
<nav>
   <div>Homepage</div>
   <div>About</div>
</nav>
```

footer.html.twig

```
<footer>
   <div>Copyright</div>
</footer>
```

base.html.twig

```
{% include 'header.html.twig' %}
	<main>{% block main %}{% endblock %}</main>
{% include 'footer.html.twig' %}
```

## Extends

Main Goal: Vertical Reuse

Use Case: Extending `base.html.twig` inside `homepage.html.twig` & `about.html.twig`.

base.html.twig

```
{% include 'header.html.twig' %}
	<main>
		{% block main %}
		{% endblock %}
	</main>
{% include 'footer.html.twig' %}
```

homepage.html.twig

```
{% extends 'base.html.twig' %}

{% block main %}
	<p>Homepage</p>
{% endblock %}
```

about.html.twig

```
{% extends 'base.html.twig' %}

{% block main %}
	<p>About page</p>
{% endblock %}
```

## Use vs Include ??

Main Goal: Horizontal Reuse

Use Case: `sidebar.html.twig` in `single.product.html.twig` & `single.service.html.twig`.

sidebar.html.twig

```
{% block sidebar %}<aside>This is sidebar</aside>{% endblock %}
```

single.product.html.twig

```
{% extends 'product.layout.html.twig' %}

{% use 'sidebar.html.twig' %}

{% block main %}<main>Product page</main>{% endblock %}
```

single.service.html.twig

```
{% extends 'service.layout.html.twig' %}

{% use 'sidebar.html.twig' %}

{% block main %}<main>Service page</main>{% endblock %}
```

Notes:

- It's like macros, but for blocks.
- The `use` tag only imports a template if it does not extend another template, if it does not define macros, and if the body is empty.

## Macro

Main Goal: Reusable Markup with Variables

Use Case: A function which gets some variables and outputs some markup.

form.html.twig

```
{% macro input(name, value, type) %}
    <input type="{{ type|default('text') }}" name="{{ name }}" value="{{ value|e }}" }}" />
{% endmacro %}
```

profile.service.html.twig

```
{% import "form.html.twig" as form %}

<form action="/login" method="post">
    <div>{{ form.input('username') }}</div>
    <div>{{ form.input('password') }}</div>
    <div>{{ form.input('submit', 'Submit', 'submit') }}</div>
</form>
```

## Embed

Main Goal: Block Overriding

Use Case: Embedding `pagination.html.twig` in `product.table.html.twig` & `service.table.html.twig`.

pagination.html.twig

```
<div id="pagination">
    <div>{% block first %}{% endblock %}</div>
    {% for i in (min + 1)..(max - 1) %}
        <div>{{ i }}</div>
    {% endfor %}
    <div>{% block last %}{% endblock %}</div>
</div>
```

product.table.html.twig

```
{% set min, max = 1, products.itemPerPage %}

{% embed 'pagination.html.twig' %}
    {% block first %}First Product Page{% endblock %}
    {% block last %}Last Product Page{% endblock %}
{% endembed %}
```

service.table.html.twig

```
{% set min, max = 1, services.itemPerPage %}

{% embed 'pagination.html.twig' %}
    {% block first %}First Service Page{% endblock %}
    {% block last %}Last Service Page{% endblock %}
{% endembed %}
```

Please note that embedded file (pagination.html.twig) has access to the current context (min, max variables).

Also you may pass extra variables to the embedded file:

pagination.html.twig

```
<p>{{ count }} items</p>
<div>
    <div>{% block first %}{% endblock %}</div>
    {% for i in (min + 1)..(max - 1) %}
        <div>{{ i }}</div>
    {% endfor %}
    <div>{% block last %}{% endblock %}</div>
</div>
```

product.table.html.twig

```
{% set min, max = 1, products|length %}

{% embed 'pagination.html.twig' with {'count': products|length } %}
    {% block first %}First Product Page{% endblock %}
    {% block last %}Last Product Page{% endblock %}
{% endembed %}
```

Note:

- It has functionality of both Use & Include together.