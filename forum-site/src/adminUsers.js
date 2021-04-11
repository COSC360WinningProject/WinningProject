import React, { useState } from 'react';
import './styles/admin.css';
import { AdminUsersTable } from './adminUsersTable';

//INSERT INTO users (username, password, email, address, phone, enabled) VALUES ('Joe', 'pword', 'email@email.email', 'fleetwood mac street', '911', 0);
export function AdminUsers(props) {


    const [searchType, setSearchType] = useState("");
    const [searchStr, setSearchStr] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.filterSelect.value);
        console.log(e.target.userSearch.value);

        setSearchType(e.target.filterSelect.value);
        setSearchStr(e.target.userSearch.value);
    }

    const handleTypeChange = (e) => {
        console.log(e.target.value);

    }

    const handleStrChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <div className="adminUsers">
            <form onSubmit={handleSubmit}>
                <div id="filter">
                    <label htmlFor="filter">Search By:</label>
                    <br />
                    <select name="filterSelect" id="filterSelect" onChange={handleTypeChange} required>
                        <option value="Username">UserName</option>
                        <option value="Email">Email</option>
                        <option value="Post">Post</option>
                    </select>
                    <input type="text" id="userSearch" placeholder="Search" onChange={handleStrChange} required/>
                    <input type="Submit" value="Submit" id="searchSubmit" />
                </div>
            </form>

            <AdminUsersTable searchType={searchType} searchStr={searchStr} caption="caption" />
        </div>
    );
}
