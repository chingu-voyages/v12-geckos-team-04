import React from 'react'
import styles from './questions-styles/Modal.module.scss'

const FormModal = (props) => {

    let closeButtonClasses = `close-button ${styles.closeButton}`
    let wrapperClasses = `modal-wrapper ${styles.wrapper}`

    return (
        <div className={wrapperClasses} onClick={props.closeModal}>
            <form className={styles.content} action="submit" onSubmit={props.addQuestion}>
                <div className={closeButtonClasses}>&#10006;</div>
                <p className={styles.label}>Question:</p>
                <input type="text" className={styles.questionInput} name="questioninput" />
                <p className={styles.label}>Tag:</p>
                <input type="text" className={styles.tagInput} name="taginput" />
                <div>
                    <button className={styles.button} type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}

export default FormModal