# node-tutorial

- [Browser vs Node](#browser-vs-node)
- [REPL](#using-repl-in-nodejs)
- [Global Variables](#globals-global-variables)
- [Modules](#modules)
- [Built in Modules](#built-in-modules)
- [Dependencies](#create-packagejson-for-every-web-development-project)
- [Nodemon](#nodemon)
- [Package Version](#package-version)
- [Event Loop](#event-loop-advanced-topic--need-to-document-deeper-later-on)
- [Events](#events)
- [Streams](#streams)

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
- http modules

## Fs (file system) modules

Exmaples: readFileSync + writeFileSync vs readFile + writeFile
two flavors: 1) async = non-blocking 2) sync = blocking

## Http Module

![code](https://user-images.githubusercontent.com/102004753/206632005-2a58705b-febb-49dc-99f9-e4baacc5ba97.png)

<span style="font-size: 20px;"> !!! Hence, this is a server-side rendering as opposed to react which is client-side rendering (possible because it's SPA) </span>

## Create package.json (for every web development project)

- package.json is a manifest file (stores info about projects and packages/ libraries)
- **_Metadata_**: package.json contains all the relevant data regarding the project

```cmd
 npm init (step-by-step approach)
 npm init -y
```

There are **three types of dependencies** that are found in this file

1. dependencies
2. dev dependencies
3. peer dependencies

**dev dependencies**: it consists of all the packages that are used in the project **during the development phase, not in the production or testing environment**

```cmd
 npm install <package name> --save-dev
 npm install <package name> -D
```

**peer dependencies**: consists of all the packages that are exactly required in the project or to the person who is downloading, and the version numbers should be the same
**!!! They are only encountered when you publich your own package**

## nodemon

- dev dependecies: we do not need nodemon for production/ testing
- it watches the app.js and displays the changes in real time
- Hence, no need to write "node app.js" every time you change the app.js

## Package version

ex) "nodemon": "^2.0.20"
2 is the major change
0 is the minor change (backward compatible)
20 is the bug fix

## Event Loop (advanced topic => need to document deeper later on)

https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
https://www.korecmblog.com/node-js-event-loop/
https://nodejs.dev/en/learn/introduction-to-nodejs/
https://www.youtube.com/watch?v=PNa9OMajw9w
https://www.youtube.com/watch?v=8aGhZQkoFbQ
https://course-api.com/

Async means non-blocking => does not block the execution of other functions
Sync generally means an activity that must wait for a reply before the thread can move forward

https://jh-7.tistory.com/25

https://stackoverflow.com/questions/8416874/whats-the-differences-between-blocking-with-synchronous-nonblocking-and-asynch

![nestedCallbacks](https://user-images.githubusercontent.com/102004753/207067415-52daeffc-aeca-48d7-80cc-cb1ef68d3bf0.png)

![promise](https://user-images.githubusercontent.com/102004753/207067620-48ad2538-67ce-4b56-9a0e-df5ab726ae59.png)

![asyncAwait](https://user-images.githubusercontent.com/102004753/207067783-7dcd6be6-07f3-4154-8520-a701843b0ccc.png)

## Events

- Event-driven Programming
- Used Heavily in Node.js
- ex. when user clicks button, our program handles it (External Events)

## Streams (advanced topic => need to document deeper later on)

=> At its simplest, streams are used to read and write sequentially

In Node.js, there are 4 different types of streams

- Writeable : used to write data sequentially
- Readable : used to read data sequentially
- Duplex: used to both read and write data sequentially
- Transform: where data can be modified, when writing or reading data

\*\*\* Streams extends event emitter class
=> meaning, we can use events on streams
