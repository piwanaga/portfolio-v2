import React from 'react'
import styles from './ToggleButton.module.css'

const ToggleButton = ({ toggleActive }) => {
    return (
        <div className={styles.toggle} onClick={toggleActive}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
        </div>
    )
}

export default ToggleButton