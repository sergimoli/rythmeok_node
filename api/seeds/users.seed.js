const mongoose = require("mongoose");
const Users = require("../models/user.model");

const usersJSON = [
  {
    username: "Torcuato",
    email: "torcuatogrima@gmail.com",
    password: "whatthefuck",
    friends: [
      "626ab69a6fa43e1dec1ef13c",
      "626ab69a6fa43e1dec1ef13d",
      "626ab69a6fa43e1dec1ef13e",
    ],
    purchases: [
      "626aab41dfc2388e64f3a2c8",
      "626aab41dfc2388e64f3a2cd",
      "626aab41dfc2388e64f3a2cf",
    ],
  },
  {
    username: "Sara",
    email: "sara@gmail.com",
    password: "whatthefuck",
    friends: ["626ab69a6fa43e1dec1ef13b"],
    purchases: ["626aab41dfc2388e64f3a2c9"],
  },
  {
    username: "David",
    email: "david@gmail.com",
    password: "whatthefuck",
    friends: ["626ab69a6fa43e1dec1ef13b"],
    purchases: ["626aab41dfc2388e64f3a2ca"],
  },
  {
    username: "Jorge",
    email: "jorge@gmail.com",
    password: "whatthefuck",
    friends: ["626ab69a6fa43e1dec1ef13b"],
    purchases: ["626aab41dfc2388e64f3a2cb"],
  },
  {
    username: "Sergi",
    email: "sergi@gmail.com",
    password: "whatthefuck",
    friends: [],
    purchases: ["626aab41dfc2388e64f3a2cc", "626aab41dfc2388e64f3a2cd"],
  },
];

const eachOfusers = usersJSON.map((user) => new Users(user));

mongoose
  .connect(
    `mongodb+srv://sergi:Baldufa!2022@cluster0.mtpvz.mongodb.net/RYTHMEOK?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(async () => {
    const allusers = await Users.find();
    if (allusers.length) {
      await Users.collection.drop();
    }
  })
  .catch((err) => console.log("Error deleting RYTHMEOK users", err))
  .then(async () => {
    await Users.insertMany(eachOfusers);
    console.log(
      "Congrats RYTHMEOK team!, you already have data from RYTHMEOK users in your DB"
    );
  })
  .catch((err) => console.log("You cannot create RYTHMEOK users. Sorry!", err))
  .finally(() => mongoose.disconnect());
