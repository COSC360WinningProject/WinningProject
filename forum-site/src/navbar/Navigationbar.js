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

    return (
        <nav className="NavbarItems">

            <h1 className="navbar-logo">Evil Reddit</h1>
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>

            <ul className={clicked ? 'nav-menu-active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.styleName} to={item.url}>{item.title}</Link>
                        </li>
                    );
                })}
            </ul>

            <Button><Link to="signup">Sign Up</Link></Button>
        </nav>
    );
}


