const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const Goals = require("../models/goalsModel");

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const mygoals = await Goals.find({});

    res.json(mygoals);
  })
);

module.exports = router;
