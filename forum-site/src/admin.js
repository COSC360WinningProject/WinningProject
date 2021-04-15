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

    useEffect(() => {
        console.log("re-rendering");
        console.log("data");
        console.log(data);
        console.log("chartdata");
        console.log(chartData);
        
        setChartData([]);

        data.map(function(obj){
            setChartData(prev => [...prev, [...Object.values(obj)]]);
        })

    }, [data])

   
    const handleReportChange = (e) =>{
        console.log(e.target.value);
        setReport(e.target.value);
    }
    const getReports = (e) =>{
        e.preventDefault();
        setReportsHead(report + filter + " By: " + " Category");
        let url = `http://localhost:9000/adminCategoryReports?filter=${filter}&report=${report}`;
        fetch(url)
        .then(res => res.json())
        .then(resData => setData(resData));
        
        

        

}
const handleFilterChange = (e) =>{
    console.log(e.target);
    setFilter(e.target.value);
}



if(chartData[0]){
    return (
        <div className="App">
      <div className ="main">
          <Router>
            <div className ="leftSidebar">
                <form onSubmit = {getReports}>
                    <div id ="reportType">
                        <label for ="reports">Report Type:</label><br/>
                        <select name ="reports" id ="reportSelect" onChange={handleReportChange}>
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
                    <input type="Submit" value="Submit" id ="reportSubmit"/>
                </form>
            </div>
            </Router>
                <div className ="graphs" style={{display: 'flex', maxWidth: 900}}>
                <Chart 
                    width = {600}
                    height={450}
                    chartType="ColumnChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Category', 'likes'],
                        [chartData[0][1], chartData[0][0]],
                        [chartData[1][1], chartData[1][0]],
                        [chartData[2][1], chartData[2][0]],
                        [chartData[3][1], chartData[3][0]]
                        
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

    )
}

    return (
        <div className="App">
      <div className ="main">
          <Router>
            <div className ="leftSidebar">
                <form onSubmit = {getReports}>
                    <div id ="reportType">
                        <label for ="reports">Report Type:</label><br/>
                        <select name ="reports" id ="reportSelect" onChange={handleReportChange}>
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
                    <input type="Submit" value="Submit" id ="reportSubmit"/>
                </form>
            </div>
            </Router>
                <div className ="graphs" style={{display: 'flex', maxWidth: 900}}>
                    
                
                </div>
        </div>
    </div>
  );
}
