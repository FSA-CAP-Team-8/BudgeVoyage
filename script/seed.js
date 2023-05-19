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
      returnDate: new Date(2023, 5, 15, 10, 30, 0),
      date: new Date(2023, 5, 20, 12, 0, 0),
      origin: "Los Angeles",
      destination: "New York",
      isLiked: false,
    });

    // const flightCard2 = await FlightCard.create({
    //   price: 350,
    //   adults: 1,
    //   children: 0,
    //   returnDate: new Date(2023, 7, 1, 9, 0, 0),
    //   date: new Date(2023, 7, 10, 11, 30, 0),
    //   origin: "San Francisco",
    //   destination: "Paris",
    //   isLiked: false,
    // });

    // const flightCard3 = await FlightCard.create({
    //   price: 700,
    //   adults: 2,
    //   children: 2,
    //   returnDate: new Date(2023, 8, 11, 4, 0, 0),
    //   date: new Date(2023, 8, 14, 12, 30, 0),
    //   origin: "Alanta",
    //   destination: "Detroit",
    //   isLiked: false,
    // });

    // const flightCard4 = await FlightCard.create({
    //   price: 450,
    //   adults: 2,
    //   children: 0,
    //   returnDate: new Date(2023, 9, 14, 8, 0, 0),
    //   date: new Date(2023, 9, 18, 11, 30, 0),
    //   origin: "Las Vegas",
    //   destination: "Maryland",
    //   isLiked: false,
    // });

    // const flightCard5 = await FlightCard.create({
    //   price: 600,
    //   adults: 3,
    //   children: 0,
    //   returnDate: new Date(2023, 10, 2, 10, 0, 0),
    //   date: new Date(2023, 10, 4, 11, 30, 0),
    //   origin: "Washington D.C",
    //   destination: "Baltimore",
    //   isLiked: false,
    // });

    // const flightCard6 = await FlightCard.create({
    //   price: 800,
    //   adults: 4,
    //   children: 2,
    //   returnDate: new Date(2023, 11, 4, 11, 0, 0),
    //   date: new Date(2023, 11, 7, 8, 30, 0),
    //   origin: "St. Louis",
    //   destination: "Boise",
    //   isLiked: false,
    // });

    // const flightCard7 = await FlightCard.create({
    //   price: 1000,
    //   adults: 4,
    //   children: 3,
    //   returnDate: new Date(2023, 12, 23, 12, 0, 0),
    //   date: new Date(2023, 12, 28, 9, 30, 0),
    //   origin: "Seattle",
    //   destination: "Portland",
    //   isLiked: false,
    // });

    // const flightCard8 = await FlightCard.create({
    //   price: 900,
    //   adults: 5,
    //   children: 0,
    //   returnDate: new Date(2024, 1, 7, 2, 0, 0),
    //   date: new Date(2024, 1, 15, 6, 30, 0),
    //   origin: "Oklahoma City",
    //   destination: "Austin",
    //   isLiked: false,
    // });

    // const flightCard9 = await FlightCard.create({
    //   price: 800,
    //   adults: 2,
    //   children: 0,
    //   returnDate: new Date(2024, 1, 18, 3, 0, 0),
    //   date: new Date(2024, 1, 28, 7, 30, 0),
    //   origin: "Knoxville",
    //   destination: "Santa Barbara",
    //   isLiked: false,
    // });

    // const flightCard10 = await FlightCard.create({
    //   price: 800,
    //   adults: 3,
    //   children: 1,
    //   returnDate: new Date(2023, 10, 2, 5, 0, 0),
    //   date: new Date(2023, 10, 4, 11, 30, 0),
    //   origin: "Philadelphia",
    //   destination: "Memphis",
    //   isLiked: false,
    // });

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

    // const trip2 = await Trip.create({
    //   id: 2,
    //   flightcard_id: [flightCard2.id],
    //   lodgingcard_id: [lodgingCard2.id],
    // });

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
