import React from 'react'
import styles from './ProjectLink.module.css'

const ProjectLink = ({ link, text }) => {
    return (
        <a href={link} className={styles.link}>{text}</a>
    )
}

export default ProjectLink