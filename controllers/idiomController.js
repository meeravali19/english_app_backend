const Idiom = require("../models/Idiom");

// ✅ Get all idioms
const getIdioms = async (req, res) => {
  try {
    const idioms = await Idiom.find();
    res.json(idioms);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch idioms" });
  }
};

// ✅ Add new idiom
const addIdiom = async (req, res) => {

  
  try {

    const data = req.body;

    // If it's an array → insert many
    if (Array.isArray(data)) {
      const idioms = await Idiom.insertMany(data);
      return res.status(201).json({
        message: `${idioms.length} idioms added successfully`,
        idioms,
      });
    }

    const { idiom, meaning, example } = req.body;
    const newIdiom = new Idiom({ idiom, meaning, example });
    await newIdiom.save();
    res.status(201).json(newIdiom);
  } catch (error) {
    res.status(400).json({ error: "Failed to add idiom" });
  }
};

// ✅ Update idiom
const updateIdiom = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Idiom.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Idiom not found" });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: "Failed to update idiom" });
  }
};

// ✅ Delete idiom
const deleteIdiom = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Idiom.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Idiom not found" });
    res.json({ message: "Idiom deleted" });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete idiom" });
  }
};

module.exports = { getIdioms, addIdiom, updateIdiom, deleteIdiom };
