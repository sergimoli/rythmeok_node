const mongoose = require("mongoose");
const Events = require("../models/events.model");

const artistsJSON = [
  {
    date: "2022-04-04 00:00:00",
    image:
      "https://res.cloudinary.com/dahswyr0k/image/upload/v1650579310/RITHMEOK/artists/TAYLORSWIFT_ytf37d.jpg",
  },
  {
    name: "Justin Bibier",
    image:
      "https://res.cloudinary.com/dahswyr0k/image/upload/v1650579310/RITHMEOK/artists/JUSTINBIBIER_vheqht.jpg",
  },
  {
    name: "The weekend",
    image:
      "https://res.cloudinary.com/dahswyr0k/image/upload/v1650579310/RITHMEOK/artists/THEWEEKEND_kzaspj.jpg",
  },
  {
    name: "Rihanna",
    image:
      "https://res.cloudinary.com/dahswyr0k/image/upload/v1650579310/RITHMEOK/artists/RIHANNA_o5r2sb.jpg",
  },
  {
    name: "Bad Bunny",
    image:
      "https://res.cloudinary.com/dahswyr0k/image/upload/v1650579309/RITHMEOK/artists/BADBUNNY_ivhpeg.jpg",
  },
  {
    name: "Eminem",
    image:
      "https://res.cloudinary.com/dahswyr0k/image/upload/v1650579309/RITHMEOK/artists/eminem_ajek8e.jpg",
  },
  {
    name: "Drake",
    image:
      "https://res.cloudinary.com/dahswyr0k/image/upload/v1650579309/RITHMEOK/artists/DRAKE_a27dkp.jpg",
  },
  {
    name: "Ed Sheeran",
    image:
      "https://res.cloudinary.com/dahswyr0k/image/upload/v1650579309/RITHMEOK/artists/EDSHEERAN_w0eqxr.jpg",
  },
  {
    name: "BTS",
    image:
      "https://res.cloudinary.com/dahswyr0k/image/upload/v1650579309/RITHMEOK/artists/BTS_yiwr4i.jpg",
  },
  {
    name: "Ariana Grande",
    image:
      "https://res.cloudinary.com/dahswyr0k/image/upload/v1650579309/RITHMEOK/artists/ARIANAGRANDE_bzgols.jpg",
  },
];

const eachOfevents = artistsJSON.map((event) => new Events(event));

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
