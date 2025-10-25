"use client";

import React, { useLayoutEffect, useState , useContext, useEffect } from "react";
import headerStyle from "./header.module.css";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navmenus } from "../../contents/navMenuData";
import { UserContext } from "../../context/useContext";
import { MdDarkMode as DarkmodeIcon} from "react-icons/md";
import { MdOutlineLightMode as LightmodeIcon } from "react-icons/md";
import { useTheme } from "next-themes";

const Header = () => {
  const [isClient, setClient] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("About Me");
  const [menuAnimationCompleted, setMenuAnimationEnd] = useState(false);
  const {currentPage,setCurrentPage} = useContext(UserContext)
  const [targetId, setTargetId] = useState("");
  const { setTheme, resolvedTheme } = useTheme();

  useLayoutEffect(() => {
    setClient(true);
  }, []);

  useEffect(() => {
    if (targetId) {
      // console.log("targetId",targetId)
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth',block: 'start', inline: 'nearest' });
        }
        setTargetId(""); // Reset target ID after scrolling
    }
}, [targetId]); // Only run when targetId changes

  if (!isClient) {
    return <div></div>;
  }

  // Navmenu Animation
  const brandTextAnimation = {
    hidden: {
      x: -200,
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        duration: 1,
        // when:"beforeChildren"
      },
    },
  };

  // NavItem Animation
  const navItemAnimation = {
    hidden: {
      y: -50,
    },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        duration: 1,
        when: "beforeChildren",
      },
    },
  };

  // Function to handle mode
  const handleMode = () => {
    console.log("resolvedTheme",resolvedTheme)
    if (resolvedTheme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  //   function to handle link tap
  const onTapLink = (val: string,id:string) => {
    setCurrentPage!(val);
    setTargetId(id);
    if (isMobileMenu) {
      onHamburgerTap(false);
    }
  };

  // Function to handle hamburger tap
  const onHamburgerTap = (menuState: boolean) => {
    const btn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    btn?.classList.toggle(headerStyle.open);
    mobileMenu?.classList.toggle(headerStyle.active);
    setIsMobileMenu(menuState);
  };

  const MenuItems = () => {
    return (
      <>
        {navmenus.map((navItem, navIndex) => {
          return (
            <motion.div
              initial={
                !menuAnimationCompleted && { y: navIndex + 1 * 50, opacity: 0 }
              }
              animate={!menuAnimationCompleted && { y: 0, opacity: 1 }}
              transition={
                !menuAnimationCompleted
                  ? { delay: navIndex * 0.1, ease: "easeInOut" }
                  : {}
              }
              whileHover={{ scale: 1.1 }}
              onAnimationComplete={() => {
                if (navItem.displayName == "Certification") {
                  setMenuAnimationEnd(true);
                }
              }}
              key={navIndex}
            >
              <a
                href={navItem.link}
                className={`${headerStyle.navItem}`}
                onClick={(e) => {e.preventDefault(),onTapLink(navItem.displayName,navItem.link)}}
              >
                <div
                  className={`${
                    navItem.displayName == currentPage
                      ? headerStyle.activeItemText
                      : headerStyle.navItemText
                  }`}
                >
                  {navItem.displayName}
                </div>
                <div
                  className={
                    navItem.displayName == currentPage
                      ? `${headerStyle.activeNavItemBorder}`
                      : `${headerStyle.navItemBorder}`
                  }
                ></div>
              </a>
            </motion.div>
          );
        })}

          {resolvedTheme == "dark" ? <LightmodeIcon className={headerStyle.modeIcon} onClick={()=>handleMode()}/> : <DarkmodeIcon className={headerStyle.modeIcon} onClick={()=>handleMode()}/>}
      </>
    );
  };

  return (
    <>
      <div className={`${headerStyle.headerView} ${resolvedTheme == "dark" ? headerStyle.dark : ""} ${headerStyle?.applyZindex}`}>
        <nav className={`${headerStyle.navbar}`}>
          {/* Left View */}
          <motion.div
            variants={brandTextAnimation}
            initial="hidden"
            animate="visible"
            className={`${headerStyle.navbrandText}`}
          >
            Vishwakanth Portfolio
          </motion.div>
          {/* Right View */}
          <motion.div
            variants={navItemAnimation}
            initial="hidden"
            animate="visible"
            className={`${headerStyle.navMenu}`}
          >
            <MenuItems />
          </motion.div>
        </nav>
      </div>
      {/* Hamburger section */}
      <button
        id="menu-btn"
        style={{zIndex: 1000000}}
        onClick={() => onHamburgerTap(!isMobileMenu)}
        className={`${headerStyle.hamburgerSection}`}
      >
        <div className={`${headerStyle.hamburgerTop} ${resolvedTheme == "dark" ? headerStyle.hamburgerDarkMode : ""}`}></div>
        <div className={`${headerStyle.hamburgerMiddle} ${resolvedTheme == "dark" ? headerStyle.hamburgerDarkMode : ""}`}></div>
        <div className={`${headerStyle.hamburgerBottom} ${resolvedTheme == "dark" ? headerStyle.hamburgerDarkMode : ""}`}></div>
      </button>
      {/* Mobile menu section */}
      <motion.div
        whileInView={{ scale: 1, opacity: 1 }}
        initial={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0 }}
        id="mobile-menu"
        className={`${headerStyle.mobileMenu}`}
      >
        <MenuItems />
      </motion.div>
    </>
  );
};

export default Header;
