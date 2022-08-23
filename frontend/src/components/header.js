import React from "react";
import '../styles/header.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {useState} from "react";
import logo from '../Assets/profile-icon.jpg'

function Header(){
  const [expand, updateExpanded] = useState(true);

    return (
        <div className="header">
        <div className="header-logo">
            <img src="https://eagle-edu.com.br/app/images/logo-text.svg"></img>
            <a href="https://eagle-edu.com.br/"></a>
        </div>
        <div className="header-profile">
            <select className="language">
                <option>English</option>
                <option>Portuguese</option>
            </select>
            <img src={logo}></img>
        </div>
    </div>
    )
}

export default Header;