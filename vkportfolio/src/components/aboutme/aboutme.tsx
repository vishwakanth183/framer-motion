import React from "react";
import { decriptionContent } from "../../shared/contents/description";
import aboutusStyle from "./aboutme.module.css";

const AboutMe = () => {
  return (
    <div className={aboutusStyle.aboutusView}>
      <span className={aboutusStyle.aboutusTitle}>About Me</span>
      <div className={aboutusStyle.aboutmeCard}>
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
