import React, { useState } from 'react'
import styles from './ProjectCard.module.css'

import ProjectCardTitle from './ProjectCardTitle'
import ProjectCardContent from './ProjectCardContent'

const ProjectCard = ({ project }) => {
    const { links, title, description, technologies, image, alt} = project
    const [expanded, setExpanded] = useState(false)

    const handleClick = () => {
        setExpanded(!expanded)
    }

    return (
        <div className={expanded ? `${styles.card} ${styles.expanded}`: styles.card}>
            <ProjectCardTitle title={title} expanded={expanded} handleClick={handleClick}/>
            {expanded && 
            <ProjectCardContent 
                links={links}
                description={description}
                technologies={technologies}
                image={image}
                alt={alt}
                expanded={expanded}
            />}
        </div>
    )
}

export default ProjectCard