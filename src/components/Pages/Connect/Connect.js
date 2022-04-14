import React from 'react'
import styles from './Connect.module.css'

const links = [
    {title: 'LinkedIn', url: 'https://www.linkedin.com/in/phillipiwanaga/'},
    {title: 'GitHub', url: 'https://github.com/piwanaga'},
    {title: 'Email', url: 'mailto: phillip.iwanaga@gmail.com'},
    {title: 'Resume', url: 'https://docs.google.com/document/d/17EPEr1zRZUVHAIp4vxw1txft8bG9SWSI6rr_Su9nVak/edit?usp=sharing'}
]

const Connect = () => {
    return (
        <div className={styles.connect}>
            <h1>Connect with me</h1>
            {links.map((link, idx) => <a key={link.title} href={link.url} style={{'--position': idx}}>{link.title}</a>)}
        </div>
    )
}

export default Connect