import React from "react";
import styles from "./ProjectsStyles.module.css";
import Viberr from "../../assets/viberr.png";
import FreshBurger from "../../assets/fresh-burger.png";
import Hipster from "../../assets/hipsster.png";
import FitLift from "../../assets/fitlift.png";


import ProjectCard from "../../common/ProjectsCard";

function Projects(){
     
    
    return(
        <section id='projects' className={styles.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.projectsContainer}>
            <ProjectCard 
                src={Viberr}
                link='www.github.com'
                p='Viberss vibe here - Music Streaming Webapp'
                h3="Viberr"
                />    


                 <ProjectCard 
                src={FreshBurger}
                link='www.github.com'
                p='Delicious Burgers here only '
                h3="FreshBurger"
                />               


                <ProjectCard 
                src={Hipster}
                link='www.github.com'
                p='Hipster for Shades & Glassses'
                h3="Hipster"
                />


                <ProjectCard 
                src={FitLift}
                link='www.github.com'
                p='FitLift for getting fit and best'
                h3="FitLift"
                />                           
            </div>



        </section>
    )
}


export default Projects