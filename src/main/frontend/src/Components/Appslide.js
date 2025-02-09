import React from 'react';
import '../Styles/Appslide.css';
import logo from './GAMTlogo.png';

function Appslide() {
    return (
        <div className="appslide">
            <header className="header">
                <h1>GAMT Whispers</h1>
                <h2>Whispering your favorite places to others</h2>
                <div className="content">
                    <p>
                        At GAMT Whispers, our primary interest is to share those places that people find worthy of
                        recognition.
                    </p>
                </div>
            </header>
            <img
                src={logo}
                alt="GAMT Logo"
                className="image"
            />

        </div>
    );
}

export default Appslide;
