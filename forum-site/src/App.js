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
import { PostsContainer } from './PostsContainer';
import { AdminRouter } from './adminRouter';
import { FormLogin } from "./loginregister/FormLogin.js";
import { Profile } from "./Profile";
import { Content } from './homepage/content.js';
// StyleSheet Imports
import './styles/App.css';



function App() {

  const [user, setUser] = useState("");

  const handleLogin = (user) => {
    
    if(user)
    {
      setUser(user);
      console.log(user + " is logged in");
    } 
    else
    {
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
        <NavigationBar user={user} onLogout={handleLogout}/>
        <Switch>
          <Route path="/AdminRouter">
            <AdminRouter />
          </Route>
          <Route path="/signup">
            <Form isSignup='true' />
          </Route>
          <Route path="/login">
            <Form onLogin={handleLogin} isSignup='false' />
          </Route>
          <Route path="/profile">
            <Profile user={user}/>
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
