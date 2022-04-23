const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stylesSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const styles = mongoose.model("styles", stylesSchema);
module.exports = styles;
