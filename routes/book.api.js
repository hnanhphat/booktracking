const express = require("express");
const router = express.Router();
const bookController = require("../controller/bookController");

router.get("/", bookController.getAllData);
router.post("/", bookController.createData);
router.get("/:id", bookController.getData);
router.put("/:id", bookController.updateData);
router.delete("/:id", bookController.deleteData);

module.exports = router;
