import Chart1 from './Images/chart1.png';
import './styles/admin.css';
import { BrowserRouter as Router } from "react-router-dom";
import{ Chart } from "react-google-charts";
import React, { useState, useEffect } from 'react';
import { AdminReportsFilter } from './adminReportsFilter';

export function Admin(props) {
    const [filter, setFilter] = useState("");
    const [data, setData] = useState([]);
    const [report, setReport] = useState("");
    const [reportsHead, setReportsHead] = useState("");
    const [chartData, setChartData] = useState([]);

    let url = `http://localhost:9000/adminCategoryReports?filter=${filter}&report=${report}`;
    console.log(url);
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    const handleReportChange = (e) =>{
        console.log(e.target.value);
        setReport(e.target.value);
    }
    const getReports = () =>{
        setReportsHead(report + filter + " By: " + " Category");
        fetch(url)
            .then(res=> res.json())
            .then(resData =>setData(resData)
        );
        console.log(data);
        data.map(function(obj){
            setChartData(prev => [...prev, [...Object.values(obj)]]);
        })
        
        console.log(chartData);
}
const handleFilterChange = (e) =>{
    console.log(e.target);
    setFilter(e.target.value);
}
    return (
        <div className="App">
      <div className ="main">
          <Router>
            <div className ="leftSidebar">
                <form onSubmit = {handleSubmit}>
                    <div id ="reportType">
                        <label for ="reports">Report Type:</label><br/>
                        <select name ="reports" id ="reportSelect" onChange={(e)=>handleReportChange(e)}>
                            <option value="select">Select</option>
                            <option value ="Users">Users</option>
                            <option value ="Posts">Posts</option>
                            <option value ="Comments">Comments</option>
                        </select>
                    </div>
                    <br/>
                    <div id="filter">
                        <label for="filter">Filter By:</label><br/>
                        <AdminReportsFilter id="filter1" report = {report.toLowerCase()} onChange={handleFilterChange} filter = ""/>
                        <br/>
                    </div>
                    <input type="Submit" value="Submit" onClick={getReports} id ="reportSubmit"/>
                </form>
            </div>
            </Router>
                <div className ="graphs" style={{display: 'flex', maxWidth: 900}}>
                    
                </div>
        </div>
    </div>
  );
}
