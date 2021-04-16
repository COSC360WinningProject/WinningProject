// React Library Imports
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Custom Component Imports
import { NavigationBar } from "./navbar/Navigationbar";
import { Form } from './loginregister/Form';
import { Admin } from './admin';
import { FormLogin } from "./loginregister/FormLogin.js";
import { Profile } from "./Profile";
import { Content } from './homepage/content.js';
import { PostContent } from './homepage/PostContent';
// StyleSheet Imports
import './styles/App.css';



function App() {

  const [user, setUser] = useState("");
  const [isAdmin, setIsAdmin] = useState(0);

  const handleLogin = (user, isAdmin) => {

    if (user) {
      setUser(user);
      setIsAdmin(isAdmin);
      console.log(user + " is logged in, isAdmin: " + isAdmin);
    }
    else {
      setUser(null);
      console.log('login failed');
    }
  }

  const handleLogout = () => {
    setUser(null);
  }

  return (
    <Router>
      <div className="App">
        <NavigationBar user={user} onLogout={handleLogout} />
        <Switch>
          <Route path="/admin">
            <Admin user={user} isAdmin={isAdmin}/>
          </Route>
          <Route path="/postcontent/:pid">
            <PostContent loggedInUser={user}/>
          </Route>
          <Route path="/signup">
            <Form isSignup='true' />
          </Route>
          <Route path="/login">
            <Form onLogin={handleLogin} isSignup='false' />
          </Route>
          <Route path ="/resetPassword">
            <Form isResetPassword = 'true' />
          </Route>
          <Route path="/profile">
            <Profile loggedInUser={user} />
          </Route>
          <Route path="/">
            <Content loggedInUser={user}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
