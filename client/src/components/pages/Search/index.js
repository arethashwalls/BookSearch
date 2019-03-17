import React, { Component } from 'react';
import ResultList from './ResultList';
import SearchBar from './SearchBar';
import api from '../../../utils/api';
import { Container } from 'react-bulma-components/full';

class Search extends Component {
    state = {
        search: '',
        results: []
    }

    searchBooks = searchTerm => {
        api.search(searchTerm)
        .then(res => this.setState({ results: res.data }))
        .catch(err => console.log(err));
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
    };

    handleInputChange = event => {
        const value = event.target.value;
        this.setState({search: value});
    };

    render() {
        return <Container>
            <SearchBar 
                search={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
            />
            <ResultList books={this.state.results}/>
        </Container>
    }
}

export default Search;