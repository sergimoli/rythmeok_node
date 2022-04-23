const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const magazinesSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const magazines = mongoose.model("magazines", magazinesSchema);
module.exports = magazines;
