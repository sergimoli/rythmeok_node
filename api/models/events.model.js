const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventsSchema = new Schema(
  {
    id: { type: Number, required: true },
    date: { type: Date },
    idartist: { type: Number },
    idhall: { type: Number },
    price: { type: Number },
    assistants: { type: Number },
  },
  {
    timestamps: true,
  }
);

const events = mongoose.model("events", eventsSchema);
module.exports = events;
