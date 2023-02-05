"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[43310],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,k=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:4},o="Golf Explained - 8 - Advanced Run-time Calls",l={unversionedId:"Scorm/Golf Explained - 8-Advanced Run-time Calls",id:"Scorm/Golf Explained - 8-Advanced Run-time Calls",title:"Golf Explained - 8 - Advanced Run-time Calls",description:"This example demonstrates the use of more advanced runtime calls in a multi-page SCO. It includes a demonstration of reporting interactions (question results), progress towards specific learning objective and overall progress towards completion.",source:"@site/docs/Scorm/Golf Explained - 8-Advanced Run-time Calls.md",sourceDirName:"Scorm",slug:"/Scorm/Golf Explained - 8-Advanced Run-time Calls",permalink:"/notebook/docs/Scorm/Golf Explained - 8-Advanced Run-time Calls",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Scorm/Golf Explained - 8-Advanced Run-time Calls.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Golf Explained - 7- Bais Run-time Calls",permalink:"/notebook/docs/Scorm/Golf Explained - 7-Basic Run-time Calls"},next:{title:"Golf Explained - 9 - Forced Sequentail Order",permalink:"/notebook/docs/Scorm/Golf Explained - 9-Forced Sequential Order (Prerequistes)"}},s={},c=[{value:"imsmanifest.xml",id:"imsmanifestxml",level:2},{value:"shared/launchpage.html",id:"sharedlaunchpagehtml",level:2},{value:"shared/scormfunctions.js",id:"sharedscormfunctionsjs",level:2},{value:"shared/assessmenttemplate.html",id:"sharedassessmenttemplatehtml",level:2},{value:"Window.open()",id:"windowopen",level:2},{value:"window.opener",id:"windowopener",level:2},{value:"Window.parent",id:"windowparent",level:2}],m={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"golf-explained---8---advanced-run-time-calls"},"Golf Explained - 8 - Advanced Run-time Calls"),(0,r.kt)("p",null,"This example demonstrates the use of more advanced runtime calls in a ",(0,r.kt)("em",{parentName:"p"},"multi-page SCO"),". It includes a demonstration of ",(0,r.kt)("em",{parentName:"p"},"reporting interactions")," (",(0,r.kt)("em",{parentName:"p"},"question results"),"), ",(0,r.kt)("em",{parentName:"p"},"progress towards specific learning objective")," and ",(0,r.kt)("em",{parentName:"p"},"overall progress towards completion"),". "),(0,r.kt)("p",null,"It also demonstrates using the manifest to specify a passing score rather than\nhard coding the passing score within the content."),(0,r.kt)("p",null,"SCORM 2004 3rd Edition"),(0,r.kt)("h2",{id:"imsmanifestxml"},"imsmanifest.xml"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'manifest identifier="com.scorm.golfsamples.runtime.advancedruntime.20043rd"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"metatdata"),(0,r.kt)("li",{parentName:"ul"},'organizations default="golf_sample_default_org"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'organization identifier="golf_sample_default_org" adlseq:objectivesGlobalToSystem="false"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"title"),(0,r.kt)("li",{parentName:"ul"},'item identifier="item_1" identifierref="resource_1"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"title"),(0,r.kt)("li",{parentName:"ul"},"imsss:sequencing",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"imsss:objectives",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'imsss:primaryObjective objectiveID="PRIMARYOBJ" satisfiedByMeasure="true"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"imsss:minNormalizedMeasure = 0.8"))),(0,r.kt)("li",{parentName:"ul"},'imsss:objective objectiveID="obj_etiquette"'),(0,r.kt)("li",{parentName:"ul"},"..."))),(0,r.kt)("li",{parentName:"ul"},'imsss:deliveryControls completionSetByContent="true" objectiveSetByContent="true" (same as example 7)'))))),(0,r.kt)("li",{parentName:"ul"},"imsss:sequencing ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'imsss:controlMode choice="true" flow="true" (same as example 8)'))))))),(0,r.kt)("li",{parentName:"ul"},"resources",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'resource identifier="resource_1" type="webcontent" adlcp:scormType="sco" href="shared/launchpage.html"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'file href="Etiquette/Course.html"'),(0,r.kt)("li",{parentName:"ul"},"...")))))))),(0,r.kt)("h2",{id:"sharedlaunchpagehtml"},"shared/launchpage.html"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"scormfunction.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'    /*************************************/\n    //content definition\n    /*************************************/\n    var pageArray = new Array(15);\n    \n    pageArray[0] = "Playing/Playing.html";\n    pageArray[5] = "Etiquette/Course.html";\n    pageArray[8] = "Handicapping/Overview.html";\n    pageArray[12] = "HavingFun/HowToHaveFun.html";\n    pageArray[14] = "shared/assessmenttemplate.html?questions=Playing&questions=Etiquette&questions=Handicapping&questions=HavingFun";\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'    /*************************************\n    Further content definition\n    -associates pages with learning objectives and tracks which pages\n    have been visited\n    -tracks the questions reported by learning objective\n    *************************************/\n    var pageObjectiveArray = new Array(15);\n    \n    function ObjectiveCompletion(objective, visited){\n        this.LearningObjective = objective;\n        this.Visited = visited;\n    }\n\n    pageObjectiveArray[0] = new ObjectiveCompletion("obj_playing", false);\n    pageObjectiveArray[5] = new ObjectiveCompletion("obj_etiquette", false);\n    pageObjectiveArray[8] = new ObjectiveCompletion("obj_handicapping", false);\n    pageObjectiveArray[12] = new ObjectiveCompletion("obj_havingfun", false);\n    pageObjectiveArray[14] = new ObjectiveCompletion("", false);  //no objective for the final test\n\n    //Array for tracking the number of questions associated with each objective\n    var objectiveQuestionCount = new Array(4);\n    objectiveQuestionCount["obj_playing"] = 0;\n\n    //Array for tracking the number of correct responses for each objective\n    var objectiveCorrectCount = new Array(4);\n    objectiveCorrectCount["obj_playing"] = 0;\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<body onload="doStart(false);" onbeforeunload="doUnload(false);" onunload="doUnload();">\n    <iframe width="100%" id="contentFrame" src=""></iframe>\n    <div id="navDiv">\n        <input type="button" value="<- Previous" id="butPrevious" onclick="doPrevious();"/>\n        <input type="button" value="Next ->" id="butNext" onclick="doNext();"/>\n        <input type="button" value="Exit" id="butExit" onclick="doExit();"/>\n    </div>\n</body>\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"doStart()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ScormProcessInitialize(); //initialize communication with the LMS"),(0,r.kt)("li",{parentName:"ul"},'ScormProcessGetValue("cmi.completion_status")'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.completion_status", "incomplete");'),(0,r.kt)("li",{parentName:"ul"},'bookmark = ScormProcessGetValue("cmi.location", false); // user bookmark'),(0,r.kt)("li",{parentName:"ul"},"goToPage()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"goToPage()    "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.location", currentPage); // 0-15'),(0,r.kt)("li",{parentName:"ul"},"UpdateLearningObjectivesProgress(currentPage); // Only increment progress"),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.completion_status", "completed");'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.progress_measure", progressMeasure); // new in example 8'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"doUnload(pressedExit)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.session_time") //record the session time'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.exit") // "suspend"'),(0,r.kt)("li",{parentName:"ul"},"ScormProcessTerminate()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"doExit()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.exit"); // "suspend", ""'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("adl.nav.request") // "suspendAll", "exitAll"'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RecordTest(score)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.score.raw") // score'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.score.min") // 0'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.score.max") // 100'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.score.scaled") // score / 100'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.success_status") // example 7'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.objectives." + objIndex + ".score.scaled", score);'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.objectives." + objIndex + ".score.raw", objectiveCorrectCount',"[objId]","); // objId = obj_playing"),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.objectives." + objIndex + ".score.min", 0);'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.objectives." + objIndex + ".score.max", objectiveQuestionCount',"[objId]",");"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RecordQuestion(id, questionText, questionType, learnerResponse, correctAnswer, wasCorrect, objectiveId)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'ScormProcessGetValue("cmi.interactions._count", true)'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.interactions." + nextIndex + ".id", id);'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.interactions." + nextIndex + ".description", questionText);'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.interactions." + nextIndex + ".objectives.0.id", objectiveId);'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.interactions." + nextIndex + ".learner_response", learnerResponse);'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.interactions." + nextIndex + ".correct_responses.0.pattern", correctAnswer);'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.interactions." + nextIndex + ".result", "correct");'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.interactions." + nextIndex + ".result", "incorrect");'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"UpdateLearningObjectivesProgress(currentPage)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.objectives." + objIndex + ".progress_measure", objProgressMeasure);'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessSetValue("cmi.objectives." + objIndex + ".completion_status", "completed"); // or "incomplete"'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"FindObjectiveIndex(objectiveId)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'ScormProcessGetValue("cmi.objectives._count", true);'),(0,r.kt)("li",{parentName:"ul"},'ScormProcessGetValue("cmi.objectives." + i + ".id", true);'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"doPrevious()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"gotToPage()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"doNext()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"gotoPage()")))),(0,r.kt)("h2",{id:"sharedscormfunctionsjs"},"shared/scormfunctions.js"),(0,r.kt)("p",null,"//window.onload = ScormProcessInitialize;\n//window.onunload = ScormProcessTerminate;\n//window.onbeforeunload = ScormProcessTerminate;"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ScormProcessInitialize()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GetAPI(win) // searching for the LMS",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ScanForAPI(win) // searches for an object named API_1484_11"))),(0,r.kt)("li",{parentName:"ul"},'API.Initialize("")'))),(0,r.kt)("li",{parentName:"ul"},"ScormProcessTerminate()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'API.Terminate("")'))),(0,r.kt)("li",{parentName:"ul"},"ScormProcessGetValue(element)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"API.GetValue(element)"))),(0,r.kt)("li",{parentName:"ul"},"ScormProcessSetValue(element, value)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"API.SetValue(element, value)")))),(0,r.kt)("h2",{id:"sharedassessmenttemplatehtml"},"shared/assessmenttemplate.html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var QUESTION_TYPE_CHOICE = "choice";\nvar QUESTION_TYPE_TF = "true-false";\nvar QUESTION_TYPE_NUMERIC = "numeric";\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Question(id, text, type, answers, correctAnswer, objectiveId)"),(0,r.kt)("li",{parentName:"ul"},"Test(questions)"),(0,r.kt)("li",{parentName:"ul"},"Test.prototype.AddQuestion = function(question) {}"),(0,r.kt)("li",{parentName:"ul"},"var test = new Test(new Array());",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Questions"),(0,r.kt)("li",{parentName:"ul"},"AddQuestion(question)")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var queryString = new String(document.location.search);\nqueryString = queryString.replace("?", "");\nvar includeFiles = queryString.split("&");\nfor (var i=0; i<includeFiles.length; i++){\n    var questionsFile = includeFiles[i].replace("questions=", "");\n    document.write(\'<script src="../\', questionsFile, \'/questions.js" type="text/JavaScript"><\\/script>\');\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CheckNumeric(obj)"),(0,r.kt)("li",{parentName:"ul"},"SubmitAnswers()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"parent.RecordQuestion(test.Questions","[i]",".Id, ...) // code in example 8"),(0,r.kt)("li",{parentName:"ul"},"parent.RecordTest(score)")))),(0,r.kt)("h2",{id:"windowopen"},"Window.open()"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"Window")," interface's ",(0,r.kt)("em",{parentName:"p"},"open()")," method loads the specified resource into the browsing context (window, ","<","iframe",">"," or tab) with the specified name. If the name doesn't exist, then a new window is opened and the specified resource is loaded into its browsing context."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"var window = window.open(url, windowName, [windowFeatures]);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'    var windowObjectReference;\n    var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";\n\n    function openRequestedPopup() {\n      windowObjectReference = window.open("http://www.cnn.com/", "CNN_WindowName", strWindowFeatures);\n    }\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var windowObjectReference;\n\nfunction openRequestedPopup() {\n  windowObjectReference = window.open(\n    "http://www.domainname.ext/path/ImageFile.png",\n    "DescriptiveWindowName",\n    "resizable,scrollbars,status"\n  );\n}\n')),(0,r.kt)("h2",{id:"windowopener"},"window.opener"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"Window")," interface's ",(0,r.kt)("em",{parentName:"p"},"opener")," property returns a reference to the window that opened the window using ",(0,r.kt)("em",{parentName:"p"},"open()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"openerWindow = window.opener;\n")),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"Window")," referring to the window that called ",(0,r.kt)("em",{parentName:"p"},"open()")," to open the current window, or null if this window was not opened by being linked to or created by another."),(0,r.kt)("h2",{id:"windowparent"},"Window.parent"),(0,r.kt)("p",null,"The Window.parent property is a reference to the parent of the current window or subframe."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"var parentWindow = window.parent; \n")),(0,r.kt)("p",null,"If a window does not have a parent, its parent property is a reference to itself."),(0,r.kt)("p",null,"When a window is loaded in an ","<","iframe",">",", ","<","object",">",", or ","<","frame",">",", its parent is the window with the element embedding the window."))}p.isMDXComponent=!0}}]);