const express = require("express");
const router = express.Router();
const { addBlog, updateBook } = require("../controllers/userController");

/* GET users listing. */

router.post("/addbook/:userId?", addBlog);
router.post("/updatebook/:bookId?", updateBook);

module.exports = router;
