# fallback-preload.js

fallback preload

## Installation

```sh
$ npm install sasaplus1-prototype/fallback-preload.js
```

## Usage

via `require()`

```js
var fallbackPreload = require('fallback-preload');
```

via `<script>`

```html
<script src="fallback-preload.min.js"></script>
```

### Example

```html
<link class="js-preload-css" rel="preload" as="style" type="text/css" onload="this.rel='stylesheet'" href="/path/to/stylesheet.css">
<noscript>
  <link rel="stylesheet" href="/path/to/stylesheet.css">
</noscript>
```

```js
fallbackPreload('.js-preload-css', 'stylesheet');
```

## Functions

### fallbackPreload(selector, rel)

- `selector`
  - `String`
- `rel`
  - `String`

## License

The MIT license.
