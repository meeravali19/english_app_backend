const mongoose = require("mongoose");

const vocabularySchema = new mongoose.Schema({
  word: { type: String, required: true },
  meaning: { type: String, required: true },
  synonyms: [String],
  antonyms: [String],
});

module.exports = mongoose.model("Vocabulary", vocabularySchema);
