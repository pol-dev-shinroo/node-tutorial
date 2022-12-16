const getAllTasks = (req, res) => {
  res.status(200).json({ res: true });
};

const createTask = (req, res) => {
  console.log(req.body);
  res.status(200).json({ res: true });
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
