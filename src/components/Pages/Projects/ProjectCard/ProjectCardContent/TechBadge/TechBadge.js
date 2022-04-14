import React from 'react'
import styles from './TechBadge.module.css'

const TechBadge = ({ tech }) => {
    return (
        <div className={styles.badge}>
            <span className={styles.bullet}>&#8226;</span>
            <p className={styles.tech}>{tech.toUpperCase()}</p>
        </div>
    )
}

export default TechBadge