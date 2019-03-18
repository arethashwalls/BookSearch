import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Tabs, Navbar } from 'react-bulma-components/full';
import './style.css';

class Header extends Component {
    state = {
        activePage: 'Search'
    }
    getNavLinkClass = path => path === this.state.activePage ? 'is-active' : '';
    render() {
        return <Navbar fixed='top'>
                <h1 className='title has-text-centered'>BookSearch</h1>
                <Tabs className='is-boxed'>
                    <li className={this.getNavLinkClass('Search')}>
                        <NavLink to='/search' onClick={() => this.setState({ activePage: 'Search' })}>Search</NavLink>
                    </li>
                    <li className={this.getNavLinkClass("Saved")}>
                        <NavLink to='/saved' onClick={() => this.setState({ activePage: 'Saved' })} >Saved Books</NavLink>
                    </li>
                </Tabs>
        </Navbar>
    }
}

export default Header;