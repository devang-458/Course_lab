const express = require("express");

const courseRouter = express.Router();

courseRouter.post("/purchase", (req, res) => {
  res.json({
    message: "Signup successful",
  });
});

courseRouter.get("/courses", (req, res) => {
  res.json({
    message: "Signup successful",
  });
});

module.exports = courseRouter
