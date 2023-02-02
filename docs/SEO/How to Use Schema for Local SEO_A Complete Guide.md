How to Use Schema for Local SEO: A Complete Guide
===

https://www.searchenginejournal.com/how-to-use-schema-for-local-seo-a-complete-guide/294973/#close

At its core, schema is a foundation for markup data that allows search engines to better understand location-based structured information like addresses, dates of events, phone numbers, and other information.

## What Is Schema Markup?

Schema markup was created by Google, Bing, and Yahoo.

The goal of schema was to create and provide support for a common group of tags that could be used by the search engines to better understand and display data.

## What Are Google’s Guidelines on Schema Structured Data?

## What Formats of Schema Markup Are Available?

- Standard schema microdata,
- JSON-LD,
- RDFa

## Google’s Structured Data Testing Tool, or Other Testing Tool

## Setting up Your Code Structure

## The Basics of Coding With Schema Markup

## Law Firms & Attorneys Schema Example

```html
    <div itemscope itemtype="http://schema.org/LegalService">
    <span itemprop="name">Attorney's Law Firm</span>
    <span itemprop="address">Law Firm Address</span>
    <div itemscope itemtype="http://schema.org/PostalAddress">
    <span itemprop="addressLocality">City</span>,
    <span itemprop="addressRegion">State</span>
    <span itemprop="postalCode">Zip Code</span>
    </div>
    <span itemprop="telephone">Phone Number</span>
    </div>
```

## Brick & Mortar Small Businesses: LocalBusiness Example 1

```html
    <div itemscope itemtype="https://schema.org/LocalBusiness">
    <span itemprop="name">Name Of Business</span>
    <span itemprop="address">Business's Address</span>
    <div itemscope itemtype="http://schema.org/PostalAddress">
    <span itemprop="addressLocality">City</span>,
    <span itemprop="addressRegion">State</span>
    <span itemprop="postalCode">Zip Code</span>
    </div>
    <span itemprop="telephone">Business Phone Number</span>
    </div>
```

## Restaurants: LocalBusiness Example 2

```html
    <div itemscope itemtype="https://schema.org/LocalBusiness">
    <span itemprop="name">Name Of Business</span>
    <span itemprop="address">Business's Address</span>
    <div itemscope itemtype="http://schema.org/PostalAddress">
    <span itemprop="addressLocality">City</span>,
    <span itemprop="addressRegion">State</span>
    <span itemprop="postalCode">Zip Code</span>
    </div>
    <span itemprop="telephone">Business Phone Number</span>
    </div>
```

## GeoCoordinates Example

```html
    <div itemscope itemtype="https://schema.org/GeoCoordinates">
    <span itemprop="name">Name of Business</span>
    <span itemprop="address">Address of business</span>
    <span itemprop="addressCountry">USA</span>
    <span itemprop="elevation">37.42242</span>
    <span itemprop="latitude">-122.08585</span>
    <span itemprop="postalCode">92665</span>
    </div>    
```

## Here is an example of the GeoCoordinates code in action on Wendy’s multi-location website:

```html
    <div class="LocationInfo-address">
    <span class="coordinates" itemprop="geo" itemscope itemtype="http://schema.org/GeoCoordinates">
    <meta itemprop="latitude" content="33.70261743200274">
    <meta itemprop="longitude" content="-117.95383751392365"></span>
    <address class="c-address" itemscope itemtype="http://schema.org/PostalAddress" itemprop="address" data-country="US">
    <meta itemprop="addressLocality" content="Fountain Valley" />
    <meta itemprop="streetAddress" content="17940 Brookhurst Ave" />
    <div class=c-AddressRow><span class="c-address-street-1">17940 Brookhurst Ave</span>
    </div>
    <div class=c-AddressRow><span class="c-address-city">Fountain Valley</span><yxt-comma>,</yxt-comma>
    <abbr title="California" aria-label="California" class="c-address-state" itemprop="addressRegion">CA</abbr>
    <span class="c-address-postal-code" itemprop="postalCode">92708</span></div>
    <div class=c-AddressRow><abbr title="United States" aria-label="United States" class="c-address-country-name c-address-country-us" itemprop="addressCountry">US</abbr>
    </div></address></div><div class="LocationInfo-phone">
    <div class="c-phone c-phone-main"><div class="c-phone-label c-phone-main-label">Main Number</div>
    <div class="c-phone-number-wrapper c-phone-main-number-wrapper">
    <div class="c-phone-number c-phone-main-number">
    <a class="c-phone-number-link c-phone-main-number-link" href="tel:+1-714-964-2022" data-ya-track="mainphone">(714) 964-2022</a>
    <span class="c-phone-number-span c-phone-main-number-span" itemprop="telephone" id="telephone">(714) 964-2022</span>
    </div></div></div></div>    
```

## Person

