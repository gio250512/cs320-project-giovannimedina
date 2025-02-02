import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components/Pages/Home';
import SignInPage from './Components/Pages/SignInPage'
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';

Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/SignInPage" element={<SignInPage />} />
                {/* You can add more pages by adding more Route elements here */}
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);