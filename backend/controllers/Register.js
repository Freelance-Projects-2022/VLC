//====================================================//Require
const connection = require("../database/db");
const bcrypt = require("bcrypt");

//====================================================//Create New user Function
const createNewUser = async (req, res) => {
  let { username, password, rePassword, phone, role_id } = req.body;
  if (password != rePassword) {
    return res.status(500).json({
      success: false,
      message: "كلمة السر غير متطابقة",
    });
  }
  const query = `INSERT INTO users (username,password,phone,role_id) VALUES (?,?,?,?)`;
  password = await bcrypt.hash(password, 10);
  const data = [username, password, phone, role_id];
  connection.query(query, data, (err, result) => {
    if (!err) {
      return res.status(200).json({
        success: true,
        message: "تم تسجيل الحساب بنجاح",
        result: result,
      });
    } else {
      return res.status(409).json({
        success: false,
        message: `هذا الحساب تم تسجيله مسبقاً`,
      });
    }
  });
};

//====================================================// module.exports
module.exports = {
  createNewUser,
};
