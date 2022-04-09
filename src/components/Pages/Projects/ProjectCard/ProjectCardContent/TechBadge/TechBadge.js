import React from 'react'
import styles from './TechBadge.module.css'

const TechBadge = ({ tech }) => {
    return (
        <div className={styles.badge}>{tech}</div>
    )
}

export default TechBadge