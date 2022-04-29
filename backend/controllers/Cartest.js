//====================================================//Require
const connection = require("../database/db");

//====================================================//Petrol Car Test
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

//====================================================//hybrid car test

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
//====================================================// module.exports
module.exports = { petrolCarTest,HybridCarTest };
