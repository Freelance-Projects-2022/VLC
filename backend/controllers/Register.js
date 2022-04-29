//====================================================//Require
const connection = require("../database/db");
const bcrypt = require("bcrypt");

//====================================================//Create New user Function
const createNewUser = async (req, res) => {
    let { firstName, lastName, password, phone, role_id } = req.body;
    const query = `INSERT INTO user (firstName,lastName,password,phone,role_id) VALUES (?,?,?,?,?)`;
    password = await bcrypt.hash(password, 10);
    const data = [firstName, lastName, password,  phone, role_id];
    connection.query(query, data, (err, result) => {
        console.log(err);
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