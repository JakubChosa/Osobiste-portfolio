import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/styles/theme";
import { GlobalStyles } from "./GlobalStyles";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const [darkModeOn, setDarkModeOn] = useState(false);
  const toggleTheme = () => {
    setDarkModeOn((prevTheme) => !prevTheme);
  };
  const theme = darkModeOn ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Navbar toggleTheme={toggleTheme} darkModeOn={darkModeOn} />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/Osobiste-portfolio" element={<Main />} />
            <Route path="/Osobiste-portfolio/about" element={<About />} />
            <Route path="/Osobiste-portfolio/projects" element={<Projects />} />
            <Route
              path="/Osobiste-portfolio/contact"
              element={<Contact darkModeOn={darkModeOn} />}
            />
            <Route path="/*" element={<Contact darkModeOn={darkModeOn} />} />
          </Routes>
        </AnimatePresence>
      </>
    </ThemeProvider>
  );
}

export default App;
