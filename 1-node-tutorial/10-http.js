const http = require("http");
const { readFileSync } = require("fs");

const home = readFileSync("./html/index.html", "utf-8");
const about = readFileSync("./html/about.html", "utf-8");
const error = readFileSync("./html/error.html", "utf-8");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(home);
  } else if (req.url === "/about") {
    res.end(about);
  } else {
    res.end(error);
  }
});

console.log("listening to port 5000");
server.listen(5000);
