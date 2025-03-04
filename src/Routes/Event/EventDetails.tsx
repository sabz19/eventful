import React from 'react';
import { useParams } from 'react-router-dom';
import '../../Components/Styles/Event.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

function EventDetails(){
    let { eventId } = useParams();
    console.log('event id = ', eventId);
    return (
        <div className="event-container">
            <div className="image-container">
                <img className="event-image" src={'mainImage'}/>
            </div>
            <h1 className="event-title"> Event Page Details</h1>
            <p> { eventId } </p>
            <div className="like-dislike-container">
                <button className="like-dislike-button"><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon></button>
                <button className="like-dislike-button"><FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon></button>
            </div>
        </div>

    );
};

export default EventDetails;