import React, { useState } from 'react'
import styles from './Header.module.css'

import Logo from './Logo'
import ToggleButton from './ToggleButton'
import HeaderList from './HeaderList'

const links = ['about', 'projects', 'connect']

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
            <Logo />
            <ToggleButton toggleActive={toggleActive}/>
            <HeaderList links={links} isActive={isActive} setInactive={setInactive}/>
        </header>
    )
}

export default Header