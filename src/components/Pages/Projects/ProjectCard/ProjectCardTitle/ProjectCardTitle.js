import React from 'react'
import styles from './ProjectCardTitle.module.css'

const ProjectCardTitle = ({ title, handleClick }) => {
    return (
        <h3 className={styles.title}onClick={handleClick}>{title}</h3>
    )
}

export default ProjectCardTitle