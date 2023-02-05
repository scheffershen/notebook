Web-Share-API
=============

The Web Share API is also among the least-known APIs but is extremely useful. It lets you access the operative system’s native sharing mechanism, which is especially useful to `mobile users`. With this API, you can share text, links, and files without the need to create your own sharing mechanisms or use third-party ones.

## USE CASES 

They are pretty self-explanatory. You can use it to share content from your page to social media or copy it to the user’s clipboard.

## HOW TO USE IT?

The Web Share API gives us two interfaces to access the user’s sharing system:

- `navigator.canShare()`
- `navigator.share()`
	+ `url`: URL to be shared,
	+ `text`: text to be shared,	
	+ `title`: title to be shared,
	+ `files`: array of File objects representing files to be shared.

```js
const shareButton = document.querySelector("#share-button");

const shareQuote = async (shareData) => {
    try {
        await navigator.share(shareData);
    } catch (error) {
        console.error(error);
    }
};

shareButton.addEventListener("click", () => {
    let shareData = {
        title: "A Beautiful Quote",
        text: quote.textContent,
        url: location.href,
    };

    shareQuote(shareData);
});
```