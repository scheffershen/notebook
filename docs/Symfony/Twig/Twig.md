Twig Reference
==============

A template engine for PHP.

## Twig Reference

- Tags
- [Filters](https://twig.symfony.com/doc/3.x/filters/index.html)
	+ {{ user.rpps|default("-") }} => The default filter returns the passed default value if the value is undefined or empty,
	+ + |locale_name(app.request.locale) => The locale_name filter returns the locale name given its two-letter code:
	+ |u.title => The u filter wraps a text in a Unicode object (a Symfony UnicodeString instance) that exposes methods to "manipulate" the string.
	+ {% for row in conferences|batch(4) %} => Les batch filtrer les éléments « lots » en retournant une liste de listes avec le nombre de pièces.
- FunctionsOperators
- Operators

## Twig Reference from Symfony

- Tags
- Filters
	+ {{ 'security.login.submit'|trans({}, 'FOSUserBundle') }} => Translates the text into the current language
- Functions => Translates the text into the current language
	+ + {{ render_esi(path('conference_header')) }} =>It's similar to the render function and defines the same arguments, 
- Tests
	