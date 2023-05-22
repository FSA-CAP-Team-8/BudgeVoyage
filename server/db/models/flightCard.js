const Sequelize = require("sequelize");
const db = require("../db");

const FlightCard = db.define("flightcard", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  price: {
    type: Sequelize.INTEGER,
  },
  adults: {
    type: Sequelize.INTEGER,
  },
  children: {
    type: Sequelize.INTEGER,
  },
  returnDate: {
    type: Sequelize.DATE,
  },
  date: {
    type: Sequelize.DATE,
  },
  origin: {
    type: Sequelize.STRING,
  },
  destination: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.STRING,
  },
});

module.exports = FlightCard;
