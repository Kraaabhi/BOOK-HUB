const express = require('express');
const { addBook, getAllBooks, deleteBook, searchBook } = require('../controllers/booksController');
const router = express.Router();
const authMiddleware=require("../middleware/authMiddleware")

router.route("/books").get(authMiddleware,getAllBooks)
router.route("/books").post(authMiddleware,addBook)
router.route("/books/:id").delete(authMiddleware,deleteBook);
router.route("/books/search").get(authMiddleware,searchBook);

module.exports=router;
