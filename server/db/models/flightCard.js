const Sequelize = require("sequelize");
const db = require("..");

const flightCard = db.define("flightcard", {
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
  arrival: {
    type: Sequelize.DATE,
  },
  departure: {
    type: Sequelize.DATE,
  },
  fromlocation: {
    type: Sequelize.STRING,
  },
  tolocation: {
    type: Sequelize.STRING,
  },
});

module.exports = flightCard;
