import React from 'react'
import styles from './HeaderList.module.css'

import HeaderListItem from './HeaderListItem'

const HeaderList = ({ links, isActive, setInactive }) => {
    return (
        <nav className={`${styles.nav} ${isActive ? styles.active : ''}`}>
            <ul className={styles['nav-links']}>
                {links.map((link) => <HeaderListItem key={link} link={link} setInactive={setInactive} />)}
            </ul>
        </nav>
    )
}

export default HeaderList