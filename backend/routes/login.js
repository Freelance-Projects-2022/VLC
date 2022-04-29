//====================================================//Require
const express = require("express");

//====================================================//Import doctors Controllers
const { userLogin, adminLogin, } = require("../controllers/Login");

//====================================================//Create login Router

const loginRouter = express.Router();

//====================================================// ENDPOINTS

loginRouter.post("/", adminLogin, userLogin);


//====================================================// module.exports
module.exports = loginRouter;
