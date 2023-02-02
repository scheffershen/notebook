---
sidebar_position: 3
---

Golf Explained - 7- Bais Run-time Calls
===

SCORM 2004 3rd Edition

This example demonstrates the use of basic runtime calls in a *multi-page SCO*. It includes a demonstration of *bookmarking*, *status reporting* (completion and success),  *score* and *time*. It also includes the addition of a basic "controller" for providing intra-SCO navigation.

## imsmanifest.xml 

- manifest identifier="com.scorm.golfsamples.runtime.basicruntime.20043rd"
    + metatdata
    + organizations
        * organization
            - title
            - item identifier="item_1" identifierref="resource_1"
                + title
                + imsss:sequencing
                    * imsss:deliveryControls completionSetByContent="true" objectiveSetByContent="true"
            - imsss:sequencing 
                + imsss:controlMode choice="true" flow="true"
    + resources
        * resource identifier="resource_1" type="webcontent" adlcp:scormType="sco" href="shared/launchpage.html"
            - file href="Etiquette/Course.html"
            - ... (multi-page SCO)

## shared/launchpage.html

- scormfunction.js

```js
    /*************************************/
    //content definition
    /*************************************/
    var pageArray = new Array(15);
    
    pageArray[0] = "Playing/Playing.html";
    pageArray[5] = "Etiquette/Course.html";
    pageArray[8] = "Handicapping/Overview.html";
    pageArray[12] = "HavingFun/HowToHaveFun.html";
    pageArray[14] = "shared/assessmenttemplate.html?questions=Playing&questions=Etiquette&questions=Handicapping&questions=HavingFun";
```

```html
<body onload="doStart(false);" onbeforeunload="doUnload(false);" onunload="doUnload();">
    <iframe width="100%" id="contentFrame" src=""></iframe>
    <div id="navDiv">
        <input type="button" value="<- Previous" id="butPrevious" onclick="doPrevious();"/>
        <input type="button" value="Next ->" id="butNext" onclick="doNext();"/>
        <input type="button" value="Exit" id="butExit" onclick="doExit();"/>
    </div>
</body>
```

- doStart()
    + ScormProcessInitialize(); //initialize communication with the LMS
    + ScormProcessGetValue("cmi.completion_status")
    + ScormProcessGetValue("cmi.location") //if the user stored a bookmark
    + goToPage()
- goToPage()    
    + ScormProcessSetValue("cmi.location") //0-15
    + ScormProcessSetValue("cmi.completion_status") 
- doUnload(pressedExit)
    + ScormProcessSetValue("cmi.session_time") //record the session time
    + ScormProcessSetValue("cmi.exit") // "suspend"
    + ScormProcessTerminate()
- doExit()
    + ScormProcessSetValue("cmi.exit"); // "suspend", ""
    + ScormProcessSetValue("adl.nav.request") // "suspendAll", "exitAll"
- RecordTest(score)
    + ScormProcessSetValue("cmi.score.raw") // score
    + ScormProcessSetValue("cmi.score.min") // 0
    + ScormProcessSetValue("cmi.score.max") // 100
    + ScormProcessSetValue("cmi.score.scaled") // score / 100
    + ScormProcessSetValue("cmi.success_status") // "passed", "failed" 

- doPrevious()
    + gotToPage()
- doNext()
    + gotoPage()

## shared/scormfunctions.js

//window.onload = ScormProcessInitialize;
//window.onunload = ScormProcessTerminate;
//window.onbeforeunload = ScormProcessTerminate;

- ScormProcessInitialize()
    + GetAPI(win) // searching for the LMS
        * ScanForAPI(win) // searches for an object named API_1484_11
    + API.Initialize("")
- ScormProcessTerminate()
    + API.Terminate("")
- ScormProcessGetValue(element)
    + API.GetValue(element)
- ScormProcessSetValue(element, value)
    + API.SetValue(element, value)

## shared/assessmenttemplate.html

```js
var QUESTION_TYPE_CHOICE = "choice";
var QUESTION_TYPE_TF = "true-false";
var QUESTION_TYPE_NUMERIC = "numeric";
```

- Question(id, text, type, answers, correctAnswer, objectiveId)
- Test(questions)
- Test.prototype.AddQuestion = function(question) {}
- var test = new Test(new Array());
    + Questions
    + AddQuestion(question)

```js
var queryString = new String(document.location.search);
queryString = queryString.replace("?", "");
var includeFiles = queryString.split("&");
for (var i=0; i<includeFiles.length; i++){
    var questionsFile = includeFiles[i].replace("questions=", "");
    document.write('<script src="../', questionsFile, '/questions.js" type="text/JavaScript"><\/script>');
}
```

- CheckNumeric(obj)
- SubmitAnswers()
    + parent.RecordQuestion()
    + parent.RecordTest(score)

## Window.open()

The *Window* interface's *open()* method loads the specified resource into the browsing context (window, &lt;iframe&gt; or tab) with the specified name. If the name doesn't exist, then a new window is opened and the specified resource is loaded into its browsing context.

    var window = window.open(url, windowName, [windowFeatures]);

```js
    var windowObjectReference;
    var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

    function openRequestedPopup() {
      windowObjectReference = window.open("http://www.cnn.com/", "CNN_WindowName", strWindowFeatures);
    }
```

```js
var windowObjectReference;

function openRequestedPopup() {
  windowObjectReference = window.open(
    "http://www.domainname.ext/path/ImageFile.png",
    "DescriptiveWindowName",
    "resizable,scrollbars,status"
  );
}
```

## window.opener

The *Window* interface's *opener* property returns a reference to the window that opened the window using *open()*.

    openerWindow = window.opener;

A *Window* referring to the window that called *open()* to open the current window, or null if this window was not opened by being linked to or created by another.

## Window.parent

The Window.parent property is a reference to the parent of the current window or subframe.

    var parentWindow = window.parent; 

If a window does not have a parent, its parent property is a reference to itself.

When a window is loaded in an &lt;iframe&gt;, &lt;object&gt;, or &lt;frame&gt;, its parent is the window with the element embedding the window.