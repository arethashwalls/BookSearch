const axios = require('axios'),
      db = require("../models/Book");

module.exports = {
    searchBooks: (req, res) => {
        const searchTerm = encodeURIComponent(req.body.searchTerm);
        axios.get(`GET https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
        .then(data => {
            console.log(data)
            res.json(data);
        })
        .catch(err => console.log(err));
    }
}