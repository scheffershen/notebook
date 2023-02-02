---
sidebar_position: 10
---

Send data from SCORM player to LMS
===

https://stackoverflow.com/questions/18781134/send-data-from-scorm-player-to-lms
https://github.com/cybercussion/SCOBot/wiki
https://github.com/gabrieldoty/simplify-scorm
http://scormpool.com

- I have more information on GitHub about the SCO / LMS relationship on my Github project. http://cybercussion.github.io/SCOBot/

- Launch Parameters get tacked into the URL like a query string (index.html?name=value&sky=blue)

-  I use JSON to support the CMI Object. 

## The Runtime for SCORM 1.2

- LMSInitialize()
- LMSGetValue(key)
- LMSSetValue(key, value)
- LMSCommit()
- LMSFinish(
- LMSGetLastError()
- LMSGetErrorString()
- LMSGetDiagnostic()
- 