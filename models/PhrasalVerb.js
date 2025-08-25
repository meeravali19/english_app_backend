const mongoose = require("mongoose");

const phrasalVerbSchema = new mongoose.Schema(
  {
    verb: { type: String, required: true },
    meaning: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("PhrasalVerb", phrasalVerbSchema);
