const router = require("express").Router();
const {
  models: { trip },
} = require("../db");
const User = require("../db/models/User");

// GET /api/trip
router.get("/", async (req, res, next) => {
  try {
    const trip = await trip.findAll({
      //   include: [Coffee],
    });
    res.json(trip);
  } catch (error) {
    next(error);
  }
});

// GET /api/trip/:tripID
router.get("/:tripId", async (req, res, next) => {
  const user = await User.findByToken(req.headers.authorization);
  console.log("req.headers.authorization:   ", req.headers.authorization);
  try {
    const [singleTrip, created] = await trip.findOrCreate({
      where: {
        userId: user.id,
      },
      defaults: { fufilled: false },
      //   include: [Coffee],
    });
    if (created) {
      console.log("new trip create", created);
    }
    res.json(singleTrip);
  } catch (error) {
    next(error);
  }
});

router.put("/:tripid", async (req, res, next) => {
  try {
    console.log(req.params.tripid);
    const singleTrip = await trip.findByPk(req.params.tripid);
    res.send(await singleTrip.update(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
