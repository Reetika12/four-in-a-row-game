import React from 'react'
import './Styles/ConnectFour.css'
import Button from '../Components/Button'
import MainPage from './MainPage'
// Row component
const Row = ({ row, play, clearimg}) => {
    return (
        <tr>
            {row.map((cell, i) => <Cell key={i} value={cell} columnIndex={i} play={play} clearimg={clearimg}/>)}
        </tr>
    );
};

const Cell = ({ value, columnIndex, play, clearimg }) => {
    let color = 'white';
    let img;
    if (value === 1) {
        img = require('../Image/avatar01.png').default;
        color = 'red';
    } else if (value === 2) {
        img = require('../Image/avatar02.png').default;
        color = 'yellow';
    }

    return (
        <td>
            <div className="cell" onClick={() => { play(columnIndex) }}>
                <div className={color}>
                   {clearimg && <img style={{ width: '60px', height: '60px',borderRadius:'50%'}} src={img} alt="" />}
                </div>
            </div>
        </td>
    );
};
class ConnectFour extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            player1: 1,
            player2: 2,
            currentPlayer: null,
            board: [],
            gameOver: false,
            message: '',
            clearimg:true,
            page:'connectfour',
            enableCelebration:false
        };

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
        }]
        this.play = this.play.bind(this);
    }

    // Starts new game
    initBoard() {
        // Create a blank 8x8 matrix
        let board = [];
        for (let r = 0; r < 8; r++) {
            let row = [];
            for (let c = 0; c < 8; c++) { row.push(null) }
            board.push(row);
        }

        this.setState({
            board,
            currentPlayer: this.state.player1,
            gameOver: false,
            message: ''
        });
    }

    togglePlayer() {
        return (this.state.currentPlayer === this.state.player1) ? this.state.player2 : this.state.player1;
    }

    play(c) {
        if (!this.state.gameOver) {
            // Place piece on board
            let board = this.state.board;
            for (let r = 7; r >= 0; r--) {
                if (!board[r][c]) {
                    board[r][c] = this.state.currentPlayer;
                    break;
                }
            }
            // Check status of board
            let result = this.checkAll(board);
            if (result === this.state.player1) {
                this.setState({ board, gameOver: true, message: 'David you won game!', enableCelebration: true});
            } else if (result === this.state.player2) {
                this.setState({ board, gameOver: true, message: 'Maria you won game!', enableCelebration: true });
            } else if (result === 'draw') {
                this.setState({ board, gameOver: true, message: 'Draw game.' });
            } else {
                this.setState({ board, currentPlayer: this.togglePlayer(), clearimg:true });
            }
        } else {
            this.setState({ message: 'Game over. Please start a new game.', enableCelebration: false });
        }
    }

    checkVertical(board) {
        // Check only if row is 3 or greater
        for (let r = 3; r < 8; r++) {
            for (let c = 0; c < 8; c++) {
                if (board[r][c]) {
                    if (board[r][c] === board[r - 1][c] &&
                        board[r][c] === board[r - 2][c] &&
                        board[r][c] === board[r - 3][c]) {
                        return board[r][c];
                    }
                }
            }
        }
    }

    checkHorizontal(board) {
        // Check only if column is 3 or less
        for (let r = 0; r < 8; r++) {
            for (let c = 0; c < 4; c++) {
                if (board[r][c]) {
                    if (board[r][c] === board[r][c + 1] &&
                        board[r][c] === board[r][c + 2] &&
                        board[r][c] === board[r][c + 3]) {
                        return board[r][c];
                    }
                }
            }
        }
    }

    checkDiagonalRight(board) {
        // Check only if row is 3 or greater AND column is 3 or less
        for (let r = 3; r < 8; r++) {
            for (let c = 0; c < 4; c++) {
                if (board[r][c]) {
                    if (board[r][c] === board[r - 1][c + 1] &&
                        board[r][c] === board[r - 2][c + 2] &&
                        board[r][c] === board[r - 3][c + 3]) {
                        return board[r][c];
                    }
                }
            }
        }
    }
    onClickEvent = () => {
        this.setState({
            clearimg:false,
            enableCelebration:false
        })
        this.initBoard();
    }

    checkDiagonalLeft(board) {
        // Check only if row is 3 or greater AND column is 3 or greater
        for (let r = 3; r < 8; r++) {
            for (let c = 3; c < 8; c++) {
                if (board[r][c]) {
                    if (board[r][c] === board[r - 1][c - 1] &&
                        board[r][c] === board[r - 2][c - 2] &&
                        board[r][c] === board[r - 3][c - 3]) {
                        return board[r][c];
                    }
                }
            }
        }
    }

    checkDraw(board) {
        for (let r = 0; r < 8; r++) {
            for (let c = 0; c < 8; c++) {
                if (board[r][c] === null) {
                    return null;
                }
            }
        }
        return 'draw';
    }

    checkAll(board) {
        return this.checkVertical(board) || this.checkDiagonalRight(board) || this.checkDiagonalLeft(board) || this.checkHorizontal(board) || this.checkDraw(board);
    }

    componentWillMount() {
        this.initBoard();
    }

    renderCarditems = (cardData) => {
        let data = []
        cardData.forEach(d => {
            data.push(<div className="cardBlock" style={{ background: `${d.secondaryColor}` }}>
                <div className="circleClass" style={{ border: `20px solid ${d.color}` }}>
                    <img style={{ width: '56px' }} src={d.image} alt="" />
                </div>
                <div className="nameEmailStyle">
                    <div className="nameStyle">{d.headingName}</div>
                    <div className="headingStyle">{d.playerName}</div>
                </div>
            </div>)
        })
        return data;
    }
    nextScreen = () =>{
        this.setState({
            page:"mainpage"
        })
    }

    render() {
        let { clearimg, enableCelebration} = this.state
        return (
            <React.Fragment>
              <div className="parentDiv">
                {this.state.page ==="connectfour" && <div className="commonStyle">
                <table>
                    <thead>
                    </thead>
                    <tbody>
                        {this.state.board.map((row, i) => (<Row key={i} row={row} play={this.play} clearimg={clearimg}/>))}
                    </tbody>
                </table>
                <div className="gameSide">
                    <div className="fiveGameTournament">5 Games Tournament</div>
                    {enableCelebration && <div className="congratulation">Congratulation!</div>}
                    <div className="winner">{this.state.message}</div>
                    {this.renderCarditems(this.json)}
                    <div className="underlineStyle"></div>
                    <Button
                        buttonText="Undo Step"
                        type="undostep"
                        clickEvent={this.onClickEvent}
                    />
                    <Button
                        buttonText="End Tournament"
                        type="endtournament"
                        clickEvent={this.nextScreen}
                    />
                </div>
            </div>}
                {this.state.page ==="mainpage" && <MainPage/>}
            </div>
        </React.Fragment>
        );
    }
}

export default ConnectFour;
