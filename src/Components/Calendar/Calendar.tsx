import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Calendar.css';
import Events from './Events';
import images from '../Images/Images';

/**
 * Populate the list of events from the server
 * @returns 
 */
function Calendar(){
    
    const [eventData, setData] = useState<Events[]>([]);
    const [mainImage, setMainImage] = useState<string>();
    const calendarImage = './assets/images/calendar.png';

    useEffect(()=> {
        async function getEvents(){
            const url = `http://localhost:3000/api/data/events`;
            const response = await fetch(url);
            const res = await response.json();
            const eventDetails: Events[] = res.events.map((event: any)=>({
                id: event.uuid,
                event: event.event,
                image: event.image,
                date: event.date,
                summary: event.summary,
                description: event.description
            }));

            console.log(eventDetails);
            setData(eventDetails);
        }
        getEvents();
        console.log(eventData);
    }, []);
    return (
        <div className="calendar-container">
            <div className="events-container"> 
                <div className="image-container">
                    <img className="event-image" src={ mainImage? mainImage:images.aolLogo }/>
                </div>
                <div className="calendar-image-container">
                    <img className="calendar-image" src={ calendarImage }/>
                </div>
                {eventData.map((key) => 
                    <div className="listItem"> 
                    <Link to={{ pathname:`/event/${key.id}`}} state={{key}} style={{ textDecoration: 'none'}}>
                        <div className="list-item-container"
                            onMouseEnter={ () => setMainImage(key.image)}> 
                            <img className="img-list-view"src={ key.image }/>
                            <span className="event-title"> { key.event }  </span>
                            {/* <span className="event-date"> { key.date.toString() } </span> */}
                            <p className="event-summary">{ key.summary } </p>
                        </div>
                    </Link> 
                    </div>)
                }
            </div>
        </div>
    )
}

export default Calendar;