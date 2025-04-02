import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import 'animate.css';
import '../Styles/Calendar.scss';

/**
 * Basic functionality to implement a back button to go to the Home page 
 * listing the events.
 * @param props 
 * @returns 
 */
function BackButton(props:any) {

    const navigate = useNavigate(); 
    const handleBackButtonClick = () => {
        // This will take the user back to the previous page in the history stack
        navigate(-1);
    }
    return(
        <div className="back-button-container">
            <span onClick={handleBackButtonClick} className="back-button">
                <FontAwesomeIcon icon={ faArrowLeft }></FontAwesomeIcon>
            </span>
        </div>
    )
}

export default BackButton;