import React from 'react';

import '../../Container/Styles/MainPage.css';

function Button(props) {
    let {
       src,
        buttonText,
        type,
        // clickEvent
    } = props;

   const handleEventOnClick = () =>{
        props.clickEvent()
    }
    return (
        <div onClick={handleEventOnClick} className={type === "customgame" ? "parentButton" : type === "twoplayers" ? "parentButton2" : type === "gameonline" ? "parentButton3" : type === "startGame" ? "startGameStyle" : type === "cancel" ? "cancelstyle" : type ==="OK"? "okStyle":"parentButton4" }>
                {type!=='cancel' &&<img src={src} alt=""/>}
                {type!=='cancel' &&<div className="customGame">{buttonText}</div>}
                {type==='cancel' &&<div className="cancelText">{buttonText}</div>}
        </div>
    );
}

export default Button;
