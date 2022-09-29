import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutMeContainer = styled(motion.div)`
  max-width: 1000px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  color: ${({ theme }) => theme.color};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 0px 16px 0 rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 2em;
  display: grid;
  grid-auto-columns: minmax(200px, 1fr);
  grid-gap: 2em;
  @media (min-width: 650px) {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    grid-gap: 4em;
  }
`;
export const AboutMeText = styled(motion.p)`
  text-align: center;
  align-self: center;
  order: ${({ order }) => (order ? order : "")};
`;
export const AboutMeSVG = styled(motion.img)`
  height: auto;
  max-height: 260px;
  width: 100%;
  background: ${({ theme }) =>
    theme.color === "#ffffff" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.2)"};
  border-radius: 20px;
  object-fit: center;
  @media (min-width: 650px) {
    order: ${({ order }) => (order ? order : "")};
  }
`;
