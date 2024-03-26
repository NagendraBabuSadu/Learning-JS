const {JWT_SECRET} = require("../config")
const jwt = require("jsonwebtoken");

// writing a function for userMiddlware to check the User exist or not
function userMiddlware(req, res, next){
    
    const token = req.headers.authorization;
    // console.log(req.headers);
    const words = token.split(' ');
    const jwtToken = words[1];
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET)

    if (decodedValue.username) {
        req.username = decodedValue.username;
        next();
    } else {
        res.status(403).json({
            message: "You are not authenticated."
        })
    }

}

module.exports = userMiddlware;