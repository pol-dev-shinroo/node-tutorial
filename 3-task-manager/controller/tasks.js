const Task = require("../models/Task");

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

const updateTask = (req, res) => {
  console.log(req.params);
  console.log(req.body);
  res.status(200).json({ res: true });
};

const deleteTask = (req, res) => {
  console.log(req.params);
  res.status(200).json({ res: true });
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
