require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");
const courseRouter = require("./routes/courseRouter");
const adminRouter = require("./routes/adminRouter");
const app = express();

app.use(express.json());

// Use the routers
app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);

// Start the server and connect to MongoDB
app.listen(3000, async () => {
  await mongoose.connect(process.env.MONGODB_URI)
  console.log("Server is running on port 3000");

});
