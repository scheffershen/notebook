getting-started-with-xapi-four-lines-of-code
===

https://learningsolutionsmag.com/articles/2322/getting-started-with-xapi-four-lines-of-code

May 17, 2017

In fact, all that you need in order to send an xAPI statement is four lines of code!

Before we focus on the specific mechanics of sending an xAPI statement, let’s look at the four steps you must take to send a statement:

1. Define a variable that holds the URL address of the learning record store (LRS) and the username and password to authenticate
2. Tell the browser to use that variable for the LRS
3. Create a variable and define the xAPI statement
4. Send the statement

Below is a complete, functional webpage where I can illustrate the JavaScript required to create and send a statement

```html
<!doctype html>  
<head>  
   <!-- Includes for ADL's xAPI Wrapper -->  
   <!-- Download the files from: -->  
   <!-- https://github.com/adlnet/xAPIWrapper -->  
   <script type="text/javascript" src="./js/cryptojs_v3.1.2.js"></script>  
    <script type="text/javascript" src="./js/xapiwrapper.js">
    <script>  
    function send_statement(){  
        var conf = {  
             "endpoint" : "https://lrs.adlnet.gov/xapi/",  
             "auth" : "Basic " + toBase64("xapi-tools:xapi-tools")  
             };  
  
        ADL.XAPIWrapper.changeConfig(conf);  
           
        //define the xapi statement being sent  
        var statement = {  
            "actor": {  
                "mbox": "mailto:Tester@example.com",  
                "name": "Your Name Here",  
                "objectType": "Agent"  
            },  
            "verb": {  
                "id": "http://example.com/xapi/interacted",  
                "display": {"en-US": "interacted"}  
            },  
            "object": {  
                "id": "http://example.com/button_example",  
                "definition": {  
                    "name": {"en-US": "Button example"},  
                    "description": {"en-US": "Example xAPI Button"}  
                },  
                "objectType": "Activity"  
            }  
        }; //end statement definition  
   
        // Dispatch the statement to the LRS  
        var result = ADL.XAPIWrapper.sendStatement(statement);  
        }  
    </script>
</head>  
  
<body>  
    <button type="button" onclick="send_statement()">Send Statements</button>  
</body>  
</html>       
```

## Let’s do it again—with video!

In this case, I’m sending statements recording what segments of a video the user is watching.

```html
<script type="text/javascript">  
var playFrom = 0;  
jwplayer('mediaplayer1').setup({  
  width: "480",  
  aspectratio: "16:9",  
  file: "./big_buck_bunny.mp4",  
  autostart: false,  
 });  
/ this adds the pop-up to ask for the user's name. We'll build the ACTOR definition  
// with this first name  
 var firstname = prompt("What is your first name?")  
// Tell the content where to send the xAPI statements  
 var conf = {"endpoint" : "https://lrs.adlnet.gov/xapi/",  
   "auth" : "Basic " + toBase64("xapi-tools:xapi-tools")};  
// Tell the browser to use the variable we just defined  
 ADL.XAPIWrapper.changeConfig(conf);  

// Record time index where user started watching  
 jwplayer().onPlay(function(event){  
  playFrom = jwplayer().getPosition()  
 }); //end onPlay 
// Send statement when someone pauses the video  
 jwplayer().onPause(function(event){  
  var position = jwplayer().getPosition()  

//define the xapi statement being sent  
  var pausestatement = {  
   "actor": {  
    "mbox": "mailto:" + firstname + "@devlearn16.com",  
    "name": firstname,  
    "objectType": "Agent"  
   },  
   "verb": {  
    "id": "http://adlnet.gov/expapi/verbs/Play",  
    "display": {  
     "en-US": "Video Played"}  
   },  
   "object": {  
    "id": "http://example.com/bigbuckbunnyvid.html",  
    "definition": {  
     "name": {"en-US": "Big Buck Bunny Video"},  
     "description": {"en-US": "sample description"}  
    },  
    "objectType": "Activity"  
   },  
   "result": {  
     "extensions":{  
      "http://example.com/xapi/period_start" : playFrom,  
      "http://example.com/xapi/period_end"     : position  
     }  
    }  
    }; // end statement definition  
  
// Send the statement to the LRS  
  var result = ADL.XAPIWrapper.sendStatement(pausestatement);  
  
 }); //end onPause  
</script>
```

No matter what you want to record with xAPI, it will always come back to those four steps and those four lines of code. You can build all kinds of activities, interactions, or data collections that may be very complicated in how they are implemented. In any of those instances, it’s still the same four-step process to send your statement.

