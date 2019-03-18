import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Navbar';
import Search from './components/pages/Search';
import Saved from './components/pages/Saved';
import { Section } from 'react-bulma-components/full'

function App() {
    return (
      <Router>
            <Header />
            <Section>
                <Route exact path='/' component={Search} />
                <Route exact path='/search' component={Search} />
                <Route exact path='/saved' component={Saved} />
            </Section>
      </Router>
    );
  }
  
  export default App;