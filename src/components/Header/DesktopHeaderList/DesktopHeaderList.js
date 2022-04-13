import React from 'react'
import styles from './DesktopHeaderList.module.css'

import HeaderListItem from '../HeaderListItem'

const DesktopHeaderList = ({ links }) => {
    return (
        <nav className={styles.nav}>
            <ul className={styles['nav-links']}>
                {links.map((link) => <HeaderListItem key={link} link={link} />)}
            </ul>
        </nav>
    )
}

export default DesktopHeaderList