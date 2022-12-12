const http = require("http");

const server = http.createServer(() => {
  console.log("request event");
  res.end("Hello world");
});

server.listen(5000, () => {
  console.log("listening on port 5000");
});
