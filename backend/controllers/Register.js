//====================================================//Require
const connection = require("../database/db");
const bcrypt = require("bcrypt");

//====================================================//Create New user Function
const createNewUser = async (req, res) => {
  let { username, password, phone, role_id } = req.body;
  console.log(
    "🚀 ~ file: Register.js ~ line 8 ~ createNewUser ~ username",
    username
  );
  console.log(
    "🚀 ~ file: Register.js ~ line 8 ~ createNewUser ~ password",
    password
  );
  console.log("🚀 ~ file: Register.js ~ line 8 ~ createNewUser ~ phone", phone);
  console.log(
    "🚀 ~ file: Register.js ~ line 8 ~ createNewUser ~ role_id",
    role_id
  );
  const query = `INSERT INTO users (username,password,phone,role_id) VALUES (?,?,?,?)`;
  password = await bcrypt.hash(password, 10);
  const data = [username, password, phone, role_id];
  connection.query(query, data, (err, result) => {
    if (!err) {
      return res.status(200).json({
        success: true,
        message: "SignUp Successfully",
        result: result,
      });
    } else {
      return res.status(409).json({
        success: false,
        message: " This account already exists",
      });
    }
  });
};

//====================================================// module.exports
module.exports = {
  createNewUser,
};
