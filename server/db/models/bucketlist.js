/* eslint-disable no-unused-vars */
const Sequelize = require("sequelize");
const db = require("../db");

const bucketList = db.define("bucketList", {
  userid: Sequelize.INTEGER,
  trips: [],
});

module.exports = bucketList;
