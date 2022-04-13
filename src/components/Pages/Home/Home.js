import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

import Button from '../../Common/Button'

const Home = () => {
    return (
        <main className={styles.home}>
            <p className={styles.name}>PHILLIP IWANAGA</p>
            <h1 className={styles.tagline}>Software engineer, doop dee doo.</h1>
            <div className={styles.button}>
                <Link to='/about'>
                    <Button text='more about me'/>
                </Link>
            </div>
        </main>
    )
}

export default Home