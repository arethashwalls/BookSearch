//Imports:
const axios = require('axios'),
      Book = require("../models/Book");

//A helper function for formatting the author list, defaulting to 'not found':
const listify = (arr=['Author not found']) => {
    if(arr.length === 1) {
        return arr[0];
    } else if(arr.length === 2) {
        return `${arr[0]} and ${arr[1]}`
    }
    const allButLast = arr.slice(0, arr.length-1).join(', ')
    return `${allButLast}, and ${arr[arr.length - 1]}`;
}

//A helper function to shorten summaries:
const summarize = (str='No summary given.') => {
    if(str.length < 300) {
        return str
    }
    return `${str.slice(0, 300)}...`
}

//Controller functions:
module.exports = {
    //READ books from the Google Books API:
    searchBooks: (req, res) => {
        const searchTerm = encodeURIComponent(req.query.searchTerm);
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=10`)
        .then(result => {
            const bookData = result.data.items.map(datum => {
                //Some books don't have an imageLinks property, so set a default:
                const imageLink = datum.volumeInfo.imageLinks ? 
                    datum.volumeInfo.imageLinks.thumbnail 
                    : '/images/nocover.png';
                return { 
                    title: datum.volumeInfo.title,
                    //Call listify on the authors array:
                    authors: listify(datum.volumeInfo.authors),
                    summary: summarize(datum.volumeInfo.description),
                    image: imageLink,
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
        Book.create(req.body)
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