const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistsSchema = new Schema(
  {
    id: { type: Number, required: true },
    name: { type: String },
    image: { type: String },
    description: { type: String },
    crew: { type: Array },
    genres: { type: Array },
  },
  {
    timestamps: true,
  }
);

const artists = mongoose.model("artists", artistsSchema);
module.exports = artists;