```html
       <div class="grid__item" itemscope itemtype="http://schema.org/Person">
        <a
            {% if is_granted('ROLE_USER_VALIDE') %}
              href="{{ path('author_detail', {'fullname' : author.fullname} ) }}"
            {% else %}
              href="{{ path('author_more', {'fullname' : author.fullname}) }}"
            {% endif %}
            class="grid__itemExpert">
              <span class="grid__itemExpertThumb" itemprop="image">
                {% if author.photo %}
                    <img src="{{ asset('images/speakers/'~author.photo) }}" alt="Avatar">
                {% else %}
                    <img src="{{ asset('images/silhouette.svg') }}" alt="Avatar">
                {% endif %}
              </span>
              {% if author.nom and author.prenom %}
                  <p class="grid__itemExpertTitle">
                      <span itemprop="name"><span class="grid__itemExpertLastname">{{author.nom}}</span> <span class="grid__itemExpertFirstname">{{author.prenom}}</span></span>
                      <br>
                      {% if author.specialite %}
                          <span class="grid__itemExpertSpe" itemprop="jobTitle">{{author.specialite}}</span>
                      {% endif %}
                  </p>
              {% else %}
                  <p class="grid__itemExpertTitle">
                      <span class="grid__itemExpertFullname" itemprop="name">{{author.fullname}}</span>
                      <br>
                      {% if author.specialite %}
                          <span class="grid__itemExpertSpe" itemprop="jobTitle">{{author.specialite}}</span>
                      {% endif %}
                  </p>
              {% endif %}
          </a>
      </div>
```

## PostalAddress Schema Example

```html
    <div itemscope itemtype="https://schema.org/PostalAddress">
    <span itemprop="streetAddress">10392 Somewhere Lane</span>
    <span itemprop="addressLocality">Irvine</span>
    <span itemprop="addressRegion">CA</span>
    <span itemprop="addressCountry">USA</span>
    <span itemprop="postalCode">92689</span>
    </div>    
```

## MedicalSpecialty

```html
    <p class="event__spe" itemscope itemtype="http://schema.org/MedicalSpecialty">
        {% for specialite in agenda.specialite %}
            <span itemprop="name">{{ specialite.title | default("-") }}</span>,
        {% endfor %}
    </p>
```

## Reviews Schema Example

```html
    <div itemscope itemtype="https://schema.org/Reviews">
    <span itemprop="itemReviewed">Personal Injury Law Service</span>
    <span itemprop="reviewAspect">This review or rating is relevant to services provided by this law firm.</span>
    <span itemprop="reviewBody">"We thought these attorneys were amazing."</span>
    <span itemprop="reviewRating">5</span>
    </div>
```

## Rating Schema Example

```html
    <div itemscope itemtype="https://schema.org/Review">
    <span itemprop="itemReviewed">Personal Injury Law Service</span>
    <span itemprop="reviewAspect">This review or rating is relevant to services provided by this law firm.</span>
    <span itemprop="reviewBody">"We thought these attorneys were amazing."</span>
    <span itemprop="author">John</span>
    <span itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
    <meta itemprop="worstRating" content = "1">
    <span itemprop="ratingValue">1</span>/
    <span itemprop="bestRating">5</span> stars
    </span>
    </div>
```

## Event Schema Example    

```html
    <div itemscope itemtype="https://schema.org/Event">
    <span itemprop="startDate" content="2019-03-02T09:30">Sunday, Mar 2</span>
    <span itemprop="name">New Concert at this Concert Hall</span>
    <span itemprop="location" itemscope itemtype="https://schema.org/Place">
    <span itemprop="streetAddress">5729 N. Cheney St.</span>
    <span itemprop="addressLocality">Miami</span>
    <span itemprop="addressRegion">FL</span>
    <span itemprop="postalCode">92382</span>
    <span itemprop="url" href="https://www.concertwebsite.com/">Buy Tickets</span>
    </div>
```

