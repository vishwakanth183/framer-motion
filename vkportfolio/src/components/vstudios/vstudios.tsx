"use client";

import React, { useEffect, useState } from "react";
import VstudioStyles from "./vstudions.module.css";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useTheme } from "next-themes";

const VstudiosComponent = () => {
  const featureImg =
    "https://images.pexels.com/photos/7562026/pexels-photo-7562026.jpeg?auto=compress&cs=tinysrgb&w=600";

  const creationDetails = [
    {
      title: "Jurassic Encounter",
      url: "https://images.pexels.com/photos/6945926/pexels-photo-6945926.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Ocean Odyssey",
      url: "https://images.pexels.com/photos/5277693/pexels-photo-5277693.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Cosmic Sprint",
      url: "https://images.pexels.com/photos/1748447/pexels-photo-1748447.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Virtual Canvas",
      url: "https://images.pexels.com/photos/2397652/pexels-photo-2397652.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "VR Training",
      url: "https://images.pexels.com/photos/1261822/pexels-photo-1261822.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Mythical AR Tour",
      url: "https://images.pexels.com/photos/1036645/pexels-photo-1036645.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Martian Colonization",
      url: "https://images.pexels.com/photos/7180658/pexels-photo-7180658.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Peak Performance",
      url: "https://images.pexels.com/photos/7777270/pexels-photo-7777270.jpeg?auto=compress&cs=tinysrgb&w=600",
    }, // Replaces "Premium Seat Experience" for broader appeal
    {
      title: "Zero-Gravity",
      url: "https://images.pexels.com/photos/3737624/pexels-photo-3737624.jpeg?auto=compress&cs=tinysrgb&w=600",
    }, // Replaces "Zero-Gravity Training" for a more impactful feel
    {
      title: "Mindful Focus",
      url: "https://images.pexels.com/photos/7626586/pexels-photo-7626586.jpeg?auto=compress&cs=tinysrgb&w=600",
    }, // Replaces "Immersive Focus Training" for a more user-friendly term
  ];

  const testimonials = [
    {
      name: "Alice Walker",
      designation: "CEO, Technovation Inc.",
      description:
        "Vstudios' VR solutions have revolutionized the way we prototype and showcase our products. The immersive experiences they create are incredibly engaging and allow us to gather valuable user feedback early in the development process. We highly recommend Vstudios to any company looking to leverage VR technology.",
    },
    {
      name: "David Jones",
      designation: "Lead Architect, Green Builders",
      description:
        "Vstudios helped us create a stunning VR experience that allows potential clients to virtually tour our architectural designs. This has been a game-changer for our sales team, as it allows them to showcase our projects in a way that traditional methods simply cannot. Vstudios is a true innovator in the VR field.",
    },
    {
      name: "Emily Williams",
      designation: "Professor, Media Studies, Stanford University",
      description:
        "Vstudios is at the forefront of VR education. Their VR simulations provide students with a unique and immersive learning experience that is simply unmatched. Students are able to explore complex concepts in a way that is both engaging and unforgettable. Vstudios is a valuable asset to the educational landscape.",
    },
  ];

  const { setTheme, resolvedTheme } = useTheme();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div></div>;
  }

  // Function to handle hamburger tap
  const onHamburgerTap = () => {
    const btn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    btn?.classList.toggle(VstudioStyles.open);
    mobileMenu?.classList.toggle(VstudioStyles.active);
  };

  // Function to handle mode
  const handleMode = () => {
    if (resolvedTheme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  // State to handle hamburger tap
  // const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  const MenuItems = () => {
    return (
      <>
        <div className="group cursor-pointer">
          <div className={`${VstudioStyles.headerItemText}`}>About</div>
          <div
            className={`${VstudioStyles.activeHeaderItemBorder} group-hover:opacity-100`}
          ></div>
        </div>

        <div className="group cursor-pointer">
          <div className={`${VstudioStyles.headerItemText}`}>Carrers</div>
          <div
            className={`${VstudioStyles.headerItemBorder} group-hover:opacity-100`}
          ></div>
        </div>

        <div className="group cursor-pointer">
          <div className={`${VstudioStyles.headerItemText}`}>Events</div>
          <div
            className={`${VstudioStyles.headerItemBorder} group-hover:opacity-100`}
          ></div>
        </div>

        <div className="group cursor-pointer">
          <div className={`${VstudioStyles.headerItemText}`}>Products</div>
          <div
            className={`${VstudioStyles.headerItemBorder} group-hover:opacity-100`}
          ></div>
        </div>

        <div className="group cursor-pointer">
          <div className={`${VstudioStyles.headerItemText}`}>Support</div>
          <div
            className={`${VstudioStyles.headerItemBorder} group-hover:opacity-100`}
          ></div>
        </div>

        <button
          className={`${
            resolvedTheme != "dark"
              ? VstudioStyles.darkModeButton
              : VstudioStyles.lightModeButton
          }`}
          onClick={() => handleMode()}
        >
          {resolvedTheme == "dark" ? (
            <CiLight className={VstudioStyles.modeIcon} />
          ) : (
            <MdDarkMode className={VstudioStyles.modeIcon} />
          )}
          {resolvedTheme == "dark" ? "Light Mode" : "Dark mode"}
        </button>
      </>
    );
  };

  return (
    <div
      className={`${VstudioStyles.mainView} ${
        resolvedTheme == "dark" ? VstudioStyles.dark : ""
      }`}
    >
      {/* Header Section */}
      <section className={VstudioStyles.headerSection}>
        <div className="flex md:flex-row justify-between items-center">
          <div className={VstudioStyles.headerText}>VStudios</div>
          {/* Menu block */}
          <div className={VstudioStyles.menuBlock}>
            {/* <div className={"mainGroup group"}>
              <div className={VstudioStyles.groupText}>About us</div>
              <div className={VstudioStyles.groupBorder}></div>
            </div> */}

            <MenuItems />
          </div>
        </div>
        <div className={VstudioStyles.textContainer}>
          Vstudios, a pioneer in VR, crafts captivating simulations and
          interactive experiences.
        </div>
      </section>
      {/* Features Section */}
      <div className={VstudioStyles.featureSection}>
        <img src={featureImg} alt="" className="h-30 w-30 md:h-20 md:w-20" />
        <div className={VstudioStyles.absoluteTextConatiner}>
          <div className={VstudioStyles.featureTextTitle}>
            Immerse Yourself in Vstudios Experiences
          </div>
          <div className={VstudioStyles.featureTextContainer}>
            Vstudios' feature section unveils a world of possibilities. Dive
            into captivating simulations, explore interactive experiences, and
            unleash your creativity. Discover how VR transforms learning,
            unlocks immersive entertainment, and redefines design boundaries.
          </div>
        </div>
      </div>
      {/* Our creation section */}
      <section className={VstudioStyles.ourCreationContainer}>
        <div className={VstudioStyles.ourCreationHeader}>
          <div className={VstudioStyles.ourCreationText}>Our Creations</div>
          <button className={VstudioStyles.seeAllButton}>See All</button>
        </div>

        <div className={VstudioStyles.creationGrid}>
          {creationDetails.map((items, index) => {
            return (
              <div
                key={index}
                className={`${VstudioStyles.item} group hover:scale-105 duration-200`}
              >
                <img
                  className={`${VstudioStyles.gridImg}`}
                  src={items.url}
                  alt={items.title}
                />
                <div className={VstudioStyles.itemGradient}></div>
                <div className={VstudioStyles.itemText}>{items.title}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* <button className={VstudioStyles.seeAllButtonMobile}>See All</button> */}

      {/*  Testimonials section*/}
      <section className={VstudioStyles.testimonialsSection}>
        <img
          src="/bg-quotes.png"
          alt="testimonials"
          className="h-10 w-10 mb-5"
        />
        <div className={VstudioStyles.gridTestimonial}>
          {testimonials.map((item, index) => {
            return (
              <div key={index} className={VstudioStyles.testiMonialItem}>
                <div className={VstudioStyles.testimonialDescription}>
                  {item.description}
                </div>
                <div className={VstudioStyles.personInfo}>
                  <img
                    src={`/profile-${index + 1}.jpg`}
                    alt="personIcon"
                    className={VstudioStyles.avatar}
                  />
                  <div className={VstudioStyles.customerInfo}>
                    <div className={VstudioStyles.customerName}>
                      {item.name}
                    </div>
                    <div className={VstudioStyles.designation}>
                      {item.designation}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Hamburger section */}
      <button
        id="menu-btn"
        onClick={() => onHamburgerTap()}
        className={`${VstudioStyles.hamburgerSection}`}
      >
        <span className={VstudioStyles.hamburgerTop}></span>
        <span className={VstudioStyles.hamburgerMiddle}></span>
        <span className={VstudioStyles.hamburgerBottom}></span>
      </button>

      {/* Mobile menu section */}
      <div id="mobile-menu" className={`${VstudioStyles.mobileMenu}`}>
        <MenuItems />
      </div>

      {/* Footer Section */}
      <footer className={VstudioStyles.footerSection}>
        <div className={VstudioStyles.footerLogo}>VStudios</div>
        <div className={VstudioStyles.footerItem}>
          {/* Faq */}
          <div className={VstudioStyles.footerText}>FAQ</div>
          {/* Privacy Policy */}
          <div className={VstudioStyles.footerText}>Privacy Policy</div>
          {/* Terms and conditions */}
          <div className={VstudioStyles.footerText}>Terms and conditions</div>
          {/* About us */}
          <div className={VstudioStyles.footerText}>About us</div>
        </div>
        <div className={VstudioStyles.footerImageSection}>
          <img
            src="/icon-facebook.svg"
            alt="facebook"
            className={VstudioStyles.footerImage}
          />
          <img
            src="/icon-instagram.svg"
            alt="instagram"
            className={VstudioStyles.footerImage}
          />
          <img
            src="/icon-pinterest.svg"
            alt="twitter"
            className={VstudioStyles.footerImage}
          />
          <img
            src="/icon-twitter.svg"
            alt="pintrest"
            className={VstudioStyles.footerImage}
          />
        </div>
      </footer>
    </div>
  );
};

export default VstudiosComponent;
