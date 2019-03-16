import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs } from 'react-bulma-components/full';

const Navbar = () => {
    return <Tabs>
        <h1>BookSearch</h1>
        <Tabs.Tab>Search</Tabs.Tab>
        <Tabs.Tab>Saved</Tabs.Tab>
    </Tabs>
}

export default Navbar;