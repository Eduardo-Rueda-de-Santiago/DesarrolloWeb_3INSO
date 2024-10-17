import ScoreKeeper from "./ScoreKeeper";
import Board from "./Board";

const {useState} = require('react');

function Pong() {

    const [score, setScore] = useState(
        {
            player1: 0,
            player2: 0
        }
    );

    const addPoints = (pointsToAdd) => {
        setScore(prevScore => ({
            player1: prevScore.player1 + pointsToAdd.player1,
            player2: prevScore.player2 + pointsToAdd.player2
        }));
    }

    return (
        <div>
            <ScoreKeeper score={score}/>
            <Board addPoints={addPoints}/>
        </div>
    );
    
}

export default Pong;