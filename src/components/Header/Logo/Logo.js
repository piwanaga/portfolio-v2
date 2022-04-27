import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Logo.module.css'

const Logo = () => {
    return (
        <div className={styles['logo-container']}>
            <Link className={styles.logo} to='/'>PI</Link>
        </div>
    )
}

export default Logo