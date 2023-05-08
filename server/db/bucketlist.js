const Sequelize = require("sequelize");
const db = require("../db");

const bucketList = db.define("bucketList", {
  trips: [],
});

module.exports = bucketList;
