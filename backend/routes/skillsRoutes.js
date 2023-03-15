const express = require("express");
const router = express.Router();
const { getSkills, setSkill } = require("../controllers/skillController");

router.get("/", getSkills);
router.post("/insert", setSkill);

// router.route("/").get(getSkills).post(setSkill);

module.exports = router;
