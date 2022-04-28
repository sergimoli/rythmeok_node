const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wavesSchema = new Schema(
  {
    id: { type: Number, required: true },
    data: { type: Date, required: true },
    message: { type: String, required: true },
    userfrom: { type: Number, required: true },
    userto: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const waves = mongoose.model("waves", wavesSchema);
module.exports = waves;
