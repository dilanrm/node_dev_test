const axios = require("axios");
const apiURL = "http://dev3.dansmultipro.co.id/api/recruitment/positions";

class JobController {
  static async getJob(req, res) {
    let { description, location, full_time } = req.query;
    description = !description ? "" : "description=" + description;
    location = !location ? "" : "location=" + location;
    full_time = !full_time
      ? ""
      : "full_time=" + (full_time === "true");

    // console.log(`${apiURL}?${description}&${location}&${full_time}`);
    try {
      const result = await axios.get(
        `${apiURL}.json?${description}&${location}&${full_time}`,
      );
      res.status(200).send(result.data);
    } catch (error) {
      res.status(400).json(error);
      console.log(error);
    }
  }

  static async getJobDetail(req, res) {
    const id = req.params.id;
    try {
      const result = await axios.get(apiURL + "/" + id);
      if (Object.keys(result.data).length !== 0)
        res.status(200).send(result.data);
      else res.status(404).json({ message: "Job not found" });
    } catch (error) {
      res.status(400).json(error);
      console.log(error);
    }
  }
}

module.exports = JobController;
