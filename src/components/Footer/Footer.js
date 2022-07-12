import React from 'react'
import styles from './Footer.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.content}>
                <p className={styles.chat}>Wanna chat?</p>
                <a href='mailto: phillip.iwanaga@gmail.com' className={styles.email}>phillip.iwanaga@gmail.com</a>
                <p className={styles.connect}>Or connect with me here:  </p>
                <div className={styles.icons}>
                    <a href='https://www.linkedin.com/in/phillipiwanaga/' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faLinkedin} className={styles.icon}/>
                    </a>
                    <a href='https://github.com/piwanaga' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faGithub} className={styles.icon}/>
                    </a>
                    <a href='https://codepen.io/piwanaga/pens/showcase' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faCodepen} className={styles.icon}/>
                    </a>
                    <a href='https://www.instagram.com/pheestone/' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faInstagram} className={styles.icon}/>
                    </a>
                    <a href='https://docs.google.com/document/d/17EPEr1zRZUVHAIp4vxw1txft8bG9SWSI6rr_Su9nVak/edit?usp=sharing' target='_blank' rel='noreferrer' className={styles.resume}>
                        resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer