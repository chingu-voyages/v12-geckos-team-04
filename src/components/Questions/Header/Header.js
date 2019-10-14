import React from 'react'
import styles from '../../Questions/questions-styles/Header.module.css'

const Header = (props) => {
    return (
        <div>
            <h1 className={styles.title}>{props.title}:</h1>
        </div>
    )
}

export default Header