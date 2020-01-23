const fs = require("fs").promises;
const hexGif = require("./");

const magicBase64 = "R0lGODlhAQABAIABAL7u7wAAACwAAAAAAQABAAACAkQBADs=";
const correctValue = Buffer.from(magicBase64, "base64");

const outputValue = hexGif("#beeeef");

const same = outputValue.every(
  (byteValue, byteIndex) => byteValue === correctValue[byteIndex]
);

if (same !== true) {
  throw new Error("FAIL");
}
