const { User } = require("../db"); // importing Admin data from the db.Admin file

// Writing User middleware function to handle the data
function userMiddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;

    User.findOne({  // Returns one document that satisfies the specified query criteria on the collection or view
        username: username,
        password: password
    })
    .then(function(response){
        if(response){
            next();
        }else{
            res.status(403).json({
                message: "User does not exist."
            })
        }
    })
}

module.exports = userMiddleware;