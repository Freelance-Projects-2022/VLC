//====================================================//Require
const connection = require("../database/db");
const { uuid } = require("uuidv4");

//====================================================//Create Body Car Test
const bodyTest = (req, res) => {
  const {
    car_no,
    car_brand,
    car_vin,
    car_color,
    car_model,
    vin_tr,
    vin_tl,
    vin_br,
    vin_bl,
    body_note,
    engine_test,
    gear_test,
    back_acss,
    test_price,
    car_notes,
    test_date,
  } = req.body;

  const car_order_no = uuid().slice(0, 6);

  const query =
    "INSERT INTO body_Test (car_no,car_brand,car_vin,car_color,car_model,vin_tr,vin_tl,vin_br,vin_bl,body_note,engine_test,gear_test,back_acss,test_price,car_notes,car_order_no,test_date) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  const data = [
    car_no,
    car_brand,
    car_vin,
    car_color,
    car_model,
    vin_tr,
    vin_tl,
    vin_br,
    vin_bl,
    body_note,
    engine_test,
    gear_test,
    back_acss,
    test_price,
    car_notes,
    car_order_no,
    test_date,
  ];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Server Error", error: err.message });
    }
    return res.status(200).json({
      success: true,
      message: "تم تسجيل فحص السيارة بنجاح ",
      result: result,
    });
  });
};

//====================================================// Create hybrid car test

const HybridTest = (req, res) => {
  const {
    car_no,
    car_brand,
    car_vin,
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
    test_price,
    car_notes,
    test_date,
  } = req.body;
  const car_order_no = uuid().slice(0, 6);
  const query =
    "INSERT INTO hybrid_Test (car_no, car_brand,car_vin, engine_test,transmission,srs,abs_system,ac,hybrid_system,hv_battery,eleectric_system,emc,soh,note,test_price,car_notes,car_order_no,test_date) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  const data = [
    car_no,
    car_brand,
    car_vin,
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
    test_price,
    car_notes,
    car_order_no,
    test_date,
  ];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Server Error", error: err.message });
    }
    return res.status(200).json({
      success: true,
      message: "تم تسجيل فحص السيارة بنجاح ",
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
//     "INSERT INTO order_test (`car_no`, `car_type`, `car_vin`, `car_color`, `car_model`, `car_order_no`, `car_notes`, `test_price`, `car_Body_test`, `car_hybrid_test`) VALUES (?,?,?,?,?,?,?,?)";
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

//====================================================//get all Body Test where is_deleted =0
const getBodyTest = (req, res) => {
  const query = "SELECT *  FROM vlc.Body_Test where is_deleted =0;";
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
      massage: "جميع أفحصة البودي",
      results: result,
    });
  });
};

//====================================================//get car depend on car_no
// const getCarByCarNo = (req, res) => {
//   const carNo = req.body.carNo;
//   const data = [carNo];
//   const query = " SELECT *  FROM order_test where car_no=? And is_deleted =0";
//   connection.query(query, data, (err, result) => {
//     try {
//       if (result.length === 0) {
//         return res.status(404).json({
//           success: false,
//           massage: `${carNo} لا يوجد فحص لرقم السيارة `,
//           err: err,
//         });
//         // result are the data returned by mysql server
//       } else {
//         const carId = result[0].id;
//         const data = [carId, carId, carId];
//         const query =
//           "select * from hybrid_Test hc join body_Test pc on hc.id=? and pc.id=? join order_test ot on ot.id=?";
//         connection.query(query, data, (err, result) => {
//           if (err) {
//             return res.status(500).json({
//               success: false,
//               massage: "Server Error",
//               err: err,
//             });
//           } else {
//             return res.status(200).json({
//               success: true,
//               massage: `No Car Test Found For This Car No.`,
//               result: result,
//             });
//           }
//         });
//       }
//     } catch {
//       res.status(500).json({
//         success: false,
//         massage: "server error",
//         err: err,
//       });
//     }
//   });
// };

// //====================================================//get car depend on vin
// const getCarByCarVin = (req, res) => {
//   const carVin = req.body.car_vin;
//   const data = [carVin];
//   const query = " SELECT *  FROM order_test where car_vin=? And is_deleted =0";
//   connection.query(query, data, (err, result) => {
//     try {
//       if (result.length === 0) {
//         return res.status(404).json({
//           success: false,
//           massage: "No Car Test Found For This Car Vin",
//           err: err,
//         });
//         // result are the data returned by mysql server
//       } else {
//         const carId = result[0].id;
//         const data = [carId, carId, carId];
//         const query =
//           "select * from hybrid_Test hc join Body_Test pc on hc.id=? and pc.id=? join order_test ot on ot.id=?";
//         connection.query(query, data, (err, result) => {
//           if (err) {
//             return res.status(500).json({
//               success: false,
//               massage: "Server Error",
//               err: err,
//             });
//           } else {
//             return res.status(200).json({
//               success: true,
//               massage: `No Car Test Found For This Car Vin`,
//               result: result,
//             });
//           }
//         });
//       }
//     } catch {
//       res.status(500).json({
//         success: false,
//         massage: "server error",
//         err: err,
//       });
//     }
//   });
// };

