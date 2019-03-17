import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Search from './components/pages/Search';
import Saved from './components/pages/Saved';
import { Section} from 'react-bulma-components/full'

function App() {
    return (
      <Router>
        <div>
            <h1 className='title'>BookSearch</h1>
            <Navbar />
            <Section>
                <Route exact path='/' component={Search} />
                <Route exact path='/search' component={Search} />
                <Route exact path='/saved' component={Saved} />
            </Section>
        </div>
      </Router>
    );
  }
  
  export default App;