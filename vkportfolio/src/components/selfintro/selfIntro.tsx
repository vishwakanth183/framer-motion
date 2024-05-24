"use client";

import React, { useLayoutEffect, useState } from "react";
import selfIntro from "./selfIntro.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

const SelfIntro = () => {
  const [onClientSide, setOnClientSide] = useState<boolean>(false);

  useLayoutEffect(() => {
    setOnClientSide(true);
  }, []);

  if (!onClientSide) {
    return <div></div>;
  }

  return (
    <motion.div className={selfIntro.selfIntroView} id="aboutme">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className={`${selfIntro.welcomeView}`}
      >
        <motion.img
          initial={{ scale: 0 }}
          whileInView={{scale:1}}
          // animate={{ scale: 1 }}
          // viewport={{once:true}}
          transition={{ duration: 1 }}
          // src={"/profile_pic.jpg"}
          alt="Profile Pic"
          src={
            "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          className={`${selfIntro.profilePic}`}
        />
        {/* <div className={`${selfIntro.profilePic}`}></div> */}
        <div>
          <span className={`${selfIntro.nameText}`}>Hi, I am</span>
          <span className={`${selfIntro.highlightText}`}>Vishwakanth</span>
        </div>
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.5, type: "spring" }}
          className={`${selfIntro.roleText}`}
        >
          Senior Software Developer
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default SelfIntro;
