const { createReadStream } = require("fs");

const stream = createReadStream("./path/subfolder/first.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});

// this reads in chunk 65486 bytes = 64 kb (default)
// then you can see the rest in chunk
// highwatermark => can control the size of the buffer

stream.on("data", (chunk) => {
  console.log(chunk);
});
