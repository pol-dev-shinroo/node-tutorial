## if you want to use stream to do the checkups, instead of using express-fileupload:

```js
const { createReadStream, createWriteStream } = require("fs");

// Create a read stream for the uploaded image file
const readStream = createReadStream(req.files.image.path);

// Check the mimetype of the file
if (!req.files.image.mimetype.startsWith("image")) {
  throw new CustomError.BadRequestError("Please upload Image");
}

// Check the size of the file
const maxSize = 1024 * 1024; // 1kb = 1000, 1mb = 1024 *1024
if (req.files.image.size > maxSize) {
  throw new CustomError.BadRequestError("Please upload image smaller than 1KB");
}

// Create a write stream for the destination file
const writeStream = createWriteStream("output.jpg");

// Pipe the read stream into the write stream to perform the copy operation
readStream.pipe(writeStream);

// Listen for the 'finish' event to know when the copy is complete
writeStream.on("finish", () => {
  console.log("File copy complete");
});
```

This code will create a read stream for the uploaded image file, check its mimetype and size, and then create a write stream for the destination file. It will then use the pipe method to copy the data from the read stream to the write stream, and listen for the finish event to know when the copy is complete.

Using streams can be a more efficient way to process large files, as it allows you to read and write data in small chunks rather than loading the entire file into memory at once. However, it's worth noting that using streams can also be more complex than using other methods, as you need to handle events and errors properly.

Using streams is one way to handle file uploads in Node.js, but it is not necessarily an alternative to using a library like express-fileupload.

Express-fileupload is a middleware for the Express.js web framework that makes it easy to handle file uploads in your web application. It provides a simple API for parsing and handling uploaded files, and automatically handles the details of reading and writing files to disk.

Using streams to handle file uploads, on the other hand, requires you to handle the details of reading and writing the files yourself, including creating and configuring the streams, handling events and errors, and performing any necessary processing on the data as it is being transferred.

Both methods can be useful depending on your needs and preferences. Using express-fileupload can be a good choice if you want a simple and easy-to-use solution for handling file uploads in your Express.js application. Using streams can be a good choice if you need more control over the file transfer process or if you need to perform custom processing on the data as it is being transferred.

# express-fileuplaod

```js
app.use(fileUpload({ useTempFiles: true }));
```

![image](https://user-images.githubusercontent.com/102004753/210122753-70e2e9db-612d-4215-906e-7c375336ac30.png)

![image](https://user-images.githubusercontent.com/102004753/210122823-893e27ba-233a-4dc4-b2d2-d8c8cd703cec.png)
