Page Visibility API
===================

To be precise, the API triggers an event whenever the `page visibility status` changes, either when the user `minimizes or maximizes the window` or `switches the tab`.

## USE CASES

In general, we want to use the Page Visibility API to stop unnecessary processes when the user doesn’t see the page or, on the other hand, to perform background actions.

- to pause videos, image carousels, or animations when the user leaves the page;
- if the page displays live data from an API, stop this behavior temporarily while the user is away;
- to send user analytics.

## HOW TO USE IT? 

The Page Visibility API brings two properties and an event to access the page visibility status:

- `document.hidden`
	+ It is globally available and read-only. Try to avoid it since it is now deprecated, but when accessed, it returns true if the page is hidden and false if it is visible.
- `document.visibilityState`
	+ It is the updated version of `document.hidden`, but when accessed, it returns four possible values depending on the page visibility status:
		* `visible`: The page is visible, it isn’t minimized nor in another tab.
		* `hidden`: The page isn’t visible; it is minimized or in another tab
		* `prerender`: This is the initial state of a visible page when it is prerendering.
		* `unloaded`: The page is being unloaded from memory.
- `visibilitychange()`
	+ It’s an event provided by the `document` object that is triggered when the page `visibilityState` changes.

```js
const video = document.querySelector("#video");

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
        video.play();
    } else {
        video.pause();
    }
});
```

```js
const getQuote = async () => {
    if (document.visibilityState === "visible") {
        try {
            const response = await fetch("https://api.quotable.io/random");
            const {content, author, dateAdded} = await response.json();
            const parsedQuote = `
		            <q>${content}</q> <br> 
		            <p>- ${author}</p><br> 
		            <p>Added on ${dateAdded}</p>`;
            quote.innerHTML = parsedQuote;
        } catch (error) {
            console.error(error);
        }
    }
};

getQuote();

setInterval(getQuote, 10000);
```