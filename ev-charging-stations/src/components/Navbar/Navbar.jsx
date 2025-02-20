import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [dropdownOpen,setDropdownOpen]=useState(false)
    const [menuOpen,setMenuOpen]=useState(false)

    const toggleDropdown=()=>{
        setDropdownOpen(!dropdownOpen)
        console.log("Dropdown Open:", dropdownOpen);
    }

    const toggleMenu=()=>{
        setMenuOpen(!menuOpen)
        console.log("Menu Open:", menuOpen);
    }

    const navLinkStyle = ({ isActive }) => {
        return {
            fontWeight:isActive?'bold':'normal',
            textDecoration:isActive?'underline':'bold'
            
        };
    };

    return (
        <>
            <nav className='navbar'>
                <div className="mobile-menu-toggle" onClick={toggleMenu}>
                    ☰
                </div>
                <div className={`menu ${menuOpen ? 'mobile-menu' : ''}`}>
                    <NavLink to='/' style={navLinkStyle}>Home Page</NavLink>
                    <NavLink to='/about' style={navLinkStyle}>About us</NavLink>

                    <div className="services-dropdown">
                        <div onClick={toggleDropdown} className='nav-link'>Services Menu ⮟</div>

                        {dropdownOpen && (
                            <ul className="dropdown-list">
                                <li><NavLink to="/location">Charging stations</NavLink></li>
                                <li><NavLink to="/service2">EV service stations</NavLink></li>
                                <li><NavLink to="/service3">Battery shops</NavLink></li>
                            </ul>
                        )}
                    </div>
                </div>
                <div>
                    <h1 className='logos'>Starlietti</h1>
                </div>

        
        
            </nav>
        </>
    );
};

export default Navbar;
