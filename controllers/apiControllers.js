//Imports:
const axios = require('axios'),
      db = require("../models/Book");

//A helper function for formatting the author list, defaulting to 'not found':
const listify = (arr=['Author not found']) => {
    if(arr.length === 1) {
        return arr[0];
    } else if(arr.length === 2) {
        return `${arr[0]} and ${arr[1]}`
    }
    const allButLast = arr.slice(0, arr.length-2).join(', ')
    return `${allButLast}, and ${arr[length - 1]}`;
}

//Controller functions:
module.exports = {
    //READ books from the Google Books API:
    searchBooks: (req, res) => {
        const searchTerm = encodeURIComponent(req.body.searchTerm);
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=20`)
        .then(result => {
            const bookData = result.data.items.map(datum => {
               return { 
                    title: datum.volumeInfo.title,
                    //Call listify on the authors array:
                    authors: listify(datum.volumeInfo.authors),
                    summary: datum.volumeInfo.description,
                    image: datum.volumeInfo.imageLinks.thumbnail,
                    link: datum.volumeInfo.canonicalVolumeLink
               }
            });
            res.json(bookData);
        })
        .catch(err => console.log(err));
    },
    //READ all books from the database:
    getSavedBooks: (req, res) => {
        db.Book.find({})
        .then(result => res.json(result))
        .catch(err => console.log(err));
    },
    //POST a new book to the database:
    saveBook: (req, res) => {
        db.Book.create(req.body)
        .then(result => res.json(result))
        .catch(err => console.log(err));
    },
    //DELETE a book from the database:
    deleteBook: (req, res) => {
        db.Book.deleteOne({_id: req.params.id})
        .then(response => res.json(response))
        .catch(err => console.log(err));
    }
}