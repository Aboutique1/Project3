import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
import { Navbar, Nav } from "react-bootstrap";

// import logo from './logo.svg';
import ContactUs from './contactUs'; 
import About from './about';
import './App.css';

function App() {
  return (
   <Router>
     <Navbar bg="dark" expand="lg" fixed="top">
      <Navbar.Brand>
        <Link to="/">Got it Made</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about">About</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/contactus">Contact Us</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
<div>

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
