const FlightCard = require("../db/models/flightCard");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const flights = await FlightCard.findAll({
      attributes: [
        "price",
        "origin",
        "destination",
        "date",
        "returnDate",
        "adults",
      ],
    });

    console.log(flights);
    res.json(flights);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
