const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wavesSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const waves = mongoose.model("waves", wavesSchema);
module.exports = waves;
