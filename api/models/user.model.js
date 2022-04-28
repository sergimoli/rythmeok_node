const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const saltRounds = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true }, //new smo
  email: { type: String, trim: true, required: true },
  password: { type: String, trim: true, required: true },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "users", trim: true }],
  purchases: [
    { type: mongoose.Schema.Types.ObjectId, ref: "events", trim: true },
  ],
});

UserSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

const User = mongoose.model("users", UserSchema);
module.exports = User;
