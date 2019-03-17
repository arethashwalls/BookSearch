import axios from 'axios';

export default {
    search: searchTerm => axios.get('api/books/search', {searchTerm: searchTerm})
}