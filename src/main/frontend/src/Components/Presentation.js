import React from 'react';
import '../Styles/Card.css';
import logo from './GAMTlogo.png';

const Card = () => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="card-text">
                    <h1 className="card-title">We are GAMT WHISPERS</h1>
                    <h2 className="card-description">
                        You discovered, you whisper
                    </h2>
                </div>
                <div className="card-image">
                    <img
                        aria-hidden="true"
                        alt="Diverse team working together"
                        src={logo}
                        className="image"
                    />
                </div>
            </div>
        </div>
    );
};

export default Card;
