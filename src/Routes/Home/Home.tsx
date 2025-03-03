import React from 'react';
import '../../Components/Styles/Home.css';
import TopBar from '../../Components/TopBar/TopBar';
import Calendar from '../../Components/Calendar/Calendar';

function Home(){
    return (
        <div className="home">
            <TopBar />
            <Calendar />
        </div>

    );
};

export default Home;
