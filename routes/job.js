const jobRoutes = require("express").Router();
const JobController = require("../controllers/JobController");
const { authentication } = require("../middlewares/auth");

jobRoutes.get("/", authentication, JobController.getJob);
jobRoutes.get("/details/:id", authentication, JobController.getJobDetail);

module.exports = jobRoutes;
