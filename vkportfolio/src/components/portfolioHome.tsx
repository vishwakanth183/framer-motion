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

const PortfolioHome = () => {
  const [onClientSide, setOnClientSide] = useState<boolean>(false);

  useLayoutEffect(() => {
    setOnClientSide(true);
  }, []);

  if (!onClientSide) {
    return <div></div>;
  }

  return (
    <div className={`${portfolioHome.mainView}`}>
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
