const express = require("express");
const { Admin, Course } = require("../db/db");
const jwt = require("jsonwebtoken")
const JWT_ADMIN_SECERT = process.env.JWT_ADMIN_SECERT
const adminRouter = express.Router()

adminRouter.post("/login", async(req,res)=>{
    const { email, password, firstName, lastName } = req.body
    try{
        const admin = await Admin.findOne({
            email: email,
            password: password,
          });
          if (admin) {
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
    }catch(error){
        res.json({
            message: error
        })
    }
});

adminRouter.post("/signup", async (req,res)=>{
    const { email, password, firstName, lastName } = req.body;

    try{
        await Admin.create({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
          });
          res.json({
            message: "Signup successful",
          });
    }catch(error){
        res.json({
            message: error
        })
    }
})
adminRouter.post("/course", async (req,res)=>{
    const adminId = req.adminId
    const {title, description,imageUrl,price } = req.body

    const course = await Course.create({
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price,
        creatorId: adminId
    })
    res.json({
        message: "Course Created",
        courseId: course._id
    })
})
adminRouter.post("/course/bulk", async (req,res)=>{
    const courses = await Course.find({})

    res.json({
        courses: courses
    })
})

module.exports = adminRouter