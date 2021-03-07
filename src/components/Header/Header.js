import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" srcset=""/>
            <nav>
            <a href="/shop">Shop</a>
            <a href="/manage">Manage Inventory</a>
            <a href="/review">Review</a>
            </nav>
        </div>
    );
};

export default Header;