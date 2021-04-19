import './App.css';
import MainPage from './Container/MainPage'
import StartGameCard from './Container/StartGameCard'
// import TournaMentPage from './Container/TournaMentPage'
import ConnectFour from './Container/ConnectFour'

function App() {
  return (
    <div className="App">
      {/* <StartGameCard /> */}
      {/* <MainPage/> */}
      {/* <TournaMentPage/> */}
      <ConnectFour/>
    </div>
  );
}

export default App;
