const connection = require("../database/db");

const createNewGeneral=(req, res)=>{
const {car_no,car_type,vin,color,model,vin_tr,vin_tl,vin_br,vin_bl,body_note,engine_test,gear_test,back_acss} = req.body;
    const query = "INSERT INTO User (car_no,car_type,vin,color,model,vin_tr,vin_tl,vin_br,vin_bl,body_note,engine_test,gear_test,back_acss) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
   const data = [car_no,car_type,vin,color,model,vin_tr,vin_tl,vin_br,vin_bl,body_note,engine_test,gear_test,back_acss];
    connection.query(query,data, (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ success: false, message: "Server Error", error: err.message });
      }
      return res.status(200).json({
        success: true,
        message: "Successful Retrieved All General Test",
        result : result,
      });
    });
}
const getAllGeneral=(req, res)=>{

}
const getGeneralByCarNo=(req, res)=>{

}
const getGeneralByOrderNo=(req, res)=>{

}
const getGeneralByVinNo=(req, res)=>{

}

// const getAllOrder=(req, res)=>{

// }
module.exports ={

}
