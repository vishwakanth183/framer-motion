"use client"

import React,{useState} from "react";
import { motion , AnimatePresence } from "framer-motion";
import experienceStyle from "./experience.module.css"
import { experience } from "@/src/shared/contents/homeContent";

const Experience = () => {

    const [selectedExp,setSelectedExp] = useState<any>();

    return (
        <div className={experienceStyle.experienceView}>
            <span className={experienceStyle.experienceTitle}>Experience</span>
            <div className={experienceStyle.gridCard}>
                {
                    experience.map((experienceItem, index) => {
                        return <motion.div layout={"position"} className={experienceStyle.expCard} key={index} onClick={()=>setSelectedExp(experienceItem)}>
                            <span className={experienceStyle.expRole}>{experienceItem.role}</span>
                        </motion.div>
                    })
                }
            </div>

            {/* <AnimatePresence>
                {selectedExp && (
                    <motion.div layoutId={selectedExp.role}>
                        <motion.h5>{selectedExp.role}</motion.h5>
                        <motion.h2>{selectedExp.location}</motion.h2>
                        <motion.button onClick={() => setSelectedExp(null)} />
                    </motion.div>
                )}
            </AnimatePresence> */}
        </div>
    )
}

export default Experience