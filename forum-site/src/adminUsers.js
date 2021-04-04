import React from 'react';
import './styles/admin.css';
//INSERT INTO users (username, password, email, address, phone, enabled) VALUES ('Joe', 'pword', 'email@email.email', 'fleetwood mac street', '911', 0);
export class AdminUsers extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchType: '',
            searchStr: '',
            status: 0,
            data: [],
            caption: '',
            user: '',
            uid: '',
        };
        this.getUsers=this.getUsers.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.handleSearchTypeChange = this.handleSearchTypeChange.bind(this);
        this.handleSearchStrChange = this.handleSearchStrChange.bind(this);
    }
getUsers(){
    this.setState({caption: "Users by " + this.state.searchType});
    var location = `http://localhost:9000/adminSearchForUser?searchType=${this.state.searchType}&searchStr=${this.state.searchStr}`;
    this.setState({data: fetch(location, {
        method: "GET",
    })
    .then(res=> res.json())
    .then(data => {
        this.setState({users: ''});
        this.state.data.forEach(item =>{
            this.setState({users: this.state.users + 
                <tr>
                <td>{item.uid}</td>
                <td>{item.username}</td>
                <td>{item.password}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.phone}</td>
                <td id="enabledStatus" onClick={this.focusChangeStatus}>{item.enabled==1?"enabled":"disabled"}</td>
                </tr>
            });
        });
    })});
    console.log(this.state.data);
}
handleSearchTypeChange(event){
    this.setState({searchType: event.target.value});
    console.log(this.state.searchType);
}
handleSearchStrChange(event){
    this.setState({searchStr: event.target.value});
    console.log(this.state.searchStr);
}
handleSubmit(event){
    event.preventDefault();
}
changeStatus(e) {
        try{
        e.target.value = e.target.value=="enabled"?"disabled": "enabled";
        this.setState({status:e.target.value=="enabled"?0:1});
        var location = `http://localhost:9000/adminSearchForUsers?status=${this.state.status}`;
        fetch(location, {
            method: "GET",
        })
            .then(res=> res.json());
    } catch(e){
        console.log(e);
    }
}
    render(){
    return (
        <div className="adminUsers">
            <form onSubmit = {this.handleSubmit}>
            <div id="filter">
                    <label for="filter">Search By:</label><br/>
                     <select name ="filterSelect" id ="filterSelect" onChange={(e)=>this.handleSearchTypeChange(e)}>
                        <option value="Select">Select</option>
                        <option value="Name">Name</option>
                        <option value ="Email">Email</option>
                        <option value ="Post">Post</option>
                    </select>
                    <input type ="text" id ="userSearch"placeholder="Search"onChange={(e)=>this.handleSearchStrChange(e)}/>
                    <input type="Submit" value="Submit" onClick={this.getUsers} id ="searchSubmit"/>
                </div>
            </form>
        <div className="reports">
            <table>
                <caption>{this.state.caption}</caption>
                <thead>
                    <tr>
                        <th>Username </th>
                        <th>Number of Posts </th>
                        <th>Birthdate </th>
                        <th>City </th>
                        <th>State </th>
                        <th>Country </th>
                        <th>Status </th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users}
                </tbody>

            </table>
            <br />
        </div>
        </div>
    );
}
}
