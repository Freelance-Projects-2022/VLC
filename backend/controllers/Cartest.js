//====================================================//Require
const connection = require("../database/db");
const { uuid } = require("uuidv4");

//====================================================//Create Petrol Car Test
const petrolCarTest = (req, res) => {
  const {
    vin_tr,
    vin_tl,
    vin_br,
    vin_bl,
    body_note,
    engine_test,
    gear_test,
    back_acss,
  } = req.body;
  const query =
    "INSERT INTO petrol_car (vin_tr,vin_tl,vin_br,vin_bl,body_note,engine_test,gear_test,back_acss) VALUES (?,?,?,?,?,?,?,?)";
  const data = [
    vin_tr,
    vin_tl,
    vin_br,
    vin_bl,
    body_note,
    engine_test,
    gear_test,
    back_acss,
  ];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Server Error", error: err.message });
    }
    return res.status(200).json({
      success: true,
      message: "Successfully Add Car Test",
      result: result,
    });
  });
};

//====================================================// Create hybrid car test

const HybridCarTest = (req, res) => {
  const {
    engine_test,
    transmission,
    srs,
    abs_system,
    ac,
    hybrid_system,
    hv_battery,
    eleectric_system,
    emc,
    soh,
    note,
  } = req.body;
  const query =
    "INSERT INTO hybrid_car (  engine_test,transmission,srs,abs_system,ac,hybrid_system,hv_battery,eleectric_system,emc,soh,note) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
  const data = [
    engine_test,
    transmission,
    srs,
    abs_system,
    ac,
    hybrid_system,
    hv_battery,
    eleectric_system,
    emc,
    soh,
    note,
  ];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Server Error", error: err.message });
    }
    return res.status(200).json({
      success: true,
      message: "Successfully Add Car Test",
      result: result,
    });
  });
};

//====================================================// Create order_test

// const orderTest = (req, res) => {
//   const {
//     engine_test,
//     transmission,
//     srs,
//     abs_system,
//     ac,
//     hybrid_system,
//     hv_battery,
//     eleectric_system,
//     emc,
//     soh,
//     note,
//   } = req.body;
//   const query =
//     "INSERT INTO order_test (`car_no`, `car_type`, `car_vin`, `car_color`, `car_model`, `car_order_no`, `car_notes`, `test_price`, `car_petrol_test`, `car_hybrid_test`) VALUES (?,?,?,?,?,?,?,?)";
//   const data = [
//     engine_test,
//     transmission,
//     srs,
//     abs_system,
//     ac,
//     hybrid_system,
//     hv_battery,
//     eleectric_system,
//     emc,
//     soh,
//     note,
//   ];
//   connection.query(query, data, (err, result) => {
//     if (err) {
//       return res
//         .status()
//         .json({ success: false, message: "Server Error", error: err.message });
//     }
//     return res.status(200).json({
//       success: true,
//       message: "Successfully Add Car Test",
//       result: result,
//     });
//   });
// };

//====================================================//get all Petrol Cars where is_deleted =0
const getPetrolCars = (req, res) => {
  const query = "SELECT *  FROM vlc.petrol_car where is_deleted =0;";
  connection.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      });
    }

    // result are the data returned by mysql server
    return res.status(200).json({
      success: true,
      massage: "All Petrol Cars",
      results: result,
    });
  });
};

//====================================================//get car depend on car_no
const getCarByCarNo = (req, res) => {
  const carNo = req.body.carNo;
  const data = [carNo];
  const query = " SELECT *  FROM order_test where car_no=? And is_deleted =0";
  connection.query(query, data, (err, result) => {
    try {
      if (result.length === 0) {
        return res.status(404).json({
          success: false,
          massage: "No Car Test Found For This Car No.",
          err: err,
        });
        // result are the data returned by mysql server
      } else {
        const carId = result[0].id;
        const data = [carId, carId, carId];
        const query =
          "select * from hybrid_car hc join petrol_car pc on hc.id=? and pc.id=? join order_test ot on ot.id=?";
        connection.query(query, data, (err, result) => {
          if (err) {
            return res.status(500).json({
              success: false,
              massage: "Server Error",
              err: err,
            });
          } else {
            return res.status(200).json({
              success: true,
              massage: `No Car Test Found For This Car No.`,
              result: result,
            });
          }
        });
      }
    } catch {
      res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      });
    }
  });
};

// //====================================================//get car depend on vin
const getCarByCarVin = (req, res) => {
  const carVin = req.body.car_vin;
  const data = [carVin];
  const query = " SELECT *  FROM order_test where car_vin=? And is_deleted =0";
  connection.query(query, data, (err, result) => {
    try {
      if (result.length === 0) {
        return res.status(404).json({
          success: false,
          massage: "No Car Test Found For This Car Vin",
          err: err,
        });
        // result are the data returned by mysql server
      } else {
        const carId = result[0].id;
        const data = [carId, carId, carId];
        const query =
          "select * from hybrid_car hc join petrol_car pc on hc.id=? and pc.id=? join order_test ot on ot.id=?";
        connection.query(query, data, (err, result) => {
          if (err) {
            return res.status(500).json({
              success: false,
              massage: "Server Error",
              err: err,
            });
          } else {
            return res.status(200).json({
              success: true,
              massage: `No Car Test Found For This Car Vin`,
              result: result,
            });
          }
        });
      }
    } catch {
      res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      });
    }
  });
};

//====================================================//get all hybrid Cars  where is_deleted =0
const gethybridCars = (req, res) => {
  const query = "SELECT * FROM vlc.hybrid_car where is_deleted=0;;";
  connection.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      });
    }

    // result are the data returned by mysql server
    return res.status(200).json({
      success: true,
      massage: "All hybrid Cars",
      results: result,
    });
  });
};
//====================================================//delete petrol car
const deletePetrolCar = (req, res) => {
  const id = req.query.id;
  const query = "UPDATE petrol_car SET is_deleted=1 WHERE id=?";

  connection.query(query, id, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "Server Error",
        err: err,
      });
    }
    if (!results.changedRows) {
      return res.status(404).json({
        success: false,
        massage: `The petrol cars : ${id} is not found`,
        err: err,
      });
    }
    return res.status(200).json({
      success: true,
      massage: `Succeeded to delete petrol car with id: ${id}`,
      results: results,
    });
  });
};

//====================================================//delete hybrid car
const deletehybridcar = (req, res) => {
  const id = req.query.id;
  const query = "UPDATE hybrid_car SET is_deleted=1 WHERE id=?";

  connection.query(query, id, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "Server Error",
        err: err,
      });
    }
    if (!results.changedRows) {
      return res.status(404).json({
        success: false,
        massage: `The petrol cars : ${id} is not found`,
        err: err,
      });
    }
    return res.status(200).json({
      success: true,
      massage: `Succeeded to delete petrol car with id: ${id}`,
      results: results,
    });
  });
};
//====================================================// module.exports
module.exports = {
  petrolCarTest,
  HybridCarTest,
  getPetrolCars,
  gethybridCars,
  deletePetrolCar,
  deletehybridcar,
  getCarByCarNo,
  getCarByCarVin,
};
