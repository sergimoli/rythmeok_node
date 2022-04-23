const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UniverseSchema = new Schema(
  {
    name: { type: String, required: true },
    characters: [
      {
        type: Schema.Types.ObjectId,
        ref: "character",
        required: false,
      },
    ],
  },
  { timestamps: true }
);

const universe = mongoose.model("universe", UniverseSchema);
module.exports = universe;
