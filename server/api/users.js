const router = require("express").Router();
const { User } = require("../db");
// const { requireToken, isAdmin } = require("");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "username"],
      //   include: [trip],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: ["id", "username"],
      //   include: [trip],
    });
    res.json(user);
  } catch (err) {
    next(err);
  }
});
