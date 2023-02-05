BABYLON.JS
===

Babylon.js 4.0 is here and marks a major step forward in one of the world's leading WebGL-based graphics engines. From the powerful new Inspector, best in class physically-based-rendering, countless optimizations, and much more, Babylon.js 4.0 brings powerful, beautiful, simple, and open 3D to everyone on the web.

https://github.com/BabylonJS/Babylon.js

## How To 360 Video



```js
var createScene = function () {

    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2,  Math.PI / 2, 5, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    var videoDome = new BABYLON.VideoDome(
        "videoDome",
        ["https://yoda.blob.core.windows.net/videos/uptale360.mp4"],
        {
            resolution: 32,
            clickToPlay: true
        },
        scene
    );
    
    return scene;
};
```

- *resolution* = 32: Integer, defines the resolution of the sphere used to host the video. Lower resolutions have more artifacts at extreme fovs
- *clickToPlay* = false: Add a click to play listener to the video, does not prevent autoplay
- *autoPlay* = true: Automatically attempt to being playing the video
- *loop* = true: Automatically loop video on end
- *size* = 1000: Physical radius to create the dome at, defaults to approximately half the far clip plane
- *poster*: URL of the image displayed during the video loading or until the user interacts with the video
- *useDirectMapping* = true: Use a direct mapping technique to render the video. You should leave this value on unless you want to use the fovMultiplier property