const FlightCard = require("../server/db/models/flightCard");
const LodgingCard = require("../server/db/models/lodgingCard");
const Trip = require("../server/db/models/trip");
const {
  db,
  models: { User },
} = require("../server/db");

const seed = async () => {
  try {
    await db.sync({ force: true });
    console.log("db synced");

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
    const trip = await Trip.bulkCreate(
      {
        id: 1,
        flightcard_id: [flightCard1.id],
        lodgingcard_id: [lodgingCard1.id],
      },
      {
        id: 2,
        flightcard_id: [flightCard2.id],
        lodgingcard_id: [lodgingCard2.id],
      }
    );

    const users = await User.bulkCreate([
      {
        username: "Luis",
        password: "password123",
        isAdmin: false,
        email: "luis@example.com",
      },
      {
        username: "Veronica",
        password: "veronica456",
        isAdmin: false,
        email: "veronica@example.com",
      },
      {
        username: "Jesiah",
        password: "jesiah789",
        isAdmin: false,
        email: "jesiah@example.com",
      },
      {
        username: "Jackie",
        password: "jackie123",
        isAdmin: false,
        email: "jackie@example.com",
      },
    ]);

    console.log(`Successfully seeded ${users.length} users`);
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    db.close();
  }
};

seed();
