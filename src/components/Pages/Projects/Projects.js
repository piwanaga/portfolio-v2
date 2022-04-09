import React from 'react'
import styles from './Projects.module.css'

import projects from './projectList'
import ProjectCard from './ProjectCard/'

const Projects = () => {
    return (
        <div className={styles.projects}>
            <h1>Projects</h1>
            {projects.map((project, idx) => (
                <div key={project.id} className={styles['project-card']} style={{'--position': idx}}>
                    <ProjectCard project={project} />
                </div>
            ))}
        </div>
    )
}

export default Projects