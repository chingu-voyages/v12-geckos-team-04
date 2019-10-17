import React from 'react'
import styles from './Modal.module.scss'

const InfoModal = (props) => {

    const wrapperClasses = `${styles.wrapper} modalWrapper`
    const closeButtonClasses = `${styles.closeButton} closeButton`

    return (
        <div className={wrapperClasses} onClick={props.closeModal}>
            <div className={styles.content}>
                <p className={styles.label}>{props.linkText}</p>
                <div className={closeButtonClasses}>&#10006;</div>
                <p>{props.description}</p>
                <div>
                    <button className={styles.button}>Edit description</button>
                </div>
            </div>
        </div>
    )
}

export default InfoModal
