import React from 'react'
import styles from './Projects.module.css'

import projects from './projectList'
import ProjectCard from './ProjectCard/'

const Projects = () => {
    return (
        <div className={styles.projects}>
            <h1>Check out my projects!</h1>
            <div className={styles['tagline-projects-container']}>
                <p className={styles.tagline}>Since starting my journey in 2020, I have worked on various projects for my bootcamp, freelance gigs and side projects.</p>
                <div className={styles['project-card-container']}>
                    {projects.map((project, idx) => (
                        <div key={project.id} className={styles['project-card']} style={{'--position': idx}}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects