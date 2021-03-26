import React from 'react';
import Logo from './logo.svg'
import './styles/admin.css';

export const navBar = (props) => {

    return (
        <nav>
            <ul id="leftNav">
                <li><a href="admin.html" id="home">Home</a></li>
                <li><a href="adminUsers.html" id="users">Users</a></li>
                <li><a href="adminPosts.html" id="posts">Posts</a></li>
                <li><img id="menuImg" src="Images/menu.png" onclick={unHide('menu')}/></li>
            </ul>
            <div className="menu" id="menu">
                <ul>
                    <li><a href="adminUsers.html" id="users">Users</a></li>
                    <br/>
                    <li><a href="adminPosts.html" id="posts">Posts</a></li>
                </ul>
            </div>
        </nav>
    );
}

var hidden = true;
function unHide(id,btn){
    var menu = document.getElementById(id);
    if(hidden==true){
        menu.style.display = "block";
    }
    else{
        menu.style.display = "none";
    }
    hidden = !hidden;
}