const express = require("express");
const router = express.Router();
const { getAllBlog } = require("../controllers/appController");
router.get("/books/:userId?", getAllBlog);

module.exports = router;
