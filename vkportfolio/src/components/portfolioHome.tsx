"use client";

import React, { useLayoutEffect, useState } from "react";
import portfolioHome from "./portfolioHome.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import SelfIntro from "./selfintro/selfIntro";
import AboutMe from "./aboutme/aboutme";
import Experience from "./experience/experience";
import Skills from "./skills/skills";
import Achievement from "./achievements/achievements";
import Certification from "./certification/certification";
import { useTheme } from "next-themes";

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
      <Experience />
      <Skills />
      <Achievement />
      <Certification />
    </div>
  );
};

export default PortfolioHome;
