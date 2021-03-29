import React from "react"
import styled from '@emotion/styled'
import "../styles/Animations.css"
import { TwitterShareButton, TwitterIcon } from "react-share";

const Scoreboard = (props) => {
    return (
        <ScoreWrapper>
            <h2>PUNTUACIÓN</h2>
            <Score>{props.score}</Score>
            <h2>MEJOR PUNTUACIÓN</h2>
            <Score>{props.bestScore}</Score>
            <p style={{margin: "16px 0", fontSize: "12px", fontWeight: "bold"}}>Comparte tu puntuación conmigo en Twitter</p>
            <TwitterShareButton
                url="memorify.manu-scholz.com"
                title={`He conseguido una puntuación de ${props.bestScore} en el juego de @ImScholz`}>
                <TwitterIcon size="32px" round={true} />
            </TwitterShareButton>

        </ScoreWrapper>
    )
}

export default Scoreboard;

const ScoreWrapper = styled.div`
    width: 100%;
    height: 400px;
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