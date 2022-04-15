import React from 'react'
import styles from './ProjectLink.module.css'
import Button from '../../../../../Common/Button'

const ProjectLink = ({ link, text }) => {
    return (
        <a href={link} target='_blank' rel="noreferrer" className={styles.link}>
            <Button text={text} theme='light'/>
        </a>
    )
}

export default ProjectLink