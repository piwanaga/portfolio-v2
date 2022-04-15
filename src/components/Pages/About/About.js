import React from 'react'
import styles from './About.module.css'
import { Link } from 'react-router-dom'

import Button from '../../Common/Button'
import selfPortrait from '../../../assets/images/self-portrait.jpg'

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.intro}>
                <h1>Hi, I'm Phillip Iwanaga</h1>
                <p className={styles.tagline}>I'm a software engineer with a background in the service industry. Based in Seattle, relocating to New York City.</p>
            </div>
            <div className={styles.details}>
                <div>
                    <img src={selfPortrait} className={styles['self-portrait']} alt='self-portrat' />
                </div>
                <div className={styles['bio-container']}>
                    <p className={styles.bio}>For years I've had the incredible experience of working as a bartender in Seattle's historic Pike Place Market--getting the opportunity to meet people from all over the world and make lifelong friends in my coworkers.</p>
                    <p className={styles.bio}>Now I'm seeking to bridge my passions for problem solving and digital technology by pursuing a career in software engineering--one where I'm able to take advantage of my soft skills while building my technical ones.</p>
                    <div className={styles.buttons}>
                        <Link to='/projects'>
                            <Button text='view projects' theme='blue'/>
                        </Link>
                        <a className={styles.resume} href='https://docs.google.com/document/d/17EPEr1zRZUVHAIp4vxw1txft8bG9SWSI6rr_Su9nVak/edit?usp=sharing' target='_blank' rel="noreferrer">
                            <Button text='view resume' theme='blue'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About