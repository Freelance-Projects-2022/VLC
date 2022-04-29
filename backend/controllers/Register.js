//====================================================//Require
const connection = require("../database/db");
const bcrypt = require("bcrypt");

//====================================================//Create New user Function
const createNewUser = async (req, res) => {
    let { firstName, lastName, password, phone, roleId } = req.body;
    const query = `INSERT INTO user (firstName,lastName,password,gender,phone,roleId) VALUES (?,?,?,?,?,?)`;
    password = await bcrypt.hash(password, 10);
    const data = [firstName, lastName, password,  phone, roleId];
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