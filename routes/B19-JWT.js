const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// MODEL
const User = require("../models/user");

// ROUTE
router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPwd = await bcrypt.hash(password, 12);

    const isExistUser = await User.findOne({ email });

    if (isExistUser) {
      return res.status(409).json({
        status: "Email already exist",
      });
    }

    const newUser = await User.create({
      email,
      password: hashedPwd,
    });

    const token = jwt.sign(newUser.id, "mySecretKey");

    res.status(200).json({
      status: "success",
      jwt: token,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      msg: err,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatchPwd = user
      ? await bcrypt.compare(password, user.password)
      : false;

    if (!user || !isMatchPwd) {
      return res.status(403).json({
        status: "fail",
        msg: "Your email or password is incorrect",
      });
    }

    const token = jwt.sign(user.id, "mySecretKey");

    res.status(200).json({
      status: "success",
      jwt: token,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      msg: err,
    });
  }
});

module.exports = router;
