import React from 'react'
import styles from './About.module.css'

import selfPortrait from '../../../assets/images/self-portrait.jpg'

const About = () => {
    return (
        <div className={styles.about}>
            <div>
                <h1>I'm Phillip Iwanaga</h1>
                <p>Software engineer currently based in Seattle, WA but relocating to NYC in 2022.</p>
                <p>Building things with Javscript. Always learning and growing.</p>
            </div>
            <img src={selfPortrait} className={styles['self-portrait']} alt='self-portrat' />
        </div>
    )
}

export default About