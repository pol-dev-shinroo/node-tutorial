# Store

## Mongoose Basics:

| Method               | Description                                                                                              |
| -------------------- | -------------------------------------------------------------------------------------------------------- |
| create()             | Creates a new document and saves it to the database.                                                     |
| find()               | Queries the database and returns an array of documents that match the specified query criteria.          |
| findOne()            | Queries the database and returns the first document that matches the specified query criteria.           |
| findById()           | Queries the database and returns the document with the specified \_id field.                             |
| updateOne()          | Updates a single document that matches the specified query criteria.                                     |
| updateMany()         | Updates multiple documents that match the specified query criteria.                                      |
| deleteOne()          | Deletes a single document that matches the specified query criteria.                                     |
| deleteMany()         | Deletes multiple documents that match the specified query criteria.                                      |
| countDocuments()     | Counts the number of documents that match the specified query criteria.                                  |
| findOneAndUpdate()   | Finds the first document that matches the specified query criteria and updates it.                       |
| findOneAndDelete()   | Finds the first document that matches the specified query criteria and deletes it.                       |
| findByIdAndUpdate()  | Finds the document with the specified \_id field and updates it.                                         |
| findByIdAndDelete()  | Finds the document with the specified \_id field and deletes it.                                         |
| findOneAndReplace()  | Finds the first document that matches the specified query criteria and replaces it with a new document.  |
| findByIdAndReplace() | Finds the document with the specified \_id field and replaces it with a new document.                    |
| aggregate()          | Performs an aggregation pipeline on the collection.                                                      |
| distinct()           | Returns an array of distinct values for the specified field.                                             |
| where()              | Returns a query that matches documents where the value of a field is within a specified range.           |
| populate()           | Populates a single or multiple paths in a document with the specified documents or a specified document. |
| geoNear()            | Returns documents that are within a certain distance of a location.                                      |
| mapReduce()          | Executes a map-reduce operation on the collection.                                                       |
| bulkWrite()          | Executes multiple write operations in a single command.                                                  |

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
