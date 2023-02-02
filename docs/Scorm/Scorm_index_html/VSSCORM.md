VSSCORM - SCOBot examples
===

http://www.vsscorm.net/2009/05/30/background-reading/
https://stackoverflow.com/questions/28817559/scorm-1-2-api-examples-tutorials
SCOBot examples

## Background Reading

SCORM – the Shareable Common Object Reference Model – started as an initiative from the Advanced Distributed Learning Initiative (ADL – part of the US Department of Defense) – and built on earlier projects such as AICC.

## Step 1 – Getting Started … The RTE Frameset

What are the functions that we have to provide within the API frame/window? Actually, it turns out that it’s a relatively simple set of 8 functions:

- LMSInitialize()
- LMSFinish()
- LMSGetValue()
- LMSSetValue()
- LMSCommit()
- LMSGetLastError()
- LMSGetErrorString()
- LMSGetDiagnostic()

with most of the work being done by the LMSGetValue() and LMSSetValue() functions.

So, let’s start. I’m going to create a simple frameset to house the API frame, and the course itself like this:

```html
<html>
<head>
    <title>VS SCORM - RTE Frameset</title>
    <!-- Rev 1.0 - Sunday, May 31, 2009 -->
</head>
<frameset 
  frameborder="0" framespacing="0" 
  border="0" rows="0,*" cols="*" >
    <frame src="api.html" name="API" noresize>
    <frame src="../course/index.html" name="course">
</frameset>
</html>
```

## Step 2 – Adding the API Functions

This is pretty easy – I’ll create the HTML file called api.html as I’ve defined it in the RTE frameset. Then I’ll add the following code:

```html
<html>
<head>
<title>VS SCORM - RTE API</title>
<script language="javascript">

var debug = true;
function LMSInitialize(dummyString) { 
  if (debug) { alert('*** LMSInitialize ***'); }
  return "true";
}
function LMSGetValue(varname) {
  if (debug) { 
    alert('*** LMSGetValue varname='+varname+' varvalue=value ***');
  }
  return "value";
}

function LMSSetValue(varname,varvalue) {
  if (debug) { 
    alert('*** LMSSetValue varname='+varname +' varvalue='+varvalue+' ***');
  }
  return "true";
}

function LMSCommit(dummyString) {
  if (debug) { alert('*** LMSCommit ***'); }
  return "true";
}

function LMSFinish(dummyString) {
  if (debug) { alert('*** LMSFinish ***'); }
  return "true";
}

function LMSGetLastError() {
  if (debug) { alert('*** LMSGetLastError ***'); }
  return 0;
}

function LMSGetDiagnostic(errorCode) {
  if (debug) { 
    alert('*** LMSGetDiagnostic errorCode='+errorCode+' ***');
  }
  return "diagnostic string";
}

function LMSGetErrorString(errorCode) {
  if (debug) { 
    alert('*** LMSGetErrorString errorCode='+errorCode+' ***'); 
  }
  return "error string";
}
</script>
</head>
<body>
</body>
</html>
```

## Step 4 – The LMS Database – First Steps

```sql
CREATE TABLE `scormvars` (
  `varName` varchar(255) ,
  `varValue` text
) ;
```

## Step 7 – The LMSGetValue() Function

```js
function LMSGetValue(varname) {
      let request = $.ajax({
              url: 'getValue.php?varname='+urlencode(varname) +'&code='+Math.random(),
              type: "GET",
              cache: false,     
          });

          request.done(function( response ) {
            return response
          });

          request.fail(function( jqXHR, textStatus ) {
            console.log("Request failed: " + textStatus);   
            return "";       
          });  
}

function urlencode( str ) {
}
```

http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_urlencode/

## Step 8 – The LMSSetValue() Function

