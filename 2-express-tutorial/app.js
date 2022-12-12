const http = require("http");

const server = http.createServer((req, res) => {
  console.log("user got into the server");
  // console.log(req);
  console.log(req.method);
  console.log(req.url);

  const { url } = req;

  if (url === "/") {
    res.writeHead(200, "asdfasdfd", { "content-type": "text/html" });
    res.write(`<h1>Hello World</h1>`);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h1>About Page</h1>`);
    res.end();
  } else if (url === "/favicon.ico") {
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
