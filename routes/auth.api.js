const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

router.post("/login", authController.loginWithEmail);
// router.post("/", userController.createData);
// router.get("/:id", userController.getData);
// router.put("/:id", userController.updateData);
// router.delete("/:id", userController.deleteData);

module.exports = router;
