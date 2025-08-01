import React from 'react'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.nav}>
        <div className={styles.logo}>Navbar</div>
        <div className={styles.list}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar