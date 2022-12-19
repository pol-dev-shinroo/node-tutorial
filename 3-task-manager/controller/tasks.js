const asyncWrapper = require("../middleware/async");
const Task = require("../models/Task");
const { createCustomError } = require("../errors/custom-error");

// use static functions (queries) from Task model

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  // api/v1/tasks/:id
  if (req.params.id === "") {
    return res.status(400).json({ res: false, msg: "sdfsdf" });
  }
  res.status(201).json({ res: true, data: tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const { name } = req.body;
  const task = await Task.create(req.body);
  res.status(201).json({ res: true, task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  res.status(201).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true, // without it, it will accept "" as well
  });
  console.log(task);
  res.status(201).json({ res: true, task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  // findOneAndDelete is also fine...
  const task = await Task.findByIdAndDelete({ _id: req.params.id });
  console.log(task);
  res.status(200).json({ res: true, task: task });
});

const editTask = asyncWrapper(async (req, res) => {
  const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true, // without it, it will accept "" as well
    overwrite: true, // for put method
  });
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
