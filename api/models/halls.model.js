const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hallsSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String },
    address: { type: String },
  },
  {
    timestamps: true,
    sdfs,
  }
);

const halls = mongoose.model("halls", hallsSchema);
module.exports = halls;
