import React, { Component } from 'react'
import './Styles/MainPage.css'
import Button from '../Components/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core';


const CustomRadio = withStyles({
    root: {
        color: '#4B7BFF',
        '&$checked': {
            color: '#4B7BFF'
        }
    },
    checked: {}
})((props) => <Radio color="default" {...props} />);

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogOpen: false,
            page: 'main',
            selectedValue: ''
        }
    }
    handleDialogOpen = () => {
        this.setState({ dialogOpen: true });
    };

    handleClose = () => {
        this.setState({ dialogOpen: false });
    };

    handleChangeForGame = (event) => {
        this.setState({
            selectedValue: event.target.value,
        });
    };

    onClickEvent = () => {
        this.setState({
            dialogOpen: true
        })
    }

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
                                <div style={{ display: 'flex', flexDirection: 'row', padding: '10px 10px' }}>
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
                        <div className="footermain">© 2020</div>
                    </div>
                </div>
                <Dialog
                    open={this.state.dialogOpen}
                    onClose={this.handleClose}
                    aria-labelledby="max-width-dialog-title"
                >
                    <div style={{ display: 'flex', flexDirection: 'column', padding: '30px 30px' }}>
                        <div className="numberOfGame">Number of game</div>
                        <RadioGroup aria-label="gender" name="gender1" value={this.state.selectedValue} onChange={this.handleChangeForGame}>
                            <FormControlLabel className="singleBox"  value="games2" control={<CustomRadio />} label="2 Games" />
                            <FormControlLabel className="singleBox"  value="games3" control={<CustomRadio />} label="3 Games" />
                            <FormControlLabel className="singleBox"  value="games5" control={<CustomRadio />} label="5 Games" />
                            <FormControlLabel className="singleBox"  value="games10" control={<CustomRadio />} label="10 Games" />
                        </RadioGroup>
                        <div className="underlineStyle"></div>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Button
                                buttonText="CANCEL"
                                type="cancel"
                            />
                            <Button
                                buttonText="OK"
                                type="OK"
                            />
                        </div>
                    </div>
                </Dialog>
            </div>
        )
    }
}

export default MainPage
