import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link} from "react-router-dom";
import { Admin } from './admin.js';
import { AdminUsers } from './adminUsers.js';
import { AdminPosts } from './AdminPosts.js';
import './styles/admin.css';
export const AdminRouter = (props) => {
        return (
    
        <Router>
            <div className="AdminNav" expand="lg">
                <ul className = "AdminNavContainer">
                    <li><Link to="/admin">AdminHome </Link></li>
                    <li><Link to="/AdminUsers">Users </Link></li>
                    <li><Link to="/AdminPosts">Posts</Link></li>
                </ul>
            </div>
            <Switch>
                <Route path="/admin">
                    <Admin />
                </Route>
                <Route path="/AdminUsers">
                    <AdminUsers />
                </Route>
                <Route path="/AdminPosts">
                    <AdminPosts />
                </Route>
            </Switch>
        </Router>
    
    );
}