import React from 'react';
import '../../Components/Styles/Home.scss';
import TopBar from '../../Components/TopBar/TopBar';
import Calendar from '../../Components/Calendar/Calendar';

function Home(){
    return (
        <div className="home">
            <div className="home-container">
                <TopBar />
                <Calendar />
            </div>

        </div>

    );
};

export default Home;
