//====================================================//Require
const express = require("express");

//====================================================//Import doctors Controllers
const { createNewUser } = require("../controllers/Register");

//====================================================//Create login Router

const registerRouter = express.Router();

//====================================================// ENDPOINTS

registerRouter.post("/", createNewUser);


//====================================================// module.exports
module.exports = registerRouter;
