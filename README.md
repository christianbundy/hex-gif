# Hex-GIF

**Creates a tiny 1x1 pixel GIF from a hexadecimal color.** This is nice because
you don't have to use any native libraries that understand different image
encodings, but hacky because it operates directly on the raw bytes.

## Usage

```javascript
const hexGif = require("hex-gif");

hexGif("#ff00ff"); // => Buffer <...>
```

This outputs abuffer for a 1x1 pixel magenta GIF.

## Install

With [npm](https://npmjs.org/) installed, run

```shell
npm install hex-gif
```

## License

AGPL-3.0
