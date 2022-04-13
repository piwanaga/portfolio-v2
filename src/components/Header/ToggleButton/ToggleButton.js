import React from 'react'
import styles from './ToggleButton.module.css'

const ToggleButton = ({ isActive, toggleActive }) => {
    return (
        <div className={isActive ? `${styles.toggle} ${styles.fixed}` : styles.toggle} onClick={toggleActive}>
            <span className={isActive ? `${styles.bar} ${styles.top}` : styles.bar}></span>
            <span className={isActive ? `${styles.bar} ${styles.bottom}` : styles.bar}></span>
        </div>
    )
}

export default ToggleButton