const axios = require('axios'),
      db = require("../models/Book");

module.exports = {
    searchBooks: (req, res) => {
        const searchTerm = encodeURIComponent(req.body.searchTerm);
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=20`)
        .then(result => {
            const bookData = result.data.items.map(datum => datum.volumeInfo);
            res.json(bookData);
        })
        .catch(err => console.log(err));
    },
    getSavedBooks: (req, res) => {
        db.Book.find({})
        .then(result => res.json(result))
        .catch(err => console.log(err));
    },
    saveBook: (req, res) => {
        db.Book.create(req.body)
        .then(result => res.json(result))
        .catch(err => console.log(err));
    },
    deleteBook: (req, res) => {
        db.Book.deleteOne({_id: req.params.id})
        .then(response => res.json(response))
        .catch(err => console.log(err));
    }
}