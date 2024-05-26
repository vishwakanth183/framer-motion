"use client";

import React, { useContext } from "react";
import certificationStyles from "./certification.module.css";
import { certificates } from "@/src/shared/contents/certiticationContent";
import { PiCertificateFill } from "react-icons/pi";
import Link from "next/link";
import { motion } from "framer-motion";
import { UserContext } from "@/src/shared/context/useContext";
import { useTheme } from "next-themes";

const Certification = () => {
  const{setCurrentPage} = useContext(UserContext)
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <motion.div
      id="certification"
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={certificationStyles.certificationView}
      onViewportEnter={()=>{setCurrentPage!("Certification")}}
    >
      <span className={`${certificationStyles.certificationTitle} ${resolvedTheme == "dark" ? certificationStyles.certificationTitleDark : ""}`}>
        Certifications
      </span>
      <div className={certificationStyles.certficationGrid}>
        {certificates.map((certificate, index) => {
          return (
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              key={index}
            >
              <Link
                href={certificate.verfication_url}
                className={certificationStyles.linkView}
                target="_blank"
              >
                <PiCertificateFill
                  className={certificationStyles.certificateIcon}
                />
                <span className={`${certificationStyles.certificateName} ${resolvedTheme == "dark" ? certificationStyles.certificateNameDark : ""}`}>
                  {certificate.certificateName}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Certification;
