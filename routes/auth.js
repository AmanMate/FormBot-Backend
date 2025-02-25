const express = require("express");
const router = express.Router();
const authController = require("../controller/user");
const verifyToken = require("../middlewares/verifyAuth");

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.put("/settings", verifyToken, authController.updateUser);
router.get("/getUserDetails", authController.getUserDetails);

module.exports = router;