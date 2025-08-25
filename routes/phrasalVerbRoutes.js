const express = require("express");
const PhrasalVerb = require("../models/PhrasalVerb");

const router = express.Router();

// Get all phrasal verbs
router.get("/", async (req, res) => {
  try {
    const list = await PhrasalVerb.find();
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new phrasal verb
router.post("/", async (req, res) => {
  try {
    if (Array.isArray(req.body)) {
      const result = await PhrasalVerb.insertMany(req.body);
      return res.status(201).json({
        message: `${result.length} phrasal verbs added successfully`,
        data: result
      });
    }
    const newVerb = new PhrasalVerb(req.body);
    await newVerb.save();
    res.json(newVerb);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a phrasal verb
router.put("/:id", async (req, res) => {
  try {
    const updated = await PhrasalVerb.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a phrasal verb
router.delete("/:id", async (req, res) => {
  try {
    await PhrasalVerb.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
