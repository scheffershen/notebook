auto-suggestion jQuery and Elasticsearch
========================================

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Autosuggestion Elasticsearch Demo</title>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
  <script src="//code.jquery.com/jquery-1.10.2.js"></script>
  <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
</head>

<body>
 
<div class="ui-widget">
  <label for="keyword">Keyword: </label>
  <input id="keyword">
</div>

<script>
  $(function() {
      $("#keyword").autocomplete({
            source: function(request, response) {
                var arr = new Array ();
                var postData = {
                    "query": { "match_phrase_prefix": {"[QUERY FIELD]": request.term.toLowerCase()}},
                    "filter": {"term": {"[FILTER FIELD]": false}}
                };
                
                $.ajax({
                    url: "http://localhost:9200/[INDEX]/[TYPE]/_search",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(postData),
                    success: function(data) {
                        console.log(data);
                        var hitsJson = (data.hits.hits);
                        for(var key in hitsJson) {
                           arr.push(hitsJson[key]._source.[QUERY FIELD]);
                        }
                        response(arr);
                      
                    },
                    error: function(xhr) {
                        alert("err");
                        alert(JSON.stringify(xhr));
                    }
                });
            },
            minLength: 3, delay: 300
        })
  });
</script>

</body>
</html>
```