```html
            <section class="grid" itemscope itemtype="http://schema.org/Event">
                <header class="grid__header grid__header--flex">
                    <h1 class="grid__title" itemprop="name">
                        {{ congres.title }}
                    </h1>
                    <time datetime="{{ congres.dateEvent | date("Y-m-d") }}" class="grid__date">
                        {% if app.request.get('_locale') == 'en' %}
                            {{ congres.dateEvent | date("Y-m-d") }}
                        {% elseif app.request.get('_locale') == 'fr' %}
                            {{ congres.dateEvent | date("d/m/Y") }}
                        {% endif %}
                    </time>
                </header>
                <hr>
                {# Description du congrès #}
                <div class="grid__interne grid__description">
                    <figure>
                        {% if congres.img  %}
                            <amp-img src="{{ asset('images/conferences/'~congres.img) }}" alt="{{ congres.title }}" itemprop="image" width="250" height="150" layout="responsive"></amp-img>
                        {% else %}
                            <amp-img src="{{ asset('medflixs/nn-image350x225.gif') }}" alt="{{ congres.title }}" width="250" height="150" layout="responsive"></amp-img>
                        {% endif %}
                    </figure>
                <div>

                        <h2 class="grid__title grid__title--congres">{{ 'homeBundle.details.programme' | trans }}</h2>
                        {% if congres.url is defined and congres.url is not null and date(congres.dateEventFin) > date() %}
                            <a href="{{path('agenda_redirect_register', {'slug': congres.slug} ) }}?source=congres" class="congres__event__href__register">
                                {{'homeBundle.agenda.register'|trans}}
                            </a>
                        {% endif %}
                        <div class="grid__itemDescription">
                            <p class="grid__itemText" itemprop="location" itemscope itemtype="http://schema.org/Place">
                                <b>{{ 'homeBundle.details.lieu' | trans }} :</b>
                                {% if congres.address or congres.city or congres.zip or congres.country %}
                                    <a href="{{ path('event_years_country_city', {'years': congres.dateEvent|date("Y"), 'country': congres.country.slug, 'city': congres.city }) }}" class="link" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress"><span itemprop="addressLocality">{{ congres.city }}</span></a>
                                {% endif %}
                            </p>
                            <p class="grid__itemText" itemscope itemtype="http://schema.org/GeoCoordinates">
                                <b>{{ 'homeBundle.details.pays' | trans }} :</b> <a href="{{ path('event_country', {'country': congres.country.slug}) }}" class="link"><span itemprop="addressCountry">{{ congres.country }}</span></a>
                            </p>

                            <p class="grid__itemText">
                                <b>{{ 'homeBundle.details.langue' | trans }} :</b>
                                {% if congres.lang is null %}
                                    <span itemprop="inLanguage">FR</span>
                                {% else %}
                                    {% if congres.lang.id == 1 %}
                                        <span itemprop="inLanguage">FR</span>
                                    {% else %}
                                        <span itemprop="inLanguage">ENG</span>
                                    {% endif %}
                                {% endif %}
                            </p>
                            <p class="grid__itemText" itemprop="startDate" content="{{ congres.dateEvent | date("Y-m-d") }}">
                                <b>{{ 'homeBundle.details.deb' | trans }} :</b>
                                {% if app.request.get('_locale') == 'en' %}
                                    <time datetime="{{ congres.dateEvent | date("Y-m-d") }}" itemprop="startDate">
                                        <a href="{{ path('event_years', {'years': congres.dateEvent|date("Y")}) }}" class="link"> {{ congres.dateEvent | date("Y-m-d") }} </a>
                                    </time>
                                {% elseif app.request.get('_locale') == 'fr' %}
                                    <time datetime="{{ congres.dateEvent | date("Y-m-d") }}" itemprop="startDate">
                                        <a href="{{ path('event_years', {'years': congres.dateEvent|date("Y")}) }}"  class="link"> {{ congres.dateEvent | date("d/m/Y") }} </a>
                                    </time>
                                {% endif %}
                            </p>
                            <p class="grid__itemText">
                                <b>{{ 'homeBundle.details.fin' | trans }} :</b>
                                {% if app.request.get('_locale') == 'en' %}
                                    <time datetime="{{ congres.dateEventFin | date("Y-m-d") }}" itemprop="endDate">
                                        {{ congres.dateEventFin | date("Y-m-d") }}
                                    </time>
                                {% elseif app.request.get('_locale') == 'fr' %}
                                    <time datetime="{{ congres.dateEventFin | date("Y-m-d") }}" itemprop="endDate">
                                        {{ congres.dateEventFin | date("d/m/Y") }}
                                    </time>
                                {% endif %}
                            </p>
                            {% if congres.url is not null %}
                                <p class="grid__itemText">
                                    <a itemprop="url" href="{{ congres.url }}" class="link"><i>{{ congres.url }}</i></a>
                                </p>
                            {% endif %}
                        </div>
                        <div class="grid__itemText  grid__itemDescription" itemprop="description">

                        </div>

                    {% if congres.specialite | length >= 1 %}
                        <p class="grid__itemText">
                            <b>{{ 'homeBundle.details.spe' | trans }} :</b>
                            {% for specialite in congres.specialite %}
                                <a href="{{ path('event_event_speciality', {'speciality': specialite.slugFr}) }}" class="link"> <span class="grid__spe">{{ specialite.title|title }}</span> </a>
                                {% if not loop.last %}
                                    ,
                                {% endif %}
                            {% endfor %}
                        </p>
                    {% endif %}

                    <span class="grid__itemText  grid__itemDescription" itemprop="description">
                            {{ congres.content | raw }}
                        </span>
                    </div>
                </div>
            </section>
```

## Website Schema Markup

Website Schema markup lets your site appear with a search bar in the SERPs. Here’s an example of Website Schema Markup being used by Best Buy in the form of JSON-LD markup

```html
    <script type="application/ld+json">
    {"@context" : "http://schema.org","@type" : "WebSite","name" : "Best Buy","url" : "http://www.bestbuy.com/"}
    </script>
```

## Using Schema Markup for Other On-site Elements

- Breadcrumbs: https://schema.org/breadcrumb
- Video: https://schema.org/video
- Navigation Menus: https://schema.org/SiteNavigationElement

