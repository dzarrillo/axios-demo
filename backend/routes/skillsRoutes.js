const express = require("express");
const router = express.Router();
const {
  getSkills,
  setSkill,
  deleteSkill,
} = require("../controllers/skillController");

router.get("/", getSkills);
router.post("/insert", setSkill);
router.delete("delete/:id", deleteSkill);
// router.route("/").get(getSkills).post(setSkill);

module.exports = router;
