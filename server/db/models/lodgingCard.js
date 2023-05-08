const Sequelize = require("sequelize");
const db = require("..");

const LodgingCard = db.define("lodgingcard", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  address: {
    type: Sequelize.STRING,
  },
  dayIn: {
    type: Sequelize.DATE,
  },
  dayOut: {
    type: Sequelize.DATE,
  },
  adults: {
    type: Sequelize.INTEGER,
  },
  children: {
    type: Sequelize.INTEGER,
  },
  price: {
    type: Sequelize.INTEGER,
  },
});

module.exports = LodgingCard;
