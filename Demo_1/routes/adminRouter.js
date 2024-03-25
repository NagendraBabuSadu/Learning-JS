const { Router } = require("express");
const adminMiddleware = require("../middlewares/adminMiddleware");
const { Admin, Course } = require("../db");
const router = Router();

// Admin routes - creating signup post request
router.post("/signup", function (req, res) {
    // signup router should take the parameters from the body to create the admin.
    username = req.body.username;
    password = req.body.password;

    // Creating the admin user in the Admin collection/table.
    Admin.create({
        username: username,
        password: password
    })
        .then(function () {
            res.status(200).json({
                message: "Admin is signed up successfully."
            })
        })
})


// Admin routes - creating courses post request
router.post("/courses", adminMiddleware, async function (req, res) {
    // Implement course creation logic 
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    let newCourse = await Course.create({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price

    })
    console.log(newCourse);
    res.json({
        message: "Course created successfully.", courseId: newCourse._id
    })

})


// Admin routes - creating courses get request
router.get("/courses", adminMiddleware, async function (req, res) {
    const courses = await Course.find({})
    res.status(200).json({
        Courses: courses
    })

})





module.exports = router;