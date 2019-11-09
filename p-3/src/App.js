import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 

import logo from './logo.svg';
import ContactUs from './contactUs'; 
import About from './about';
import './App.css';

function App() {
  return (
   <Router>

<div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Contact Us</Link>
            </li>
          </ul>
        </nav>


       {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
        </Switch>
      </div> 


   </Router>
   


  );
}

export default App;
