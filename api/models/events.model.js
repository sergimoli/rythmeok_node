const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventsSchema = new Schema(
  {
    id: { type: Number, required: true },
    // date: { type: Date },
    date: { type: String, required: true },
    time: { type: String },
    // idartist: { type: Number },
    // idhall: { type: Number },
    idartist: [
      { type: mongoose.Schema.Types.ObjectId, ref: "artists", trim: true },
    ],
    idhall: [
      { type: mongoose.Schema.Types.ObjectId, ref: "halls", trim: true },
    ],
    price: { type: Number },
    assistants: { type: Number },
  },
  {
    timestamps: true,
  }
);

const events = mongoose.model("events", eventsSchema);
module.exports = events;
