const mongoose = require("mongoose");

const goalsSchema = mongoose.Schema({
  // id: {
  //   type: String,
  //   required: true,
  // },
  text: {
    type: String,
    required: true,
  },
});

const Goals = mongoose.model("Goals", goalsSchema);
module.exports = Goals;
