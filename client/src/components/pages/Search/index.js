import React, { Component } from 'react';
import ResultList from './ResultList';
import SearchBar from './SearchBar';
import api from '../../../utils/api';
import { Container } from 'react-bulma-components/full';

class Search extends Component {
    state = {
        search: '',
        results: [],
        loadClass: ''
    }

    searchBooks = searchTerm => {
        this.setState({loadClass: 'is-loading'}, () => {
            api.search(searchTerm)
            .then(res => this.setState({ 
                results: res.data,
                loading: false
            }))
            .catch(err => console.log(err));
        });
    };

    handleSearchSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
    };

    handleInputChange = event => {
        const value = event.target.value;
        this.setState({search: value});
    };

    handleSaveBook = () => {};

    render() {
        return <Container>
            <SearchBar 
                search={this.state.search}
                handleSearchSubmit={this.handleSearchSubmit}
                handleInputChange={this.handleInputChange}
                loadClass={this.state.loadClass}
            />
            <ResultList 
                books={this.state.results}
            />
        </Container>
    }
}

export default Search;