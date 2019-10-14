import React from 'react'
import styles from './questions-styles/Header.module.css'

const Header = (props) => {
    return (
        <div className={props.side === 'left' ? styles.leftContainer : styles.rightContainer}>
            <h1 className={styles.title}>{props.title}:</h1>
        </div>
    )
}

export default Header