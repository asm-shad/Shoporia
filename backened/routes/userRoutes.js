const express = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const router = express.Router();

// @route POST /API/USERS/REGISTER
// @desc Register a new user
//  @access public

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Registration Logic
    res.send({ name, email, password });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
