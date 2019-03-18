import axios from 'axios';

export default {
    search: searchTerm => axios.get('api/books/search', {params: {searchTerm: searchTerm}}),
    save: book => axios.post('api/books', book)
}