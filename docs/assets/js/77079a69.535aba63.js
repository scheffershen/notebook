"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1749],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,k=c["".concat(o,".").concat(d)]||c[d]||p[d]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8878:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:7},l="Sequencing example that demonstrates the new features of SCORM 2004 4th Edition.",s={unversionedId:"Scorm/Golf Explained - 11-SCORM 2004 4th Edition Features",id:"Scorm/Golf Explained - 11-SCORM 2004 4th Edition Features",title:"Sequencing example that demonstrates the new features of SCORM 2004 4th Edition.",description:"SCORM 2004 3rd Edition",source:"@site/docs/Scorm/Golf Explained - 11-SCORM 2004 4th Edition Features.md",sourceDirName:"Scorm",slug:"/Scorm/Golf Explained - 11-SCORM 2004 4th Edition Features",permalink:"/notebook/docs/Scorm/Golf Explained - 11-SCORM 2004 4th Edition Features",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Scorm/Golf Explained - 11-SCORM 2004 4th Edition Features.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Sequencing example demonstrating rollup using only a post test",permalink:"/notebook/docs/Scorm/Golf Explained - 10-Post Test Rollup"},next:{title:"run-time-reference",permalink:"/notebook/docs/Scorm/run-time-reference_SCORM_1-2"}},o={},u=[{value:"Sequencing Strategy:",id:"sequencing-strategy",level:2},{value:"Rollup Strategy:",id:"rollup-strategy",level:2},{value:"Others:",id:"others",level:2},{value:"imsmanifest.xml",id:"imsmanifestxml",level:2},{value:"shared/launchpage.html",id:"sharedlaunchpagehtml",level:2},{value:"shared/scormfunctions.js",id:"sharedscormfunctionsjs",level:2},{value:"shared/assessmenttemplate.html",id:"sharedassessmenttemplatehtml",level:2},{value:"Window.open()",id:"windowopen",level:2},{value:"window.opener",id:"windowopener",level:2},{value:"Window.parent",id:"windowparent",level:2}],m={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sequencing-example-that-demonstrates-the-new-features-of-scorm-2004-4th-edition"},"Sequencing example that demonstrates the new features of SCORM 2004 4th Edition."),(0,r.kt)("p",null,"SCORM 2004 3rd Edition"),(0,r.kt)("h2",{id:"sequencing-strategy"},"Sequencing Strategy:"),(0,r.kt)("p",null,"This example maintains the sequencing strategy from the Forced Sequential example. It requires the learner to visit the SCOs in order. Once a SCO has been visited,  the learner can jump backwards to review material, but the learner can not jump ahead beyond the next SCO."),(0,r.kt)("p",null,'To demonstrate the new 4th Edition "jump" navigation request, the learner can now skip straight to the test at anytime from within a SCO, bypassing all sequencing rules. If the learner is taking the content though, it still must be taked in order.'),(0,r.kt)("p",null,"To demonstrate the additional data that can be stored on global objectives, this example uses completion status as the driver for prerequisites. In prior editions of SCORM 2004,  only success status was available on global objectives. In this case, we simply need the learner to complete the SCO not necessarily satisfy it."),(0,r.kt)("h2",{id:"rollup-strategy"},"Rollup Strategy:"),(0,r.kt)("p",null,"This example maintains the sequencing strategy from the Forced Sequential example. It still works even though the sequencing strategy now allows for jump request because it is entirely dependent on the post test."),(0,r.kt)("p",null,"To demonstrate the new rollup of progress measure, this example not includes weights on each SCO that represent their overall contribution to completion."),(0,r.kt)("h2",{id:"others"},"Others:"),(0,r.kt)("p",null,"folow the example 10"),(0,r.kt)("h2",{id:"imsmanifestxml"},"imsmanifest.xml"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'manifest identifier="com.scorm.golfsamples.sequencing.posttestrollup.20043rd"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"metatdata"),(0,r.kt)("li",{parentName:"ul"},'organizations default="golf_sample_default_org"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'organization identifier="golf_sample_default_org" adlseq:objectivesGlobalToSystem="false"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'title = "Golf Explained - Sequencing Post Test Rollup"'),(0,r.kt)("li",{parentName:"ul"},'item identifier="playing_item" identifierref="playing_resource"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'title = "Playing the Game"'),(0,r.kt)("li",{parentName:"ul"},'imsss:sequencing IDRef="content_seq_rules"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"imsss:objectives",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'imsss:primaryObjective objectiveID="playing_satisfied" satisfiedByMeasure="true"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'imsss:mapInfo targetObjectiveID="com.scorm.golfsamples.sequencing.forcedsequential.playing_satisfied"\nreadSatisfiedStatus="true" writeSatisfiedStatus="true"'))))))))),(0,r.kt)("li",{parentName:"ul"},'item identifier="etuqiette_item" identifierref="etiquette_resource" // (new in example 9)',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'title = "Etiquette"'),(0,r.kt)("li",{parentName:"ul"},'imsss:sequencing IDRef="content_seq_rules"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"imsss:sequencingRules",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"imsss:preConditionRule",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'imsss:ruleConditions conditionCombination="any"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'imsss:ruleCondition referencedObjective="previous_sco_satisfied" operator="not" condition="satisfied"'),(0,r.kt)("li",{parentName:"ul"},'imsss:ruleCondition referencedObjective="previous_sco_satisfied" operator="not" condition="objectiveStatusKnown"'))),(0,r.kt)("li",{parentName:"ul"},'imsss:ruleAction action="disabled"'))))),(0,r.kt)("li",{parentName:"ul"},"imsss:objectives",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'imsss:primaryObjective objectiveID="etiquette_satisfied" ',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'imsss:mapInfo targetObjectiveID = "com.scorm.golfsamples.sequencing.forcedsequential.etiquette_satisfied"\nreadSatisfiedStatus = "true" writeSatisfiedStatus = "true"'))),(0,r.kt)("li",{parentName:"ul"},'imsss:objective objectiveID="previous_sco_satisfied"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'imsss:mapInfo targetObjectiveID="com.scorm.golfsamples.sequencing.forcedsequential.playing_satisfied"\nreadSatisfiedStatus="true" writeSatisfiedStatus="false"'))))))))),(0,r.kt)("li",{parentName:"ul"},"item ..."),(0,r.kt)("li",{parentName:"ul"},'item identifier="assessment_item" identifierref="assessment_resource"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'title = "Quiz" '),(0,r.kt)("li",{parentName:"ul"},"imsss:sequencing",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"imsss:sequencingRules",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"imsss:preConditionRule  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'imsss:ruleConditions conditionCombination="any"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'imsss:ruleCondition referencedObjective="previous_sco_satisfied" operator="not" condition="satisfied"'))),(0,r.kt)("li",{parentName:"ul"},'imsss:ruleAction action="disabled"'))))),(0,r.kt)("li",{parentName:"ul"},'imsss:rollupRules rollupObjectiveSatisfied="true" rollupProgressCompletion="true" objectiveMeasureWeight="1"'),(0,r.kt)("li",{parentName:"ul"},"imsss:objectives",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'imsss:primaryObjective objectiveID="assessment_satisfied"'),(0,r.kt)("li",{parentName:"ul"},'imsss:objective objectiveID="previous_sco_satisfied"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'imsss:mapInfo targetObjectiveID="com.scorm.golfsamples.sequencing.forcedsequential.havingfun_satisfied"\nreadSatisfiedStatus="true" writeSatisfiedStatus="false"'))))),(0,r.kt)("li",{parentName:"ul"},'imsss:deliveryControls completionSetByContent="true" objectiveSetByContent="true"'))))),(0,r.kt)("li",{parentName:"ul"},"imsss:sequencing",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'imsss:controlMode choice="true" flow="true\n'))))))),(0,r.kt)("li",{parentName:"ul"},"resources",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'resource identifier="playing_resource" type="webcontent" adlcp:scormType="sco" href="shared/launchpage.html?content=playing"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'file href="Playing/Par.html"'),(0,r.kt)("li",{parentName:"ul"},"file ..."),(0,r.kt)("li",{parentName:"ul"},'dependency identifierref="common_files"'))),(0,r.kt)("li",{parentName:"ul"},'resource identifier="etiquette_resource" type="webcontent" adlcp:scormType="sco" href="shared/launchpage.html?content=etiquette"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"..."))),(0,r.kt)("li",{parentName:"ul"},"resource ..."),(0,r.kt)("li",{parentName:"ul"},'resource identifier="common_files" type="webcontent" adlcp:scormType="asset"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'file href="shared/assessmenttemplate.html"'),(0,r.kt)("li",{parentName:"ul"},"file ..."))))),(0,r.kt)("li",{parentName:"ul"},"imsss:sequencingCollection",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'imsss:sequencing ID="content_seq_rules" // ID="common_seq_rules" ',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'imsss:rollupRules rollupObjectiveSatisfied="false" rollupProgressCompletion="false" objectiveMeasureWeight="0"'),(0,r.kt)("li",{parentName:"ul"},'imsss:deliveryControls completionSetByContent="true" objectiveSetByContent="true"')))))))),(0,r.kt)("h2",{id:"sharedlaunchpagehtml"},"shared/launchpage.html"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"scormfunction.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'    /*************************************/\n    //content definition\n    /*************************************/\n    var queryString = new String(document.location.search); // shared/launchpage.html?content=playing\n    queryString = queryString.replace("?content=", "");\n    queryString = queryString.toLowerCase(); //playing\n\n    var hasAssessment = false;\n\n    switch (queryString){\n        case "playing":\n            var pageArray = new Array(5);\n            pageArray[0] = "Playing/Playing.html";\n            ...\n        break;\n        ...\n        case "assessment":\n            hasAssessment = true;\n            var pageArray = new Array(1);\n            pageArray[0] = "shared/assessmenttemplate.html?questions=Playing&questions=Etiquette&questions=Handicapping&questions=HavingFun";\n        break;\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/*************************************/\n//navigation functions\n/*************************************/\nvar currentPage = null;\nvar startTimeStamp = null;\nvar processedUnload = false;\nvar reachedEnd = false;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<body onload="doStart(false);" onbeforeunload="doUnload(false);" onunload="doUnload();">\n    <iframe width="100%" id="contentFrame" src=""></iframe>\n    <div id="navDiv">\n        <input type="button" value="<- Previous" id="butPrevious" onclick="doPrevious();"/>\n        <input type="button" value="Next ->" id="butNext" onclick="doNext();"/>\n        <input type="button" value="Exit" id="butExit" onclick="doExit();"/>\n    </div>\n</body>\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"doStart()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"SetupIFrame();"),(0,r.kt)("li",{parentName:"ul"},"ScormProcessInitialize(); //initialize communication with the LMS"),(0,r.kt)("li",{parentName:"ul"},'ScormProcessGetValue("cmi.completion_status")'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.completion_status", "incomplete");'),(0,r.kt)("li",{parentName:"ul"},'bookmark = ScormProcessGetValue("cmi.location", false); // user bookmark'),(0,r.kt)("li",{parentName:"ul"},"goToPage()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"goToPage()    "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.location", currentPage); // 0-15'),(0,r.kt)("li",{parentName:"ul"},"UpdateLearningObjectivesProgress(currentPage); // Only increment progress"),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.completion_status", "completed");'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.progress_measure", progressMeasure); // new in example 8'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.success_status", "passed"); // example 9'),(0,r.kt)("li",{parentName:"ul"},"ScormProcessCommit();"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"doUnload(pressedExit)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.session_time") //record the session time'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.exit") // "suspend"'),(0,r.kt)("li",{parentName:"ul"},"ScormProcessTerminate()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"doExit()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.exit"); // "suspend", ""'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("adl.nav.request") // "suspendAll", "exitAll"'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RecordTest(score)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.score.raw") // score'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.score.min") // 0'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.score.max") // 100'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.score.scaled") // score / 100'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.success_status") //  "passed" or "failed"'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.objectives." + objIndex + ".score.scaled", score); // example 8'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.objectives." + objIndex + ".score.raw", objectiveCorrectCount',"[objId]","); // objId = obj_playing "),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.objectives." + objIndex + ".score.min", 0);'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.objectives." + objIndex + ".score.max", objectiveQuestionCount',"[objId]","); // example 8"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RecordQuestion(id, questionText, questionType, learnerResponse, correctAnswer, wasCorrect, objectiveId)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'ScormProcessGetValue("cmi.interactions._count", true)'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.interactions." + nextIndex + ".id", id);'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.interactions." + nextIndex + ".description", questionText);'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.interactions." + nextIndex + ".objectives.0.id", objectiveId);'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.interactions." + nextIndex + ".learner_response", learnerResponse);'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.interactions." + nextIndex + ".correct_responses.0.pattern", correctAnswer);'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.interactions." + nextIndex + ".result", "correct");'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.interactions." + nextIndex + ".result", "incorrect");'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"UpdateLearningObjectivesProgress(currentPage)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.objectives." + objIndex + ".progress_measure", objProgressMeasure);'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.objectives." + objIndex + ".completion_status", "completed"); // or "incomplete"'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"FindObjectiveIndex(objectiveId)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'ScormProcessGetValue("cmi.objectives._count", true);'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessGetValue("cmi.objectives." + i + ".id", true);'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"doPrevious()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"gotToPage()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"doNext()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"gotoPage()")))),(0,r.kt)("h2",{id:"sharedscormfunctionsjs"},"shared/scormfunctions.js"),(0,r.kt)("p",null,"//window.onload = ScormProcessInitialize;\n//window.onunload = ScormProcessTerminate;\n//window.onbeforeunload = ScormProcessTerminate;"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ScormProcessInitialize()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GetAPI(win) // searching for the LMS",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ScanForAPI(win) // searches for an object named API_1484_11"))),(0,r.kt)("li",{parentName:"ul"},'API.Initialize("")'))),(0,r.kt)("li",{parentName:"ul"},"ScormProcessTerminate()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'API.Terminate("")'))),(0,r.kt)("li",{parentName:"ul"},"ScormProcessGetValue(element)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"API.GetValue(element)"))),(0,r.kt)("li",{parentName:"ul"},"ScormProcessSetValue(element, value)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"API.SetValue(element, value)")))),(0,r.kt)("h2",{id:"sharedassessmenttemplatehtml"},"shared/assessmenttemplate.html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var QUESTION_TYPE_CHOICE = "choice";\nvar QUESTION_TYPE_TF = "true-false";\nvar QUESTION_TYPE_NUMERIC = "numeric";\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Question(id, text, type, answers, correctAnswer, objectiveId)"),(0,r.kt)("li",{parentName:"ul"},"Test(questions)"),(0,r.kt)("li",{parentName:"ul"},"Test.prototype.AddQuestion = function(question) {}"),(0,r.kt)("li",{parentName:"ul"},"var test = new Test(new Array());",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Questions"),(0,r.kt)("li",{parentName:"ul"},"AddQuestion(question)")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var queryString = new String(document.location.search);\nqueryString = queryString.replace("?", "");\nvar includeFiles = queryString.split("&");\nfor (var i=0; i<includeFiles.length; i++){\n    var questionsFile = includeFiles[i].replace("questions=", "");\n    document.write(\'<script src="../\', questionsFile, \'/questions.js" type="text/JavaScript"><\\/script>\');\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CheckNumeric(obj)"),(0,r.kt)("li",{parentName:"ul"},"SubmitAnswers()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"parent.RecordQuestion(test.Questions","[i]",".Id, ...) // code in example 8"),(0,r.kt)("li",{parentName:"ul"},"parent.RecordTest(score)")))),(0,r.kt)("h2",{id:"windowopen"},"Window.open()"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"Window")," interface's ",(0,r.kt)("em",{parentName:"p"},"open()")," method loads the specified resource into the browsing context (window, ","<","iframe",">"," or tab) with the specified name. If the name doesn't exist, then a new window is opened and the specified resource is loaded into its browsing context."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"var window = window.open(url, windowName, [windowFeatures]);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'    var windowObjectReference;\n    var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";\n\n    function openRequestedPopup() {\n      windowObjectReference = window.open("http://www.cnn.com/", "CNN_WindowName", strWindowFeatures);\n    }\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var windowObjectReference;\n\nfunction openRequestedPopup() {\n  windowObjectReference = window.open(\n    "http://www.domainname.ext/path/ImageFile.png",\n    "DescriptiveWindowName",\n    "resizable,scrollbars,status"\n  );\n}\n')),(0,r.kt)("h2",{id:"windowopener"},"window.opener"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"Window")," interface's ",(0,r.kt)("em",{parentName:"p"},"opener")," property returns a reference to the window that opened the window using ",(0,r.kt)("em",{parentName:"p"},"open()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"openerWindow = window.opener;\n")),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"Window")," referring to the window that called ",(0,r.kt)("em",{parentName:"p"},"open()")," to open the current window, or null if this window was not opened by being linked to or created by another."),(0,r.kt)("h2",{id:"windowparent"},"Window.parent"),(0,r.kt)("p",null,"The Window.parent property is a reference to the parent of the current window or subframe."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"var parentWindow = window.parent; \n")),(0,r.kt)("p",null,"If a window does not have a parent, its parent property is a reference to itself."),(0,r.kt)("p",null,"When a window is loaded in an ","<","iframe",">",", ","<","object",">",", or ","<","frame",">",", its parent is the window with the element embedding the window."))}c.isMDXComponent=!0}}]);