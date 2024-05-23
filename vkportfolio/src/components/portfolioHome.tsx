"use client";

import React, { useLayoutEffect, useState } from "react";
import portfolioHome from "./portfolioHome.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

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
      <motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className={`${portfolioHome.welcomeView}`}
        >
          <img
            // src={"/profile_pic.jpg"}
            alt="Profile Pic"
            src={
              "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            className={`${portfolioHome.profilePic}`}
          />
          {/* <div className={`${portfolioHome.profilePic}`}></div> */}
          <div>
            <span className={`${portfolioHome.nameText}`}>Hi, I am</span>
            <span className={`${portfolioHome.highlightText}`}>
              Vishwakanth
            </span>
          </div>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1.5, type: "spring" }}
            className={`${portfolioHome.roleText}`}
          >
            Senior Software Developer
          </motion.span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PortfolioHome;
