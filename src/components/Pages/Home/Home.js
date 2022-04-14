import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

import Button from '../../Common/Button'

const Home = ({ setIsHome }) => {
    useEffect(() => {
        setIsHome(true)

        return () => {
            setIsHome(false)
        }
    })
    
    return (
        <main className={styles.home}>
            <div className={styles.content}>
                <p className={styles.name}>PHILLIP IWANAGA</p>
                <h1 className={styles.tagline}>Software engineer, team player, perpetual learner.</h1>
                <div className={styles.button}>
                    <Link to='/about'>
                        <Button text='more about me' style='dark'/>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Home