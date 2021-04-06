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
            rowNum: '',
            ids: [],
            uid: '',
        };
        this.ref = React.createRef();

        this.getUsers=this.getUsers.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.handleSearchTypeChange = this.handleSearchTypeChange.bind(this);
        this.handleSearchStrChange = this.handleSearchStrChange.bind(this);
        this.handleRowId = this.handleRowId.bind(this);
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
            let tempuid = this.state.ids;
            tempuid.push(item.uid);
            this.setState({ids:tempuid});
            this.setState({users: this.state.users + 
                <tr id = {this.handleRowId}>
                    <td ref = {this.ref} id="id" value = {item.uid}>{item.uid}</td>
                    <td>{item.username}</td>
                    <td>{item.password}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>{item.phone}</td>
                    <td id="enabledStatus" onClick={this.changeStatus}>{item.enabled==1?"enabled":"disabled"}</td>
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
handleRowId(){
    this.setState({rowNum: this.state.rowNum+1});
    return this.state.rowNum-1;
}
handleSearchStrChange(event){
    this.setState({searchStr: event.target.value});
    console.log(this.state.searchStr);
}
handleSubmit(event){
    event.preventDefault();
}
changeStatus = (e) => {
        try{
            this.ref.current.focus();
            let uid = this.state.ids[e.target.parentNode.getAttribute("id")];
            uid = this.ref.value;
            this.setState({uid: uid});
            e.target.value = e.target.value=="enabled"?"disabled": "enabled";
            this.setState({status:e.target.value=="enabled"?0:1});
            var location = `http://localhost:9000/adminSearchForUsers?status=${this.state.status}&uid = ${this.state.uid}`;
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
                        <th>ID</th>
                        <th>Username </th>
                        <th>Number of Posts </th>
                        <th>Birthdate </th>
                        <th>City </th>
                        <th>State </th>
                        <th>Country </th>
                        <th>Status </th>
                    </tr>
                    <tr id = "1">
                        <td id="id" value = "12">12</td>
                        <td>JohnDoe</td>
                        <td>password</td>
                        <td>email@email.com</td>
                        <td>1234 567 st</td>
                        <td>123-456-7890</td>
                        <td id="enabledStatus" onClick={this.changeStatus}>enabled</td>
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
