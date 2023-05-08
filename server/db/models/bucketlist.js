/* eslint-disable no-unused-vars */
const Sequelize = require("sequelize");
const db = require("..");

const bucketList = db.define("bucketList", {
  trips: [],
});

module.exports = bucketList;
