const mongoose = require("mongoose");

const oneWordSubSchema = new mongoose.Schema(
  {
    phrase: { type: String, required: true },
    substitution: { type: String, required: true },
    meaning: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("OneWordSubstitution", oneWordSubSchema);
