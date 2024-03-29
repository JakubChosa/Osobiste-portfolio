import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  projectTemplateVariants,
  projectTemplateBtnVariants,
} from "../components/styles/motionVariants";

const ProjectContainer = styled(motion.div)`
  background: transparent;
  padding: 15px;
  border: 2px solid ${({ theme }) => theme.color};
  border-image: ${({ theme }) => theme.borderGradient};
  border-image-slice: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
  position: relative;
  overflow: hidden;
  &:after {
    content: "";
    width: 100%;
    height: 50%;
    position: absolute;
    top: -100%;
    z-index: 2;
    transition: all 0.4s;
  }
  &:before {
    content: "";
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: -100%;
    z-index: 2;
    transition: all 0.4s;
  }
  &:hover {
    &:after {
      top: 0;
      background: ${({ theme }) =>
        theme.color === "#ffffff"
          ? "rgba(255,255,255,0.6)"
          : "rgba(0,0,0,0.6)"};
    }
    &:before {
      bottom: 0;
      background: ${({ theme }) =>
        theme.color === "#ffffff"
          ? "rgba(255,255,255,0.6)"
          : "rgba(0,0,0,0.6)"};
    }
  }
`;
const ProjectBlurEffect = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: ${({ theme }) =>
    theme.color === "#ffffff" ? "rgba(255,255,255, 0.1)" : "rgba(0,0,0,0.1)"};
  filter: blur(10px);
  z-index: -1;
`;
const ProjectImg = styled.img`
  width: 260px;
  height: auto;
  object-fit: scale-down;
  border-radius: 5px;
`;
const ProjectName = styled.h3`
  font-size: 1.1rem;
  text-align: center;
  color: ${({ theme }) => theme.color};
`;
const ProjectStack = styled.div`
  color: ${({ theme }) => theme.color};
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  padding-inline: 0.5rem;
`;
const ProjectButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;
const ProjectBtn = styled(motion.a)`
  width: 160px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.primary};
  padding: 0.7em 1.5em;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    box-shadow: 0px 0px 7px ${({ theme }) => theme.primary};
  }
`;
const RenderAlert = styled.div`
  position: absolute;
  top: 5px;
  left: 50%;
  translate: -50% 0;
  z-index: 50;
  background: white;
  padding: 0.5rem;
  border-radius: 5px;
  text-align: center;
  opacity: 0.9;
`;

const ProjectTemplate = ({ src, name, index, code, link, stack }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ProjectContainer
      variants={projectTemplateVariants}
      transition={{ type: "spring", delay: index * 0.15, duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ProjectBlurEffect />
      {name === "Ecommerce Shop" && isHovered && (
        <RenderAlert>może się ładować do 30s, wolne serwery.</RenderAlert>
      )}
      <ProjectImg src={src} />
      <ProjectName>{name}</ProjectName>
      {isHovered && (
        <ProjectButtons>
          <ProjectBtn
            href={link}
            target="_blank"
            variants={projectTemplateBtnVariants}
          >
            {name === "Ecommerce Shop" ? "Render Live" : "Github Live"}
          </ProjectBtn>
          <ProjectBtn
            href={code}
            target="_blank"
            variants={projectTemplateBtnVariants}
          >
            Github Code
          </ProjectBtn>
        </ProjectButtons>
      )}
      <ProjectStack>{stack?.join(" / ")}</ProjectStack>
    </ProjectContainer>
  );
};

export default ProjectTemplate;
