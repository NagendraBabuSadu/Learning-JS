const { Router } = require("express");
const userMiddleware = require("../middlewares/userMiddleware");
const { User, Course } = require("../db/");
const { error } = require("console");
const router = Router();

// User Routes -  creating signup post request
router.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {

        User.create({
            username: username,
            password: password
        })
            .then(function (response) {
                res.status(200).json({
                    message: `User ${username} is created succesfully.`
                })
            })
    } catch (e) {
        console.log(e)
    }
})

// User Routes - creating courses get request
router.get("/courses", async (req, res) => {
    const coursesList = await Course.find({})
    res.status(200).json({
        Courses: coursesList
    })
})

// User Routes - creating courseId post request
router.post("/courses/:courseId", userMiddleware, async (req, res) => {
    const username = req.headers.username;
    const courseId = req.params.courseId;

    try {
        const addCourse = await User.updateOne({
            username: username
        }, {
            "$push": {
                coursesPurchased: courseId
            }
        })
        console.log([courseId]);
    }catch(err){
        console.log(err)
    }  
    res.json({
        message: "Purchased Succesfully."
    })
})


router.get("/courses/coursesPurchased",userMiddleware, async (req, res) => {

    // const password = req.headers.password;
    
    const findUser = await User.findOne({
        username : req.headers.username
    });
    console.log(`finduser is ${findUser}`);
    const coursesList = await Course.find({
        _id: {
            "$in" : findUser.coursesPurchased
        }
    })
    console.log(`Course list is ${coursesList}`);

    res.status(200).json({
        Courses: coursesList
    })

})



module.exports = router;