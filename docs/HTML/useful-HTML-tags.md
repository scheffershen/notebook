useful HTML tags
=======================================

## Input datalist tag

```html
<fieldset>
	<legend>Favorites</legend>
	<div>
		<label>Color</label>
	</div> 
	<div> 
		<input list="color-list" type="text">
		<datalist id="color-list">	
			<option value="Red">
			<option value="Green">
		</datalist>
	</div>


```

## Input color, date and time type

```html
<input type="date">
<input type="time">
<input type="color">
```

## Time tag

The &lt;time&gt; tag defines a human-readable date or time. 

```html
<p>My cat wakes up at <time>11:00</time> each day.</p>
<p>I have a date with my cat on <time datetime="2019-12-25 20:00">Christmas</time>.</p>
```

## Progress tag

The &lt;progress&gt; tag represents the progress of a task.

```html
<progress value="42" max="100"></progress>
<progress></progress>
<progress value="50" max="100">60%</progress>
```

## Video tag

The &lt;video&gt; tag specifies a movie clip or video stream. 

```html
<video width="320" height="240" controls>
  <!--can't play -->
  <source src="">
</video>
```

## Open Graph property Meta tags

op = open graph
al = App Link metadata

```html
	<meta property="al:ios:url" content="applinks://docs" />
	<meta property="al:ios:app_store_id" content="12345" />
	<meta property="al:ios:app_name" content="App Links" />
	<meta property="al:android:url" content="applinks://docs" />
	<meta property="al:android:app_name" content="App Links" />
	<meta property="al:android:package" content="org.applinks" />
	<meta property="al:web:url"
	content="http://applinks.org/documentation" />
```

twitter = 

```html
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:site" content="@nytimes">
	<meta name="twitter:creator" content="@SarahMaslinNir">
	<meta name="twitter:title" content="Parade of Fans for Houston’s Funeral">
	<meta name="twitter:description" content="NEWARK - The guest list and parade of limousines with celebrities emerging from them seemed more suited to a red carpet event in Hollywood or New York than than a gritty stretch of Sussex Avenue near the former site of the James M. Baxter Terrace public housing project here.">
	<meta name="twitter:image" content="http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg">
```

- https://ahrefs.com/blog/open-graph-meta-tags/

```html
<meta property="og:title" content="How to Become an SEO Expert (8 Steps)" />
<meta property="og:description" content="Get from SEO newbie to SEO pro in 8 simple steps." />
<meta property="og:image" content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:type" content="article" />
<meta property="og:locale" content="en_GB" />
```

## Picture tag

The &lt;picture&gt; tag allows you to specify image sources.

The &lt;img&gt; tag is used to provide backwards compatibility if a browser doesn’t support the element or if none of the &lt;source&gt; tags match.

```html
<picture>
    <source media="(min-width:650px)" srcset="img_cat_fat.jpg">
    <source media="(min-width:465px)" srcset="img_cat_fluffy.jpg">
    <img src="img_kitten.jpg" alt="Kitten" style="width:auto;">
</picture>
```

## Meter tag

The &lt;meter&gt; tag defines a scalar measurement within a defined range, or a fractional value. You can also refer to this tag by the name “gauge.”

```html
Meter With Min/Max: 
<meter value="4" min="0" max="10">4 out of 10</meter>
<br>
Meter With Percentage: 
<meter value="0.3">30%</meter>
```

## Template tag

The &lt;template&gt; tag contains content that is hidden from the user, but will be used to instantiate HTML code repeatedly.

```html
<template>
    <h2>Cat</h2>
    <img src="img_cat.jpg">
</template>
```

```javascript
function showMyTemplate() {
    const myTemplate = document.querySelector('template');
    const templateClone = myTemplate.content.cloneNode(true);
    document.body.appendChild(templateClone);
}
```

## Audio tag

```html
<audio controls>
  <!-- Won't play because the mp3 doesn't exist -->
  <source src="cat.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
```

## Blockquote tag

```html
<blockquote cite="https://codingcoach.io/">
  Coding Coach is a free, open-source platform which aims to connect software developers and mentors all over the world. It is built by a group of talented and passionate developers, designers, engineers, and humans who want to make the engineering world a better place to collaborate. This project was born out of a desire to provide a platform to connect mentors and mentees throughout the world at no cost. Coding Coach is created by the people, for the people.
</blockquote>
```

## Output

The &lt;output&gt; tag represents the result of a calculation.

```css
input, output {
  margin: 0px 20px;
}
```

```html
<form oninput="totalWeight.value=parseInt(catAWeight.value)+parseInt(catBWeight.value)">0
  <input type="range" id="catAWeight" value="50">100
  +<input type="number" id="catBWeight" value="50">
  =<output name="totalWeight" for="catAWeight catBWeight"></output>
</form>
```

## Resources

- https://www.youtube.com/watch?v=iX_QyjdctsQ
- https://dev.to/emmawedekind/10-html-element-you-didnt-know-you-needed-3jo4
- https://www.w3schools.com/tag