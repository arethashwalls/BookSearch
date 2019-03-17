import React from 'react';
import { Box, Columns } from 'react-bulma-components/full';


const Result = props => {
    return <Box>
        <Columns>
            <Columns.Column>
                <img src={props.image} alt='Book thumbnail'/>
            </Columns.Column>
            <Columns.Column>
                <h3 className='title'>{props.title}</h3>
                <p>{props.summary}</p>
                <a href={props.link} target='_blank' rel='noopener noreferrer'>View on Google Books</a>
            </Columns.Column>
        </Columns>
    </Box>
}

export default Result;