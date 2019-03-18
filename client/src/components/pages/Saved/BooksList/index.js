import React from 'react';
import Book from '../Book';
import { Box } from 'react-bulma-components/full';

const BooksList = props => {
    return <Box>
        {props.books.map(book => {
            return <Book 
                key={book._id}
                id={book._id}
                handleDelete={props.handleDelete}
                title={book.title}
                authors={book.authors}
                image={book.image}
                summary={book.summary}
                link={book.link}
            />
        })}
    </Box>
}

export default BooksList;