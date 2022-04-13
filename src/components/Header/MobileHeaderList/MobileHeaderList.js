import React from 'react'
import styles from './MobileHeaderList.module.css'

import HeaderListItem from '../HeaderListItem'

const MobileHeaderList = ({ links, isActive, setInactive }) => {
    return (
        <nav className={`${styles.nav} ${isActive ? styles.active : styles.inactive}`}>
            <ul className={styles['nav-links']}>
                {links.map((link) => <HeaderListItem key={link} link={link} setInactive={setInactive} />)}
            </ul>
        </nav>
    )
}

export default MobileHeaderList