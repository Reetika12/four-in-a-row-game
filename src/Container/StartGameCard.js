import React, { Component } from 'react'
import './Styles/MainPage.css'
import Button from '../Components/Button'
import Dialog from '@material-ui/core/Dialog';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core';
import ConnectFour from './ConnectFour'
import ToastMessage from '../Components/ToastMessage';

const CustomRadio = withStyles({
    root: {
        color: '#4B7BFF',
        '&$checked': {
            color: '#4B7BFF'
        }
    },
    checked: {}
})((props) => <Radio color="default" {...props} />);

class StartGameCard extends Component {
    constructor(props) {
        super(props);
        this.json = [{
            "image": require('../Image/avatar01.png').default,
            "color": '#37AC5D',
            "secondaryColor": "#DCF6E4",
            "playerName": "David",
            "headingName": "Player 01"
        },
        {
            "image": require('../Image/avatar02.png').default,
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
        this.state={
            dialogOpen: false,
            startDialog: false,
            selectedValue: '',
            page:"startGame",
            openToast: false,
            toastMsg: '',
            selectedValue2:''
        }
    }

    dialogOpenCard = () => {
        this.setState({
            dialogOpen: true
        })
    }

    handleClose = () => {
        this.setState({ dialogOpen: false });
    };

    handleCloseToast = () => {
        this.setState({ openToast: false, toastMsg: '' });
    };

    handleAnotherDialog = () =>{
        let {selectedValue} = this.state
        if (!selectedValue)
        {
            this.setState({
                openToast: true,
                toastMsg: "please select one of the option"
            })
        }
        else{
            this.setState({
                startDialog: true
            })
        }
    }

    handleChangeForGame = (event) => {
        this.setState({
            selectedValue: event.target.value,
        });
    };
    handleCloseStart = () => {
        this.setState({
            startDialog: false
         });
    }
    openGamePage = () => {
        let { selectedValue2 } = this.state

        if (!selectedValue2) {
            this.setState({
                openToast: true,
                toastMsg: "please select one of the option"
            })
        }
        else{
            this.setState({
                page: "gameCard",
                startDialog: false,
                dialogOpen: false
            })
        }
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
    handleChangeForGameNo = (event) =>{
        this.setState({
            selectedValue2: event.target.value,
        });
    }

    render() {
        let { openToast,toastMsg} = this.state
        return (
            <div className="startGameParent" >
                {this.state.page ==="startGame" && <div className="startGameCard">
                    {this.renderCarditems(this.json)}
                    <Button 
                        buttonText="Start Game"
                        type="startGame"
                        clickEvent={this.dialogOpenCard}
                    />
                </div>}
                <Dialog
                    open={this.state.dialogOpen}
                    onClose={this.handleClose}
                    aria-labelledby="max-width-dialog-title"
                >
                    <div className="dialogStyle">
                        <div className="numberOfGame">Number of game</div>
                        <RadioGroup aria-label="control" name="control1" value={this.state.selectedValue} onChange={this.handleChangeForGame}>
                            <FormControlLabel style={{marginLeft:'0px'}} className="singleBox" value="games2" control={<CustomRadio />} label="2 Games" />
                            <FormControlLabel style={{ marginLeft: '0px'}} className="singleBox" value="games3" control={<CustomRadio />} label="3 Games" />
                            <FormControlLabel style={{ marginLeft: '0px' }} className="singleBox" value="games5" control={<CustomRadio />} label="5 Games" />
                            <FormControlLabel style={{ marginLeft: '0px' }} className="singleBox" value="games10" control={<CustomRadio />} label="10 Games" />
                        </RadioGroup>
                        <div className="underlineStyle"></div>
                        <div className="cancelOkStyle">
                            <Button
                                buttonText="CANCEL"
                                type="cancel"
                                clickEvent={this.handleClose}
                            />
                            <Button
                                buttonText="OK"
                                type="OK"
                                clickEvent={this.handleAnotherDialog}
                            />
                        </div>
                    </div>
                </Dialog>
                <Dialog
                    open={this.state.startDialog}
                    onClose={this.handleClose}
                    aria-labelledby="max-width-dialog-title"
                >
                    <div className="dialogStyle">
                        <div className="numberOfGame">Who Starts</div>
                        <RadioGroup aria-label="control" name="control2" value={this.state.selectedValue2} onChange={this.handleChangeForGameNo}>
                            <FormControlLabel style={{ marginLeft: '0px' }} className="singleBox" value="alternativeTurn" control={<CustomRadio />} label="Alternative turn" />
                            <FormControlLabel style={{ marginLeft: '0px' }} className="singleBox" value="LooserFirst" control={<CustomRadio />} label="Looser first" />
                            <FormControlLabel style={{ marginLeft: '0px' }} className="singleBox" value="WinnerFirst" control={<CustomRadio />} label="Winner first" />
                            <FormControlLabel style={{ marginLeft: '0px' }} className="singleBox" value="AlwaysFirst" control={<CustomRadio />} label="Always Player 01" />
                            <FormControlLabel style={{ marginLeft: '0px' }} className="singleBox" value="AlwaysSecond" control={<CustomRadio />} label="Always Player 02" />
                        </RadioGroup>
                        <div className="underlineStyle"></div>
                        <div className="cancelOkStyle">
                            <Button
                                buttonText="CANCEL"
                                type="cancel"
                                clickEvent={this.handleCloseStart}
                            />
                            <Button
                                buttonText="OK"
                                type="OK"
                                clickEvent={this.openGamePage}
                            />
                        </div>
                    </div>
                </Dialog>
                <ToastMessage
                    open={openToast}
                    handleClose={this.handleCloseToast}
                    message={toastMsg}
                />
                {this.state.page === "gameCard" && <ConnectFour/>}
            </div>
        )
    }
}

export default StartGameCard
