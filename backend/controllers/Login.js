//====================================================//Require
const connection = require("../database/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//====================================================// admin Login Function
const adminLogin = (req, res, next) => {
  const username = req.body.username;
  console.log("🚀 ~ file: Login.js ~ line 9 ~ adminLogin ~ username", username);
  const password = req.body.password;
  console.log(
    "🚀 ~ file: Login.js ~ line 11 ~ adminLogin ~ password",
    password
  );
  const query = `SELECT * FROM users WHERE username=?`;
  const data = [username];
  connection.query(query, data, async (err, result) => {
    console.log(
      "🚀 ~ file: Login.js ~ line 13 ~ connection.query ~ result",
      result
    );
    if (!result.length) {
      return res.status(403).json({
        success: false,
        message: `This is account dose not exist`,
      });
    } else {
      try {
        const valid = await bcrypt.compare(password, result[0].password);
        if (!valid) {
          return res.status(403).json({
            success: false,
            message: `The password you’ve entered is incorrect`,
          });
        }
        const payload = {
          userId: result[0].id,
          role: result[0].roleId,
        };
        const options = {
          expiresIn: "60m",
        };
        const token = await jwt.sign(payload, process.env.SECRET, options);

        return res.status(200).json({
          success: true,
          message: `Login Successfully`,
          token: token,
          userId: result,
          role: result[0].roleId,
        });
      } catch (error) {
        throw new Error(error.message);
      }
    }
  });
};

//====================================================//user Login Function
const userLogin = (req, res, next) => {
  const password = req.body.password;
  const username = req.body.username;
  const query = `SELECT * FROM users WHERE username=? AND is_deleted=0`;
  const data = [username];
  connection.query(query, data, async (err, result) => {
    if (!result.length) {
      next();
    } else {
      try {
        const valid = await bcrypt.compare(password, result[0].password);
        if (!valid) {
          return res.status(403).json({
            success: false,
            message: `The password you’ve entered is incorrect`,
          });
        }
        const payload = {
          userId: result[0].id,
          role: result[0].roleId,
        };
        const options = {
          expiresIn: "60m",
        };
        const token = await jwt.sign(payload, process.env.SECRET, options);
        return res.status(200).json({
          success: true,
          message: `Login Successfully`,
          token: token,
          userId: result,
          role: result[0].roleId,
        });
      } catch (error) {
        throw new Error(error.message);
      }
    }
  });
};

//====================================================// module.exports

module.exports = {
  userLogin,
  adminLogin,
};
