import React, { useState } from 'react';
import './styles/admin.css';
import { AdminPostsTable } from './adminPostsTable';

//INSERT INTO users (username, password, email, address, phone, enabled) VALUES ('Joe', 'pword', 'email@email.email', 'fleetwood mac street', '911', 0);
export function AdminPosts(props) {


    const [searchType, setSearchType] = useState("");
    const [searchStr, setSearchStr] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchType(e.target.filterSelect.value);
        setSearchStr(e.target.postSearch.value);
    }

    const handleTypeChange = (e) => {
        console.log(e.target.value);

    }

    const handleStrChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <div className="adminPosts">
            <form onSubmit={handleSubmit}>
                <div id="filter">
                    <label htmlFor="filter">Search By:</label>
                    <br />
                    <div id ="postsFilter">
                        <select name="filterSelect" id="filterSelect" onChange={handleTypeChange} required>
                            <option value="Title">Title</option>
                            <option value="Category">Category</option>
                        </select>
                    </div>
                    <input type="text" id="postSearch" placeholder="Search" onChange={handleStrChange} required/>
                    <input type="Submit" value="Submit" id="searchSubmit" />
                </div>
            </form>

            <AdminPostsTable searchType={searchType} searchStr={searchStr}handleSubmit={handleSubmit} caption="caption" />
            
        </div>
    );
}
