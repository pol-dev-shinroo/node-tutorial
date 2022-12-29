const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const { BadRequest, NotFoundError } = require("../errors");

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort("createdAt");
  res.status(StatusCodes.OK).json(jobs);
};

const getJob = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId },
  } = req;

  const job = await Job.findById({ _id: jobId, createdBy: userId });

  res.status(StatusCodes.OK).json(job);
};
const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json(job);
};
const updateJob = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId },
    body: { company, positions },
  } = req;

  if (!company || !positions) {
    throw new BadRequest("Company or Position fileds cannot be empty");
  }
  const job = await Job.findByIdAndUpdate(
    { _id: jobId, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  );
  if (!job) {
    throw new NotFoundError(`No job with id ${id}`);
  }
  res.status(StatusCodes.OK).json(job);
};
const deleteJob = async (req, res) => {
  res.send("delete job");
};

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob };
