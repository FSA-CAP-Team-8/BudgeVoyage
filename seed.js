const db = require("./server/db/db");
const Sequelize = require("sequelize");
const FlightCard = require("./server/db/models/flightCard");
const LodgingCard = require("./server/db/models/lodgingCard");
const Trip = require("./server/db/models/trip");

async function seed() {
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

    console.log("Database seeding complete!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    db.close();
  }
}

seed();
