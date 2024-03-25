// importing the mongoose into the db index.js file
const mongoose = require("mongoose");

// connect to mongo db
mongoose.connect("mongodb+srv://nagendrababusadu:yYIfOmXS5mtVt7xQ@cluster0.qjndx4s.mongodb.net/demo1")

// demo_1 db has total 3 collections/tables - viz. Admin, Users, Courses.

// Writing the AdminSchema for the db index.js file
const AdminSchema = new mongoose.Schema({ // new takes the object as parameters
    username: String,
    password: String
});


// Writing the UserSchema for the db index.js file
const UserSchema = new mongoose.Schema({ // new takes the object as parameters
    username: String,
    password: String,
    coursesPurchased : [{ // the nested collection - coursesPurchased take two key:value pair arguments, i.e., 'type' & 'ref'
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'

    }]
});



// Writing the CoursesSchema for the db index.js file
const CoursesSchema = new mongoose.Schema({ // new takes the object as parameters
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

// Creating mongoose model wrappers for the mongoose schemas.
const Admin = mongoose.model('Admin', AdminSchema)
const User = mongoose.model('User', UserSchema)
const Course = mongoose.model('Course', CoursesSchema)

// Purposefully not keeping object notation to see whether we get the error or not
module.exports = {
    Admin,
    User,
    Course 
}