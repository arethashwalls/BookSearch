import React from 'react';
import { Box, Columns } from 'react-bulma-components/full';

const Book = props => {
    return <Box>
        <Columns>
            <Columns.Column size={3}>
                <img src={props.image} alt='Book thumbnail'/>
            </Columns.Column>
            <Columns.Column size={9}>
                <button className="delete is-medium is-pulled-right" onClick={() => props.handleDelete(props.id)}></button>
                <h3 className='title'>{props.title}</h3>
                <h4 className='subtitle'>{props.authors}</h4>
                <p>{props.summary}</p>
                <br />
                <a href={props.link} target='_blank' rel='noopener noreferrer'>View on Google Books</a>
            </Columns.Column>
        </Columns>
    </Box>
}

export default Book;