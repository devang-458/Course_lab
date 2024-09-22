const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String
})

const adminSchema = new Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String
})


const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: {type: ObjectId, ref: 'Admin'}
})

const purchasedCourse = new Schema({
    courseId: {type: ObjectId, ref: 'Course'},
    userId: {type: ObjectId, ref: 'User'}
})

const User = mongoose.model("User", userSchema)
const Admin = mongoose.model("Admin", adminSchema)
const Course = mongoose.model("Course", courseSchema)
const PurchasedCourse = mongoose.model("PurchasedCourse", purchasedCourse)

module.exports = {User, Admin, Course, PurchasedCourse}