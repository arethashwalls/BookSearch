import React from 'react';
import Result from '../Result';
import { Box } from 'react-bulma-components/full';

const Results = props => {
    return <Box>
        {props.books.map(book => {
            return <Result 
                title={book.title}
                image={book.image}
                summary={book.summary}
                link={book.link}
            />
        })}
    </Box>
}

export default Results;