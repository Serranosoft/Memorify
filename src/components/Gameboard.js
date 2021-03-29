import React, { useEffect, useState } from "react"
import Cardboard from "./Cardboard"
import Scoreboard from "./Scoreboard";
import styled from '@emotion/styled'

const Gameboard = () => {

    let storage = window.localStorage;
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(() => {
        const stickyValue = storage.getItem("bs");
        return stickyValue !== "null" || stickyValue === 0 ? JSON.parse(stickyValue) : 0
    });
    const [reset, setReset] = useState(false)
    const [win, setWin] = useState(false)
    const [lose, setLose] = useState(false);


    function incrementScore() {
        setScore(score + 1);
        setReset(false);
    }


    function finishGame() {
        setScore(0)
        setReset(true)
        setLose(true)
    }

    function replay() {
        setWin(false);
        setLose(false);

    }

    // Check if user wins every time score up
    useEffect(() => {
        if (score === 15) {
            setWin(true)
            finishGame();
        }
        if(score > bestScore) {
            setBestScore(score)
        }
    }, [score, bestScore])

    useEffect(() => {
        storage.setItem("bs", bestScore)
    }, [bestScore])

    return (
        <Gametable>
            <Cardboard
                incrementScore={incrementScore}
                finishGame={finishGame}
                replay={replay}
                reset={reset}
                win={win}
                lose={lose} />
            <Scoreboard score={score} bestScore={bestScore} />
        </Gametable>
    )
}

export default Gameboard

const Gametable = styled.div`
    width: 97%;
    display: grid;
    grid-template-columns: 4fr 1fr;
    gap: 16px;
    margin: 16px auto;

`