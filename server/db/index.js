//this is the access point for all things database related!
import { user, bucketList, flightCard, lodgingcard, trip } from "./models";

const db = require("./db");

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
