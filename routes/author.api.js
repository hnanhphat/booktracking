const express = require("express");
const router = express.Router();
const authorController = require("../controller/authorController");

router.get("/", authorController.getAllData);
router.post("/", authorController.createData);
router.get("/:id", authorController.getData);
router.put("/:id", authorController.updateData);
router.delete("/:id", authorController.deleteData);

module.exports = router;
