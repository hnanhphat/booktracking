const express = require("express");
const router = express.Router();
const bookController = require("../controller/bookController");
const authMiddleware = require("../middleware/authentication");

router.get("/", bookController.getAllData);
router.post("/", authMiddleware.loginRequired, bookController.createData);
router.get("/:id", bookController.getData);
router.put("/:id", bookController.updateData);
router.delete("/:id", bookController.deleteData);

module.exports = router;
