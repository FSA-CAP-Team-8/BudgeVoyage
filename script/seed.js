const db = require("../server/db/db");
const Sequelize = require("sequelize");
const FlightCard = require("../server/db/models/flightCard");
const LodgingCard = require("../server/db/models/lodgingCard");
const Trip = require("../server/db/models/trip");
const user = require("../server/db/models/user");

const seed = async () => {
  try {
    await db.sync({ force: true });

    // Create some example FlightCards
    const flightCard1 = await FlightCard.create({
      price: 500,
      adults: 2,
      children: 1,
      arrival: new Date(2023, 5, 15, 10, 30, 0),
      departure: new Date(2023, 5, 20, 12, 0, 0),
      fromlocation: "Los Angeles",
      tolocation: "New York",
    });

    const flightCard2 = await FlightCard.create({
      price: 350,
      adults: 1,
      children: 0,
      arrival: new Date(2023, 7, 1, 9, 0, 0),
      departure: new Date(2023, 7, 10, 11, 30, 0),
      fromlocation: "San Francisco",
      tolocation: "Paris",
    });

    // Create some example LodgingCards
    const lodgingCard1 = await LodgingCard.create({
      address: "123 Main St, Los Angeles, CA",
      dayIn: new Date(2023, 5, 15),
      dayOut: new Date(2023, 5, 20),
      adults: 2,
      children: 1,
      price: 800,
    });

    const lodgingCard2 = await LodgingCard.create({
      address: "456 Park Ave, New York, NY",
      dayIn: new Date(2023, 7, 1),
      dayOut: new Date(2023, 7, 10),
      adults: 1,
      children: 0,
      price: 1200,
    });

    // Create some example Trips
    const trip1 = await Trip.create({
      id: 1,
      flightcard_id: [flightCard1.id],
      lodgingcard_id: [lodgingCard1.id],
    });

    const trip2 = await Trip.create({
      id: 2,
      flightcard_id: [flightCard2.id],
      lodgingcard_id: [lodgingCard2.id],
    });

    // Create some example Users
    const user1 = await user.create({
      username: "john_doe",
      password: "password123",
      isAdmin: false,
      email: "john.doe@example.com",
    });

    const user2 = await user.create({
      username: "jane_doe",
      password: "password456",
      isAdmin: true,
      email: "jane.doe@example.com",
    });

    console.log("Database seeding complete!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    db.close();
  }
};

seed();
