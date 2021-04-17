import React, { Component } from 'react'
import './Styles/MainPage.css'
import Button from '../Components/Button'

class MainPage extends Component {

    render() {
        return (
            <div className="ParentClass">
                <div className="boardStyle">
                    <img style={{ height: '100%', width: '100%' }} src={require('../Image/4inarow.png').default} alt="" />
                </div>
                <div className="squareBox">
                    <div className="connectFour">
                        <div className="connectFourText">Connect Four!</div>
                        <div className="connectFourBelowText">Play with other players around the world.</div>
                    </div>
                    <div className="parentsquare">
                        <div className="playButtonStyle">
                            <img src={require('../Image/play-3-32.png').default} alt="" />
                            <div className="playText">
                                PLAY
                        </div>
                     </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'flex-end',marginRight:'100px'}}>
                           <div style={{display:'flex',flexDirection:'row', padding:'10px 10px'}}>
                                <Button
                                    src={require('../Image/one.png').default}
                                    buttonText="Custom Game"
                                    type="customgame"
                                />
                                <Button
                                    src={require('../Image/two.png').default}
                                    buttonText="Two Players"
                                    type="twoplayers"
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', padding: '10px 10px' }}>
                                <Button
                                    src={require('../Image/online.png').default}
                                    buttonText="Game Online"
                                    type="gameonline"
                                />
                                <Button
                                    src={require('../Image/training.png').default}
                                    buttonText="Training Game"
                                    type="traininggame"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage
