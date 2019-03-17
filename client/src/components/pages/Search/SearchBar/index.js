import React from 'react';
import { Level } from 'react-bulma-components/full';

const SearchBar = props => {
    return <Level>
        <Level.Side align='left'>
            <Level.Item>Enter a keyword to search for books:</Level.Item>
        </Level.Side>
        <Level.Side align='right'>
            <Level.Item>
                <form className='form field has-addons' id='addItemForm'>
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
                        <button className='button is-info' onClick={props.handleFormSubmit}>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </form>
            </Level.Item>
        </Level.Side>
    </Level>
}

export default SearchBar;