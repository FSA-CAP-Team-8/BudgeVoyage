// /* eslint-disable no-unused-vars */
// const router = require("express").Router();
// const options = {
//   url: "https://airbnb13.p.rapidapi.com/search-location",
// } = require("../../client/features/Airbnb/airSlice");
// const { default: Airbnb } = require("../../client/features/Airbnb/Airbnb");
// const Orders = require("../db/models/Orders");

// // GET /api/coffee
// router.get("/", async (req, res, next) => {
//   try {
//     const airbnb = await airbnb.findAll({
//       attributes: [
//         "id",
//         "name",
//         "countryOrigin",
//         "price",
//         "roast",
//         "description",
//         "imageUrl",
//         "quantity",
//       ],
//     });
//     res.json(coffees);
//   } catch (error) {
//     next(error);
//   }
// });

// // GET /api/airbnb/fetch
// router.get("/:", async (req, res, next) => {
//   try {
//     const singleCoffee = await .findByPk(req.params.coffeeId);
//     res.json(singleCoffee);
//   } catch (error) {
//     next(error);
//   }
// });
// router.put("/:", async (req, res, next) => {
//   try {
//     console.log("req.body : ", req.body);
//     const singleCoffee = await Coffee.findByPk(req.params.coffeeid);
//     res.send(await singleCoffee.update(req.body));
//   } catch (error) {
//     next(error);
//   }
// });
// router.delete("/:", async (req, res, next) => {
//   try {
//     const coffee = await .findByPk(req.params.coffeeId);
//     await coffee.destroy();
//     res.send(coffee);
//   } catch (error) {
//     next(error);
//   }
// });

// router.post("/", async (req, res, next) => {
//   try {
//     console.log(req.body);
//     res.status(201).send(await .create(req.body));
//   } catch (error) {
//     next(error);
//   }
// });

// module.exports = router;
