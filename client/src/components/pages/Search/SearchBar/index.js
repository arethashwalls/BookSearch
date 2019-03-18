import React from 'react';
import { Box, Columns, Button }from 'react-bulma-components/full';
import './style.css';

const SearchBar = props => {
    return <Box>
        <Columns>
            <Columns.Column size={4} align='left'>
                <p>Enter a keyword to search for books:</p>
            </Columns.Column>
            <Columns.Column size={8} align='right' className='is-clearfix'>
                    <form className='form field has-addons is-pulled-right' id='addItemForm'>
                        <div className='control'>
                            <input
                                type='text'
                                className='input'
                                id='searchInput'
                                onChange={props.handleInputChange}
                                value={props.search}
                                placeholder='Enter a keyword.'
                            />
                        </div>
                        <div className='control'>
                            <Button color='primary' onClick={props.handleSearchSubmit}>
                                <i className="fas fa-search"></i>
                            </Button>
                        </div>
                    </form>
            </Columns.Column>
        </Columns>
    </Box>
}

export default SearchBar;