const express = require("express");
const {
  createTour,
  getAllTours,
  getOneTour,
  //   updateStudent,
  //   deleteOneStudent,
} = require("../controllers/tour");
const api = express.Router();

api.route("/").get(getAllTours).post(createTour);
api.route("/:id").get(getOneTour);
// put(updateTour).delete(deleteOneTour);

module.exports = api;
