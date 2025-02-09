const Book = require('../models/Book');

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ data: books });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
};

// Add a new book
exports.addBook = async (req, res) => {
  const { title, author, year, genre } = req.body;
  if (!title || !author || !year || !genre) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const book = new Book({ title, author, year, genre });
  try {
    const newBook = await book.save();
    res.status(201).json({ message: 'Book added successfully', data: newBook });
  } catch (err) {
    res.status(400).json({ message: 'Failed to add book', error: err.message });
  }
};

// Update a book
exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, year, genre } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author, year, genre },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: 'Book updated successfully', data: updatedBook });
  } catch (err) {
    res.status(400).json({ message: 'Failed to update book', error: err.message });
  }
};

// Delete a book
exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Failed to delete book', error: err.message });
  }
};