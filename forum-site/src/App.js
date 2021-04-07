// React Library Imports
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Custom Component Imports
import { NavigationBar}  from "./navbar/Navigationbar";
import { Form } from './loginregister/Form';
import { PostsContainer } from './PostsContainer';
import { AdminRouter } from './adminRouter';
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
