const express = require("express");
const app = express();
require("dotenv").config();

/** basic setup */
app.use(express.json());

/** routes */
app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});
/** middleware */
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    // connect DB
    app.listen(process.env.PORT, () => {
      console.log("listening on port 8000");
    });
  } catch (err) {}
};

start();
