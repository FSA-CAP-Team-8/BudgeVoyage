//this is the access point for all things database related!
const db = require("./db");
const User = require("./models/user");
const flightCard = require("./models/flightCard");
const lodgingcard = require("./models/lodgingCard");
const trip = require("./models/trip");
const BucketList = require("./models/bucketlist");

//associations could go here!
// User.hasOne.BucketList;
User.hasOne(BucketList);
User.hasOne.flightCard;
User.hasOne.lodgingcard;
trip.hasOne.lodgingcard;
trip.hasOne.flightCard;
BucketList.hasMany.trip;
BucketList.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    BucketList,
    flightCard,
    lodgingcard,
    trip,
  },
};
