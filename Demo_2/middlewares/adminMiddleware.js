const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken");

// writing a function for adminMiddleware to check the jwtToken works or not
function adminMiddleware(req, res, next) {
    
        const token = req.headers.authorization;
        // console.log(req.headers);
        // console.log(token)
        const words = token.split(' ');
        const jwtToken = words[1];
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET)
        
        if (decodedValue.username) {
            next();
        } else {
            res.status(403).json({
                message: "You are not authenticated."
            })
        }
    

}

module.exports = adminMiddleware;