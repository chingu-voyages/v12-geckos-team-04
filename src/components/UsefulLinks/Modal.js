import React from 'react'
import styles from './Modal.module.scss'

const Modal = (props) => {

    const wrapperClasses = `${styles.wrapper} modalWrapper`
    const closeButtonClasses = `${styles.closeButton} closeButton`

    return (
        <div className={wrapperClasses} onClick={props.closeModal}>
            <form className={styles.content} action="submit" onSubmit={props.addDescription}>
                <p className={styles.label}>{props.linkText}</p>
                <div className={closeButtonClasses}>&#10006;</div>
                <p className={styles.label}>Add description:</p>
                <input type="text" className={styles.descriptionInput} name="questioninput" />
                <div>
                    <button className={styles.button} type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}

export default Modal
