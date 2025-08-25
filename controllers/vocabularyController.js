const Vocabulary = require("../models/Vocabulary");

// Get all words
const getVocabulary = async (req, res) => {
  try {
    const words = await Vocabulary.find();
    console.log("Fetched data:", words); // ✅ correct variable
    res.json(words);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add new word
const addVocabulary = async (req, res) => {
  try {
    const newWord = new Vocabulary(req.body);
    const saved = await newWord.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete word
const deleteVocabulary = async (req, res) => {
  try {
    await Vocabulary.findByIdAndDelete(req.params.id);
    res.json({ message: "Word deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update word
const updateVocabulary = async (req, res) => {
  try {
    const updated = await Vocabulary.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // ✅ returns the updated document
    );
    if (!updated) {
      return res.status(404).json({ message: "Word not found" });
    }
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getVocabulary, addVocabulary, deleteVocabulary, updateVocabulary };
