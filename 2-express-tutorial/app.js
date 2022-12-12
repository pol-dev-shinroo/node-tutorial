const http = require("http");

const server = http.createServer((req, res) => {
  console.log("user got into the server");
  res.writeHead(200, "asdfasdfd", { "content-type": "text/html" });
  res.write(`<h1>Hello World</h1>`);
  // res.end(
  //   JSON.stringify({
  //     data: "Hello World!",
  //   })
  // );
  res.end();
});

server.listen(5000);
