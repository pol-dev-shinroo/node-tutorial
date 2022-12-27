# Store

## express async errors library

```js
"express-async-errors": "^3.1.1",

require("express-async-errors");

const getAllProductsStatic = async (req, res) => {
  // throw new Error("testing async errors"); => for testing, simply invoking the library does the custom error for you
  res.status(200).json({ msg: "products testing route" });
};
```

## mongoose schema: enums

```js
 company: {
    type: String,
    // enum: ["ikea", "liddy", "caressa", "marcos"], // limit possible options for this property
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE} is not supported",
    },
    // this is if you want to set up custom errror handler
  },
```

## process.exit()

```js
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
```

## mongoose v6 find error:

- if no matching property:

```js
  {
    "msg": [],
    "total": 0
}
```

- if wrong value: => will throw error

## object mutation in javascript

```js
const obj = {};
obj.a = 1; // allowed, because we are mutating the object, not reassigning the value of the `obj` variable
obj = {}; // not allowed, because we are trying to reassign the value of the `obj` variable
```

![image](https://user-images.githubusercontent.com/102004753/209632807-2a06bc4d-abd5-45b9-a3fa-ed7875f0152c.png)
