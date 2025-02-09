const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

router.get('/books', bookController.getAllBooks);
router.post('/books', bookController.addBook);
router.put('/books/:id', bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);

module.exports = router;

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Получить все книги
 *     responses:
 *       200:
 *         description: Список книг
 */