```js
function LMSGetValue(varname,varvalue) {
      let params = {'varvalue': urlencode(varvalue)};
      let request = $.ajax({
              url: 'setValue.php?varname='+urlencode(varname) +'&code='+Math.random(),
              type: "POST",
              cache: false, 
              data: params.serialize()     
          });

          request.done(function( response ) {
            return true;
          });

          request.fail(function( jqXHR, textStatus ) {
            console.log("Request failed: " + textStatus);   
            return false;       
          });
}
```

## Step 9 – Processing Requests on the Server

getValue.php

```php
// select varValue from scormvars where (varName='$varname')
```

setValue.php

```php
// delete from scormvars where (varName='$safevarname')
// insert into scormvars (varName,varValue) values ('$varname','$varvalue')
```

## Step 11 – Testing It Out Again

- cmi.core.lesson_status = passed
- cmi.core.lesson_location = 13
- cmi.core.total_time = 0000:40:50
- cmi.core.session_time = 00:04:02
- cmi.suspend_data = xxx

## Step 14 – cmi.core._children

LMSGetValue(‘cmi.core._children’) call, it expects to see a value returned from the LMS

- student_id,
- student_name,
- lesson_location,
- credit,
- lesson_status,
- entry,
- score,
- total_time,
- exit,
- session_time

## Step 15 – cmi.core.student_id and cmi.core.student_name

- cmi.core.student_name and 
- cmi.core.student_id are read-only data elements. 

## Step 17 – cmi.core.total_time and cmi.core.session_time

cmi.core.total_time = ‘0000:00:00’ It’s a read-only element
cmi.core.session_time = ‘0000:00:00’ since it’s the start of a new session.

## Step 18 – cmi.core.score._children and cmi.core.score.raw

cmi.core.score.raw is mandatory,
cmi.core.score.min
cmi.core.score.max

## Step 19 – Quick Review of the Mandatory Data Elements

- cmi.core.\_children:      Str 255 "student_id,student_name, lesson_location,credit,lesson_status,entry,score,exit"
- cmi.core.student_id:      Identifier
- cmi.core.student_name:    Str 255
- cmi.core.lesson_location: Str 255 An empty string
- cmi.core.credit:        Vocab ‘credit’ or ‘no-credit’
- cmi.core.lesson_status: Vocab  ‘not attempted’
- cmi.core.entry:         Vocab ‘ab initio’
- cmi.core.total_time     Timespan  ‘0000:00:00.00’
- cmi.core.session_time   Timespan  Initialization not required ? write-only
- cmi.core.score._children  Str 255 ‘raw’
- cmi.core.score.raw        Decimal/Blank An empty string
- cmi.suspend_data          Char 4096 An empty string
- cmi.launch_data           Char 4096 A value read from the IMS manifest file

## Step 20 – Progress and Completion – Initialization

- cmi.core.lesson_location
- cmi.core.credit
- cmi.core.lesson_status
- cmi.core.entry
- cmi.core.exit

this is what my ‘scormvars’ table contains:

cmi.core.credit: credit
cmi.core.entry:  ab initio
cmi.core.lesson_location:  2
cmi.core.lesson_status:  failed
cmi.core.score.raw:  13
cmi.core.session_time: 00:04:02
cmi.core.total_time: 0000:00:00
cmi.suspend_data:  C01BA000BA%7E%24KS%2A7XNDF110BBBB1B1B1G

## Step 21 – Progress and Completion – Setting Values

The course can change any of the following elements that relate to course progress and completion tracking:

- cmi.core.lesson_location
- cmi.core.lesson_status
- cmi.core.exit

If *cmi.core.exit* has already been set to ‘suspend’ when the course exits, then *cmi.core.entry* should be set to ‘*resume*’.

## Step 22 – Progress and Completion – cmi.core.lesson_status

cmi.core.lesson_status: 
- passed
- failed
- completed
- incomplete
- browsed
- not attempted

3. When the course is first launched, *cmi.core.lesson_status* should be set to ‘*not attempted*’ by the LMS

5. When the course calls the *LMSFinish()* function, or when the student navigates away from the course (i.e. closes the course window), the LMS should change the value of *cmi.core.lesson_status* to ‘*completed*’. 

