import React from "react";
import MyPhoto from "../assets/me.jpg";
import {
  ClipedBackground,
  Main,
  LeftContentContainer,
  Title,
  RightContentContainer,
  SocialLinks,
  SocialLink,
  PersonalPhoto,
  CvLink,
  ProjectsLink,
} from "../components/styles/MainElements";
import { Container } from "../GlobalStyles";
import { FaLinkedinIn, FaGithub, FaRegFileAlt } from "react-icons/fa";
import cv from "../assets/CV.pdf";
import {
  containerVariants,
  imgVariants,
  childVariants,
} from "../components/styles/motionVariants";

export default function Header() {
  return (
    <>
      <Container
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <ClipedBackground />
        <Main>
          <LeftContentContainer>
            <Title>
              Kuba Chosa <br />
              Full-Stack Developer
            </Title>
          </LeftContentContainer>

          <ProjectsLink to="/Osobiste-portfolio/projects">
            Projekty
          </ProjectsLink>

          <RightContentContainer>
            <SocialLinks variants={childVariants}>
              <SocialLink
                href="https://www.linkedin.com/in/jakub-chosa-78bb33201/"
                target="_blank"
              >
                <FaLinkedinIn />
              </SocialLink>
              <SocialLink href="https://github.com/JakubChosa" target="_blank">
                <FaGithub />
              </SocialLink>
            </SocialLinks>
            <PersonalPhoto src={MyPhoto} variants={imgVariants} />
            <CvLink variants={childVariants} href={cv} target="_blank">
              CV <FaRegFileAlt style={{ marginLeft: "0.5rem" }} />
            </CvLink>
          </RightContentContainer>
        </Main>
      </Container>
    </>
  );
}
