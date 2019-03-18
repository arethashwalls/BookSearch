import React from 'react';
import Result from '../Result';
import { Box } from 'react-bulma-components/full';

const Results = props => {
    return <Box>
        {props.books.map(book => {
            return <Result 
                title={book.title}
                authors={book.authors}
                image={book.image}
                summary={book.summary}
                link={book.link}
                handleSaveBook={props.handleSaveBook}
            />
        })}
    </Box>
}

export default Results;