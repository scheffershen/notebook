learn-regex
==========

https://github.com/zeeshanu/learn-regex

### 5.2 Global search `/g`

The `g` modifier is used to perform a global match (finds all matches rather than stopping after the first match). For example, the regular expression `/.(at)/g` means: any character except a new line, followed by a lowercase `a`, followed by a lowercase `t`. Because we provided the `g` flag at the end of the regular expression, it will now find all matches in the input string, not just the first one (which is the default behavior).

"/.(at)/" => The `fat` cat sat on the mat.

"/.(at)/g" => The `fat` `cat` `sat` on the `mat`.

### 5.3 Multiline `/m`

The `m` modifier is used to perform a multi-line match. As we discussed earlier, anchors `(^, $)` are used to check if a pattern is at the beginning of the input or the end. But if we want the anchors to work on each line, we use the `m` flag. For example, the regular expression `/at(.)?$/gm` means: a lowercase `a`, followed by a lowercase `t` and, optionally, anything except a new line. And because of the `m` flag, the regular expression engine now matches patterns at the end of each line in a string.

```
"/.at(.)?$/" => The fat
                cat sat
                on the `mat`.
```

```
"/.at(.)?$/" => The `fat`
                cat `sat`
                on the `mat`.
```

### Bonus

    * Positive Integers: ^\d+$
    * Negative Integers: ^-\d+$
    * US Phone Number: ^+?[\d\s]{3,}$
    * US Phone with code: ^+?[\d\s]+(?[\d\s]{10,}$
    * Integers: ^-?\d+$
    * Username: ^[\w\d_.]{4,16}$
    * Alpha-numeric characters: ^[a-zA-Z0-9]*$
    * Alpha-numeric characters with spaces: ^[a-zA-Z0-9 ]*$
    * Password: ^(?=^.{6,}$)((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.*$
    * email: ^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$
    * IPv4 address: ^((?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))*$
    * Lowercase letters only: ^([a-z])*$
    * Uppercase letters only: ^([A-Z])*$
    * URL: ^(((http|https|ftp):\/\/)?([[a-zA-Z0-9]\-\.])+(\.)([[a-zA-Z0-9]]){2,4}([[a-zA-Z0-9]\/+=%&_\.~?\-]*))*$
    * VISA credit card numbers: ^(4[0-9]{12}(?:[0-9]{3})?)*$
    * Date (MM/DD/YYYY): ^(0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2}$
    * Date (YYYY/MM/DD): ^(19|20)?[0-9]{2}[- /.](0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])$
    * MasterCard credit card numbers: ^(5[1-5][0-9]{14})*$