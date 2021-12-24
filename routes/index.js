const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Home Page",
  });
});

const userRoutes = require("./user");
router.use("/users", userRoutes);

const jobRoutes = require("./job");
router.use("/jobs", jobRoutes);

module.exports = router;
