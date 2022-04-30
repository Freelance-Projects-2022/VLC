//====================================================//Require
const express = require("express");

//====================================================//Require Functions
const {
  petrolCarTest,
  HybridCarTest,
  getPetrolCars,
  gethybridCars,
  deletePetrolCar,
  deletehybridcar,
  getCarByCarNo,
} = require("../controllers/Cartest");
const CarTestRouter = express.Router();

CarTestRouter.post("/petrolCar", petrolCarTest);
CarTestRouter.post("/hybridCar", HybridCarTest);
CarTestRouter.get("/getpetroltest", getPetrolCars);
CarTestRouter.get("/gethybridtest", gethybridCars);
CarTestRouter.delete("/deletepetrolcar", deletePetrolCar);
CarTestRouter.delete("/deletehybridcar", deletehybridcar);
CarTestRouter.get("/getcarbyno", getCarByCarNo);

//====================================================// module.exports

module.exports = CarTestRouter;
