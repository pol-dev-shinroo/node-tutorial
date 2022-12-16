const Task = require("../models/Task");

// use static functions (queries) from Task model

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    console.log(tasks);
    res.status(200).json({ tasks });
  } catch (err) {
    console.log(err);
    res.status(400).json({ msg: err });
  }
};

const createTask = async (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ res: true, task });
  } catch (err) {
    console.log(err);
    res.status(400).json({ res: false, msg: err });
  }
};

const getTask = async (req, res) => {
  console.log(req.params);
  try {
    const task = await Task.findOne({ _id: req.params.id });
    if (!task) {
      return res.status(400).json({ msg: `No task with id ${task.id}` });
    }
    res.status(201).json({ task });
  } catch (err) {
    console.log(err);
    res.status(400).json({ res: false, msg: err });
  }
};

const updateTask = async (req, res) => {
  try {
    console.log(req.params);
    console.log(req.body);
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true, // without it, it will accept "" as well
    });
    console.log(task);
    res.status(201).json({ res: true, task });
  } catch (err) {
    res.status(400).json({ res: false });
  }
};

const deleteTask = async (req, res) => {
  try {
    console.log(req.params);
    // findOneAndDelete is also fine...
    const task = await Task.findByIdAndDelete({ _id: req.params.id });
    console.log(task);
    res.status(200).json({ res: true, task: task });
  } catch (err) {
    res.status(400).json({ res: false, msg: err });
  }
};

const editTask = async (req, res) => {
  try {
    console.log(req.params);
    console.log(req.body);
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true, // without it, it will accept "" as well
      overwrite: true, // for put method
    });
    console.log(task);
    res.status(201).json({ res: true, task });
  } catch (err) {
    res.status(400).json({ res: false });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  editTask,
};
