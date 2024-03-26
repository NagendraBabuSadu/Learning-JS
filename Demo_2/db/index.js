const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://nagendrababusadu:yYIfOmXS5mtVt7xQ@cluster0.qjndx4s.mongodb.net/demo2");

// AdminSchema
// UserSchema

const AdminSchema = new mongoose.Schema({
    username: String, 
    password: String
});


const UserSchema = new mongoose.Schema({
    username: String,
    password: String, 
    purchasedCourses : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
})

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageLink: String,
    price: Number
})


// The above schemas should be stored in models.
const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);


// All the defined models should be exported
module.exports = {
    Admin, 
    User, 
    Course
}