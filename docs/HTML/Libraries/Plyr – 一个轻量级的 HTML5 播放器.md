Plyr – 一个轻量级的 HTML5 播放器
===

http://f2ex.cn/plyr-html5-media-player/

Plyr 是一个简单的可定制的 HTML5 媒体播放器，使用原生 JavaScript 没有其他依赖。支持 YouTube 和 Vimeo 

## 特色

- 无障碍 – 完全支持 VTT 字幕和屏幕阅读器
- 轻量级 – 压缩后小于 10 KB
- 可定制 – 根据需求定制你想要的播放器
- 语义化 – 使用 正确的 元素。 &lt;input type="range"&gt; 用于音量， &lt;progress&gt; 用于进度， &lt;button&gt;s 用于按钮。没有 &lt;span&gt; 或 &lt;a href="#"&gt; 按钮 hacks
- 响应式 – 适用于任何屏幕尺寸
- HTML 视频 & 音频 – 支持两种格式
- 嵌入式视频 – 支持 YouTube 和 Vimeo 视频播放
- 流视频 – 支持 hls.js，Shaka 和 dash.js 流播放
- API – 切换播放，音量等等
- 事件 – 不要混淆 Vimeo 和 YouTube API，所有的事件都是跨格式标准化的
- 全屏播放 – 支持本机全屏播放，可切换到“全窗口”模式
- 快捷键 – 支持键盘快捷键
- 国际化支持 – 支持国际化的控制器
- 没有依赖 – 使用原生 JavaScript, 不需要 jQuery
- SASS 和 LESS – 包含在构建过程中

## HTML5 视频

```html
<video poster="/path/to/poster.jpg" controls>
  <source src="/path/to/video.mp4" type="video/mp4">
  <source src="/path/to/video.webm" type="video/webm">
  <!-- Captions are optional -->
  <track kind="captions" label="English captions" src="/path/to/captions.vtt" srclang="en" default>
</video>
```

## HTML5 音频

```html
<audio controls>
  <source src="/path/to/audio.mp3" type="audio/mp3">
  <source src="/path/to/audio.ogg" type="audio/ogg">
</audio>
```

## 嵌入 YouTube

    <div data-type="youtube" data-video-id="bTqVqk7FSmY"></div>

## 嵌入 Vimeo

    <div data-type="vimeo" data-video-id="143418951"></div>

注意：data-video-id 的值可以是视频的 ID 或 URL 。

## JavaScript

在 &lt;/body&gt; 标记之前添加 plyr.js 脚本，然后调用 plyr.setup() 。

    <script src="path/to/plyr.js"></script>
    <script>plyr.setup();</script>    

## CSS

在 &lt;head&gt; 标签中引入 plyr.css 样式。

    <link rel="stylesheet" href="path/to/plyr.css">    