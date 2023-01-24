Close ALL open HTML tags in PHP string
======================================

## example 1

[Close ALL open HTML tags in PHP string](https://gist.github.com/JayWood/348752b568ecd63ae5ce)

```php
function closetags($html) {
    preg_match_all('#<([a-z]+)(?: .*)?(?<![/|/ ])>#iU', $html, $result);
    $openedtags = $result[1];
    preg_match_all('#</([a-z]+)>#iU', $html, $result);

    $closedtags = $result[1];
    $len_opened = count($openedtags);

    if (count($closedtags) == $len_opened) {
        return $html;
    }
    $openedtags = array_reverse($openedtags);
    for ($i=0; $i < $len_opened; $i++) {
        if (!in_array($openedtags[$i], $closedtags)) {
            $html .= '</'.$openedtags[$i].'>';
        } else {
            unset($closedtags[array_search($openedtags[$i], $closedtags)]);
        }
    }
    return $html;
}
```

## example 2

[Searching for all open HTML tags and closing them [PHP]](https://pretagteam.com/question/searching-for-all-open-html-tags-and-closing-them-php)

```php
$yourText = "<div><span>Text<em>!";

$doc = new DOMDocument();
$doc->loadHTML($yourText, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
$yourText = $doc->saveHTML();

echo $yourText;

```