import React, { useState } from 'react'
import styles from './ExpandableCard.module.css'
import EventFinder from '../../../assets/images/event-finder.jpg'

const ExpandableCard = ({ title, tech, content }) => {
    const [expanded, setExpanded] = useState(false)

    const handleClick = () => {
        setExpanded(!expanded)
    }

    return (
        <>
            <div className={styles.expand} onClick={handleClick}>
                <p className={styles.title}>{title} &#60;</p>
                {tech.map((t) => <p key={t} className={styles.tech}>{t}</p>)}
            </div>
            <div className={`${styles.content} ${expanded ? styles.expanded : ''}`}>
                <img src={EventFinder} className={styles.image}/>
                <p className={styles.description}>My project description My project description My project description My project description</p>
            </div>  
            
        </>
    )
}

export default ExpandableCard