const bcrypt = require("bcrypt");
const connection = require("../../db/db");

//register
const registerUser = async (req, res) => {
  let { firstName, lastName, password, email } = req.body;
  const salt = 10;
  password = await bcrypt.hash(password, salt);
  const data = [firstName, lastName, password, email];
  const query =
    "INSERT INTO user (first_name, last_name, password, email) VALUES (?,?,?,?)";
  connection.query(query, data, (err, result) => {
    if (err) {
      console.log(err);
      return res.json({ message: err.message });
    }
    res.json(result);
  });
};
// get all users
const getAllUsers = (req, res) => {
  const query = "SELECT * FROM user";
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};
// get users by id
const getUserById = (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM use WHERE id=?`;
  connection.query(query, [id], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};
module.exports = { registerUser, getAllUsers, getUserById };
