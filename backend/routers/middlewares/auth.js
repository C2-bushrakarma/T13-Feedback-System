const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(403).json({ message: "Not authrized" });
    }
    const token = req.headers.authorization.split(" ").pop();
    const decoded = jwt.verify(token, process.env.SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
};
module.exports = authentication;