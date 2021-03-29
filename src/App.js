import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Gameboard from "./components/Gameboard"
import { Global, css } from '@emotion/react'

function App() {
  return (
    <>
      <Global
        styles={css`
                *,*::after,*::before {
                    box-sizing: border-box;
                    margin: 0;
                    padding:0;
                }
                
                html {
                    font-family: 'Inter', sans-serif;
                }
                body {
                    background: #f1f1f1;
                    color: #1c1c1c;
                }`
        }
      />
      <Header />
      <Gameboard />
      <Footer />
    </>
  );
}

export default App;
