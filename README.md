# node-tutorial

- [Browser vs Node](#browser-vs-node)
- [REPL](#using-repl-in-nodejs)
- [Global Variables](#globals-global-variables)
- [Modules](#modules)
- [Built in Modules](#built-in-modules)

## Browser vs Node

| Browser          | Node.js          |
| ---------------- | ---------------- |
| DOM              | No DOM           |
| WIndow           | No Window        |
| Interactive Apps | Server Side Apps |
| No File system   | File system      |
| Fragmentation    | Version          |
| ES6 Modules      | CommonJS         |

## Using REPL in node.js

- simply type "node" in your terminal
- To run your node app, simply type "node [filename].js"

## Globals (Global Variables)

- anywhere you can access them

| Globals       | Description                                        |
| ------------- | -------------------------------------------------- |
| \_\_dirname   | path to current directory                          |
| \_\_filename  | file name                                          |
| require       | function to use modules (CommonJS)                 |
| module        | info about current module (file)                   |
| Fragmentation | Version                                            |
| process       | info about env where the program is being executed |

## Modules

In CommonJS, Every file is a module by default.
When console logging module (ex. console.log(module) => using global variable),
you can access module tree (object)

![image](https://user-images.githubusercontent.com/102004753/206481227-a95a307e-55f6-4ef7-9809-a84590c37948.png)

Hence, you can manipulate what should be in that export object

```js
const peter = "peter";
module.exports = { peter };

const { peter } = require("./...");
```

<span style="font-size: 20px;"> !!! Notice, once you require (ex. import), the file you are exporting will run by default even if you did not invoke it in the file you imported that module </span>

## Built-in Modules

- os modules
- path modules
- fs (file system) modules

## Fs (file system) modules

two flavors: 1) async = non-blocking 2) sync = blocking
