"use client";

import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import experienceStyle from "./experience.module.css";
import { experience } from "@/src/shared/contents/homeContent";
import { PiShootingStarFill } from "react-icons/pi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { GiDuration } from "react-icons/gi";
import { UserContext } from "@/src/shared/context/useContext";
import { useTheme } from "next-themes";

const Experience = () => {
  // icon color for experience
  const iconColor = "purple";

  const {setCurrentPage} = useContext(UserContext)
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <motion.div
      id="experience"
      onViewportEnter={()=>{setCurrentPage!("Experience")}}
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      viewport={{ once: true }}
      className={experienceStyle.experienceView}
    >
      <span className={`${experienceStyle.experienceTitle} ${resolvedTheme == "dark" ? experienceStyle.experienceTitleDark : ""}`}>Experience</span>
      <div className={experienceStyle.gridCard}>
        {experience.map((experienceItem, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              //   viewport={{ once: true }}
              //   onViewportEnter={() => {
              //     console.log("yuppp here");
              //   }}
              className={experienceStyle.expCard}
              key={index}
            >
              {/* Role */}
              <div className={experienceStyle.itemView}>
                <div className={experienceStyle.iconView}>
                  <PiShootingStarFill size={22} color={iconColor} />
                </div>
                <span className={experienceStyle.expRole}>
                  {experienceItem.role}
                </span>
              </div>
              {/* Location */}
              <div className={experienceStyle.itemView}>
                <div className={experienceStyle.iconView}>
                  <HiBuildingOffice2 size={22} color={iconColor} />
                </div>
                <span className={experienceStyle.expLocation}>
                  {experienceItem.location}
                </span>
              </div>
              {/* Duration */}
              <div className={experienceStyle.itemView}>
                <div className={experienceStyle.iconView}>
                  <GiDuration size={22} color={iconColor} />
                </div>
                <span className={experienceStyle.expDuration}>
                  {experienceItem.startDate} - {experienceItem.endDate}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Experience;
