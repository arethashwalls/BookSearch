import React, { Component } from 'react';
import api from '../../../utils/api';
import { Container } from 'react-bulma-components/full';
import BooksList from './BooksList';

class Saved extends Component {
    state = {
        books: []
    }

    componentDidMount() { this.getBooks(); }

    getBooks = () => {
        api.getSaved()
        .then(result => this.setState({books: result.data}))
        .catch(err => console.log(err));
    }

    handleDelete = id => {
        api.delete(id)
        .then(res => this.getBooks())
    };

    render() {
        return <Container>
            <BooksList 
                books={this.state.books}
                handleDelete={this.handleDelete}
            />
        </Container>
            
    }
}

export default Saved;