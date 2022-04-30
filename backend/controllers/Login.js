//====================================================//Require
const connection = require("../database/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//====================================================// admin Login Function
const adminLogin = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const query = `SELECT * FROM users WHERE username=?`;
  const data = [username];
  connection.query(query, data, async (err, result) => {
    if (!result.length) {
      return res.status(403).json({
        success: false,
        message: `هذا الحساب غير مسجل مسبقاً`,
      });
    } else {
      try {
        const valid = await bcrypt.compare(password, result[0].password);
        if (!valid) {
          return res.status(403).json({
            success: false,
            message: `كلمة السر المدخلة غير صحيحة`,
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
          message: `تم تسجيل الدخول بنجاح`,
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
            message: `كلمة السر المدخلة غير صحيحة`,
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
          message: `تم تسجيل الدخول بنجاح`,
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
