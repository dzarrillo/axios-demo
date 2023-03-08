const mongoose = require("mongoose");

const skillsSchema = mongoose.Schema({
  // id: {
  //   type: String,
  //   required: true,
  // },
  skill: {
    type: String,
    required: true,
  },
});

const Skills = mongoose.model("Skills", skillsSchema);
module.exports = Skills;
