"use client";

import { Box } from "@mui/material";
import Home from "./component/Home";
import InfoSection from "./component/InfoSection";
import AboutMe from "./component/AboutMe";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Portfolio from "./component/Portfolio";

export default function Page() {
  return (
    <Box>
      <Home />
      <InfoSection />
      <Box id="about-me">
        <AboutMe />
      </Box>
      <Box id="skills">
        <Skills />
      </Box>
      <Box id="portfolio">
        <Portfolio />
      </Box>
      <Box id="contact">
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
}
