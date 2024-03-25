const { Admin } = require("../db"); // importing Admin data from the db.Admin file


// Writing Admin middleware function to handle the data
function adminMiddleware(req, res, next){
    // Any middleware logic is created in the headers parameters
    const username = req.headers.username;
    const password = req.headers.password;

    Admin.findOne({  // Returns one document that satisfies the specified query criteria on the collection or view
        username: username,
        password: password
    })
    .then(function(response){
        if(response){
            next();
        }else{
            res.status(403).json({
                message: "Admin does not exist."
            })
        }
    })
}

module.exports = adminMiddleware;