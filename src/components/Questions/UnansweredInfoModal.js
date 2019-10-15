import React from 'react'
import styles from './questions-styles/Modal.module.scss'

const UnansweredInfoModal = (props) => {

    let deleteButtonClasses = `delete-unanswered ${styles.button} ${styles.deleteUnanswered}`
    let answerButtonClasses = `${styles.button} ${styles.answerButton}`
    let closeButtonClasses = `close-button ${styles.closeButton}`
    let wrapperClasses = `modal-wrapper ${styles.wrapper}`

    return (
        <div className={wrapperClasses} onClick={props.closeModal}>
            <div className={styles.content}>
                <div className={closeButtonClasses}>&#10006;</div>
                <ul className={styles.infoList}>
                    <li className={styles.question}>{props.text}</li>
                    <div>
                        <li className={styles.date}>{props.date}</li>
                    </div>
                    {props.tag &&
                        <React.Fragment>
                            <li className={styles.label}>Tag</li>
                            <li className={styles.tag}>{props.tag}</li>
                        </React.Fragment>}
                </ul>
                <div className={styles.buttonsWrapper}>
                    <button className={answerButtonClasses} onClick={() => {props.showAnswerModal()}}>Answer</button>
                    <button className={deleteButtonClasses} onClick={(e) => {props.deleteQuestion(e, props.id)}}>Delete</button>
                </div>
            </div>
        </div >
    )
}

export default UnansweredInfoModal


