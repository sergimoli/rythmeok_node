const mongoose = require("mongoose");
const Events = require("../models/events.model");

const eventsJSON = [
  {
    id: 1,
    date: "2022-04-04 12:00:00",
    idartist: 1,
    idhall: 1,
    price: 25,
    assistants: 16,
  },
  {
    id: 2,
    date: "2022-04-04 14:00:00",
    idartist: 2,
    idhall: 2,
    price: 15,
    assistants: 36,
  },
  {
    id: 3,
    date: "2022-04-05 10:00:00",
    idartist: 3,
    idhall: 3,
    price: 60,
    assistants: 316,
  },
  {
    id: 4,
    date: "2022-04-05 12:00:00",
    idartist: 4,
    idhall: 4,
    price: 25,
    assistants: 16,
  },
  {
    id: 5,
    date: "2022-04-05 14:00:00",
    idartist: 5,
    idhall: 5,
    price: 35,
    assistants: 10,
  },
  {
    id: 6,
    date: "2022-04-05 20:00:00",
    idartist: 6,
    idhall: 6,
    price: 40,
    assistants: 20,
  },
  {
    id: 7,
    date: "2022-04-06 14:00:00",
    idartist: 7,
    idhall: 7,
    price: 15,
    assistants: 150,
  },
  {
    id: 8,
    date: "2022-04-06 21:00:00",
    idartist: 8,
    idhall: 8,
    price: 20,
    assistants: 10,
  },
];

const eachOfevents = eventsJSON.map((event) => new Events(event));

mongoose
  .connect(
    `mongodb+srv://sergi:Baldufa!2022@cluster0.mtpvz.mongodb.net/RYTHMEOK?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(async () => {
    const allevents = await Events.find();
    if (allevents.length) {
      await Events.collection.drop();
    }
  })
  .catch((err) => console.log("Error deleting RYTHMEOK events", err))
  .then(async () => {
    await Events.insertMany(eachOfevents);
    console.log(
      "Congrats RYTHMEOK team!, you already have data from RYTHMEOK events in your DB"
    );
  })
  .catch((err) => console.log("You cannot create RYTHMEOK events. Sorry!", err))
  .finally(() => mongoose.disconnect());
