import React from 'react'
import styles from './ProjectCardTitle.module.css'

const ProjectCardTitle = ({ title, expanded, handleClick }) => {
    return (
        <div className={expanded ? `${styles.container} ${styles.expanded}`: styles.container}>
            <div className={styles['title-container']} onClick={handleClick}>
                <h3 className={styles.title}>
                    {title}
                </h3>
                <div className={styles.icon}>
                    <div className={`${styles.bar} ${styles.top}`}></div>
                    <div className={`${styles.bar} ${styles.bottom}`}></div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCardTitle