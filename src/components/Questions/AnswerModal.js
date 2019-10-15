import React from 'react'
import styles from './questions-styles/Modal.module.css'

const AnswerModal = (props) => {

    let closeButtonClasses = `close-button ${styles.closeButton}`
    let wrapperClasses = `modal-wrapper ${styles.wrapper}`

    return (
        <div className={wrapperClasses} onClick={props.closeModal}>
            <div className={styles.content}>
                <div className={closeButtonClasses}>&#10006;</div>
                <ul className={styles.infoList}>
                    <li className={styles.question}>{props.text}</li>
                </ul>
                <form action="submit" onSubmit={props.answerQuestion}>
                    <textarea name="answerInput" className={styles.answerInput} cols="30" rows="5"></textarea>
                    <button className={styles.button} type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AnswerModal