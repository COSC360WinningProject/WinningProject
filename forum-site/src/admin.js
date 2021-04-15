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

        let url = `http://localhost:9000/admin` + report + `Reports` + `?filter=${filter}&report=${report}`;
    console.log(url);
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    const handleReportChange = (e) =>{
        setReport(e.target.value);
    }
    const getReports = () =>{
        setReportsHead(report + filter + " By: " + " Category");
        setData(fetch(url)
            .then(res=> res.json())
            .then(resData =>setData(resData)
        ));
}
const handleFilterChange = (e) =>{
    setFilter(e.target.filter);
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
                        <AdminReportsFilter id="filter1" report = {report.toLowerCase()} onChange={(e)=>handleFilterChange(e)} filter = ""/>
                        <br/>
                    </div>
                    <input type="Submit" value="Submit" onClick={getReports} id ="reportSubmit"/>
                </form>
            </div>
            </Router>
                <div className ="graphs" style={{display: 'flex', maxWidth: 900}}>
                    <h2 className="reportsHead">{reportsHead}</h2>
                    <Chart width = {600}
                    height={450}
                    chartType="ColumnChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Category', filter],
                        {data},
                    ]}
                    options={{
                        title: reportsHead,
                        chartArea: {width: '30%'},
                        hAxis: {
                            title: "Category",
                            minValue: 0,
                        },
                        vAxis: {
                            title: filter,
                        },
                        }}
                        legendToggle
                        />
                </div>
        </div>
    </div>
  );
}
