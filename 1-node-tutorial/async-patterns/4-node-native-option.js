// const { readFile, writeFile } = require("fs");
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const start = async () => {
//   try {
//     const first = await readFilePromise("./path/subfolder/first.txt", "utf8");
//     const second = await readFilePromise("./path/subfolder/second.txt", "utf8");
//     await writeFilePromise("./path/subfolder/first.txt", "this is awesome!");
//     console.log(first);
//     console.log(second);
//   } catch (err) {
//     console.log(err);
//   }
// };

// start();

// second method...........................................................

const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./path/subfolder/first.txt", "utf8");
    const second = await readFile("./path/subfolder/second.txt", "utf8");
    await writeFile("./path/subfolder/first.txt", "this is awesome!", {
      flag: "a",
    });
    console.log(first);
    console.log(second);
  } catch (err) {
    console.log(err);
  }
};

start();
