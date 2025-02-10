import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Navbar.css';
import logo from './GAMTlogo.png';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <nav className="navbar">
            <div className="container">
                {/* Logo (Clickable, Redirects to Home) */}
                <NavLink to="/" className="logo">
                    <img src={logo} alt="Website Logo" />
                </NavLink>

                {/* Navigation Links */}
                <div className={`nav-elements ${showNavbar ? 'active' : ''}`}>
                    <ul>
                        <li>
                            <NavLink to="/" onClick={handleShowNavbar}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/FamousWhispersPage" onClick={handleShowNavbar}>Famous Whispers</NavLink>
                        </li>
                        <li>
                            <NavLink to="/WhisperedCitiesPage" onClick={handleShowNavbar}>Whispered Cities</NavLink>
                        </li>
                        <li>
                            <NavLink to="/SignInPage" onClick={handleShowNavbar}>Sign In / Log In</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
