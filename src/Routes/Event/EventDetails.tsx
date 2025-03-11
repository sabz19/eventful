import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import '../../Components/Styles/Event.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
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
                <button className="like-button animate__animated animate__bounce"><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon></button>
                <button className="dislike-button"><FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon></button>
            </div>
        </div>

    );
};

export default EventDetails;