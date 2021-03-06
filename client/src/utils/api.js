import axios from 'axios';

export default {
    search: searchTerm => axios.get('api/books/search', {params: {searchTerm: searchTerm}}),
    getSaved: () => axios.get('api/books'),
    save: book => axios.post('api/books', book),
    delete: id => axios.delete(`api/books/${id}`)
}