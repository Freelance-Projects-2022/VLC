//====================================================//Require
const express = require("express");

//====================================================//Require Functions
const { petrolCarTest, HybridCarTest } = require("../controllers/Cartest");
const CarTestRouter = express.Router();

CarTestRouter.post("/petrolCar", petrolCarTest);
CarTestRouter.post("/hybridCar", HybridCarTest);

//====================================================// module.exports

module.exports = CarTestRouter;
