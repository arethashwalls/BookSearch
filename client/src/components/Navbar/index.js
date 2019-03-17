import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Tabs } from 'react-bulma-components/full';

class Navbar extends Component {
    state = {
        activePage: 'Search'
    }
    getNavLinkClass = path => path === this.state.activePage ? 'is-active' : '';
    render() {
        return <Tabs className='is-boxed'>
            <li className={this.getNavLinkClass('Search')}>
                <NavLink to='/search' onClick={() => this.setState({activePage: 'Search'})}>Search</NavLink>
            </li>
            <li className={this.getNavLinkClass("Saved")}>
                <NavLink to='/saved' onClick={() => this.setState({activePage: 'Saved'})} >Saved Books</NavLink>
            </li>
        </Tabs>
    }
}

export default Navbar;