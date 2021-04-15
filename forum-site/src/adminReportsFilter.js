import React, { useState, useEffect } from 'react';

export function AdminReportsFilter(props) {
    const [filter, setFilter] = useState("");
    const postsFilters = ["Likes", "Category", "Count"];
    const usersFilters = ["Enabled", "Count"];
    const commentsFilters = ["Likes", "Upvotes & Downvotes", "Count"];
    let filters=[];
    const report = props.report;
    console.log(report);

    if(report=="users"){
        filters = usersFilters;
    }
    else if(report=="posts"){
        filters=postsFilters;
    }
    else if(report=="comments"){
        filters=commentsFilters;
    }

    const handleFilterChange = (e) =>{
        setFilter(e.target.value);
    }
    return(
        <div id="filter">
            <label for="filter">Filter By:</label><br/>
            <select name ="filterSelect" id ="filterSelect" onChange={(e)=>handleFilterChange(e)}>
                <option value="select">Select</option>
                {filters.map((filter) => <option value = {filter}>{filter}</option>)}
            </select>
        </div>
    )
}