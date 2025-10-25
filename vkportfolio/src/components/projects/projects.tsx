import React, { useContext } from 'react'
import { motion } from "framer-motion";
import projectStyles from "./projects.module.css";
import { UserContext } from '@/src/shared/context/useContext';
import { useTheme } from 'next-themes';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageCarousel from './imageCourosel';

const Projects = ({ title, projectData, id, currentPage }: { title: string, projectData: any, id: string, currentPage: string }) => {
    const { setCurrentPage } = useContext(UserContext)
    const { setTheme, resolvedTheme } = useTheme();

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <motion.div
            id={id}
            onViewportEnter={() => { setCurrentPage!(currentPage) }}
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className={projectStyles.projectsView}
        >
            <span className={`${projectStyles.projectTitle} ${resolvedTheme == "dark" ? projectStyles.projectTitleDark : ""}`}>{title}</span>
            <div className={projectStyles.projectView}>
                <Carousel 
                responsive={responsive} 
                className={`${projectStyles?.projectCard}`}
                >
                    {
                        projectData.map((project: any, index: any) => {
                            return (
                                <div className={projectStyles.projectInnerView} key={index} style={{ marginRight: '50px' }}>
                                    <ImageCarousel
                                    showLink={project?.appLink}
                                        images={
                                            project.images || [
                                                "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
                                                "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
                                                "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
                                            ]
                                        }
                                    />
                                    <div className={`${projectStyles.projectRowTitle} ${resolvedTheme == "dark" ? projectStyles.projectRowTitleDark : ""}`}>Company : <span>{project.company}</span></div>
                                    <div className={`${projectStyles.projectRowTitleSmall} ${resolvedTheme == "dark" ? projectStyles.projectRowTitleDark : ""}`}>Application : <span>{project.project}</span></div>
                                    <div className={`${projectStyles.projectRowTitleSmall} ${resolvedTheme == "dark" ? projectStyles.projectRowTitleDark : ""}`}>Location : <span>{project.location}</span></div>
                                    <div className={`${projectStyles.projectRowTitleSmall} ${resolvedTheme == "dark" ? projectStyles.projectRowTitleDark : ""}`}>Role : <span>{project.role}</span></div>
                                    <div className={`${projectStyles.projectRowTitleSmall} ${resolvedTheme == "dark" ? projectStyles.projectRowTitleDark : ""}`}>Duration : <span>{project.duration}</span></div>
                                    <div className={`${projectStyles.projectRowTitle} ${resolvedTheme == "dark" ? projectStyles.projectRowTitleDark : ""}`}>Responsibilites</div>
                                    <ul style={{ listStyleType: "disc", marginLeft: "20px", paddingLeft: "0px" }} className={`${projectStyles.listItem} ${resolvedTheme == "dark" ? projectStyles.listItemDark : ""}`}>
                                        {project?.responsibilities?.map((responsibility: any, index: any) => {
                                            return (
                                                <li>{responsibility}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        </motion.div>
    )
}

export default Projects;