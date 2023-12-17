import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonUsage from "./components/Buttons/ButtonUsage";
import {Navbar} from "./components/Navbar/Navbar";
import Typewriter from "./components/Typewriting/Typewrite";
import CenteredContainer from "./components/Typewriting/CenteredContainer";

function App() {
    return (
        <React.StrictMode>
            <CenteredContainer>
                <Typewriter text="Salom"/>
            </CenteredContainer>
        </React.StrictMode>

    );
}

export default App;
