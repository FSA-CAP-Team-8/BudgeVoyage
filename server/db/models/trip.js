const Sequelize = require("sequelize");
const db = require("../db");

const Trip = db.define("trip", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    unique: true,
  },
  flightcard_id: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
  },
  lodgingcard_id: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
  },
});

module.exports = Trip;
