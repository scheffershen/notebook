---
sidebar_position: 5
---

Golf Explained - 9 - Forced Sequentail Order
===

SCORM 2004 3rd Edition

## Sequencing Strategy:

This example demonstrates a sequencing strategy that requires the learner
to *visit the SCOs in order*. Once a SCO has been visited, the learner can
jump backwards to review material, but the learner can not jump ahead beyond
the next SCO.

## Rollup Strategy:

- Completion: All activities must be completed
- Satisfaction: All activities must be satisfied (activities without assessment are satisfied upon being completed)
- Score: No score is rolled up (all activities have objective measure weight = 0)

This example also demonstrates using a sequencing collection to define sequencing rules that are common to every item.

## imsmanifest.xml 

- manifest identifier="com.scorm.golfsamples.sequencing.forcedsequential.20043rd"
    + metatdata
    + organizations default="golf_sample_default_org"
        * organization identifier="golf_sample_default_org" adlseq:objectivesGlobalToSystem="false"
            - title
            - item identifier="playing_item" identifierref="playing_resource"
                + title = "Playing the Game"
                + imsss:sequencing IDRef="common_seq_rules" // (new in example 9)
                    * imsss:objectives
                        - imsss:primaryObjective objectiveID="playing_satisfied" satisfiedByMeasure="true"
                            + imsss:mapInfo targetObjectiveID="com.scorm.golfsamples.sequencing.forcedsequential.playing_satisfied" 
                             readSatisfiedStatus="true" writeSatisfiedStatus="true"
                        - imsss:objective objectiveID="obj_etiquette"
                        - ...
                    * imsss:deliveryControls completionSetByContent="true" objectiveSetByContent="true" (same as example 7)
            - item identifier="etuqiette_item" identifierref="etiquette_resource" // (new in example 9)
                + title = "Etiquette"
                + imsss:sequencing IDRef="common_seq_rules"
                    * imsss:sequencingRules // (new in example 9)
                        - imsss:preConditionRule
                            + imsss:ruleConditions conditionCombination="any"
                                * imsss:ruleCondition referencedObjective="previous_sco_satisfied" operator="not" condition="satisfied"
                                * imsss:ruleCondition referencedObjective="previous_sco_satisfied" operator="not" condition="objectiveStatusKnown"
                            + imsss:ruleAction action="disabled"
                    * imsss:objectives
                        - imsss:primaryObjective objectiveID="etiquette_satisfied" satisfiedByMeasure="true"
                            + imsss:mapInfo targetObjectiveID = "com.scorm.golfsamples.sequencing.forcedsequential.etiquette_satisfied" 
                             readSatisfiedStatus = "true" writeSatisfiedStatus = "true"
                        - imsss:objective objectiveID="previous_sco_satisfied"
                            + imsss:mapInfo targetObjectiveID="com.scorm.golfsamples.sequencing.forcedsequential.playing_satisfied" 
                             readSatisfiedStatus="true" writeSatisfiedStatus="false"
                        - ...

            - imsss:sequencing 
                + imsss:controlMode choice="true" flow="true" (same as example 8)
    + resources
        * resource identifier="playing_resource" type="webcontent" adlcp:scormType="sco" href="shared/launchpage.html?content=playing"
            - file href="Playing/Par.html"
            - dependency identifierref="common_files"
        * resource identifier="etiquette_resource" type="webcontent" adlcp:scormType="sco" href="shared/launchpage.html?content=etiquette"
    + imsss:sequencingCollection
        * imsss:sequencing ID="common_seq_rules"
            - imsss:rollupRules objectiveMeasureWeight="0"
            - imsss:deliveryControls completionSetByContent="true" objectiveSetByContent="true"

## shared/launchpage.html

- scormfunction.js

```js
    /*************************************/
    //content definition
    /*************************************/
    var queryString = new String(document.location.search); // shared/launchpage.html?content=playing
    queryString = queryString.replace("?content=", "");
    queryString = queryString.toLowerCase(); //playing

    var hasAssessment = false;

    switch (queryString){
        case "playing":
            var pageArray = new Array(5);
            pageArray[0] = "Playing/Playing.html";
        break;
        ...
        case "assessment":
            hasAssessment = true;
            var pageArray = new Array(1);
            pageArray[0] = "shared/assessmenttemplate.html?questions=Playing&questions=Etiquette&questions=Handicapping&questions=HavingFun";
        break;

```

