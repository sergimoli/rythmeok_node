const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hallsSchema = new Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String },
    address: { type: String },
    telephone: { type: String },
    webpage: { type: String },
    latitude: { type: String },
    longitude: { type: String },
    moreinfo: { type: Array },
  },
  {
    timestamps: true,
  }
);

const halls = mongoose.model("halls", hallsSchema);
module.exports = halls;
