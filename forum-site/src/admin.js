import React from 'react';
import './admin.css';

export const admin = (props) => {

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
                    <img id="categories" src="Images/chart2.png"/>
                </div>
                <div className ="graphs" id="numUsers">
                    
                </div>
                <div className ="graphs" id="numViews">
                    <h2 className="reportsHead">Views by User</h2>
                    <img id="views" src="Images/chart1.png"/>
                </div>
                <div className ="graphs" id="newUsers"></div>
                <div className ="graphs" id="countries">
                    <h2 className="reportsHead">Users by Region</h2>
                    <img id="countries" src="Images/chart3.png"/>
                </div>
            </div>
        </div>
    </div>
  );
}