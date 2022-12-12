const EventEmitter = require("events");
// event eventemitter is a class, therefore capital

// console.log(EventEmitter);

const customEmitter = new EventEmitter();
// now we have the instance of EventEmitter
// there are many methods in this object
// we are going to look at
// 1) on - listen for an event
// 2) emit - emit an event

customEmitter.on("response", (name, age) => {
  console.log(`data received: ${name} ,${age}`);
});
customEmitter.on("response", () => {
  console.log(`some other logic here`);
});

// emit name must match on name
customEmitter.emit("response", "john", 34);

// !!! the order matters, we must first listen to event, only then i can emit event
