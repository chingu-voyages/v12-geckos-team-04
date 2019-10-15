import React from 'react'
import styles from './questions-styles/Modal.module.css'

const AnsweredInfoModal = (props) => {

    let wrapperClasses = `modal-wrapper ${styles.wrapper}`
    let deleteButtonClasses = `delete-answered ${styles.button} ${styles.deleteAnswered}`
    let closeButtonClasses = `close-button ${styles.closeButton}`

    return (
        <div className={wrapperClasses} onClick={props.closeModal}>
            <div className={styles.content}>
                <div className={closeButtonClasses}>&#10006;</div>
                <ul className={styles.infoList}>
                    <li className={styles.question}>{props.text}</li>
                    {!props.answer &&
                        <div>
                            <li className={styles.date}>{props.date}</li>
                        </div>}
                    {props.tag &&
                        <React.Fragment>
                            <li className={styles.label}>Tag</li>
                            <li className={styles.tag}>{props.tag}</li>
                        </React.Fragment>}
                    <React.Fragment>
                        <li className={styles.answer}>{props.answer}</li>
                    </React.Fragment>
                </ul>
                <div className={styles.buttonsWrapper}>
                    <button className={deleteButtonClasses} onClick={(e) => {props.deleteQuestion(e, props.id)}}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default AnsweredInfoModal