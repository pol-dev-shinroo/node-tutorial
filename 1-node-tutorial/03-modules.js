// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only shrae minumum)

console.log(module);

const names = require("./modules/names");
// console.log(names);
const { peter, john } = names;
// console.log(peter, john);

const sayHi = require("./modules/utils");
// console.log(utils);

sayHi(john);
sayHi(peter);
// sayHi(secret);

// practicing alternative exports

const { items, person, functions } = require("./04-alternative-flavor");

console.log("line 20", items, person, functions);

functions.sayHi();
