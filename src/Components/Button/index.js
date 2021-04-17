import React from 'react';
// import ClassNames from 'classnames';

import '../../Container/Styles/MainPage.css';

function Button(props) {
    let {
       src,
        buttonText,
        type
    } = props;

    return (
        <div className={type === "customgame" ? "parentButton" : type === "twoplayers" ? "parentButton2" : type === "gameonline" ? "parentButton3" : "parentButton4" }>
            {/* <div className="parentStyleBtn"> */}
                <img src={src} alt=""/>
                <div className="customGame">{buttonText}</div>
        </div>
    );
}

export default Button;
