const express = require("express");
const asyncHandler = require("express-async-handler");
const Skills = require("../models/skillsModel");
const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const myskills = await Skills.find({});

    res.json(myskills);
  })
);

// @desc    Create a skill
// @route   POST /api/skill
// @access

router.post(
  "/created",
  asyncHandler(async (req, res, next) => {
    if (!req.body.skill) {
      res.status(400);
      throw new Error("Please add a text field");
    }

    // const skill = new Skills({
    //   skill: req.body.skill,
    // });

    const createdSkill = await Skills.create({
      skill: req.body.skill,
    });
    // const goal = await Goal.create({
    //   text: req.body.text,
    //   user: req.user.id,
    // });
    // res.status(200).json(goal);

    res.json(createdSkill);
    res.status(201).json(createdSkill);
  })
);

module.exports = router;
