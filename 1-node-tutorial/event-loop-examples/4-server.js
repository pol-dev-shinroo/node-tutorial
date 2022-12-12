const http = require("http");

const server = http.createServer(() => {
  console.log("request event");
  res.end("Hello world");
});

server.listen(5000, () => {
  console.log("listening on port 5000");
});
// Hey event loop, just keep listening for those incoming requests, then respond
