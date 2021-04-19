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
        <div onClick={handleEventOnClick} className={type === "customgame" ? "parentButton" : type === "twoplayers" ? "parentButton2" : type === "gameonline" ? "parentButton3" : type === "startGame" ? "startGameStyle" : type === "cancel" ? "cancelstyle" : type === "OK" ? "okStyle" : type === "undostep" ? "undoStyle" : type === "endtournament" ? "endtournament":"parentButton4" }>
                {type!=='cancel' && src &&<img src={src} alt=""/>}
                {type !== 'cancel' || type !=='undostep' &&<div className="customGame">{buttonText}</div>}
                {type==='cancel' &&<div className="cancelText">{buttonText}</div>}
                {type === 'undostep' && <div>{buttonText}</div>}
                {type === 'endtournament' && <div>{buttonText}</div>}
        </div>
    );
}

export default Button;
