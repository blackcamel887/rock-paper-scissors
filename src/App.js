import './App.css';
import Choices from './Choices';
import Score from './Score';
import { useState } from "react";
function App() {
  let [userScore,setUserScore] = useState(0);//the state for user's score
  let [botScore,setBotScore] = useState(0);//the state for bot's score
  let [gameState,setGameState] = useState('default');//the state for the state of the game, initallized as the default state
  return (
    <div className="App">
      <div className = 'Top-half'>
        <Score region='top-score' name = 'Player' score={userScore} ></Score>
        <Choices state = {gameState}></Choices>
      </div>

      <div className = 'Bottom-half' >
        <Score region='bottom-score' name = 'Bot' score={botScore}></Score>
        <Choices state = {gameState}></Choices>
      </div>
    </div>
  );
}

export default App;
