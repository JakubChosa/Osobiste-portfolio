import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const floating = keyframes`
  0% { transform: translate(0,  0px); }
  67%  { transform: translate(0, 30px); }
  80%   { transform: rotate(0); }
  85%   { transform: rotate(10deg); }
  90%   { transform: rotate(-20deg); }
  95%   { transform: rotate(10deg); }
  100%   { transform: translate(0, -0px); }
`;

export const SVGBackground = styled.div`
  width: 100vw;
  height: 100%;
  background-image: url(${({ url }) => url});
  background-size: cover;
  position: absolute;
  bottom: 0px;
  z-index: -1;
`;

export const FormSection = styled(motion.div)`
  width: clamp(250px, 100%, 600px);
  padding: 1em;
  background: ${({ theme }) => theme.secondary};
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-self: center;
  position: relative;
`;
export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  grid-gap: 0.5em;
  padding: 1em 0;
  @media (min-width: 650px) {
    grid-template-column: repeat(2, 300px);
  }
`;

export const ContactSubtitle = styled.h3`
  text-align: center;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color};
  margin-bottom: 1rem;
`;
export const ContactLabel = styled.label`
  justify-self: center;
  width: 100%;
  max-width: ${({ spanSize }) => (spanSize === "small" ? "255px" : "400px")};
  color: ${({ theme }) => theme.color};
  font-size: 1.1rem;
  font-weight: bolder;
  display: block;
  @media (min-width: 650px) {
    text-align: ${({ spanSize }) => (spanSize === "small" ? "left" : "center")};
    grid-column: ${({ spanSize }) =>
      spanSize === "small" ? "1 / 2" : "span 2"};
    max-width: 100%;
  }
`;
export const ContactInput = styled.input`
  width: 100%;
  max-width: 260px;
  padding: 0.5em;
  margin: 0.6em 0;
  border: none;
  border-radius: 5px;
`;
export const ContactTextarea = styled.textarea`
  align-self: center;
  width: 100%;
  max-width: 500px;
  min-height: 100px;
  padding: 0.5em;
  margin: 0.6em 0;
  border: none;
  border-radius: 5px;
`;

export const ContactSubmit = styled.button`
  justify-self: center;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  background: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.primary};
  padding: 0.5em 1.2em;
  width: 120px;
  border: 1px solid ${({ theme }) => theme.color};
  border-radius: 10px;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 black;
  transition: all 0.3s ease-out;
  &:hover {
    color: ${({ theme }) => theme.color};
    box-shadow: inset 200px 0 0 0 ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.color};
  }
  @media (min-width: 650px) {
    grid-column: span 2;
  }
`;
export const EmailIcon = styled.div`
  visibility: hidden;
  font-size: 8em;
  color: ${({ theme }) => theme.color};
  position: absolute;
  top: 100px;
  right: 70px;
  z-index: 1;
  animation: ${floating} 5s infinite ease-out;
  @media (min-width: 650px) {
    visibility: visible;
  }
`;
