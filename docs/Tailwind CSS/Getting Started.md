Rapidly build modern websites without ever leaving your HTML
============================================================

https://tailwindcss.com/

v3.0, 01-2022

https://tailwindcss.com/docs/installation

## Installation

	$ npm install -D tailwindcss
	$ npx tailwindcss init

tailwind.config.js

```js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

src/input.css

```js
@tailwind base;
@tailwind components;
@tailwind utilities;
```

	$ npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

src/index.html

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/dist/output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```