6. *cmi.core.credit* is set to ‘*no credit*’, the LMS looks at the value of *cmi.core.lesson_mode*. If it’s set to ‘*browse*’, the LMS changes *cmi.core.lesson_status* to read ‘*browsed*’. Otherwise, it does nothing.

7.  But if a *mastery score* was set in the *manifest* file, it compares it to the value of *cmi.core.score.raw* and sets *cmi.core.lesson_status* to ‘*passed*’ or ‘*failed*’ accordingly.

## Step 23 – More About cmi.core.lesson_status

Time to test it out … the SCO runs through to the end and I score 88 – enough to pass according to the SCO itself. This is what the database table looks like at the end of the SCO but *before LMSFinish()* has been called.

adlcp:masteryscore = 90
cmi.core.credit = credit
cmi.core.entry  = ab initio
cmi.core.lesson_location = 13
cmi.core.lesson_status = passed
cmi.core.score.raw = 88
cmi.core.session_time = 00:02:04
cmi.core.total_time = 0000:00:00
cmi.suspend_data  = K01BB000IA%7E%24KS%2AXQov%5F110BBBB1 …

Then I close the SCO window causing LMSFinish() to be called and here’s what happens.

adlcp:masteryscore = 90
cmi.core.credit = credit
cmi.core.entry   
cmi.core.lesson_location = 13
cmi.core.lesson_status = failed
cmi.core.score.raw = 88
cmi.core.total_time = 0000:02:04
cmi.suspend_data = K01BB000IA%7E%24KS%2AXQov%5F110BBBB1 …

## Step 24 – cmi.suspend_data and cmi.launch_data

cmi.suspend_data – It’s initially blank 
cmi.launch_data – is a little more difficult, this information is stored in the IMS manifest file

## Step 27 – Multiple Students and Multiple SCOs

## Step 28 – Implementing SCO Instances in the Database

```sql
CREATE TABLE scormvars (
  SCOInstanceID int(10) unsigned NOT NULL default '0',
  varName varchar(255) default NULL,
  varValue text,
  KEY SCOInstanceID (SCOInstanceID),
  KEY varName (varName)
) ;
```

## Step 33 – Structure of the Manifest File

```xml
<xml>
  <manifest identifier="Privacy101" version="1.0">
    <metadata></metadata>
    <organizations default="Privacy101_ORG">
      <organization identifier="Privacy101_ORG">
        <title>Privacy 101</title> 
        <item identifier="P1" isvisible="true" identifierref="P1_RES">
          <title>Browser Options</title> 
          <adlcp:maxtimeallowed></adlcp:maxtimeallowed> 
          <adlcp:datafromlms></adlcp:datafromlms> 
          <adlcp:masteryscore>80</adlcp:masteryscore> 
          <adlcp:timelimitaction>exit,message</adlcp:timelimitaction> 
        </item>
      </organization>
    </organizations>
    <resources>
      <resource identifier="P1_RES" type="webcontent" href="Simulation.htm" adlcp:scormtype="sco">
        <file href="Simulation.swf"></file> 
        <file href="Simulation.htm"></file> 
        <file href="SCORM_support/scorm_support.htm"></file> 
        <file href="SCORM_support/scorm_support.js"></file> 
        <file href="SCORM_support/scorm_support.swf"></file> 
      </resource>
      <resource identifier="P_10" type="webcontent" adlcp:scormtype="asset">
        <file href="a001_page_3.html"></file> 
        <dependency identifierref="R_2"></dependency> 
        <dependency identifierref="R_4"></dependency> 
        <dependency identifierref="R_6"></dependency> 
        <dependency identifierref="S_DLGFiles"></dependency> 
        <dependency identifierref="S_SCORMFiles"></dependency> 
        <dependency identifierref="S_BaseFiles"></dependency> 
      </resource>
    </resources>
  </manifest>
</xml>
```
