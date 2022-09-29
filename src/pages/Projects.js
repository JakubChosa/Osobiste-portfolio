import React from "react";
import { ProjectsGrid } from "../components/styles/ProjectElements";
import ProjectTemplate from "../components/ProjectTemplate";
import { Container, PageTitle } from "../GlobalStyles";
import { projectsData } from "../projectsData";
import { containerVariants } from "../components/styles/motionVariants";

export default function Projects() {
  const projectsList = projectsData.map((project, i) => (
    <ProjectTemplate
      src={project.src}
      key={project.id}
      name={project.name}
      link={project.link}
      code={project.code}
      index={i}
    />
  ));
  return (
    <>
      <Container
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <PageTitle>Projekty</PageTitle>
        <ProjectsGrid>{projectsList}</ProjectsGrid>
      </Container>
    </>
  );
}
