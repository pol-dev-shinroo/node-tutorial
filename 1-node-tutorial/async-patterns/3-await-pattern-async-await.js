const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// getText("./path/subfolder/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// refactor to async await
const start = async () => {
  try {
    const first = await getText("./path/subfolder/first.txt");
    console.log(first);
  } catch (err) {
    console.log(err);
  }
};

start();
