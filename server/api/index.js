const router = require("express").Router();

router.use("/generate", require("./generate"));
router.use("/users", require("./users"));
router.use("/bucketlist", require("./bucketlist"));

router.use((req, res, next) => {
  const error = new Error("Not Found server/api/index.js");
  error.status = 404;
  next(error);
});

module.exports = router;
