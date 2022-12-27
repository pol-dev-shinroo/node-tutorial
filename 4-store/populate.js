require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/product");

const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Product.deleteMany(); // delete all
    await Product.create(jsonProducts);
    console.log("success");
    process.exit(0); // exit node (0 is just the code meaning it went successful)
  } catch (err) {
    console.log(err);
    process.exit(1); // exit node
  }
};

start();
