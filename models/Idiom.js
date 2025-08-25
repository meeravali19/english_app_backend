const mongoose = require("mongoose");

const idiomSchema = new mongoose.Schema(
  {
    idiom: { type: String, required: true },
    meaning: { type: String, required: true },
    example: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Idiom", idiomSchema);
