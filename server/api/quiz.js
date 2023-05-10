const router = require("express").Router();
const LodgingCard = require("../db/models/lodgingCard");
const flightCard = require("../db/models/flightCard");

//findall lodging
router.get("/", async (req, res, next) => {
  try {
    const lodging = await LodgingCard.findAll({
      attributes: ["price", "adults", "children", "address", "dayIn", "dayOut"],
    });
    res.json(lodging);
  } catch (error) {
    next(error);
  }
});

//singlecard for one pager
router.get("/:lodgingId", async (req, res, next) => {
  try {
    const singleLodginCard = await LodgingCard.findByPk(req.params.lodgingId);
    res.json(singleLodginCard);
    my;
  } catch (error) {
    next(error);
  }
});

//delete lodging card from singcard page when user is not satisfied with choice
//new card must be appended after deleting
router.delete("/:lodgingId", async (req, res, next) => {
  try {
    const lodging = await LodgingCard.findByPk(req.params.lodgingId);
    await lodging.destroy();
    res.send(lodging);
  } catch (error) {
    next(error);
  }
});
