import React, { useState } from 'react';
import './styles/admin.css';
import { AdminUsersTable } from './adminUsersTable';

//INSERT INTO users (username, password, email, address, phone, enabled) VALUES ('Joe', 'pword', 'email@email.email', 'fleetwood mac street', '911', 0);
export function AdminUsers(props) {


    // constructor(props){
    //     super(props);
    //     this.state = {
    //         searchType: '',
    //         searchStr: '',
    //         status: 0,
    //         data: [],
    //         caption: '',
    //         users: '',
    //         rowNum: '',
    //         uid: '',
    //     };
    //     this.flipStatus=this.flipStatus.bind(this);
    //     this.getUsers=this.getUsers.bind(this);
    //     this.changeStatus = this.changeStatus.bind(this);
    //     this.handleSearchTypeChange = this.handleSearchTypeChange.bind(this);
    //     this.handleSearchStrChange = this.handleSearchStrChange.bind(this);
    // }

    // function getUsers() {
    //     this.setState({caption: "Users by " + this.state.searchType});
    //     var location = `http://localhost:9000/adminSearchForUser?searchType=${this.state.searchType}&searchStr=${this.state.searchStr}`;
    //     this.setState({data: fetch(location, {
    //         method: "GET",
    //     })
    //     .then(res=> res.json())
    //     .then(data => {
    //         this.setState({users: ''});
    //         this.state.data.forEach(item =>{
    //             this.setState({users: this.state.users + 
    //                 <tr>
    //                     <td>{item.uid}</td>
    //                     <td>{item.username}</td>
    //                     <td>{item.password}</td>
    //                     <td>{item.email}</td>
    //                     <td>{item.address}</td>
    //                     <td>{item.phone}</td>
    //                     <td id={item.uid} value = {item.enabled==1?"enabled":"disabled"} className="enabledStatus" onClick={this.changeStatus}>{this.value}</td>
    //                 </tr>
    //             });
    //         });
    //     })});
    // console.log(this.state.data);
    // }

    // handleSearchTypeChange(event){
    //     this.setState({searchType: event.target.value});
    //     console.log(this.state.searchType);
    // }
    // handleSearchStrChange(event){
    //     this.setState({searchStr: event.target.value});
    //     console.log(this.state.searchStr);
    // }
    // handleSubmit(event){
    //     event.preventDefault();
    // }
    // flipStatus(el){
    //     let newStatus = el.value=="enabled"?"disabled":"enabled";
    //     el.value = newStatus;
    //     return newStatus;
    // }
    // changeStatus = (e) => {
    //         try{
    //             this.setState({uid: e.target.id});
    //             this.setState({status:e.target.value=="enabled"?0:1});
    //             var location = `http://localhost:9000/adminSearchForUsers?status=${this.state.status}&uid = ${this.state.uid}`;
    //             fetch(location, {
    //                 method: "GET",
    //             })
    //                 .then(res=> res.json());
    //                 this.flipStatus(e.target);
    //     } catch(e){
    //         console.log(e);
    //     }
    // }

    const [searchType, setSearchType] = useState("");
    const [searchStr, setSearchStr] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }

    return (
        <div className="adminUsers">
            <form onSubmit={handleSubmit}>
                <div id="filter">
                    <label for="filter">Search By:</label>
                    <br />
                    <select name="filterSelect" id="filterSelect">
                        <option value="Select">Select</option>
                        <option value="Name">Name</option>
                        <option value="Email">Email</option>
                        <option value="Post">Post</option>
                    </select>
                    <input type="text" id="userSearch" placeholder="Search" />
                    <input type="Submit" value="Submit" id="searchSubmit" />
                </div>
            </form>

            <AdminUsersTable caption="caption" />
        </div>
    );
}
