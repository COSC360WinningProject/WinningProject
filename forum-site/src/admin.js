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

        let url = `http://localhost:9000/admin` + props.filter + props.report + `?filter=${props.filter}&report=${props.report}`;

    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    const handleReportChange = (e) =>{
        setReport(e.target.value);
    }
    const getReports = () =>{
        let filter = filter;
        let reportType = report;
        setReportsHead(reportType + " By: " + filter);
        setData(fetch(url)
            .then(res=> res.json())
            .then(resData =>setData(resData)
        ));
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
                            <option value ="posts">Posts</option>
                            <option value ="users">Users</option>
                            <option value ="comments">Comments</option>
                        </select>
                    </div>
                    <br/>
                    <AdminReportsFilter report = {report}/>
                    <br/>
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
                        ['Category', 'Upvotes', 'Downvotes'],
                        ['Category1', 10000, 1200],
                        ['Category2', 16000, 2000],
                        ['Category3', 5000, 1000],
                    ]}
                    options={{
                        title: reportsHead,
                        chartArea: {width: '30%'},
                        hAxis: {
                            title: report,
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
