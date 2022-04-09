import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Logo.module.css'

const Logo = () => {
    return (
        <Link className={styles.logo} to='/'>PI</Link>
    )
}

export default Logo