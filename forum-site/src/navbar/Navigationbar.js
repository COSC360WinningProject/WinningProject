import React, { useState } from 'react'
import { Button } from './Button'
import {

    Link
} from "react-router-dom";
import { MenuItems } from './MenuItems'
import './Navbar.css'


export function NavigationBar(props) {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked((prevClicked) => !prevClicked);
    };

    let button;
    if(props.user)
    {
        button = (<Button onClick={props.onLogout}>Sign Out</Button>)
    }
    else
    {
        button = (<Button><Link to="signup">Sign Up</Link></Button>)
        
    }

    return (
        <nav className="NavbarItems">

            <h1 className="navbar-logo">Evil Reddit</h1>
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <h3 className="logged-in-user">{props.user ? props.user : ""}</h3>

            <ul className={clicked ? 'nav-menu-active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.styleName} to={item.url}>{item.title}</Link>
                        </li>
                    );
                })}
            </ul>

            {button}
        </nav>
    );
}


