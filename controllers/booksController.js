const { v4: uuidv4 } = require("uuid");
const jsonServer = require("json-server");
const dbFile = "./db/db.json";
const Book = require('../models/book');
const router = jsonServer.router(dbFile);

async function getAllBooks(req, res, next) {
  try {
    const books = await router.db.get("books");
    res.status(200).json({
      success: true,
      books: books,
    });
  } catch (err) {
    next(err);
  }
}

async function addBook(req, res, next) {
  try {
    const book = req.body;
    // checking if name of book is present
    if(!book.name){
      res.status(400).json({
        success:false,
        message:"can not add book with name missing "
      })
    }
    const newBook = new Book({
      name: book.name ,
      author: book.author,
      genre: book.genre,
      description: book.description,
      publicationDate: book.publicationDate
    });
    await router.db.get("books").push(newBook).write();
    res.status(200).json({
      success: true,
      books: newBook,
    });
  } catch (err) {
    next(err);
  }
}

async function deleteBook(req, res, next) {
  try {
    const id = req.params.id;
    const books = await router.db.get("books");
    const book =  books.find((book) => book.id === id);
    if (!book) {
      res.status(404).json({
        success:false,
        message:"can not find book with given id"
      })
    }
    await router.db.get("books").remove({ id }).write();
    res.status(204).json({
      success: true,
      message: "deleted successfully",
    });
  } catch (err) {
    next(err);
  }
}

async function searchBook(req, res, next) {
  try {
    const { name, author } = req.body;
    let books = await router.db.get("books").value();

    if (name) {
      books = books.filter((book) =>
        book.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (author) {
      books = books.filter((book) =>
        book.author.toLowerCase().includes(author.toLowerCase())
      );
    }

    res.status(200).json({
      success: true,
      books: books,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { getAllBooks, addBook, deleteBook, searchBook };
