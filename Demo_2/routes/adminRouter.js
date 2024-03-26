const {Router} = require("express");
const adminMiddleware = require("../middlewares/adminMiddleware");
const { Admin , Course} = require("../db");
const router = Router();
const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken");


// Admin routes - creating signup post request
router.post("/signup", adminMiddleware, async function (req, res) {
    // signup router should take the parameters from the body to create the admin.
    username = req.body.username;
    password = req.body.password;

    // Creating the admin user in the Admin collection/table.
    await Admin.create({
        username: username,
        password: password
    })
        .then(function () {
            res.status(200).json({
                message: "Admin is signed up successfully."
            })
        })
})


router.post("/signin", async function (req, res) {
    username = req.body.username;
    password = req.body.password;
    console.log(JWT_SECRET);

    // if Admin exists
    const admin = await Admin.find({
        username,
        password
    })
    if (admin) {
        const token = jwt.sign({
            username
        }, JWT_SECRET)
        res.json({
            token
        })
    } else {
        res.json({
            message: "wrong credentials"
        })
    }
})

router.post("/courses", adminMiddleware, async function(req, res){
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
router.get("/courses", adminMiddleware,async function(req, res){
   const courses =await Course.find({});
    res.status(200).json({
        Courses: courses
    })
})

module.exports = router;