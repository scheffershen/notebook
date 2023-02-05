New in Symfony 5.3: Tailwind CSS Form Theme
===========================================

https://symfony.com/blog/new-in-symfony-5-3-tailwind-css-form-theme
28, 2021 

Symfony 5.3 we’ve added a new Tailwind CSS theme for Symfony forms.

The new theme is based on [Tailwind CSS 2.x](https://tailwindcss.com/blog/tailwindcss-v2)

Start by applying the theme to some form:

```twig
{% form_theme form 'tailwind_2_layout.html.twig' %}

{% block body %}
    <h1>User Sign Up:</h1>
    {{ form(form) }}
{% endblock %}
```

Then, you can customize each part of the form field using the `*_class` options:

```twig
{{ form_row(form.username, {
    row_class: 'mt-2 px-3 ...',
    label_class: 'font-semibold text-gray-600 ...',
    error_item_class: 'text-red-700 ...',
    widget_class: 'border border-gray-200 bg-gray-50 ...',
    widget_disabled_class: 'border-dashed text-gray-200 ...',
    widget_errors_class: 'border-double border-red-500 bg-red-50 ...',
}) }}
```

If you want to apply the same styles to different fields and/or forms, you don’t have to repeat the same custom styles over and over again.

Instead, create your own form theme based on the Tailwind CSS theme as follows:

```twig
{# templates/form/theme.html.twig #}
{% use 'tailwind_2_layout.html.twig' %}

{% block form_row %}
    {% set row_class = row_class|default('mt-2 px-3 ...') %}
    {{ parent() }}
{% endblock form_row %}

{% block form_label %}
    {% set label_class = label_class|default('font-semibold text-gray-600 ...') %}
    {{ parent() }}
{% endblock form_label %}

{# ... #}
```

Then, register and use this theme in your application the same as any other [custom Symfony form theme](https://symfony.com/doc/current/form/form_themes.html.

