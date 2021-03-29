import React from "react"
import styled from '@emotion/styled'
import "../styles/Animations.css"

const Scoreboard = (props) => {
    return (
        <ScoreWrapper>
            <h2>PUNTUACIÓN</h2>
            <Score>{props.score}</Score>
            <h2>MEJOR PUNTUACIÓN</h2>
            <Score>{props.bestScore}</Score>
        </ScoreWrapper>
    )
}

export default Scoreboard;

const ScoreWrapper = styled.div`
    width: 100%;
    height: 350px;
    position: sticky;
    top: 0;
    background-color: #34495A;
    text-align: center;
    border: 3px solid #20252D;
    border-radius: 15px;
    margin-top: 48px;
    & > h2 {
        margin-top: 32px;
    }

`

const Score = styled.h2`
    font-size: 35px;
    text-decoration: underline;

`