How to implement fulltext search (MySql) with Doctrine and Symfony 3
====================================================================


Note: This tutorial will works for Symfony < 2.x versions too.

```sql
SELECT * FROM myTable WHERE match(fieldName) against('I search this text' IN BOOLEAN MODE) LIMIT 10;
```

To use the match and against statements in doctrine 2 with MySQL, we'll need to :

- Create the MatchAgainst function
- Register the custom function in the symfony configuration (config.yml)
- Add the FULLTEXT indexes to the fields that you need to the database
- Execute some queries !

## MatchAgainst Class

```php
// myBundle/Extensions/Doctrine/MatchAgainst.php
 
namespace myBundle\Extensions\Doctrine;

use Doctrine\ORM\Query\Lexer;
use Doctrine\ORM\Query\AST\Functions\FunctionNode;

/**
 * "MATCH_AGAINST" "(" {StateFieldPathExpression ","}* InParameter {Literal}? ")"
 */
class MatchAgainst extends FunctionNode {

    public $columns = array();
    public $needle;
    public $mode;

    public function parse(\Doctrine\ORM\Query\Parser $parser) {
        $parser->match(Lexer::T_IDENTIFIER);
        $parser->match(Lexer::T_OPEN_PARENTHESIS);
        do {
            $this->columns[] = $parser->StateFieldPathExpression();
            $parser->match(Lexer::T_COMMA);
        } while ($parser->getLexer()->isNextToken(Lexer::T_IDENTIFIER));
        $this->needle = $parser->InParameter();
        while ($parser->getLexer()->isNextToken(Lexer::T_STRING)) {
            $this->mode = $parser->Literal();
        }
        $parser->match(Lexer::T_CLOSE_PARENTHESIS);
    }

    public function getSql(\Doctrine\ORM\Query\SqlWalker $sqlWalker) {
        $haystack = null;
        $first = true;
        foreach ($this->columns as $column) {
            $first ? $first = false : $haystack .= ', ';
            $haystack .= $column->dispatch($sqlWalker);
        }
        $query = "MATCH(" . $haystack .
                ") AGAINST (" . $this->needle->dispatch($sqlWalker);
        if ($this->mode) {
            $query .= " " . $this->mode->dispatch($sqlWalker) . " )";
        } else {
            $query .= " )";
        }
        
        return $query;
    }
}
```

## Register the function in config.yml

```yaml
# Doctrine Configuration
doctrine:
    # Search for the ORM property
    orm:
        # Those values should be already in your file and this doesn't matter
        auto_generate_proxy_classes: "%kernel.debug%"
        naming_strategy: doctrine.orm.naming_strategy.underscore
        auto_mapping: true
        # We need this the dql property to register the custom doctrine functions :
        dql:
            string_functions:
                # Match agains should have the path to the MatchAgainst class created in the previous step
                MATCH_AGAINST: myBundle\Extensions\Doctrine\MatchAgainst
```

## Add the fulltext indexes to your table fields

```sql
"-- fulltext_index is the alias that we'll give to the fulltext index"
ALTER TABLE yourTable ADD FULLTEXT fulltext_index(fieldName1, fieldName2, fieldName3)
```

All the fulltext fields needs to be related in the same table to 1 fulltext index, therefore remove the previous fulltext index and add the new one with the old and new fields.

```sql
"-- If you don't know the name of the registered indexes you can use the following line to see them"
SHOW INDEX FROM tableName

"-- Then drop the index using the name as parameter"
ALTER TABLE table DROP INDEX fulltext_index

"-- And finally add the new index with all the fields"
ALTER TABLE yourTable ADD FULLTEXT fulltext_index(fieldName1,fieldName2,fieldName3,fieldName4, fieldName5)
```

## Creating queries

Natural mode fulltext search example :

```php
$result = $yourRepository->createQueryBuilder('p')
    ->addSelect("MATCH_AGAINST (p.fieldName1, p.fieldName2, p.fieldName3, :searchterm 'IN NATURAL MODE') as score")
    ->add('where', 'MATCH_AGAINST(p.fieldName1, p.fieldName2, p.fieldName3, :searchterm) > 0.8')
    ->setParameter('searchterm', "Test word")
    ->orderBy('score', 'desc')
    ->getQuery()
    ->getResult();

// with a result structure like :
// [["score" => '0.3123',"0" => "The array with the information of the row (all fields)"]]
```

The previous example will match all the rows that contains "Test word" and the records will be sorted decreasingly according to the score (as the rows can contain only test or only word).

```php
$result = $yourRepository->createQueryBuilder('p')
    ->addSelect("MATCH_AGAINST (p.fieldName1, p.fieldName2, p.fieldName3, :searchterm 'IN BOOLEAN MODE') as score")
    ->add('where', 'MATCH_AGAINST(p.fieldName1, p.fieldName2, p.fieldName3, :searchterm) > 0.8')
    ->setParameter('searchterm', "+microsoft ~windows")
    ->orderBy('score', 'desc')
    ->getQuery()
    ->getResult();

// with a result structure like :
// [["score" => '1.423',"0" => "Only microsoft in this text with fulltext :) "]]
```

The previous query will find rows that contain the word “microsoft” but not “windows”.

## next

In both mode there isn't any change in scoring. Your decision on which to use should be based on whether or not you need the Boolean mode features, read more about `boolean mode in fulltext search` here(https://dev.mysql.com/doc/refman/8.0/en/fulltext-boolean.html) and more about `natural mode` here(https://dev.mysql.com/doc/refman/8.0/en/fulltext-natural-language.html).

You can find more custom functions implementations in `DoctrineExtensionsRepository` by `Beberlei` here(https://github.com/beberlei/DoctrineExtensions) and use the classes from `/master/src/Query/Mysql` directory in order to include only the functions that you need (like Soundex,Ceil,Day etc). Remember to enable them correctly, also `checkout this yml file` (https://github.com/beberlei/DoctrineExtensions/blob/master/config/mysql.yml) to see how to register the custom functions.

## Resources

https://ourcodeworld.com/articles/read/90/how-to-implement-fulltext-search-mysql-with-doctrine-and-symfony-3
https://stackoverflow.com/questions/17534796/match-against-script-is-not-working-with-symfony2/17536071