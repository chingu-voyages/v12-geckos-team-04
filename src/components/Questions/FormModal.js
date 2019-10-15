import React from 'react'
import styles from './questions-styles/Modal.module.css'

const FormModal = (props) => {
    return (
        <div className={styles.wrapper} onClick={props.closeFormModal}>
            <form className={styles.content} action="submit" onSubmit={props.addQuestion}>
                <div className={styles.closeButton}>&#10006;</div>
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