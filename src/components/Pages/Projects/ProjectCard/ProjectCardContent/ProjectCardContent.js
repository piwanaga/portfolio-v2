import React from 'react'
import styles from './ProjectCardContent.module.css'

import TechBadge from './TechBadge'
import ProjectLink from './ProjectLink'

const ProjectCardContent = ({ links, description, technologies, image, alt }) => {
    return (
        <div className={styles.content}>
            <p className={styles.description}>{description}</p>
            <div className={styles['project-details']}>
                <img src={image} className={styles.image} alt={alt}/>
                <div className={styles['tech-links-container']}>
                    <div className={styles.technologies}>
                        {technologies.map((tech) => <TechBadge key={tech} tech={tech}/>)}
                    </div>
                    <div className={styles.links}>
                        {links && links.github && <ProjectLink link={links.github} text='github'/>}
                        {links && links.live && <ProjectLink link={links.live} text='live'/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCardContent