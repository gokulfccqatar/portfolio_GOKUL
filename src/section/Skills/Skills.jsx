import React from "react";
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import styles from "./SkillsStyles.module.css"
import SkillList from "./SkillList";

function Skills(){
    return(
        <section id='skills' className={styles.container}>
            <h1 className="sectionTitle">Skills</h1>

            <div className={styles.skillList}>
                <SkillList
                    src={checkMarkIcon}
                    skill='HTML'
                />

                <SkillList
                    src={checkMarkIcon}
                    skill='CSS'
                />


                <SkillList
                    src={checkMarkIcon}
                    skill='JavaScript'
                />


                <SkillList
                    src={checkMarkIcon}
                    skill='React'
                />

                <SkillList
                    src={checkMarkIcon}
                    skill='Node'
                />
            </div>
            <hr/>            
            <div className={styles.skillList}>
                <SkillList
                    src={checkMarkIcon}
                    skill='UI / UX'
                />

                <SkillList
                    src={checkMarkIcon}
                    skill='Graphic Design'
                />


                <SkillList
                    src={checkMarkIcon}
                    skill='3D'
                />


                <SkillList
                    src={checkMarkIcon}
                    skill='Responsiveness'
                />

                <SkillList   
                    src={checkMarkIcon}
                    skill='Tailwind CSS'
                />
            </div>
            <hr/>
            



        </section>

    )
}

export default Skills;