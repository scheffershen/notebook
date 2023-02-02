index_lms
===

## Rustici Software SCORM examples

- scormfunctions.js
    + ScanForAPI(win)
    + GetAPI(win)
    + ScormProcessInitialize()
    + ScormProcessTerminate()
    + ScormProcessGetValue(element, checkError)
    + ScormProcessSetValue(element, value)
    + ScormProcessCommit()

- body 
    + onload="doStart(false);
    + onbeforeunload="doUnload(false);
    + onunload="doUnload();"

```html
<body onload="doStart(false);" onbeforeunload="doUnload(false);" onunload="doUnload();">
   
    <iframe width="100%" id="contentFrame" src=""></iframe>
    
    <div id="navDiv">
        <input type="button" value="<- Previous" id="butPrevious" onclick="doPrevious();"/>
        <input type="button" value="Next ->" id="butNext" onclick="doNext();"/>
        <!--<input type="button" value="Exit" id="butExit" onclick="doExit();"/>-->
    </div>
```

## CHIESI_OSS_Cours_09112016

- lms/SCORM2004Functions.js
    + SCORM2004_Initialize()
    + SCORM2004_Finish(strExitType, blnStatusWasSet)
    + SCORM2004_CommitData()
    + SCORM2004_GetStudentID()
    + SCORM2004_GetStudentName()
    + ...

- SCORMFunctions.js


- body 
    + onload="Start()
    + onbeforeunload="Unload()" 
    + onunload="Unload()"

```html
<frameset rows="100%,0%,0%,0%" onload="Start()" border="0" onbeforeunload="Unload()" onunload="Unload()">
        <frame name="scormdriver_content" src="lms/blank.html" scrolling="false">
        <frame name="AICCComm" src="lms/AICCComm.html">
        <frame name="rusticisoftware_aicc_results" src="lms/blank.html">
        <frame name="NothingFrame" src="lms/blank.html">
    </frameset>
```