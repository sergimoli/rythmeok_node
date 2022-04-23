const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistsSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String },
    styles: { type: Array },
  },
  {
    timestamps: true,
  }
);

const artists = mongoose.model("artists", artistsSchema);
module.exports = artists;
