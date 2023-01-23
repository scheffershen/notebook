让 HTML5 来为你定位
=================

http://www.cnblogs.com/zichi/p/4975788.html

## Geolocation

HTML5 的 geolocation 是一个令人兴奋的 API，通过这套 API，Javascript 代码就能够访问到用户的当前位置

如果页面尝试访问地理位置信息，浏览器就会显示一个对话框，请求用户许可共享其地理位置信息，比如这样：

##getCurrentPosition() 方法

Geolocation API 在浏览器中的实现是 navigator.geolocation 对象，这个对象包含 3 个方法

1. getCurrentPosition()

第一个方法是 getCurrentPosition(), 调用这个方法就会触发请求用户共享地理定位信息的对话框, 这个方法接收 3 个参数：**成功回调函数**，**可选的失败回调函数**和**可选的选项对象**。

**成功回调函数**会接收到一个 Position 对象参数, 该对象有两个属性：coords 和 timestamp。而 coords 对象中将包含下列与位置相关的信息。

* latitude：以十进制度数表示的维度
* longtitude：以十进制度数表示的经度
* accuracy：经纬度坐标的精度，以米为单位

有些浏览器可能会在 coords 对象中提供如下属性。

* altitude：以米为单位的海拔高度，如果没有相关数据则值为 null
* altitudeAccuracy：海拔高度的精度，以米为单位，数值越大越不精确
* heading：指南针的方向，0°表示正北，值为 NaN 表示没有检测到数据
* speed：速度，即每秒移动多少米，如果没有相关数据则值为 null

```javascript
navigator.geolocation.getCurrentPosition(geo_success, geo_error);

function geo_success(position) {
  console.log(position.coords.latitude, position.coords.longitude);
}

function geo_error(msg) {
  console.log(msg.code, msg.message);
}
```

**失败回调函数**

getCurrentPosition() 的第二个参数，即失败回调函数，在被调用的时候也会接收到一个参数。
这个参数是一个对象，包含两个属性：message 和 code。其中，message 属性中保存着给人看的文本消息，解释为什么会出错，而 code 属性中保存着一个数值，表示错误的类型：用户拒绝共享（1），位置无效（2）或者超时（3）。实际开发中，大多数 Web 应用只会讲错误消息保存到日志文件中，而不一定会修改用户界面。

如果能把位置显示在地图上那就直观多了！

```html
<script src="http://webapi.amap.com/maps?v=1.3&key=您申请的key值">
  <script>
    navigator.geolocation.getCurrentPosition(geo_success, geo_error);

    function geo_success(position) {
      var map = new AMap.Map('mapContainer', {
        // 设置中心点
        center: [position.coords.longitude, position.coords.latitude],

        // 设置缩放级别
        zoom: 13
      });
      var marker = new AMap.Marker({
        //复杂图标
        icon: new AMap.Icon({
            //图标大小
            size: new AMap.Size(28, 37),
            //大图地址
            image: "http://webapi.amap.com/images/custom_a_j.png",
            imageOffset: new AMap.Pixel(-28, 0)
        }),
        //在地图上添加点
        position: [position.coords.longitude, position.coords.latitude]
      });

      marker.setMap(map);
    }

    function geo_error(msg) {
      console.log(msg.code, msg.message);
    }
  </script>

```

**可选的选项对象**

getCurrentPosition() 还有第三个参数，该参数是一个选项对象，用于设定信息的类型。可以设置的选项有三个：enableHighAccuracy 是一个布尔值，表示必须尽可能使用最精确的位置信息；timeout 是以毫秒数表示的等待位置信息的最长时间；maximumAge 表示上一次取得的坐标信息的有效时间，以毫秒表示，如果时间到则重新取得新坐标信息。

除非确实需要非常精确的信息，否则建议保持 enableHighAccuracy 的 false 值（默认值）。将这个选项设置为 true 需要更长的时候，而且在移动设备上更耗电。类似的，如果不需要频繁更新用户的位置信息，那么可以将 maximumAge 设置为 Infinity，从而始终都使用上一次的坐标信息。

```javascript
navigator.geolocation.getCurrentPosition(locationSuccess, locationError, {
  // 指示浏览器获取高精度的位置，默认为false
  enableHighAcuracy: true,
  // 指定获取地理位置的超时时间，默认不限时，单位为毫秒
  timeout: 5000,
  // 最长有效期，在重复获取地理位置时，此参数指定多久再次获取位置。
  maximumAge: 3000
});
```

## watchPosition() 方法

如果要跟踪用户的位置，那么可以使用 watchPosition() 方法。这个方法的使用和 getCurrentPosition() 完全相同。实际上 watchPosition() 与定时调用 getCurrentPosition() 能得到相同效果。

在第一次调用 watchPosition() 方法后，会取得当前位置，执行成功回调或者错误回调。然后，watchPosition() 就地等待系统发出位置已改变的信号。

调用 watchPosition() 会返回一个数值标识符，用于跟踪监控的操作。基于这个返回值可以取消监控操作，只要将其传递给 clearWatch() 方法即可（与使用 setTimeout() 和 clearTimeout() 类似），例如：

```javascript
    var watchId = navigator.geolocation.watchPosition(geo_success, geo_error);
    clearWatch(watchId);
```

## Geolocation 定位原理

Geolocation API 的数据来源可能是 GPS、IP 地址、RFID、WiFi、蓝牙 MAC 地址、GSM/CDMA 卡 ID 等。因为 Geolocation API 是运行在你本地设备上的。

在HTML5的实现中，手机等移动设备当然优先使用GPS定位，而笔记本和部分平板，最准的定位是WIFI，至于网线上网的台式机，一般就只能使用IP来定位了，这个准确度最低。

**至于网线上网的台式机，一般就只能使用IP来定位了，这个准确度最低。**

