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

## MongoDB query operators

https://www.mongodb.com/docs/manual/reference/operator/query/

```js
const getAllProductsStatic = async (req, res) => {
  const search = "albany";
  const products = await Product.find({
    featured: false,
    name: { $regex: search, $options: "i" },
  }); // filters
  res.status(200).json({ msg: products, nbHits: products.length });
};
```

## sort

```js
// sort documents by the property name of company in a ascending order

db.collection.find({}).sort("company");

// sort documents by the property name of company in a descending order

db.collection.find({}).sort("-company");

// sort a collection of documents by the "age" field in ascending order:

db.collection.find().sort({ age: 1 });

// To sort the documents in descending order,

db.collection.find().sort({ age: -1 });

// multiple fields.

db.collection.find().sort({ name: 1, age: -1 });
```

## select

```js
// returns only the selected fields
let result = Product.find(queryObj);
if (fields) {
  const filedsList = fields.split(",").join("");
  result = result.select(filedsList);
}
const products = await result;
```

## skip

- the skip() method is used to specify the number of documents to skip in a query.
- It is often used in conjunction with the limit() method to paginate the results of a query.

```js
const page = Number(req.query.page) || 1;
const limit = Number(req.query.limit) || 10;
const skip = (page - 1) * limit; // skip how many number (if page = 1 => skip 0), if page = 2 => skip 10

const products = await result.skip(skip).limit(limit);
```

## how to filter property value if the property value is in the form of objects in array

```js
Model.find(
  {
    items: {
      $elemMatch: {
        name: "item1",
        price: { $gt: 10 },
      },
    },
  },
  (error, documents) => {
    // Do something with the documents
  }
);
```
