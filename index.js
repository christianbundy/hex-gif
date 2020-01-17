// This is a tiny white GIF encoded with base64.
const magicBytes = "R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs="
const whiteGif = Buffer.from(magicBytes, "base64")

// We need to insert our color at offset 13 to replace bytes 13, 14, and 15.
const colorOffset = 13
const colorLength = 3

// The start and end of the GIF never change, so we can repeatedly copy them.
const gifStart = whiteGif.slice(0, colorOffset)
const gifEnd = whiteGif.slice(colorOffset + colorLength)

module.exports = (input) => {
  // Only convert last 6 characters, so `ffffff` and `#ffffff` are equivalent.
  const hexColor = input.slice(-6)
  const colorBytes = Buffer.from(hexColor, "hex")
  return Buffer.concat([gifStart, colorBytes, gifEnd])
}
