//====================================================//Require
const express = require("express");

//====================================================//Require Functions
const { petrolCarTest } = require("../controllers/Cartest");
const CarTestRouter = express.Router();

CarTestRouter.post("/petrolCar", petrolCarTest);

//====================================================// module.exports

module.exports = CarTestRouter;
