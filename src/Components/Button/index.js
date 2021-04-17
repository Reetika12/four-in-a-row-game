import React from 'react';

import '../../Container/Styles/MainPage.css';

function Button(props) {
    let {
       src,
        buttonText,
        type
    } = props;

    return (
        <div className={type === "customgame" ? "parentButton" : type === "twoplayers" ? "parentButton2" : type === "gameonline" ? "parentButton3" : type === "startGame" ? "startGameStyle": "parentButton4" }>
                <img src={src} alt=""/>
                <div className="customGame">{buttonText}</div>
        </div>
    );
}

export default Button;
