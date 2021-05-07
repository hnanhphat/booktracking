const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const authController = require("../controller/authController");
const validators = require("../middleware/validators");

router.post(
  "/login",
  validators.validate([
    body("email", "Invalid email").exists().isEmail(),
    body("password", "Invalid password").exists().notEmpty(),
  ]),
  authController.loginWithEmail
);

module.exports = router;
