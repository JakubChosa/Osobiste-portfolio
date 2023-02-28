import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Nav = styled(motion.nav)`
  width: 100%;
  max-width: 650px;
  height: 90px;
  background: ${({ dark }) =>
    dark === "true" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)"};
  backdrop-filter: blur(40px);
  margin-inline: auto;
  padding-inline: 1em;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 50%;
  top: 0px;
  z-index: 2;
  @media (min-width: 650px) {
    height: 70px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    top: 5px;
    border-radius: 10px;
  }
`;
export const NavLogo = styled(motion.h3)`
  font-size: 1.6rem;
  font-family: "Pacifico", cursive;
  color: ${({ theme }) => theme.color};
  margin-right: 2em;
`;
export const HomeButton = styled(motion.p)`
  font-size: 1.1rem;
  background: ${({ dark }) =>
    dark === "true" ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.3)"};
  color: ${({ theme }) => theme.color};
  padding: 0.5em;
  border-radius: 10px;
  display: grid;
  place-items: center;
  position: absolute;
  left: 50%;
  top: 10px;
  transform: translate(-50%);
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    font-size: 1.2rem;
    box-shadow: 0px 0px 5px ${({ theme }) => theme.color};
  }
  @media (min-width: 650px) {
    position: relative;
    left: 20px;
    top: 0px;
    transform: translate(0);
  }
`;

export const NavMenu = styled(motion.ul)`
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  @media (min-width: 650px) {
    margin: 0;
  }
`;
export const NavMenuItem = styled.li`
  display: grid;
  place-items: center;
`;
export const NavMenuLink = styled(Link)`
  font-size: clamp(1rem, 4vw, 1.2rem);
  font-family: "Lato", sans-serif;
  font-weight: bold;
  color: ${({ theme }) => theme.color};
  padding: 0.4em 0.7em;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.06);
  }
`;
export const ToggleThemeContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 1em;
  @media (min-width: 650px) {
    position: static;
  }
`;
export const ThemeButton = styled.div`
  height: 30px;
  width: 60px;
  background-color: #999999;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
`;
export const ToggleInnerCircle = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.color};
  border-radius: 50%;
  position: absolute;
  right: ${({ dark }) => (dark === "true" ? "0px" : "")};
  transition: all 1000ms;
`;
export const ThemeMode = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.color};
  display: grid;
`;
