// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import './styles.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/game" component={GamePage} />
        </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

