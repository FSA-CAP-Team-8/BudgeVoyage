const router = require("express").Router();
const bucketlist = require("../db/models/bucketlist");
const User = require("../db/models/user");
const trip = require("../db/models/trip");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const bucketlist = await bucketlist.findAll();
    res.json(bucketlist);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  console.log("req.body:   ", req.body);
  try {
    res.status(201).send(await bucketlist.create(req.body));
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(
      await bucketlist.create(req.body, {
        include: [User, trip],
      })
    );
  } catch (error) {
    next(error);
  }
});

router.delete("/", async (req, res, next) => {
  console.log("req.body:   ", req.body);
  try {
    const { TRIPID } = req.body;
    const bucketlist = await bucketlist.findOne({
      where: {
        tripid: TRIPID,
      },
    });
    await bucketlist.destroy();
    res.send(bucketlist);
  } catch (error) {
    next(error);
  }
});
