"use client"

import React from "react";
import { decriptionContent } from "../../shared/contents/description";
import aboutusStyle from "./aboutme.module.css";
import { useTheme } from "next-themes";

const AboutMe = () => {

  const { setTheme, resolvedTheme } = useTheme();

  return (
    <div className={`${aboutusStyle.aboutusView}`}>
      <span className={`${aboutusStyle.aboutusTitle} ${resolvedTheme == "dark" ? aboutusStyle.titleDark : ""}`}>About Me</span>
      <div className={`${aboutusStyle.aboutmeCard} ${resolvedTheme == "dark" ? aboutusStyle.titleDark : ""}`}>
        {decriptionContent.split("\n").map((line, index) => (
          <span key={index} className={aboutusStyle.description}>
            {line}
            <br />
          </span>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
