//====================================================//Require
const express = require("express");
const PORT = 5000;
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

//====================================================//import database
const connection = require("./database/db");

//====================================================// Import Routers
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/Register.js");
const CarTestRouter = require("./routes/Cartest.js");
//====================================================// Routes Middleware

app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/cartest", CarTestRouter);


//====================================================// Handles any other endpoints [unassigned - endpoints]
app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
