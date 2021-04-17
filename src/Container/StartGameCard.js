import React, { Component } from 'react'
import './Styles/MainPage.css'
import Button from '../Components/Button'

class StartGameCard extends Component {
    constructor(props) {
        super(props);
        this.json = [{
            "image": require('../Image/man.svg').default,
            "color": '#37AC5D',
            "secondaryColor": "#DCF6E4",
            "playerName": "David",
            "headingName": "Player 01"
        },
        {
            "image": require('../Image/woman.svg').default,
            "color": "#F8D146",
            "secondaryColor": "#F6EFD5",
            "playerName": "Maria",
            "headingName": "Player 02"
        },
        {
            "image": require('../Image/winner.png').default,
            "color": "#B1C4F9",
            "secondaryColor": "#EFF3FF",
            "playerName": "5 Games",
            "headingName": "Number of game"
        },
        {
            "image": require('../Image/run.png').default,
            "color": "#B1C4F9",
            "secondaryColor": "#EFF3FF",
            "playerName": "Alternative turn",
            "headingName": "Who starts"
        }]
    }

    renderCarditems = (cardData) => {
        let data = []
        cardData.forEach(d => {
            data.push(<div className="cardBlock" style={{ background: `${d.secondaryColor}` }}>
                <div className="circleClass" style={{ border: `20px solid ${d.color}` }}>
                    <img style={{ width: '56px'}} src={d.image} alt="" />
                </div>
                <div className="nameEmailStyle">
                    <div className="nameStyle">{d.headingName}</div>
                    <div className="headingStyle">{d.playerName}</div>
                </div>
            </div>)
        })
        return data;
    }

    render() {
        return (
            <div className="startGameParent" >
                <div className="startGameCard">
                    {this.renderCarditems(this.json)}
                    <Button 
                        buttonText="Start Game"
                        type="startGame"
                    />
                </div>
            </div>
        )
    }
}

export default StartGameCard
