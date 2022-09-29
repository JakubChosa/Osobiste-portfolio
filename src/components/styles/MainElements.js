import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const pulsingSmall = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
`;
const pulsingBig = keyframes`
    0% { transform: scale(1) translate(-50%); }
    50% { transform: scale(1.1) translate(-50%); }
    100% { transform: scale(1) translate(-50%); }
`;

export const Main = styled.main`
  position: relative;
  width: 100%;
  padding: 2em 0;
  margin-top: 3em;
  display: grid;
  gap: 3em;
  @media screen and (min-width: 650px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ClipedBackground = styled.div`
  width: 100vw;
  height: 100%;
  background: ${({ theme }) => theme.gradient};
  clip-path: polygon(50% 55%, 100% 75%, 100% 100%, 0 100%, 0 75%);
  position: absolute;
  bottom: 0px;
  z-index: -1;
  @media screen and (min-width: 650px) {
    clip-path: polygon(0 0, 35% 0, 65% 100%, 0% 100%);
  }
`;
export const LeftContentContainer = styled.div`
  align-self: center;
  text-align: center;
  border-left: 3px solid;
  border-image: ${({ theme }) => theme.borderGradient};
  border-image-slice: 1;
  margin-inline: auto;
  padding: 1em;
  flex-basis: 35%;
  @media screen and (min-width: 650px) {
    text-align: left;
    justify-self: start;
  }
`;

export const Title = styled.h1`
  font-size: clamp(1.8rem, 5vw, 3.5rem);
  color: ${({ theme }) => theme.color};
`;
export const RightContentContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  @media screen and (min-width: 650px) {
    justify-self: end;
  }
`;

export const SocialLinks = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.75em;
`;
export const SocialLink = styled.a`
  font-size: 1.2rem;
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.color};
  padding: 0.5em;
  border: 1px solid ${({ theme }) => theme.color};
  border-radius: 10px;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    color: ${({ theme }) => theme.secondary};
    background: ${({ theme }) => theme.color};
  }
`;
export const PersonalPhoto = styled(motion.img)`
  width: 200px;
  border-radius: 50px;
  @media screen and (min-width: 650px) {
    width: 250px;
  }
`;
export const CvLink = styled(motion.a)`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.color};
  padding: 0.5em 1.2em;
  width: 120px;
  border: 1px solid ${({ theme }) => theme.color};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 black;
  transition: all 0.3s ease-out;
  &:hover {
    color: ${({ theme }) => theme.secondary};
    box-shadow: inset 200px 0 0 0 ${({ theme }) => theme.color};
  }
`;
export const ProjectsLink = styled(Link)`
  align-self: start;
  max-width: 140px;
  margin-inline: auto;
  font-size: 1.1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color};
  background-image: linear-gradient(
    to right,
    rgba(250, 0, 129, 0.8),
    rgba(0, 190, 250, 0.8)
  );
  padding: 0.5em 1.25em;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color};
  cursor: pointer;
  animation: ${pulsingSmall} 3s infinite linear;
  transition: all 0.3s ease-out;
  &:hover {
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.color};
    border: 2px solid ${({ theme }) => theme.color};
    border-image: ${({ theme }) => theme.borderGradient};
    border-image-slice: 1;
  }
  @media screen and (min-width: 650px) {
    position: absolute;
    left: 50%;
    top: 100%;
    animation-name: ${pulsingBig};
  }
`;
