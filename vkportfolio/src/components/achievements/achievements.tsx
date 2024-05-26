"use client";

import React, { useContext } from "react";
import achievementStyle from "./achievements.module.css";
import { totalAchievements } from "@/src/shared/contents/achievement";
import { FaShieldHalved as AchieveIcon } from "react-icons/fa6";
import { SiOnlyoffice as Office } from "react-icons/si";
import { IoIosSchool as College } from "react-icons/io";
import { FaSchool as School } from "react-icons/fa6";
import { motion } from "framer-motion";
import { UserContext } from "@/src/shared/context/useContext";
import { useTheme } from "next-themes";

const Achievement = () => {
  const {setCurrentPage} = useContext(UserContext);
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <motion.div
      id="achievements"
      onViewportEnter={()=>{setCurrentPage!("Achievements")}}
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={achievementStyle.achievementView}
    >
      <span className={`${achievementStyle.achievementTitle} ${resolvedTheme == "dark" ? achievementStyle.achievementTitleDark : ""}`}>Achievements</span>
      <div className={achievementStyle.achievementGridCard}>
        {totalAchievements.map((achievemtType, typeIndex) => {
          return (
            <div key={typeIndex} className={achievementStyle.achievementItem}>
              {/* Achievement Type */}
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className={achievementStyle.achievementTitleView}
              >
                {achievemtType.type == "Office" ? (
                  <Office size={20} className={achievementStyle.iconStyle} />
                ) : achievemtType.type == "College" ? (
                  <College size={20} className={achievementStyle.iconStyle} />
                ) : (
                  <School size={20} className={achievementStyle.iconStyle} />
                )}
                <span className={achievementStyle.achievementType}>
                  {achievemtType.type}
                </span>
              </motion.div>

              {/* Divider */}
              <div className={achievementStyle.divider}></div>

              {/* List of Achievements */}
              {achievemtType.achievements.map(
                (achievement: any, achieveIndex) => {
                  return (
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className={achievementStyle.achieveTextView}
                      key={achieveIndex}
                    >
                      <AchieveIcon
                        size={16}
                        className={achievementStyle.achieveIcon}
                      />
                      <span className={achievementStyle.achievementText}>
                        {achievement.achievement}
                        {achievemtType.type == "Office" && (
                          <span>
                            {" "}
                            by{" "}
                            <span className={achievementStyle.boldText}>
                              {achievement.awardedBy}{" "}
                            </span>
                            on {achievement.year}
                          </span>
                        )}
                      </span>
                    </motion.div>
                  );
                }
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Achievement;
