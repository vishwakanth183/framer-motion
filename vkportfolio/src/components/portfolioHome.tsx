"use client";

import React, { useLayoutEffect, useState } from "react";
import portfolioHome from "./portfolioHome.module.css";
import SelfIntro from "./selfintro/selfIntro";
import AboutMe from "./aboutme/aboutme";
import Experience from "./experience/experience";
import Skills from "./skills/skills";
import Achievement from "./achievements/achievements";
import Certification from "./certification/certification";
import { useTheme } from "next-themes";
import Projects from "./projects/projects";
import { experienceProjects } from "./projects/projectData";

const PortfolioHome = () => {
  const [onClientSide, setOnClientSide] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();
  

  useLayoutEffect(() => {
    setOnClientSide(true);
  }, []);

  if (!onClientSide) {
    return <div></div>;
  }

  return (
    // <div className="text-xl text-blue-500 dark:text-yellow-500 bg-green-400 flex h-screen items-center">hey just checking dark</div>
    <div className={`${portfolioHome.mainView} ${resolvedTheme == "dark" ? portfolioHome.darkModeView : ""}`}>
      <SelfIntro />
      <AboutMe />
      <Projects title="Experience" id="experience" currentPage="Experience" projectData={experienceProjects}/>
      {/* <Experience /> */}
      <Skills />
      <Achievement />
      <Certification />
    </div>
  );
};

export default PortfolioHome;
