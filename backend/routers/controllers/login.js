const connection = require("../../db/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// login for user and admin
const login = async (req, res) => {
  let { email, password, userType } = req.body;
  const data = [email];

  const query = `SELECT * FROM ${userType} WHERE email = ?`;

  connection.query(query, data, async (err, result) => {
    if (!result[0]) {
      return res.status(404).json("the email doesn't exist");
    }
    const confirm = await bcrypt.compare(password, result[0].password);
    if (confirm) {
      const payload = {
        name: result[0].name,
        userId: result[0].id,
      };
      const options = {
        expiresIn: "1d",
      };
      res.status(200).json({
        token: jwt.sign(payload, process.env.SECRET, options),
        userId: result[0].id,
      });
    } else {
      res.status(403).json("The password is not correct");
    }
  });
};

module.exports = {
  login,
};