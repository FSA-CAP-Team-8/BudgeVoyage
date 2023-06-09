const router = require("express").Router();
const { User } = require("../db");
const Orders = require("../db/models/trip");
module.exports = router;

router.post("/login", async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body) });
  } catch (err) {
    next(err);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const { username, password, email } = req.body;

    const user = await User.create({ username, password, email });
    res.send({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

router.get("/person", async (req, res, next) => {
  console.log("inAuthMe");
  try {
    res.send(
      await User.findByToken(req.headers.authorization, {
        include: [Orders],
      })
    );
  } catch (ex) {
    next(ex);
  }
});
