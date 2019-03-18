import React from 'react';
import { Box, Columns, Button } from 'react-bulma-components/full';


const Result = props => {
    return <Box>
        <Columns>
            <Columns.Column size={3}>
                <img src={props.image} alt='Book thumbnail'/>
            </Columns.Column>
            <Columns.Column size={9}>
                <h3 className='title'>{props.title}</h3>
                <h4 className='subtitle'>{props.authors}</h4>
                <p>{props.summary}</p>
                <br />
                <Button className='is-pulled-right' color='primary' onClick={props.handleSaveBook}><i class="fas fa-save"></i></Button>
                <a href={props.link} target='_blank' rel='noopener noreferrer'>View on Google Books</a>
            </Columns.Column>
        </Columns>
    </Box>
}

export default Result;