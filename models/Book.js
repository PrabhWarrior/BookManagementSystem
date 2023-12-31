const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String, required: true, max: 40 },
  author: { type: String, required: true },
  summary: { type: String, required: true },
});

module.exports = Book = mongoose.model("book", BookSchema);
