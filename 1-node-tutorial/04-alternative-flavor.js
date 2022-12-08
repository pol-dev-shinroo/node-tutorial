const items = ["item1", "item2"];

const person = {
  name: "bob",
};

const sayHi = () => {
  console.log("hello");
};

// module.exports = { items, person, sayHi };

/// alternative way

module.exports.items = ["item1", "item2"];

module.exports.person = { name: "bob" };

module.exports.functions = { sayHi };