//====================================================//get car depend on order no
const getCarByOrderNo = (req, res) => {
  const car_order_no = req.body.car_order_no;
  const data = [car_order_no];
  const query =
    " SELECT *  FROM hybrid_test where car_order_no=? And is_deleted =0";
  connection.query(query, data, (err, hybridResult) => {
    try {
      if (hybridResult.length != 0) {
        return res.status(200).json({
          success: true,
          message: `تم إيجاد فحص لرقم الفاتورة ${car_order_no}`,
          result: hybridResult,
        });
      } else {
        const data = [car_order_no];
        const query =
          "select * from body_test where car_order_no=? And is_deleted =0";
        connection.query(query, data, (err, bodyResult) => {
          if (bodyResult.length != 0) {
            return res.status(200).json({
              success: true,
              message: `تم إيجاد فحص لرقم الفاتورة ${car_order_no}`,
              result: bodyResult,
            });
          } else {
            return res.status(404).json({
              success: false,
              message: `لا يوجد فحص متوفر لرقم الفاتورة ${car_order_no}`,
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
//====================================================//get all  test  where is_deleted =0
const getAllTest = (req, res) => {
  const query = "SELECT * FROM vlc.hybrid_Test where is_deleted=0;;";
  connection.query(query, (err, hybridResult) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      });
    }

    const query = "SELECT *  FROM vlc.Body_Test where is_deleted =0;";
    connection.query(query, (err, BodyResult) => {
      if (err) {
        return res.status(500).json({
          success: false,
          massage: "server error",
          err: err,
        });
      }
      let result = hybridResult.concat(BodyResult);

      if (result.length === 0) {
        return res.status(500).json({
          success: false,
          massage: "لا يوجد أي نتائج",
          err: err,
        });
      } else {
        // result are the data returned by mysql server
        return res.status(200).json({
          success: true,
          massage: "جميع أفحصة البودي",
          results: result,
        });
      }
    });
  });
};

//====================================================//get all hybrid Cars  where is_deleted =0
const gethybridCars = (req, res) => {
  const query = "SELECT * FROM vlc.hybrid_Test where is_deleted=0;;";
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
//====================================================//delete Body Test
const deleteBodyTest = (req, res) => {
  const id = req.query.id;
  const query = "UPDATE Body_Test SET is_deleted=1 WHERE id=?";
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
        massage: `فحص السيارة رقم ${id} غير موجود `,
      });
    }
    return res.status(200).json({
      success: true,
      massage: `تم حتم حذف الفحص رقم ${id} بنجاح`,
      results: results,
    });
  });
};

//====================================================//delete hybrid car
const deletehybridcar = (req, res) => {
  const id = req.query.id;
  const query = "UPDATE hybrid_Test SET is_deleted=1 WHERE id=?";

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
        massage: `فحص السيارة رقم ${id} غير موجود `,
      });
    }
    return res.status(200).json({
      success: true,
      massage: `تم حذف الفحص رقم ${id} بنجاح`,
      results: results,
    });
  });
};
//====================================================//update hybrid car By Id Function

const updateHybridTestById = async (req, res) => {
  const {
    id,
    car_no,
    car_brand,
    car_vin,
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
  const data = [
    car_no,
    car_brand,
    car_vin,
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
    id,
  ];
  const query = `UPDATE hybrid_Test SET    car_no=?,car_brand=?,car_vin=?, engine_test=?,transmission=?,srs=?,abs_system=?,ac=?,hybrid_system=?,hv_battery=?,eleectric_system=?,emc=?,soh=?,note=? WHERE id= ?`;
  connection.query(query, data, (err, result) => {
    if (result.affectedRows === 0) {
      return res.status(500).json({
        success: false,
        massage: `الفحص رقم ${id} غير موجود`,
        result: result,
      });
    }
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "Server Error",
        err: err,
      });
    } else {
      return res.status(200).json({
        success: true,
        massage: `تم تعديل فحص السيارة رقم ${id} بنجاح`,
        results: result,
      });
    }
  });
};

//====================================================//update bodyTest  By Id Function

const updatebodyTestById = async (req, res) => {
  const {
    car_no,
    car_brand,
    car_vin,
    car_color,
    car_model,
    vin_tr,
    vin_tl,
    vin_br,
    vin_bl,
    body_note,
    engine_test,
    gear_test,
    back_acss,
    id,
  } = req.body;
  const data = [
    car_no,
    car_brand,
    car_vin,
    car_color,
    car_model,
    vin_tr,
    vin_tl,
    vin_br,
    vin_bl,
    body_note,
    engine_test,
    gear_test,
    back_acss,
    id,
  ];
  const query = `UPDATE body_Test SET  car_no=?,car_brand=?,car_vin=?,car_color=?,car_model=?, vin_tr=?,vin_tl=?,vin_br=?,vin_bl=?,body_note=?,engine_test=?,gear_test=?,back_acss=? WHERE id= ?`;
  connection.query(query, data, (err, result) => {
    if (result.affectedRows === 0) {
      return res.status(500).json({
        success: false,
        massage: `الفحص رقم ${id} غير موجود`,
        result: result,
      });
    }
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "Server Error",
        err: err,
      });
    } else {
      return res.status(200).json({
        success: true,
        massage: `تم تعديل فحص السيارة رقم ${id} بنجاح`,
        results: result,
      });
    }
  });
};

//====================================================// module.exports
module.exports = {
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
  // getCarByCarNo,
  // getCarByCarVin,
};
