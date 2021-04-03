// React Library Imports
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// Custom Component Imports
import { Form } from './loginregister/Form';
import { PostsContainer } from './PostsContainer';

import { AdminRouter } from './adminRouter';
// StyleSheet Imports
import './styles/App.css';
import NavigationBar from "./navbar/Navbar";



function App() {

  return (
    <Router>

      <Navbar bg="dark" expand="lg">
        <Nav.Link><Link to="/">Home</Link></Nav.Link>
        <Nav.Link><Link to="/login">Login</Link></Nav.Link>
        <Nav.Link><Link to="/AdminRouter">Admin</Link></Nav.Link>
      </Navbar>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route path="/AdminRouter">
            <AdminRouter />
          </Route>
          <Route path="/login">
            <Form />
          </Route>
          <Route path="/">
            <PostsContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
