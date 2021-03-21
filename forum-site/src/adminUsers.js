import React from 'react';
import './admin.css';

export const AdminUsers = (props) => {

    var enabled = true;
    function disable(e) {
        alert(`${e.target.id} disabled!`);
        // if(enabled==true){
        //    if(confirm('Are you sure you want to disable this user?')==true){
        //        //disable
        //        var johnStatus = document.getElementById(username+"_Status");
        //        johnStatus.innerHTML="Disabled";
        //    }
        // }
        // else{
        //     if(confirm('Are you sure you want to enable this user?')==true){
        //         //disable
        //         var johnStatus = document.getElementById(username+"_Status");
        //         johnStatus.innerHTML="Enabled";
        //     }
        // }
        // enabled=!enabled;
    }

    return (
        <div className="reports">
            <table>
                <caption>Site Users Report</caption>
                <thead>
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
                    <tr className="users">
                        <td>JohnDoe</td>
                        <td>73</td>
                        <td>February 7, 1999</td>
                        <td>Palm Beach</td>
                        <td>Florida</td>
                        <td>USA</td>
                        <td><p className="enabler" id="JohnDoe_Status" onClick={disable}>Enabled</p></td>
                    </tr>
                    <tr className="users">
                        <td>JaneDoe</td>
                        <td>50000</td>
                        <td>September 15, 1968</td>
                        <td>Chicago</td>
                        <td>Illinois</td>
                        <td>USA</td>
                        <td><p className="enabler" id="JaneDoe_Status" onClick={disable}>Enabled</p></td>
                    </tr>
                </tbody>
            </table>
            <br />
        </div>
    );
}
