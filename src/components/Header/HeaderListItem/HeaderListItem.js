import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HeaderListItem.module.css'

const HeaderListItem = ({ link, setInactive }) => {
    return (
        <li className={styles['nav-item']}>
            <Link className={styles['nav-link']} to={`/${link}`} onClick={setInactive}>
                {link}
            </Link>
        </li>
    )
}

export default HeaderListItem