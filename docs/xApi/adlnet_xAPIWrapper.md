adlnet/xAPIWrapper
===

https://github.com/adlnet/xAPIWrapper

## Including in your Software.

```html
<script type="text/javascript" src="./lib/cryptojs_v3.1.2.js"></script>
<script type="text/javascript" src="./lib/utf8-text-encoding.js"></script>
<script type="text/javascript" src="./src/verbs.js"></script>
<script type="text/javascript" src="./src/xapistatement.js"></script>
<script type="text/javascript" src="./src/xapiwrapper.js"></script>
```

verbs.js
  - ADL.verbs.abandoned
xapistatement.js
  - ADL.XAPIStatement.Agent = Agent;
    ADL.XAPIStatement.Group = Group;
    ADL.XAPIStatement.Verb = Verb;
    ADL.XAPIStatement.Activity = Activity;
    ADL.XAPIStatement.StatementRef = StatementRef;
    ADL.XAPIStatement.SubStatement = SubStatement;
  - xapiVersion = 1.0.1 (6 years ago)
xapiwrapper.js
  - ADL.XAPIWrapper.prepareStatement()
  - ADL.XAPIWrapper.sendStatement()
  - ADL.XAPIWrapper.sendStatements()
  - ADL.XAPIWrapper.getStatements()
  - ADL.XAPIWrapper.getActivities()
  - ADL.XAPIWrapper.sendState()
  - ADL.XAPIWrapper.getState()
  - ADL.XAPIWrapper.deleteState() 
  - ADL.XAPIWrapper.sendActivityProfile()
  - ADL.XAPIWrapper.getActivityProfile()
  - ADL.XAPIWrapper.ADL.XAPIWrapper.deleteActivityProfile()
  - ADL.XAPIWrapper.getAgents()
  - ADL.XAPIWrapper.sendAgentProfile()
  - ADL.XAPIWrapper.getAgentProfile()
  - ADL.XAPIWrapper.deleteAgentProfile()

## example.html

init
    - var stmt = new ADL.XAPIStatement(Agent, Activity)
    - ADL.XAPIWrapper.sendStatement(stmt);

## useWrapper.html

    wrapper = ADL.XAPIWrapper;
                wrapper.changeConfig({
                    endpoint: "https://lrs.adlnet.gov/xapi/",
                    user: 'tom',
                    password: '1234'
                });
