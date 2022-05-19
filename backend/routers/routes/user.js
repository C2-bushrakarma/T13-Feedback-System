const express = require("express");
const userRouter = express.Router();
const authentication = require("../middlewares/auth");
const {
  registerUser,
  getAllUsers,
  getUserById,
} = require("../controllers/user");

userRouter.post("/", registerUser);
userRouter.get("/", authentication, getAllUsers);
userRouter.get("/:id", authentication, getUserById);

module.exports = userRouter;