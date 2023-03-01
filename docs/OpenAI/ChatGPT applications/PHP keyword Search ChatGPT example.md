PHP keyword Search ChatGPT example
==================================

2023-01

## step 1

You are a PHP developer and now you are creating a web application that can search keywords like Google, for example, when the user enters a keyword "levonorgestrel ethinyl estradiol", the application might find "LEVONORGESTREL/ETHINYLESTRADIOL" , “LEVONORGESTREL/ETHINYLESTRADIOL”, “ethinylestradiol/ levonorgestrel”, “Levonorgestrel Ethinylestradiol” and count the number of keywords in the text, and highlight it, and finally you write unit tests with PHPUnit to test that it works


```php
function searchKeyword($text, $keyword) {
    // Normalize the keyword
    $normalizedKeyword = strtolower(str_replace(' ', '', $keyword));
    
    // Search for the normalized keyword in the text
    $matches = [];
    preg_match_all("/$normalizedKeyword/i", $text, $matches);
    $matchCount = count($matches[0]);
    
    // Highlight the keyword in the text
    $highlightedText = preg_replace("/($normalizedKeyword)/i", '<mark>$1</mark>', $text);
    
    return [
        'matchCount' => $matchCount,
        'highlightedText' => $highlightedText
    ];
}

use PHPUnit\Framework\TestCase;

class SearchKeywordTest extends TestCase {
    public function testNormalizeKeyword() {
        $text = 'LEVONORGESTREL/ETHINYLESTRADIOL ethinylestradiol/ levonorgestrel';
        $keyword = 'Levonorgestrel Ethinylestradiol';
        $result = searchKeyword($text, $keyword);
        $this->assertEquals('levonorgestrelethinylestradiol', $result['normalizedKeyword']);
    }
    
    public function testSearchKeyword() {
        $text = 'LEVONORGESTREL/ETHINYLESTRADIOL ethinylestradiol/ levonorgestrel';
        $keyword = 'Levonorgestrel Ethinylestradiol';
        $result = searchKeyword($text, $keyword);
        $this->assertEquals(2, $result['matchCount']);
    }
    
    public function testHighlightKeyword() {
        $text = 'LEVONORGESTREL/ETHINYLESTRADIOL ethinylestradiol/ levonorgestrel';
        $keyword = 'Levonorgestrel Ethinylestradiol';
        $result = searchKeyword($text, $keyword);
        $this->assertStringContainsString('<mark>LEVONORGESTREL/ETHINYLESTRADIOL</mark> ethinylestradiol/ levonorgestrel', $result['highlightedText']);
        $this->assertStringContainsString('ethinylestradiol/ <mark>levonorgestrel</mark>', $result['highlightedText']);
    }
}
```

## step 2

improve these codes to find "Levonorgestrel and ethinyl estradiol" in a text

```php
function searchKeyword($text, $keyword) {
    // Normalize the keyword
    $normalizedKeyword = strtolower(str_replace(' ', '', $keyword));
    
    // Split the normalized keyword into individual words
    $keywordWords = explode('and', $normalizedKeyword);
    
    // Build a regular expression to match each keyword word
    $regex = implode('.*?', array_map(function($word) {
        return preg_quote($word, '/');
    }, $keywordWords));
    
    // Search for the regular expression in the text
    $matches = [];
    preg_match_all("/$regex/i", $text, $matches);
    $matchCount = count($matches[0]);
    
    // Highlight the regular expression in the text
    $highlightedText = preg_replace("/($regex)/i", '<mark>$1</mark>', $text);
    
    return [
        'matchCount' => $matchCount,
        'highlightedText' => $highlightedText
    ];
}
```

## step 3

if the user enters "Naproxen", this function could fond "Naproxene" or "Naproxène", or  "naproxen", or "naproxène" or "naproxene" in a text