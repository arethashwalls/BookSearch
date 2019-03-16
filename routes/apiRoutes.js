const express = require('express'),
      router = express.Router(),
      apiController = require('../controllers/apiControllers');

router.get('/books/search', apiController.searchBooks);

router.get('/books', apiController.getSavedBooks);

router.post('/books', apiController.saveBook);

router.delete('/books/:id', apiController.deleteBook);

module.exports = router;