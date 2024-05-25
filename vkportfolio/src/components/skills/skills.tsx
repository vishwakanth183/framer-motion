"use client";

import React from "react";
import skillStyles from "./skills.module.css";
import { motion } from "framer-motion";
import {
  backendSkills,
  graphicSkills,
  mobileSkills,
  programmingSkills,
  toolsSkills,
  webskills,
} from "@/src/shared/contents/skills";

const Skills = () => {
  const allSkills = [
    ...webskills,
    ...mobileSkills,
    ...graphicSkills,
    ...backendSkills,
    ...toolsSkills,
    ...programmingSkills,
  ];

  return (
    <motion.div
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className={skillStyles.skillsView}
    >
      <span className={skillStyles.skillsTitle}>Skills</span>
      <div className={skillStyles.gridCard}>
        {allSkills.map((skill, index) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              key={index}
              className={skillStyles.skillItem}
            >
              <img
                src={skill.imgUrl}
                alt={skill.skillName}
                className={skillStyles.skillImage}
              />
              <span className={skillStyles.skillName}>{skill.skillName}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
