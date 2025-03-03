import React from 'react';
import { BrowserRouter as Router, Link, Routes } from 'react-router-dom';

function Navigation(){
    return(
        <Router>
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
        </Router>
    );
}

export default Navigation;