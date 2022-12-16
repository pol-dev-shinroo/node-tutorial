const asyncWrapper = require("../middleware/async");
const Task = require("../models/Task");

// use static functions (queries) from Task model

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks, amount: tasks.length });
});

const createTask = asyncWrapper(async (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  const task = await Task.create(req.body);
  res.status(201).json({ res: true, task });
});

const getTask = asyncWrapper(async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id });
  if (!task) {
    return res.status(400).json({ msg: `No task with id ${task.id}` });
  }
  res.status(201).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  console.log(req.params);
  console.log(req.body);
  const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true, // without it, it will accept "" as well
  });
  console.log(task);
  res.status(201).json({ res: true, task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  console.log(req.params);
  // findOneAndDelete is also fine...
  const task = await Task.findByIdAndDelete({ _id: req.params.id });
  console.log(task);
  res.status(200).json({ res: true, task: task });
});

const editTask = asyncWrapper(async (req, res) => {
  console.log(req.params);
  console.log(req.body);
  const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true, // without it, it will accept "" as well
    overwrite: true, // for put method
  });
  console.log(task);
  res.status(201).json({ res: true, task });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  editTask,
};
