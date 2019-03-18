import React from 'react';
import Result from '../Result';
import { Box } from 'react-bulma-components/full';

const Results = props => {
    return <Box>
        {props.books.map((book, index) => {
            return <Result 
                key={index}
                title={book.title}
                authors={book.authors}
                image={book.image}
                summary={book.summary}
                link={book.link}
            />
        })}
    </Box>
}

export default Results;