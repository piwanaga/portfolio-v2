import React, { useState } from 'react'
import styles from './Header.module.css'

import Logo from './Logo'
import ToggleButton from './ToggleButton'
import MobileHeaderList from './MobileHeaderList'
import DesktopHeaderList from './DesktopHeaderList'

const links = ['About', 'Projects', 'Connect']

const Header = () => {
    const [isActive, setIsActive] = useState(false)

    const toggleActive = () => {
        setIsActive(!isActive)
    }

    const setInactive = () => {
        setIsActive(false)
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Logo />
                <ToggleButton isActive={isActive} toggleActive={toggleActive}/>
                <MobileHeaderList links={links} isActive={isActive} setInactive={setInactive}/>
                <DesktopHeaderList links={links}/>
            </div>
        </header>
    )
}

export default Header