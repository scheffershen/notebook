---
sidebar_position: 9
---

run-time-reference
===

https://scorm.com/scorm-explained/technical-scorm/run-time/run-time-reference/

## API: Scorm 1.2 = Scorm 2004
 
- LMSInitialize( “” ) = Initialize( “” ) : bool
- LMSFinish( “” ) = Terminate( “” ) : bool 
- LMSGetValue( element : CMIElement ) = GetValue( element : CMIElement ) : string
- LMSSetValue( element : CMIElement, value : string) = SetValue( element : CMIElement, value : string) : string 
- LMSCommit( “” ) = Commit( “” ) : bool 
- LMSGetLastError() = GetLastError() : CMIErrorCode
- LMSGetErrorString( errorCode : CMIErrorCode ) = GetErrorString( errorCode : CMIErrorCode ) : string
- LMSGetDiagnostic( errorCode : CMIErrorCode ) = GetDiagnostic( errorCode : CMIErrorCode ) : string 

## Data Model: Scorm 1.2 = Scorm 2004

- cmi.core._children = 

- cmi.core.lesson_status = cmi.completion_status
- "" = cmi.success_status
- "" = cmi.completion_threshold 
- cmi.core.lesson_mode = cmi.mode 
- cmi.core.lesson_location = cmi.location

- cmi.core.student_id = cmi.learner_id
- cmi.core.student_name = cmi.learner_name

- cmi.core.credit = cmi.credit
- cmi.core.entry = cmi.entry 
- cmi.core.exit = cmi.exit 
- cmi.suspend_data = cmi.suspend_data 
- cmi.launch_data = cmi.launch_data
- "" = cmi.mode 

- cmi.core.score_children = 
- cmi.core.score.* = cmi.score.*
- "" = cmi.scaled_passing_score 

- cmi.core.session_time = cmi.session_time
- cmi.core.total_time = cmi.total_time
- "" = cmi.time_limit_action
- "" = cmi.max_time_allowed

- "" = cmi.progress_measure

- cmi.comments = cmi.comments_from_learner.*
- "" = cmi.comments_from_lms

- cmi.objectives.* = cmi.objectives.*

- cmi.student_* = = cmi.learner_preference.*

- cmi.interactions.* = cmi.interactions.*

- "" = adl.nav.request_*
