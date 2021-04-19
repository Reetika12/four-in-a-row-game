import React, { Component } from 'react'
import './Styles/MainPage.css'
import Button from '../Components/Button'
import StartGameCard from './StartGameCard'
import ToastMessage from '../Components/ToastMessage';



class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'main',
            openToast: false,
            toastMsg: '',
        }
    }


    onClickEvent = () => {
        this.setState({
            openToast: true,
            toastMsg: "Coming Soon"
        })
    }
    nextScreen = () => {
        this.setState({
            page: "numplayers"
        })
    }

    handleCloseToast = () => {
        this.setState({ openToast: false, toastMsg: '' });
    };

    render() {
        let { page, openToast, toastMsg } = this.state
        return (
            <div className="ParentClass">
                {page === 'main' && <div>
                    <div className="boardStyle">
                        <img style={{ height: '100%', width: '100%' }} src={require('../Image/4inarow.png').default} alt="" />
                    </div>
                    <div className="squareBox">
                        <div className="connectFour">
                            <div className="connectFourText">Connect Four!</div>
                            <div className="connectFourBelowText">Play with other players around the world.</div>
                        </div>
                        <div className="footerStyle">
                            <div className="parentsquare">
                                <div className="playButtonStyle">
                                    <img src={require('../Image/play-3-32.png').default} alt="" />
                                    <div className="playText">
                                        PLAY
                                    </div>
                                </div>
                                <div className="underlinemainCard"></div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div className="playerButtons">
                                        <Button
                                            src={require('../Image/one.png').default}
                                            buttonText="Custom Game"
                                            type="customgame"
                                            clickEvent={this.onClickEvent}
                                        />
                                        <Button
                                            src={require('../Image/two.png').default}
                                            buttonText="Two Players"
                                            type="twoplayers"
                                            clickEvent={this.nextScreen}
                                        />
                                    </div>
                                    <div className="playerButtons">
                                        <Button
                                            src={require('../Image/online.png').default}
                                            buttonText="Game Online"
                                            type="gameonline"
                                            clickEvent={this.onClickEvent}
                                        />
                                        <Button
                                            src={require('../Image/training.png').default}
                                            buttonText="Training Game"
                                            type="traininggame"
                                            clickEvent={this.onClickEvent}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="footermain">© 2020</div>
                        </div>
                    </div>
                </div>}
                <ToastMessage
                    open={openToast}
                    handleClose={this.handleCloseToast}
                    message={toastMsg}
                />
                {page === 'numplayers' && <StartGameCard />}
            </div>

        )
    }
}

export default MainPage
