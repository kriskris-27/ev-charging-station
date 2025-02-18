import React, { useState } from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

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
  return (
    <>
    <nav className='navbar'>
    <div className="mobile-menu-toggle" onClick={toggleMenu}>
            ☰
        </div>
    <div className={`menu ${menuOpen ? 'mobile-menu' : ''}`}>
            <Link to='/'>Home Page</Link>
            <Link to='/about'>About us</Link>

            <div className="services-dropdown">
                <div onClick={toggleDropdown}className='nav-link'>Services Menu ⮟</div>

                {dropdownOpen && (
                    <ul className="dropdown-list">
                    <li><a href="/service1">Charging stations</a></li>
                    <li><a href="/service2">EV service stations</a></li>
                    <li><a href="/service3">Battery shops</a></li>
                  </ul>
                )}
            </div>
        </div>
        <div>
            <h1 className='logos'>Stralietti</h1>
        </div>
        
        
        
    </nav>
    </>
  )
}

export default Navbar
