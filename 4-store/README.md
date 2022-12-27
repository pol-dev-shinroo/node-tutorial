# Store

## express async errors library

```js
"express-async-errors": "^3.1.1",

require("express-async-errors");

const getAllProductsStatic = async (req, res) => {
  throw new Error("testing async errors");
  res.status(200).json({ msg: "products testing route" });
};
```
