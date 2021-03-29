import React, { useState, useEffect } from "react"
import styled from '@emotion/styled'

const Card = (props) => {
    const [played, setPlayed] = useState(false);

    const play = () => {
        setPlayed(!played);

        if (played) {
            props.finishGame();
        } else {
            props.incrementScore();
        }
        props.cardPlayed();
    };

    useEffect(() => {
        if (props.reset) {
            setPlayed(false)
        }
    }, [props.reset])

    return (
        <CardModel onClick={play}>
            <CardImg image={props.image} />
            <CardTitle>{props.name}</CardTitle>
        </CardModel>
    )
}

export default Card

const CardModel = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FC6D0A;
    border: 1px solid black;
    cursor: pointer;
    filter: contrast(75%);
    &:hover {
        filter: contrast(100%);
    }
`

const CardImg = styled.img({
    width: "100%",
    height: "250px",
    flex: "5 0 auto",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",

}, props => ({ backgroundImage: `url(${props.image})` }))

const CardTitle = styled.h3`
width: 100%;
height: 100%;
padding: 8px;
color: black;
text-align: center;
align-self: center;
flex: 1 9 auto;
border-top: 1px solid black;
text-transform: Capitalize;
`