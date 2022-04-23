const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    catname: { type: String },
    born: { type: String },
    race: { type: String },
    gender: { type: String },
    bio: { type: String },
    health: { type: String },
    attack: { type: String },
    defense: { type: String },
    kiRestoreSpeed: { type: String },
    image: { type: String },
    abilities: { type: Array },
    // abilities: { type: String },
  },
  {
    timestamps: true,
  }
);

const character = mongoose.model("character", characterSchema);
module.exports = character;
