const express = require("express");
const {
  getOneWordSubstitutions,
  addOneWordSubstitution,
  deleteOneWordSubstitution,
  updateOneWordSubstitution,
} = require("../controllers/oneWordSubstitutionController");

const router = express.Router();

router.get("/", getOneWordSubstitutions);
router.post("/", addOneWordSubstitution);
router.delete("/:id", deleteOneWordSubstitution);
router.put("/:id", updateOneWordSubstitution);

module.exports = router;
