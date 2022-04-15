import React, { useEffect } from 'react'
import styles from './Projects.module.css'

import projects from './projectList'
import ProjectCard from './ProjectCard/'

const Projects = () => {
    const images = []
    projects.forEach((project) => {
        images.push(project.image)
    })
    
    useEffect(() => {
        images.forEach((image) => {
            const img = new Image()
            img.src = image
        })
    })

    return (
        <div className={styles.projects}>
            <h1>Check out my projects!</h1>
            <div className={styles['tagline-projects-container']}>
                <p className={styles.tagline}>Since starting my journey in 2020, I have worked on a number of projects, always with a focus on improving my coding skills and deepening my understanding of engineering concepts.</p>
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