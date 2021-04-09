// React Library Imports
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Custom Component Imports
import { NavigationBar } from "./navbar/Navigationbar";
import { Form } from './loginregister/Form';
import { PostsContainer } from './PostsContainer';
import { AdminRouter } from './adminRouter';
import { FormLogin } from "./loginregister/FormLogin.js";
import { Profile } from "./Profile";
import { Content } from './homepage/content.js';
// StyleSheet Imports
import './styles/App.css';



function App() {

  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route path="/AdminRouter">
            <AdminRouter />
          </Route>
          <Route path="/signup">
            <Form isSignup='true' />
          </Route>
          <Route path="/login">
            <Form isSignup='false' />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Content />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
