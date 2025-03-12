import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import 'animate.css';


function ThumbsButton(props:any) {

    const [isSelected, setIsSelected] = useState(false);
    const handleButtonClick = () => {
        setIsSelected(!isSelected);
    }

    return(
        <div onClick={ handleButtonClick }
            className={isSelected? 'animate__animated animate__bounce': ''}
        >
            <button className={props.ThumbsUp? "like-button":"dislike-button"}><FontAwesomeIcon icon={props.thumbsUp? faThumbsUp: faThumbsDown}></FontAwesomeIcon></button>
        </div>
    )
}

export default ThumbsButton;