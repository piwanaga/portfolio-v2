import React from 'react'
import styles from './ProjectCardTitle.module.css'

const ProjectCardTitle = ({ title, expanded, handleClick }) => {
    return (
        <div className={expanded ? `${styles.container} ${styles.expanded}`: styles.container}>
            <div className={styles.carat}></div> 
            <h3 className={styles.title} onClick={handleClick}>
                {title}
            </h3>
        </div>
    )
}

export default ProjectCardTitle