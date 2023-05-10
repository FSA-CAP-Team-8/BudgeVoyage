//this is the access point for all things database related!
const db = require("./db");
const user = require("./models/user");
const flightCard = require("./models/flightCard");
const lodgingcard = require("./models/lodgingCard");
const trip = require("./models/trip");
const bucketList = require("./models/bucketlist");

//associations could go here!
user.hasOne.bucketlist;
user.hasOne.flightCard;
user.hasOne.lodgingcard;
trip.hasOne.lodgingcard;
trip.hasOne.flightCard;
bucketList.hasMany.trip;

module.exports = {
  db,
  user,
  bucketList,
  flightCard,
  lodgingcard,
  trip,
};
