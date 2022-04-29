//====================================================//Require
const express = require("express");

//====================================================//Require Functions
const {
  petrolCarTest,
  HybridCarTest,
  getPetrolCars,
  gethybridCars,
} = require("../controllers/Cartest");
const CarTestRouter = express.Router();

CarTestRouter.post("/petrolCar", petrolCarTest);
CarTestRouter.post("/hybridCar", HybridCarTest);
CarTestRouter.get("/getpetroltest", getPetrolCars);
CarTestRouter.get("/gethybridtest", gethybridCars);

//====================================================// module.exports

module.exports = CarTestRouter;
