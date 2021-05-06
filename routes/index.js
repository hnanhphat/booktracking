const express = require("express");
const router = express.Router();
const authorApi = require("./author.api");
const bookApi = require("./book.api");
const genresApi = require("./genres.api");
const userApi = require("./user.api");
const authApi = require("./auth.api");

router.use("/author", authorApi);
router.use("/book", bookApi);
router.use("/genres", genresApi);
router.use("/user", userApi);
router.use("/auth", authApi);

module.exports = router;
