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
// @route   DELETE /api/skill/:id
// @access  Private
const deleteSkill = asyncHandler(async (req, res) => {
  const skill = await SkillsModel.findById(req.params.id);
  // const goal = await Goal.findById(req.params.id);
  if (!skill) {
    res.status(400);

    throw new Error("Skill not found!");
  }

  try {
    await skill.remove();
    // await SkillsModel.findOneAndDelete(req.params.id);
  } catch (error) {
    console.log("Shit error");
  }

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getSkills,
  setSkill,
  deleteSkill,
};
