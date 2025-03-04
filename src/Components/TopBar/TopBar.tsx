import React from 'react';
import '../Styles/TopBar.css'

function TopBar(){
    return (
        <div className="topbarcontainer">
            <span className="top-bar-title"> South East Florida Events </span>
            {/* <p className="links">
                <a className="about" href="#about">About</a>
                <a className="teachers" href="#teachers"> Teachers </a>
            </p> */}
        </div>
    );
}

export default TopBar;