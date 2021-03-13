import React from 'react';
import './admin.css';

export const adminUsers = (props) => {

    return (
            <div class="reports">
                        <table>
                            <thead>
                                <caption>Site Users Report</caption>
                                <br/>
                                <tr>
                                    <th>Username</th>
                                    <th>Number of Posts</th>
                                    <th>Birthdate</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Country</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="users">
                                    <td>JohnDoe</td>
                                    <td>73</td>
                                    <td>February 7, 1999</td>
                                    <td>Palm Beach</td>
                                    <td>Florida</td>
                                    <td>USA</td>
                                    <td><p class="enabler" id = "JohnDoe_Status" onclick="disable('JohnDoe');">Enabled</p></td>
                                </tr>
                                <tr class="users">
                                    <td>JaneDoe</td>
                                    <td>50000</td>
                                    <td>September 15, 1968</td>
                                    <td>Chicago</td>
                                    <td>Illinois</td>
                                    <td>USA</td>
                                    <td><p class="enabler" id = "JaneDoe_Status" onclick="disable('JaneDoe');">Enabled</p></td>
                                </tr>
                            </tbody>
                        </table>
                        <br/>
                    </div>
    );
}
var enabled =true;
function disable(username){
    if(enabled==true){
       if(confirm('Are you sure you want to disable this user?')==true){
           //disable
           var johnStatus = document.getElementById(username+"_Status");
           johnStatus.innerHTML="Disabled";
       }
    }
    else{
        if(confirm('Are you sure you want to enable this user?')==true){
            //disable
            var johnStatus = document.getElementById(username+"_Status");
            johnStatus.innerHTML="Enabled";
        }
    }
    enabled=!enabled;
}