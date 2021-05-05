const express = require("express");
const router = express.Router();
const genresController = require("../controller/genresController");

router.get("/", genresController.getAllData);
router.post("/", genresController.createData);
router.get("/:id", genresController.getData);
router.put("/:id", genresController.updateData);
router.delete("/:id", genresController.deleteData);

module.exports = router;
