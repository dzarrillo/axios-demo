const asyncHandler = require("express-async-handler");
const SkillsModel = require("../models/skillsModel");
// @desc    Get skills
// @route   GET /api/skills
// @access  Private
const getSkills = asyncHandler(async (req, res) => {
  console.log("In getSkills");
  const skills = await SkillsModel.find({});

  res.status(200).json({ skills });
});

// @desc    Save skill
// @route   POST /api/skills
// @access  Private
const setSkill = asyncHandler(async (req, res) => {
  if (!req.body.skill) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  // const skill = await SkillsModel.create({
  //   skill: req.body.skill,
  // });
  const mySkill = req.body.skill;
  const newSkillModel = new SkillsModel({
    skill: mySkill,
  });
  newSkillModel.save();
  res.status(200).json(newSkillModel);
});

// @desc    Delete skill
// @route   DELETE /api/skill/delete/:id
// @access  Private
const deleteSkill = asyncHandler(async (req, res) => {
  // let mySkill = req.params.skill;
  let myId = req.params.id;
  console.log(myId);
  SkillsModel.findByIdAndDelete(myId, function (err, docs) {
    if (err) {
      res.send("Error deleting data " + err);
    } else {
      if (docs == null) {
        res.send("Skill not found!");
      } else {
        res.send(docs);
      }
    }
  });
});

module.exports = {
  getSkills,
  setSkill,
  deleteSkill,
};
