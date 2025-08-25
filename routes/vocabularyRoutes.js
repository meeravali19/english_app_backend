const express = require("express");
const { getVocabulary, addVocabulary, deleteVocabulary, updateVocabulary } = require("../controllers/vocabularyController");

const router = express.Router();

router.get("/", getVocabulary);
router.post("/", addVocabulary);
router.delete("/:id", deleteVocabulary);
router.put("/:id", updateVocabulary);

module.exports = router;
