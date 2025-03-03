import React from 'react';
import '../Styles/TopBar.css'

function TopBar(){
    return (
        <div className="topbarcontainer">
            <p className="links">
                <a className="about" href="#about">About</a>
                <a className="teachers" href="#teachers"> Teachers </a>
            </p>
        </div>
    );
}

export default TopBar;