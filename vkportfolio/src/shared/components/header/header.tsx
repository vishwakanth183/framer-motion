"use client";

import React, { useLayoutEffect, useState } from "react";
import headerStyle from "./header.module.css";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navmenus } from "../../contents/navMenuData";

const Header = () => {
  const [isClient, setClient] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("About Me");
  const [menuAnimationCompleted, setMenuAnimationEnd] = useState(false);

  useLayoutEffect(() => {
    setClient(true);
  }, []);

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

  //   function to handle link tap
  const onTapLink = (val: string) => {
    setSelectedMenu(val);
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
                onClick={() => onTapLink(navItem.displayName)}
              >
                <div
                  className={`${
                    navItem.displayName == selectedMenu
                      ? headerStyle.activeItemText
                      : headerStyle.navItemText
                  }`}
                >
                  {navItem.displayName}
                </div>
                <div
                  className={
                    navItem.displayName == selectedMenu
                      ? `${headerStyle.activeNavItemBorder}`
                      : `${headerStyle.navItemBorder}`
                  }
                ></div>
              </a>
            </motion.div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className={`${headerStyle.headerView}`}>
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
        onClick={() => onHamburgerTap(!isMobileMenu)}
        className={`${headerStyle.hamburgerSection}`}
      >
        <div className={headerStyle.hamburgerTop}></div>
        <div className={headerStyle.hamburgerMiddle}></div>
        <div className={headerStyle.hamburgerBottom}></div>
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
