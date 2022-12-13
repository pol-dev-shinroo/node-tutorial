const http = require("http");
const { readFileSync } = require("fs");

// get all files
// the file is not read every time user requests!!!!
// this code just runs once
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeLogic = readFileSync("./navbar-app/browser-app.js");
const homeLogo = readFileSync("./navbar-app/logo.svg");

const server = http.createServer((req, res) => {
  console.log("rquest made");
  // console.log(req);
  console.log(req.method);
  console.log(req.url);

  const { url } = req;

  if (url === "/") {
    res.writeHead(200, "asdfasdfd", { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h1>About Page</h1>`);
    res.end();
  } else if (url === "/favicon.ico") {
    res.end();
  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homeLogic);
    res.end();
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homeLogo);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(`<h1>Page Not Found</>`);
    res.end();
  }

  // res.end(
  //   JSON.stringify({
  //     data: "Hello World!",
  //   })
  // );
});

server.listen(5000);
