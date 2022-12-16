const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.status(200).json({ res: true });
};

const createTask = async (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ res: true, task });
  } catch (err) {
    console.log(err);
    res.status(400).json({ res: false });
  }
};

const getTask = (req, res) => {
  console.log(req.params);
  res.status(200).json({ res: true });
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
