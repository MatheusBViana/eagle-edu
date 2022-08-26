import React from "react";
import '../styles/header.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {useState} from "react";
import logo from '../Assets/profile-icon.jpg'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SidebarData from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

function Header(){
  const [expand, updateExpanded] = useState(true);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    if(sidebar) {
      localStorage.setItem('sidebar', 'collapsed');
    }else{
      localStorage.setItem('sidebar', 'expanded');
    }
    setSidebar(!sidebar);
    console.log(localStorage.getItem('sidebar'));
  }
    const Nav = styled.div`
        background: white;
        height: 80px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    
    `;

    const NavIcon = styled(Link)`
        margin-left: -10%;
        font-size: 2rem;
        height: 80px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #15171c;
    `;

    const SidebarNav = styled.nav`
        background: white;
        width: 250px;
        height: 100vh;
        display: flex;
        justify-content: center;
        position: absolute;
        top: 0;
        left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
        transition: 350ms;
        z-index: 10;
        @media only screen and (max-width: 800px) {
          width: 80% !important;
          margin: 5%;
    }
    `;

    const SidebarWrap = styled.div`
        width: 100%;
    `;

    return (
        <div className="header">
          {sidebar ? 
          <Link to="/" className="header-logo">
              <img src="https://eagle-edu.com.br/app/images/logo-text.svg"></img>
          </Link>
          : 
          <Link to="/" className="header-logo-collapsed">
              <img style={{width: '45%', marginTop: '6%'}} src="https://i.imgur.com/HbHuP32.png"></img>
              <a href="https://eagle-edu.com.br/"></a>
          </Link>
        }
        <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars style={{ color: 'black', float: 'left', width: '150px'}}onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav style={{  height: '100%', marginTop: '100px', width: '12.5%', minWidth: '90px'}} sidebar={sidebar}>
          <SidebarWrap>
            <SidebarData />
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
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