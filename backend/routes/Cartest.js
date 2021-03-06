//====================================================//Require
const express = require("express");

//====================================================//Require Functions
const {
  gethybridCars,
  bodyTest,
  HybridTest,
  getBodyTest,
  deleteBodyTest,
  updateHybridTestById,
  updatebodyTestById,
  deletehybridcar,
  getCarByOrderNo,
  getAllTest,
  getCarByCarNo,
  getCarByCarVin,
  getTestByDate,
} = require("../controllers/Cartest");

//====================================================//Create car Test Router
const CarTestRouter = express.Router();

//====================================================// ENDPOINTS
CarTestRouter.post("/BodyTest", bodyTest);
CarTestRouter.post("/hybridCar", HybridTest);
CarTestRouter.get("/getbodytests", getBodyTest);
CarTestRouter.get("/gethybridtest", gethybridCars);
CarTestRouter.delete("/deletebodytest", deleteBodyTest);
CarTestRouter.delete("/deletehybridtest", deletehybridcar);
CarTestRouter.get("/getcarbyno", getCarByCarNo);
CarTestRouter.get("/getCarByCarVin", getCarByCarVin);
CarTestRouter.put("/updatehybridtestbyid", updateHybridTestById);
CarTestRouter.put("/updatebodytestbyid", updatebodyTestById);
CarTestRouter.post("/getCarByOrderNo", getCarByOrderNo);
CarTestRouter.get("/getAllTest", getAllTest);
CarTestRouter.get("/getAllTestByDate", getTestByDate);

//====================================================// module.exports

module.exports = CarTestRouter;
