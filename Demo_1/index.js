const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Define routers here
const adminRouter = require("../Demo_1/routes/adminRouter");
const userRouter = require("../Demo_1/routes/userRouter")

// Middlewares for parsing requests bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/users", userRouter)



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port at ${PORT}`)
});