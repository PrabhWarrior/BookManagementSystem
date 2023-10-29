const express = require("express");
const router = express.Router();

// Book model
const Book = require("../../models/Book");

// @route   GET api/books/test
// @desc    Tests book route
// @access  Public
router.get("/test", (req, res) => res.json({ message: "Books Works" }));

// @route   POST api/books/
// @desc    Create a book
// @access  Public
router.post("/", (req, res) => {
  if (req.body && req.body.title && req.body.author && req.body.summary) {
    const { title, author, summary } = req.body;

    const newBook = new Book({
      title,
      author,
      summary,
    });

    newBook
      .save()
      .then((book) => {
        res.status(201).json(book);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: "Failed to create a new book" });
      });
  } else {
    res.status(400).json({ error: "Invalid request data" });
  }
});

// @route   GET api/books/
// @desc    View all books
// @access  Public
router.get("/", (req, res) => {
  Book.find()
    .then((books) => {
      res.json({ books });
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

// @route   GET api/books/:id
// @desc    View book by id
// @access  Public
router.get("/:id", (req, res) => {
  const bookId = req.params.id;

  Book.findById(bookId)
    .then((book) => {
      if (!book) {
        return res.status(404).json({ error: "Book not found" });
      }
      res.json(book);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// @route   UPDATE api/books/:id
// @desc    Update book's details
// @access  Public
router.put("/:id", (req, res) => {
  const bookId = req.params.id;
  const { title, author, summary } = req.body;

  Book.findByIdAndUpdate(bookId, { title, author, summary }, { new: true })
    .then((updatedBook) => {
      if (!updatedBook) {
        return res.status(404).json({ error: "Book not found" });
      }
      res.json(updatedBook);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// @route   DELETE api/books/:id
// @desc    Delete a book
// @access  Public
router.delete("/:id", (req, res) => {
  const bookId = req.params.id;

  Book.findByIdAndRemove(bookId)
    .then((deletedBook) => {
      if (!deletedBook) {
        return res.status(404).json({ error: "Book not found" });
      }
      res.json(deletedBook);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});
module.exports = router;
