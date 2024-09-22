const express = require("express");
const { User } = require("../db/db");
const jwt = require("jsonwebtoken");
const JWT_SECERT = process.env.JWT_SECERT;

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const user = await User.findOne({
      email: email
    })
    if( user === email){
      res.json({
        message: "Alredy have an account"
      })
      return
    }
    await User.create({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    });
    res.json({
      message: "Signup successful",
    });
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const user = await User.findOne({
      email: email,
      password: password,
    });
    if (user) {
      const token = jwt.sign(
        {
          id: user._id,
        },
        JWT_SECERT
      );
      res.json({
        token: token,
      });
    } else {
      res.json({
        message: "inccorect creadentials",
      });
    }
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

userRouter.post("/purchases", (req, res) => {
  res.json({
    message: "Signup successful",
  });
});

module.exports = userRouter;
