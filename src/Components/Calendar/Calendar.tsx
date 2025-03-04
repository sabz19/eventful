import React, { useEffect, useState } from 'react';
import '../Styles/Calendar.css';
import Events from './Events';

/**
 * Populate the list of events from the server
 * @returns 
 */
function Calendar(){
    
    const [eventData, setData] = useState<Events[]>([]);
    const [mainImage, setMainImage] = useState<string>();

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
                    <img className="event-image" src={mainImage}/>
                </div>
                    {eventData.map((key) => 
                    <div className="listItem"> 
                        <div className="list-item-container"
                        onMouseEnter={ () => setMainImage(key.image)}> 
                            <img className="img-list-view"src={key.image}/>
                            <span className="event-title"> {key.event}  </span>
                            <span className="event-date"> { key.date.toString() } </span>
                            <p className="event-summary">{key.summary} </p>
                        </div> 
                    </div>)}
            </div>
        </div>
    )
}

export default Calendar;