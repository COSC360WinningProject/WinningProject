import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link} from "react-router-dom";
import {Admin} from './admin.js';
import { AdminUsers } from './AdminUsers.js';
import {AdminPosts} from './AdminPosts.js';
import './styles/admin.css';
export const AdminRouter = (props) => {
        return (
    
        <Router>
            <div className="AdminNav" expand="lg">
                <div className = "AdminNavContainer">
                    <Link to="/admin">AdminHome </Link>
                    <Link to="/AdminUsers">Users    </Link>
                    <Link to="/AdminPosts">Posts</Link>
                </div>
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