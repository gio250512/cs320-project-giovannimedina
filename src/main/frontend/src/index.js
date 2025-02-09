import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import Page2 from './Components/SignInPage'
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';
import SignInPage from "./Components/SignInPage";
import FamousWhispersPage from "./Components/FamouseWhispersPage";

Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/SignInPage" element={<SignInPage />} />
                <Route path="/FamousWhispersPage" element={<FamousWhispersPage />} />
                {/* You can add more pages by adding more Route elements here */}
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);