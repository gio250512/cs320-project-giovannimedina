
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from './Pages/GAMTlogo.png'; // Import your logo image

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
                            <NavLink to="/" onClick={() => setShowNavbar(false)}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/pages/FamousWhispers" onClick={() => setShowNavbar(false)}>Famous Whispers</NavLink>
                        </li>
                        <li>
                            <NavLink to="/pages/whispered-cities" onClick={() => setShowNavbar(false)}>Whispered Cities</NavLink>
                        </li>
                        <li>
                            <NavLink to="/SignInPage" onClick={() => setShowNavbar(false)}>Sign In / Log In</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
