const { v4: uuidv4 } = require('uuid');

class Book {
  constructor({ name, author, genre, description, publicationDate }) {
    this.id = uuidv4();
    this.name = name;
    this.author = author || "not available";
    this.genre = genre || "not available";
    this.description = description || "not available";
    this.publicationDate = publicationDate || "not available";
  }
}

module.exports = Book;