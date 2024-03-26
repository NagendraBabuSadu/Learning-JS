const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

// Defining routers
const adminRouter = require("../Demo_2/routes/adminRouter")
const userRouter = require("../Demo_2/routes/userRouter")

// Defining middlewares
app.use("/admin", adminRouter)
app.use("/users", userRouter)


const PORT = 3000;
app.listen(PORT, () => console.log("server listens at 3000"));
