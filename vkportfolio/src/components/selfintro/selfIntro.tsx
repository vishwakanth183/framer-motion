"use client";

import React, { useContext, useLayoutEffect, useState } from "react";
import selfIntro from "./selfIntro.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub as GithubIcon } from "react-icons/fa";
import { FaLinkedin as LinkedinIcon } from "react-icons/fa";
import { FaFileDownload as ResumeIcon } from "react-icons/fa";
// import { RiAccountPinCircleFill as ResumeIcon } from "react-icons/ri";
import { UserContext } from "@/src/shared/context/useContext";
import { MdOutgoingMail as EmailIcon } from "react-icons/md";
import { MdPhonelinkRing as MobileIcon } from "react-icons/md";
import Link from "next/link";
import { githubLink, linkedInUrl } from "@/src/shared/contents/common";
import { useTheme } from "next-themes";

const SelfIntro = () => {
  const [onClientSide, setOnClientSide] = useState<boolean>(false);
  const { setCurrentPage } = useContext(UserContext)
  const { setTheme, resolvedTheme } = useTheme();


  useLayoutEffect(() => {
    setOnClientSide(true);
  }, []);

  if (!onClientSide) {
    return <div></div>;
  }

  return (
    <motion.div className={`${selfIntro.selfIntroView} ${resolvedTheme == "dark" ? selfIntro.darkSelfintroView : ""}`} id="aboutme"
      onViewportEnter={() => { setCurrentPage!("About Me") }}
    >
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className={`${selfIntro.welcomeView}`}
      > */}
      <div className={selfIntro.gridSelfIntro}>
        <div className={selfIntro.profileView}>
          <motion.img
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            // animate={{ scale: 1 }}
            // viewport={{once:true}}
            transition={{ duration: 1 }}
            src={"/profile_pic.png"}
            alt="Profile Pic"
            // src={
            //   "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"
            // }
            className={`${selfIntro.profilePic}`}
          />
          {/* <div className={`${selfIntro.profilePic}`}></div> */}
          <div>
            <span className={`${selfIntro.nameText} ${resolvedTheme == "dark" ? selfIntro.darkText : ""}`}>Hi, I am</span>
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
        </div>
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1,duration:1}}
        className={selfIntro.contactView}>
          {/* Contact info text */}
          <span className={selfIntro.contactInfoText}>
            Contact Info
          </span>
          {/* Divider */}
          <div className={selfIntro.divider}></div>

          <div className={selfIntro.infoView}>
            {/* Email View */}
            <div className={selfIntro.emailView}>
              <EmailIcon className={selfIntro.iconView} />
              <span className={selfIntro.emailText}>vishwakanths18@gmail.com</span>
            </div>

            {/* Mobile View */}
            <div className={selfIntro.emailView}>
              <MobileIcon className={selfIntro.iconView} />
              <span className={selfIntro.emailText}>6380272457</span>
            </div>
          </div>

          {/* Online profile view */}
          <div className={selfIntro.onlineProfileView}>
            {/* Github */}
            <Link target="_blank" href={githubLink} className={selfIntro.githubView}>
              <GithubIcon className={selfIntro.githubIcon} />
              <span className={selfIntro.iconText}>Github</span>
            </Link>

            {/* Linkedin */}
            <Link target="_blank" href={linkedInUrl} className={selfIntro.linkedinView}>
              <LinkedinIcon className={selfIntro.githubIcon} />
              <span className={selfIntro.iconText} >Linkedin</span>
            </Link>

            {/* Resume */}
            <Link target="_blank" href="/Vishwakanth CV 2025.pdf"
              download="Vishwakanth CV 2025.pdf" className={selfIntro.resumeView}>
              <ResumeIcon className={selfIntro.githubIcon} />
              <span className={selfIntro.iconText}>Resume</span>
            </Link>
          </div>
        </motion.div>
      </div>
      {/* </motion.div> */}
    </motion.div>
  );
};

export default SelfIntro;
