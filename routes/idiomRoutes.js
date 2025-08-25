const express = require("express");
const {
  getIdioms,
  addIdiom,
  updateIdiom,
  deleteIdiom
} = require("../controllers/idiomController");

const router = express.Router();

// GET all idioms
router.get("/", getIdioms);

// POST new idiom
router.post("/", addIdiom);

// PUT update idiom
router.put("/:id", updateIdiom);

// DELETE idiom
router.delete("/:id", deleteIdiom);

module.exports = router;
