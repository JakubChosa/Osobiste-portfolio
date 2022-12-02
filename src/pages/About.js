import React from "react";
import {
  AboutMeContainer,
  AboutMeText,
  AboutMeSVG,
} from "../components/styles/AboutElements";
import { Container, PageTitle } from "../GlobalStyles";
import websiteSVG from "../assets/illustrations/website.svg";
import astronautSVG from "../assets/illustrations/astronaut.svg";
import {
  containerVariants,
  aboutVariants,
  childVariants,
} from "../components/styles/motionVariants";

export default function About() {
  return (
    <>
      <Container
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <PageTitle>O mnie</PageTitle>
        <AboutMeContainer variants={aboutVariants}>
          <AboutMeSVG src={websiteSVG} variants={childVariants} />
          <AboutMeText variants={childVariants}>
            Jestem samoukiem po technikum informatycznym. Specjalizuje się w
            front-endcie oraz znam języki programowania python/javascript,
            obecnie jestem w trakcie nauki NextJS.
          </AboutMeText>
          <AboutMeSVG src={astronautSVG} variants={childVariants} order={"4"} />
          <AboutMeText variants={childVariants}>
            Uwielbiam dowiadywać się nowych rzeczy, uczyć się nowych
            umiejętności oraz aktywnie spędzać czas. Jestem osobą, która
            analitycznie podchodzi do problemów oraz zwraca uwagę na detale.
          </AboutMeText>
        </AboutMeContainer>
      </Container>
    </>
  );
}
