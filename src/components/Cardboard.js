import React, { useState } from "react"
import Card from "./Card";
import styled from '@emotion/styled'
import test from "../images/test.gif"
import test2 from "../images/test2.gif"
import cardsArray from "../resources/cardsArray"
import { TwitterShareButton, TwitterIcon } from "react-share";

const Cardboard = (props) => {
    const [cards, shuffleCards] = useState(shuffleArray(cardsArray()))

    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    function cardPlayed() {
        shuffleCards([...shuffleArray(cards)])
    }

    function renderSwitch() {
        if (props.win) {
            return (
                <WinScreen>
                    <h1>HAS GANADO</h1>
                    <GifWinner src={test} />
                    <p style={{margin: "16px 0", fontSize: "12px", fontWeight: "bold"}}>Comparte tu puntuación conmigo en Twitter</p>
                    <TwitterShareButton
                        url="memorify.manu-scholz.com"
                        title={`He conseguido la máxima puntuación en el juego de @ImScholz`}>
                        <TwitterIcon size="32px" round={true} />
                    </TwitterShareButton>
                    <ReplayButton onClick={() => { shuffleCards(cardsArray()); props.replay() }}>VOLVER A JUGAR</ReplayButton>
                </WinScreen>
            )
        } else if (props.lose) {
            return (
                <WinScreen>
                    <h1>HAS PERDIDO</h1>
                    <GifWinner src={test2} />
                    <ReplayButton onClick={props.replay}>VOLVER A JUGAR</ReplayButton>
                </WinScreen>
            )
        } else {
            return (
                <CardsWrapper>
                    {cards.map(el => {
                        return (
                            <Card
                                key={el.id}
                                image={el.image}
                                name={el.name}
                                shuffleCards={shuffleCards}
                                cardPlayed={cardPlayed}
                                incrementScore={props.incrementScore}
                                finishGame={props.finishGame}
                                reset={props.reset} />
                        )
                    })}

                </CardsWrapper>

            )
        }
    }

    return (
        <>
            {renderSwitch()}
        </>
    )
}

export default Cardboard

const CardsWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    text-align: center;

    @media(max-width: 650px) {
        grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
        gap: 8px
    }
`

const WinScreen = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 5px dashed black;
    margin: 0 auto;
`

const GifWinner = styled.img`
    width: 550px;
    height: 350px;
    margin: 16px 0;

    @media(max-width: 768px) {
        width: 350px;
        height: 200px;
    }

    @media(max-width: 480px) {
        width: 150px;
        height: 70px;
    }
`

const ReplayButton = styled.button`
    padding: 8px 24px;
    background: transparent;
    border: 3px solid black;
    margin: 16px 0;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        background: black;
        color: white;
    }
`