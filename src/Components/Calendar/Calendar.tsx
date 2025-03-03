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
                <ul className='listView'> 
                    {eventData.map((key) => 
                    <li className="listItem"> 
                        <div className="listItemContainer"
                        onMouseEnter={ () => setMainImage(key.image)}> 
                            <img src={key.image}/>
                            {key.event} {key.date.toString()}
                            <p>{key.summary} </p>
                        </div> 
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

export default Calendar;