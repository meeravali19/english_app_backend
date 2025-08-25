const OneWordSubstitution = require("../models/OneWordSubstitution");

// @desc Get all one word substitutions
exports.getOneWordSubstitutions = async (req, res) => {
  try {
    const substitutions = await OneWordSubstitution.find();
    res.json(substitutions);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc Add new one word substitution (Admin only)
exports.addOneWordSubstitution = async (req, res) => {
  try {

    const data = req.body;

    // If multiple entries (array) → bulk insert
    if (Array.isArray(data)) {
      const result = await OneWordSubstitution.insertMany(data);
      return res.status(201).json({
        message: `${result.length} one-word substitutions added successfully`,
        data: result
      });
    }

    const { phrase, substitution, meaning } = req.body;
    const newEntry = new OneWordSubstitution({ phrase, substitution, meaning });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc Delete one word substitution (Admin only)
exports.deleteOneWordSubstitution = async (req, res) => {
  try {
    const substitution = await OneWordSubstitution.findByIdAndDelete(req.params.id);
    if (!substitution) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.updateOneWordSubstitution = async (req, res) => {
  try {
    const updated = await OneWordSubstitution.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return updated document
    );
    if (!updated) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};