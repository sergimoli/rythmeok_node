const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stylesSchema = new Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const styles = mongoose.model("styles", stylesSchema);
module.exports = styles;
