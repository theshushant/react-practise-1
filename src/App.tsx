import React from 'react';
import './App.css';
import MainComponent from "./components/MainComponent/MainComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";

function App() {
    return (
        <div className="App">
            <HeaderComponent/>
            <MainComponent/>
        </div>
    );
}

export default App;
