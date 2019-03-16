const express = require('express'),
      router = express.Router(),
      apiController = require('../controllers/apiControllers');

router.get('/books/search', apiController.searchBooks);

module.exports = router;