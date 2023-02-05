xAPI Statement 101: Context Element
===

https://www.ht2labs.com/xapi-statement-101-context-element/
22nd June 2016

Having looked at the *Actor*, *Verb*, *Object* and *Result* elements of an xAPI statement, we now turn our attention to the *Context* – not of the Object, but context of the statement as a whole.

## Understanding The Context Element of an xAPI Statement

The context consists of 9 elements that are all optional.

1. *Registration* – a enrollment ID
2. *Instructor* – the person who created the content
3. *Team* – the group that you are a part of
4. *Context Activities*
    - Parent – e.g. nested activities (a level is part of a course)
    - Grouping – e.g. a course is part of a qualification
    - Category – e.g. a tag, e.g. xAPI course, that helps you group things together
    - Other – anything else
5. *Revision* – the revision of the activity or if there has been a previous version of the activity
6. *Platform* – where it happened – e.g. Curatr, Moodle
7. *Language* – what language it happened in
8. *Statement* – reference to another statement that is contextually relevant (NOT the Object Statement)
9. *Extensions* – Not the Result or Object definition, this is more holistic to the whole activity

## An Example Context Statement Summary

```
“context”: {
    “registration”: “957f56b7-1d34-4b01-9408-3ffeb2053b28”,
    “instructor”: {
        “objectType”: “Agent”,
        “name”: “Joe Bloggs”
        “account”: {
            “name”: “321”,
            “homePage”: “http://www.example.com/users/”
        }
    },
    “team”: {
        “objectType”: “Group”,
        “name”: “HT2”,
        “account”: {
            “name”: “123”,
            “homePage”: “http://www.example.com/groups/”
        }
    },
    “contextActivities”: {
        “parent”: [{
            “objectType”: “Activity”,
            “id”: “http://www.example.com/activities/parent”
        }],
        “grouping”: [{
            “objectType”: “Activity”,
            “id”: “http://www.example.com/activities/grouping”
        }],
        “category”: [{
            “objectType”: “Activity”,
            “id”: “http://www.example.com/activities/category”
        }],
        “other”: [{
            “objectType”: “Activity”,
            “id”: “http://www.example.com/activities/other”
        }]
    },
    “revision”: “1.0.0”,
    “platform”: “Example”,
    “language”: “en-GB”,
    “statement”: {
        “objectType”: “StatementRef”,
        “id”: “957f56b7-1d34-4b01-9408-3ffeb2053b28”
    },
    “extensions”: {
        “http://www.example.com/ext”: true
    }
}
```
