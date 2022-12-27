const express = require("express");
const app = express();

/** middleware */
const notFound = require("./middleware/not-found");
app.use(notFound);

app.listen(8000, () => {
  console.log("listening on port 8000");
});
