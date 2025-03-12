import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ThumbsButton from '../../Components/Events/ThumbsButton';
import '../../Components/Styles/Event.css';
import 'animate.css/animate.min.css';


function EventDetails(){
    const location = useLocation();
    let { eventId } = useParams();
    
    console.log('event id = ', eventId);
    console.log(location.state.key.image);
    return (
        <div className="event-container">
            <div className="image-container">
                <img className="event-image" src={location.state.key.image}/>
            </div>
            <h1 className="event-header"> { location.state.key.event }</h1>
            <p className="event-description"> { location.state.key.description } </p>
            <div className="like-dislike-container">
                <ThumbsButton thumbsUp={true} />
                <ThumbsButton thumbsDown={true} />
            </div>
        </div>

    );
};

export default EventDetails;