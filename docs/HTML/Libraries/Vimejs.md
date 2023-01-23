Vime: A Customizable Media Player Built with Web Components
===

https://vimejs.com
https://github.com/vime-js/vime

Customizable, extensible, accessible and framework agnostic media player. Modern alternative to Video.js and Plyr. Supports HTML5, HLS, Dash, YouTube, Vimeo, Dailymotion

## Features

🎥  Multi-provider support (HTML5, HLS, YouTube, Vimeo etc.).
👑  One API to rule them all! Don't re-learn anything the next time you need a player.
♾️  Avoid cross-browser differences on media related APIs, such as fullscreen and picture-in-picture.
👐  Accessible to all via ARIA roles/states/properties and keyboard support.
🌎  I18N support.
🖥  Designed with both mobile and desktop in mind.
👌  Touch input friendly.
🎨  Style anything you want with CSS variables. Default light and dark themes are included.
🏎️  Performant with preconnections + lazy loading of components and media out of the box.
🧩  Easily build your own components and extend Vime.
🗑️  Lightweight - ~25kB (gzip) standalone, and ~47kB with the default Vime UI.
️🧰  Awesome default custom UI's for audio/video/live media.
🛠  Comprehensive player API with a heap of properties, methods and events.
💪  Built with TypeScript so you can enjoy completely typed components.
🏠  Feel right at home with HTML/CSS/JS thanks to web components.
🏗️  Framework specific bindings for React, Vue, Svelte, Stencil and Angular.

## Examples

```html
<vime-player autoplay muted>
  <vime-video poster="/media/poster.png" cross-origin>
    <!-- Why `data-src`? Lazy loading. You can always use `src` if you don't need it. -->
    <source data-src="/media/video.mp4" type="video/mp4" />
    <track
      default
      kind="subtitles"
      src="/media/subs/en.vtt"
      srclang="en"
      label="English"
    />
  </vime-video>

  <!-- Loads the default Vime UI. -->
  <vime-default-ui />
</vime-player>
```

Native UI?

```html
<!-- Here we are requesting to use the native controls. -->
<vime-player autoplay muted controls>
  <vime-audio cross-origin>
    <source data-src="/media/audio.mp3" type="audio/mp3" />
  </vime-audio>
</vime-player>
```

Custom UI?

```html
<!-- Lets add a little splash of color throughout the player. -->
<vime-player autoplay muted style="--vm-player-theme: #1873d3">
  <!-- Loading a YouTube video. -->
  <vime-youtube video-id="DyTCOwB0DVw" />

  <vime-ui>
    <vime-click-to-play />
    <vime-captions />
    <vime-poster />
    <vime-spinner />
    <vime-default-settings />
    <vime-controls pin="bottomLeft" active-duration="2750" full-width>
      <!-- 
        These are all predefined controls that you can easily customize. You could also build 
        your own controls completely from scratch.
      -->
      <vime-playback-control tooltip-direction="right" />
      <vime-volume-control />
      <vime-time-progress />
      <vime-control-spacer />
      <vime-caption-control />
      <vime-pip-control keys="p" />
      <vime-settings-control />
      <vime-fullscreen-control keys="f" tooltip-direction="left" />
    </vime-controls>
  </vime-ui>
</vime-player>
```

## Frameworks

There are framework specific bindings for:

* React
* Vue
* Svelte
* Stencil
* Angular

## Browsers

Vime is forward thinking and built for the modern web. All *ES6 Compatible* browsers are supported, some of which are listed below.

* Edge 79+
* Firefox 68+
* Chrome 61+
* Safari 11+
* iOS Safari 11+
* Opera 48+

## Providers

* HTML5
* HLS
* Dash
* YouTube
* Vimeo
* Dailymotion
