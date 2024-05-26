"use client";

import React, { useContext } from "react";
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
import { UserContext } from "@/src/shared/context/useContext";
import { useTheme } from "next-themes";

const Skills = () => {
  const allSkills = [
    ...webskills,
    ...mobileSkills,
    ...graphicSkills,
    ...backendSkills,
    ...toolsSkills,
    ...programmingSkills,
  ];

  const { setCurrentPage } = useContext(UserContext)
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <motion.div
      id="skills"
      onViewportEnter={() => { setCurrentPage!("Skills") }}
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className={skillStyles.skillsView}
    >
      <span className={`${skillStyles.skillsTitle} ${resolvedTheme == "dark" ? skillStyles.skillsTitleDark : ""}`}>Skills</span>
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
              <span className={`${skillStyles.skillName} ${resolvedTheme == "dark" ? skillStyles.skillNameDark : ""}`}>{skill.skillName}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
