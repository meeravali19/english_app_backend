const express = require("express");
const {
  getPhrasalVerbs,
  addPhrasalVerb,
  deletePhrasalVerb,
} = require("../controllers/phrasalVerbController");

const router = express.Router();

// Routes
router.get("/", getPhrasalVerbs);
router.post("/", addPhrasalVerb);
router.delete("/:id", deletePhrasalVerb);

module.exports = router;
