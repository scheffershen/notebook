Offline Web
===========

## Offline Detection

## HTML5 APIs for Offline Detection**

    navigator.onLine = true / false; 

```
    <script type="text/javascript">
        console.log(window.navigator.onLine);

        var timerPing;

        function startPing() {
            setInterval(function() {
                // AJAX call
                var ping = new XMLHttpRequest()
                ping.open("HEAD", "/favicon.ico");
                ping.addEventListener("load", function() {
                    if (ping.statusCode == 200) {
                        // We are still online
                    }
                });
                ping.addEventListener("error", function() {
                    // We are offline
                });    
                ping.send();   
            }, 3600000);
        }

        function stopPing() {
            if (timerPing) {
                clearInterval(timerPing);
            }
        }

        // windows online and offline event
        window.addEventListener("online", function(e) {
            document.querySelector("output").innerHTML = "You might be online";
            startPing();
        });


        window.addEventListener("offline", function(e) {
            document.querySelector("output").innerHTML = "You might be offline";
            stopPing();
        });    

    </script>
```

## Online Detection with Ping**

## The Offline.js Framework**

    github.hubspot.com/offline/docs/welcome

## Data Storage

## Data Storage APIs
    
1. Web Storage 
    Session / Local 

2. WebSQL

3. IndexedDB

## Using LocalStorage

    // save the result in cache
    sessionStorage.setItem(query, request.response); 

    if ( sessionStorage.getItem(query) != undefined && 
         sessionStorage.getItem(query) != null ) {
        // We have the article in the cache
    }

localforage

    <script src="localforage.js"></script>
    <script>localforage.getItem('something', myCallback);</script>
