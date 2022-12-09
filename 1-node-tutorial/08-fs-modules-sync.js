const { readFileSync, writeFileSync } = require("fs");

console.log("start");

const first = readFileSync("./path/subfolder/first.txt", "utf-8");
const second = readFileSync("./path/subfolder/second.txt", "utf-8");

console.log(first);
console.log(second);

writeFileSync(
  "./path/subfolder/first.txt",
  `Here is the result ${first}, ${second}`,
  { flag: "a" }
);

console.log("start new task");
