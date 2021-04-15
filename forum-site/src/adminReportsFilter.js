import React, { useState, useEffect } from 'react';

export function AdminReportsFilter(props) {
    
    const postsFilters = ["Likes",  "Count"];
    const usersFilters = ["posts", "comments"];
    const commentsFilters = ["Likes", "Count"];
    let filters=[];
    const report = props.report;
    

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
        props.onChange(e);
    }
    return(
        
            <select name ="filterSelect" id ="filterSelect" onChange={(e)=>handleFilterChange(e)}>
                <option value="select">Select</option>
                {filters.map((filter) => <option value = {filter}>{filter}</option>)}
            </select>
    )
}