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
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    user = new User({ name, email, password });
    await user.save();

    // res.status(201).json({
    //   user: {
    //     _id: user._id,
    //     name: user.name,
    //     email: user.email,
    //     role: user.role,
    //   },
    // });

    // Create JWT Payload
    const payload = { user: user._id, role: user.role };

    // Sign and return the token along with user data
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "40h" },
      (err, token) => {
        if (err) throw err;
        // Send the user and token in response
        res.status(201).json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// @route POST /api/users/login

module.exports = router;