```js
/*************************************/
//navigation functions
/*************************************/
var currentPage = null;
var startTimeStamp = null;
var processedUnload = false;
var reachedEnd = false;
```

```js
    /*************************************
    Further content definition
    -associates pages with learning objectives and tracks which pages
    have been visited
    -tracks the questions reported by learning objective
    *************************************/
    var pageObjectiveArray = new Array(15);
    
    function ObjectiveCompletion(objective, visited){
        this.LearningObjective = objective;
        this.Visited = visited;
    }

    pageObjectiveArray[0] = new ObjectiveCompletion("obj_playing", false);
    pageObjectiveArray[5] = new ObjectiveCompletion("obj_etiquette", false);
    pageObjectiveArray[8] = new ObjectiveCompletion("obj_handicapping", false);
    pageObjectiveArray[12] = new ObjectiveCompletion("obj_havingfun", false);
    pageObjectiveArray[14] = new ObjectiveCompletion("", false);  //no objective for the final test

    //Array for tracking the number of questions associated with each objective
    var objectiveQuestionCount = new Array(4);
    objectiveQuestionCount["obj_playing"] = 0;

    //Array for tracking the number of correct responses for each objective
    var objectiveCorrectCount = new Array(4);
    objectiveCorrectCount["obj_playing"] = 0;
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
    + SetupIFrame();
    + ScormProcessInitialize(); //initialize communication with the LMS
    + ScormProcessGetValue("cmi.completion_status")
    + ScormProcessSetValue("cmi.completion_status", "incomplete");
    + bookmark = ScormProcessGetValue("cmi.location", false); // user bookmark
    + goToPage()
- goToPage()    
    + ScormProcessSetValue("cmi.location", currentPage); // 0-15
    + UpdateLearningObjectivesProgress(currentPage); // Only increment progress
    + ScormProcessSetValue("cmi.completion_status", "completed");
    + ScormProcessSetValue("cmi.progress_measure", progressMeasure); // new in example 8
    + ScormProcessSetValue("cmi.success_status", "passed"); // example 9
    + ScormProcessCommit();
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
    + ScormProcessSetValue("cmi.success_status") //  "passed" or "failed"
    + ScormProcessSetValue("cmi.objectives." + objIndex + ".score.scaled", score); // example 8
    + ScormProcessSetValue("cmi.objectives." + objIndex + ".score.raw", objectiveCorrectCount[objId]); // objId = obj_playing 
    + ScormProcessSetValue("cmi.objectives." + objIndex + ".score.min", 0);
    + ScormProcessSetValue("cmi.objectives." + objIndex + ".score.max", objectiveQuestionCount[objId]); // example 8
- RecordQuestion(id, questionText, questionType, learnerResponse, correctAnswer, wasCorrect, objectiveId)
    +  ScormProcessGetValue("cmi.interactions._count", true)
    +  ScormProcessSetValue("cmi.interactions." + nextIndex + ".id", id);
    +  ScormProcessSetValue("cmi.interactions." + nextIndex + ".description", questionText);
    +  ScormProcessSetValue("cmi.interactions." + nextIndex + ".objectives.0.id", objectiveId);
    +  ScormProcessSetValue("cmi.interactions." + nextIndex + ".learner_response", learnerResponse);
    +  ScormProcessSetValue("cmi.interactions." + nextIndex + ".correct_responses.0.pattern", correctAnswer);
    +  ScormProcessSetValue("cmi.interactions." + nextIndex + ".result", "correct");
    +  ScormProcessSetValue("cmi.interactions." + nextIndex + ".result", "incorrect");
- UpdateLearningObjectivesProgress(currentPage)
    + ScormProcessSetValue("cmi.objectives." + objIndex + ".progress_measure", objProgressMeasure);
    + ScormProcessSetValue("cmi.objectives." + objIndex + ".completion_status", "completed"); // or "incomplete"
- FindObjectiveIndex(objectiveId)
    + ScormProcessGetValue("cmi.objectives._count", true);
    + ScormProcessGetValue("cmi.objectives." + i + ".id", true);

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
    + parent.RecordQuestion(test.Questions[i].Id, ...) // code in example 8
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