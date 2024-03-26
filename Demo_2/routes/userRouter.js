const { Router } = require("express");
const userMiddlware = require("../middlewares/userMiddleware");
const { User, Course } = require("../db");
const router = Router(); // initializing router
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { sign } = require("crypto");


// User routes - creating signup post request
router.post("/signup", userMiddlware, async function (req, res) {
    // signup router should take the parameters from the body to create the admin.
    username = req.body.username;
    password = req.body.password;

    // Creating the admin user in the Admin collection/table.
    await User.create(
        { username, password }
    )
        .then(function () {
            res.status(200).json({
                message: `User ${username} is signed up successfully.`
            })
        })
})

// User routes - creating signin post request
router.post("/signin", async function (req, res) {
    username = req.body.username;
    password = req.body.password;

    const user = await User.findOne({
        username,
        password
    })
    if (user) {
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


router.get("/courses", userMiddlware, async function (req, res) {
    const authToken = req.headers.authorization;
    if (authToken) {
        const courses = await Course.find({});
        res.status(200).json({
            Courses: courses
        })
    } else {
        res.status(403).json({
            message: "Incorrect input."
        })
    }


})

router.post("/courses/:courseId", userMiddlware, async function (req, res) {
    const authToken = req.headers.authorization;
    if (authToken) {
        const courseId = req.params.courseId;
        try {
            await User.updateOne({
                username: req.username
            }, {
                $push: {
                    purchasedCourses: courseId
                }
            })
            console.log(courseId);

        }catch(error){
            console.log(error)
        }
        res.json({
            message: "Purchased Successfully."
        })
    }
})


router.get("/courses/purchasedCourses",userMiddlware, async function(req, res){
    
    console.log("hi there");
    const authToken = req.headers.authorization;
    if(authToken){
        const findUser = await User.findOne({
            username: req.username
        });
        const coursesList = await Course.find({
            _id : {
                "$in" : findUser.purchasedCourses
            }
        })
        res.status(200).json({
            Courses: coursesList
            
        })

    }

})


module.exports = router;