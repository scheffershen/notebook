Internationalization-API Or I18n API
====================================

When developing a web page or app, it’s extremely common to need to translate its content across other languages to reach a wider audience. However, just translating your page’s text to whichever language you need isn’t enough to make your content available to speakers of that language since things like dates, numbers, units, and so on are different across countries and may cause confusion to your users.

- `November 8, 2022` or MM/DD/YY by people from the US.
- `August 11, 2022` or DD/MM/YY by people from Europe and Latam.
- `August 22, 2011` or YY/MM/DD by people from Japan, China, and Canada.

## HOW TO USE IT? 

The I18n API uses locale identifiers to work. A locale identifier is a string that expresses the user’s language, country, region, dialect, and other preferences.

To be more precise, the I18n API provides an `Intl object` that brings a bunch of specialized constructors to work with language-sensitive data.

- `Intl.DateTimeFormat()`
	+ Used to format dates and times.
- `Intl.DisplayNames()`
	+ Used to format language, region, and script display names.
- `Intl.Locale()`
	+ Used to construct and manipulate locale identifier tags.
- `Intl.NumberFormat()`
	+ Used to format numbers.
- `Intl.RelativeTimeFormat()`
	+ Used to format relative time descriptions.

```js
const logDate = (locale) => {
    const newDate = new Date("2022-10-24"); // YY/MM/DD
    const dateTime = new Intl.DateTimeFormat(locale, {timeZone: "UTC"});
    const formatedDate = dateTime.format(newDate);
    console.log(formatedDate);
};

logDate("en-US"); // 10/24/2022
logDate("de-DE"); // 24.10.2022
logDate("zh-TW"); // 2022/10/24
```

We can implement this behavior on the quotes’ date using the `navigator.language` global property, which holds the user’s preferred locale. 

```js
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const locale = navigator.language;
    const dateTimeFormat = new Intl.DateTimeFormat(locale, {timeZone: "UTC"});

    return dateTimeFormat.format(date);

};


const getQuote = async () => {
    if (document.visibilityState === "visible") {
        try {
            const response = await fetch("https://api.quotable.io/random");
            const {content, author, dateAdded} = await response.json();
            const parsedQuote = `
	            <q>${content}</q> <br> 
	            <p>- ${author}</p><br> 
	            <p>Added on ${formatDate(dateAdded)}</p>`;
            quote.innerHTML = parsedQuote;
            broadcast.postMessage(parsedQuote);
        } catch (error) {
            console.error(error);
        }
    }
};
```