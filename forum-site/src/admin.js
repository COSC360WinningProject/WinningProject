import React from 'react';
import Chart1 from './Images/chart1.png';
import Chart2 from './Images/chart2.png';
import Chart3 from './Images/chart3.png';
import './styles/admin.css';

export const Admin = (props) => {

    return (
        <div className="App">
      <div className ="main">
            <div className ="leftSidebar">
                <ul>
                    <li><a href="#pieCategories" id="categoriesSidebar">Categories</a></li>
                    <br/>
                    <li><a href="#numUsers" id="numUsersSidebar">Number of Users</a></li>
                    <br/>
                    <li><a href="#numViews" id="viewsSidebar">Number of Views</a></li>
                    <br/>
                    <li><a href="#newUsers" id="newSidebar">New Users</a></li>
                    <br/>
                    <li><a href="#countries" id="countriesSidebar">Countries</a></li>
                    <br/>
                </ul>
            </div>

            <div className="reports">
                <div className ="graphs" id="pieCategories">
                    <h2 className="reportsHead">Categories of Posts</h2>
                    <img id="categories" src={Chart1}/>
                </div>
                <div className ="graphs" id="numUsers">
                    
                </div>
                <div className ="graphs" id="numViews">
                    <h2 className="reportsHead">Views by User</h2>
                    <img id="views" src={Chart2}/>
                </div>
                <div className ="graphs" id="newUsers"></div>
                <div className ="graphs" id="countries">
                    <h2 className="reportsHead">Users by Region</h2>
                    <img id="countries" src={Chart3}/>
                </div>
            </div>
        </div>
    </div>
  );
}