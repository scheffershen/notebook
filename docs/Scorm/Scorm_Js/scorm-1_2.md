Scorm 1.2
===

https://www.learnupon.com/blog/scorm-pro-what-is-scorm/
https://scorm.com/scorm-explained/technical-scorm/scorm-12-overview-for-developers/
https://cybercussion.com/bookmarklets/SCORM/

- what SCORM actually is
- how it relates to authoring tools
- how to get SCORM content into your LMS
- how SCORM API tracking really works
- what the future of the standard looks like.

## What is SCORM?

SCORM stands for: Shareable Content Object Reference Model.

## The Run-Time Environment in a Nutshell

A SCORM conformant LMS is required to implement an API consisting of 8 Functions that content may access to communicate with the LMS.

    LMSInitialize()
    LMSFinish()
    LMSGetValue()
    LMSSetValue()
    LMSCommit()
    LMSGetLastError()
    LMSGetErrorString()
    LMSGetDiagnostic()

- This API is implemented by what the SCORM calls an *API Adapter*. 
- An API Adapter must reside in a window that is *an opener window* or *a parent frame* of the window that contains the content. 
- This means that the LMS may launch the content either in a new window or in a frameset. 
- The Adapter must implement the 8 functions listed above.
- All communication between the content and the LMS is handled by *this adapter*, 
- the content author does not need to worry about communicating with the server, he only needs to be able to *find the API Adapter* and make the appropriate JavaScript calls. 
- It is important to note that content can only communicate with the LMS through this JavaScript *API Adapter*. 

In the real-world, though, we want a much richer interaction. We want to be able to report *test results*, *track time*, bookmark our *last location* and more. 

*LMSGetValue()* retrieves a data model element’s value from the LMS, 
*LMSSetValue()* writes a value for a data model element to the LMS and 
*LMSCommit()* may be called after any values are set to ensure that the data is persisted.

*cmi.core.lesson_location* is the data element that describes the user’s location in the content

When the content begins (after it has called LMSInitialize();), it may want to make this call to find out where the user left off and return him to that point:

    strLastLocation = objAPI.LMSGetValue("cmi.core.lesson_location");

When the content goes to another area, it might make this call to save the user’s location:

    blnSuccess = objAPI.LMSSetValue("cmi.core.lesson_location", "page3");
    blnSuccess = objAPI.LMSCommit("");

## The Content Aggregation Model in a Nutshell

The Content Aggregation model is divided into three parts, 
- the Content Model, 
- the Meta-data
- Content Packaging

The *Content Model* describes the content being delivered. If the content contains more than one module, the content model describes any relationships between those modules (called *Aggregations*). The content model also describes the physical structure of the content (files needed, etc).

The Content Model defines a powerful model for breaking content into arbitrarily sized units of reuse. *These units are called Sharable Content Objects (SCOs) and Assets*. An Asset is simply an “electronic representation of media, text, images, sound, web pages, assessment objects or other pieces of data”. Examples of Assets include images, sound clips, Flash movies, etc. A SCO is a collection of one or more assets that represents a logical unit of learning.

The *Content Packaging* specification defines how the Content Model and Meta-data are implemented. In order to facilitate smooth interoperability between systems, all content needs to be packaged in a similar manner. The Content Packaging specification requires all content to be transferred in a folder or a ZIP file called a PIF. At the root of this folder there must be an XML file called *imsmanifest.xml* which contains information from the Content Model and Meta-data specifications in a well-defined format. There are many good examples of Content Packaging available on the ADL website.

## SCORM 1.2 Technical Summary

- All communication between content and an LMS is handled via JavaScript
- All content should include an XML file called imsmanifest.xml which describes its structure and other characteristics to the LMS.
