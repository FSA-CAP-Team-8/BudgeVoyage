const Sequelize = require("sequelize");
const db = require("../db");

const FlightCard = sequelize.define("flightcard", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  price: {
    type: INTEGER,
  },
  adults: {
    type: INTEGER,
  },
  children: {
    type: INTEGER,
  },
  arrival: {
    type: DATE,
  },
  departure: {
    type: DATE,
  },
  fromlocation: {
    type: STRING,
  },
  tolocation: {
    type: STRING,
  },
});
