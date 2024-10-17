import {useState, useEffect} from "react";

import Ball from "./Ball";
import Paddle from "./Paddle";

function Board({addPoints}) {

    const [movementVector, setMovementVector] = useState({x: 1, y: 1});
    const [speed, setSpeed] = useState(1);
    const [ballPosition, setBallPosition] = useState({x: 50, y: 100});
    const [playerPaddlePosition, setPlayerPaddlePosition] = useState({x: 70, y: 0});
    const [botPaddlePosition, setBotPaddlePosition] = useState({x: 70, y: 300});

    const moveBall = () => {
        const newMoveVector = {...movementVector};
        if (ballPosition.x < 0 || ballPosition.x > 170) {
            if (ballPosition.x < 0) {
                const newPosition = {...ballPosition};
                newPosition.x = 5;
                setBallPosition(newPosition);
            } else if (ballPosition.x > 170) {
                const newPosition = {...ballPosition};
                newPosition.x = 160;
                setBallPosition(newPosition);
            }
            newMoveVector.x = -movementVector.x;
        }
        if (ballPosition.y < 0 || ballPosition.y > 100) {
            newMoveVector.y = -movementVector.y;
        }
        setMovementVector(newMoveVector);

        const newPosition = {...ballPosition};
        newPosition.x += movementVector.x * speed;
        newPosition.y += movementVector.y * speed;
        setBallPosition(newPosition);
    }

    useEffect(() => {
        const interval = setInterval(() => moveBall(), 50);
        return () => clearInterval(interval);
    }, [ballPosition]);

    return (
        <div id="board" style={{
            backgroundColor: 'blue',
            position: 'relative',
            border: 'black, 1px, solid',
            width: '20vw',
            height: '30vh'
        }}>
            <Ball position={ballPosition}/>
            <Paddle position={playerPaddlePosition}/>
            <Paddle position={botPaddlePosition}/>
        </div>
    );
}

export default Board;