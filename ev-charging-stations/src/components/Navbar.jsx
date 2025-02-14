import React, { useState } from 'react';
import '../styles/Navbar.css';

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
        <div>
            <h1>Logo</h1>
        </div>
        <div className={`menu ${menuOpen ? 'mobile-menu' : ''}`}>
            <a href='/'>Home</a>
            <a href='/'>About us</a>

            <div className="services-dropdown">
                <button onClick={toggleDropdown}className='nav-link'>Services Menu</button>

                {dropdownOpen && (
                    <ul className="dropdown-list">
                    <li><a href="/service1">Charging stations</a></li>
                    <li><a href="/service2">EV service stations</a></li>
                    <li><a href="/service3">Battery shops</a></li>
                  </ul>
                )}
            </div>
        </div>
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
            ☰
        </div>
    </nav>
    </>
  )
}

export default Navbar
