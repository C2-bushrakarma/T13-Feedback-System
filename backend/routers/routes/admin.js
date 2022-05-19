const express = require("express");
const authentication = require("../middlewares/auth");

const adminRouter = express.Router();

const {
  registerAdmin,
  getAllAdmins,
  getAdminById,
} = require("../controllers/admin");

adminRouter.post("/", registerAdmin);
adminRouter.get("/", authentication, getAllAdmins);
adminRouter.get("/:id", authentication, getAdminById);

module.exports = adminRouter;
