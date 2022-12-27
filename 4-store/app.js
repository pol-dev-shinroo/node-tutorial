const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();
require("express-async-errors");

/** basic setup */
app.use(express.json());

/** routes */
const productRouter = require("./routes/products");
app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.use("/api/v1/products", productRouter);
/** middleware */
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    // connect DB
    await connectDB(process.env.MONGO_URL);
    app.listen(process.env.PORT, () => {
      console.log("listening on port 8000");
    });
  } catch (err) {
    console.log(err);
  }
};

start();
