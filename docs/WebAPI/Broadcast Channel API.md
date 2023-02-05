Broadcast Channel API 
=====================

It allows browsing contexts to send and receive basic data from each other.  Browsing contexts are elements like a tab, window, iframe, or anywhere a page can be displayed.

## USE CASES

The Broadcast Channel API is generally used to keep a page’s state synced across different tabs and windows to enhance user experience or for security reasons. 

- Log a user in or out across all tabs.
- Detect when an asset is uploaded and show it across all pages.
- Instruct a service worker to do some background work.

## HOW TO USE IT?

a BroadcastChannel object can be used to send messages to other contexts. BroadcastChannel object will have two available methods to start communicating:

- BroadcastChannel.postMessage():  to send a message across all connected contexts
- BroadcastChannel.close(): to close the channel and indicate to the browser that it won’t receive any more messages so it can collect them into the garbage.


```js
// /new-origin/main.js
const broadcast = new BroadcastChannel("quote_channel");
const quote = document.querySelector("#quote");

broadcast.onmessage = ({data}) => {
    quote.innerHTML = data;
};

// /main.js
const broadcast = new BroadcastChannel("quote_channel");
const quote = document.querySelector("#quote");

const getQuote = async () => {
	try {
		const response = await fetch("https://api.quotable.io/random");
		const {content, author, dateAdded} = await response.json();
		const parsedQuote = ` <q>${content}</q> <br> <p>- ${author}</p><br> <p>Added on ${dateAdded}</p>`;
		quote.innerHTML = parsedQuote;
		broadcast.postMessage(parsedQuote);
	} catch (error) {
		console.error(error);
	}
};

```