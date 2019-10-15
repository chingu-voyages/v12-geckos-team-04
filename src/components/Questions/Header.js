import React from 'react'
import styles from './questions-styles/Header.module.scss'

const Header = (props) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>{props.title}</h1>
        </div>
    )
}

export default Header