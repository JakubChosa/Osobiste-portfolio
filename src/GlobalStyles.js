import styled, { createGlobalStyle} from "styled-components"
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  width: 100%;
  max-width: 1100px;
  min-height: 100vh;
  margin-inline: auto;
  padding: 2em;
  padding-top: calc(2em + 90px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  position: relative;
  @media(min-width: 650px){
    min-height: 100vh;
    padding-top: calc(2em + 70px);
  }
`

export const PageTitle = styled.h2`
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  font-family: 'Pacifico', sans-serif;
  font-weight: 300;
  color: ${({theme}) => theme.color};
  padding-inline: 0.5em;
  margin: 1em auto;
  border-left: 3px solid;
  border-image: linear-gradient(to bottom, rgba(250, 0, 129, 0.8), rgba(0, 190, 250, 0.8));
  border-image-slice: 1;
`

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Nunito', sans-serif;
    overflow-x: hidden;
    background: ${ ({theme}) => theme.primary};
    // display: flex;
    // flex-direction: column;
  }
  img {
    max-width: 100%;
    display: block;
    object-fit: cover;
  }
  a{
    text-decoration: none;
  }
  li{
    list-style:none;
  }
`
