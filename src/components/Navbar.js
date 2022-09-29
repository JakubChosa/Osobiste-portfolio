import React from "react";
import {
  Nav,
  NavLogo,
  HomeButton,
  NavMenu,
  NavMenuItem,
  NavMenuLink,
  ToggleThemeContainer,
  ThemeButton,
  ToggleInnerCircle,
  ThemeMode,
} from "./styles/NavbarElements";
import { BiSun, BiMoon } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import { navbarVariants, childVariants } from "./styles/motionVariants";

export default function Navbar({ darkModeOn, toggleTheme }) {
  return (
    <Nav
      dark={darkModeOn ? "true" : "false"}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <NavLogo variants={childVariants}>JC</NavLogo>
      <Link to="/Osobiste-portfolio">
        <HomeButton
          dark={darkModeOn ? "true" : "false"}
          variants={childVariants}
        >
          <HiHome />
        </HomeButton>
      </Link>
      <NavMenu variants={childVariants}>
        <NavMenuItem>
          <NavMenuLink to="/Osobiste-portfolio/about">O mnie</NavMenuLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavMenuLink to="/Osobiste-portfolio/projects">Projekty</NavMenuLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavMenuLink to="/Osobiste-portfolio/contact">Kontakt</NavMenuLink>
        </NavMenuItem>
      </NavMenu>

      <ToggleThemeContainer variants={childVariants}>
        <ThemeMode>
          <BiSun />
        </ThemeMode>
        <ThemeButton onClick={toggleTheme}>
          <ToggleInnerCircle
            dark={darkModeOn ? "true" : "false"}
          ></ToggleInnerCircle>
        </ThemeButton>
        <ThemeMode>
          <BiMoon />
        </ThemeMode>
      </ToggleThemeContainer>
    </Nav>
  );
}
