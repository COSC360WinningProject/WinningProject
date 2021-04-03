import React from 'react';
import Chart1 from './Images/chart1.png';
import './styles/admin.css';
import {
    BrowserRouter as Router,
    Route} from "react-router-dom";

export class Admin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filter: '',
            report: '',
            reportsHead: '',
            data: [],
        };
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleReportChange = this.handleReportChange.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
    }
    handleFilterChange(event){
        this.setState({filter: event.target.value});
        console.log(this.state.filter);
    }
    handleReportChange (event){
        this.setState({report: event.target.value});
    }
    getReports = () =>{
        let filter = this.state.filter;
        let reportType = this.state.report;
        this.setState({reportsHead: this.state.report +" By "+ this.state.filter});
        this.setState({data: fetch("http://localhost9000/admin" + filter + reportType)
            .then(res=> res.json())
            .then(data =>{
        })});
}
render(){
    return (
        <div className="App">
      <div className ="main">
          <Router>
            <div className ="leftSidebar">
                <form onSubmit = {this.handleSubmit}>
                <div id="filter">
                    <label for="filter">Filter By:</label><br/>
                    <select name ="filterSelect" id ="filterSelect" onChange={(e)=>this.handleFilterChange(e)}>
                        <option value="select">Select</option>
                        <option value ="Likes">Likes</option>
                        <option value ="Category">Category</option>
                    </select>
                </div>
                <div id ="reportType">
                    <label for ="reports">Report Type:</label><br/>
                    <select name ="reports" id ="reportSelect" onChange={(e)=>this.handleReportChange(e)}>
                        <option value="select">Select</option>
                        <option value ="NumPosts">NumPosts</option>
                        <option value ="NumUsers">NumUsers</option>
                        <option value ="NumComments">NumComments</option>
                    </select>
                </div>
                <input type="Submit" value="Submit" onClick={this.getReports} id ="reportSubmit"/>
                </form>
            </div>
            </Router>
            <div className="reports">
                <div className ="graphs" id="pieCategories">
                    <h2 className="reportsHead">{this.state.reportsHead}</h2>
                    <img id="categories" src={Chart1}/>
                </div>
                
            </div>
        </div>
    </div>
  );
}
}