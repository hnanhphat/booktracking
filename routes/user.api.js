const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/", userController.getAllData);
router.post("/", userController.createData);
router.get("/:id", userController.getData);
router.put("/:id", userController.updateData);
router.delete("/:id", userController.deleteData);

module.exports = router;
