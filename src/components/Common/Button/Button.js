import React from 'react'
import styles from './Button.module.css'

const Button = ({ text, theme }) => {
    return (
        <button className={styles[theme]}>{text}</button>
    )
}

export default Button